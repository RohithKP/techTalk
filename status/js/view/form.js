var StatusForm = Backbone.View.extend({
    tagName: 'form',
     role:"form",
    className: 'form-horizontal',

    events: {
        'submit': 'submit'
    },

    initialize:function(options) {
        this.projects   = options.projects;
        this.activities = options.activities;
        this.dates      = options.dates;
        this.allStatus  = options.allStatus;
    },

    render: function() {
        var html = [];

        this.chooseProject = new Select({
            data: this.projects,
            /**/
            settings: {
                title: 'Select a Project'
            }
        });
        this.$el.append('<div class="equ" id="project">');
        html.push('<label>Project </label>');
        html.push( this.chooseProject.render().el );
        this.$el.find('#project').append( html );
        
        html = [];
        this.chooseActivity = new Select({
            data: this.activities,
            /**/
            settings: {
                title: 'Select a Activity'
            }
        });
        this.$el.append('<div class="equ" id="activity">');
        html.push('<label>Activity Type</label>');
        html.push( this.chooseActivity.render().el );
        this.$el.find('#activity').append( html );
        
        html = [];
        this.chooseDate = new Select({
            data: this.dates,
            /**/
            settings: {
                title: 'Select a Date'
            }
        });
        this.$el.append('<div class="equ" id="date">');
        html.push('<label>Date </label>');
        html.push( this.chooseDate.render().el );
        this.$el.find('#date').append( html );

        this.chooseDescription = new TextArea({
            settings: {
                title: 'Add a Description'
            }
        });
        html = [];
        this.$el.append('<div id="text_area">');
        html.push('<label>Activity description</label>');
        html.push( this.chooseDescription.render().el );
        html.push('<button id="status_sub" type="submit">Submit</button>');
        this.$el.find('#text_area').append( html );
        return this;
    },
    submit: function(e) {
        e.preventDefault();
        console.log(this.projects.get('1').attributes.value);
        this.allStatus.add({
            'project_id'  :this.projects.get(this.chooseProject.getValue()).attributes.value,
            'activity_id' :this.activities.get( this.chooseActivity.getValue()).attributes.value ,
            'date'        :this.dates.get(this.chooseDate.getValue()).attributes.value ,
            'description' : this.chooseDescription.getValue(),
        });

        console.log( this.allStatus );
        localStorage.setItem('allStatus',JSON.stringify(allStatus));
    }
});