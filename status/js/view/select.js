var Select = Backbone.View.extend({
    tagName: 'select',
     className: 'select_dd',
    events: {
        'change': 'onChange'
    },
    initialize: function(options) {
        this.title = options.settings.title;
        this.data = options.data;
    },
    render: function(title) {
        this.$el.append('<option value="">' + this.title + '</option>');
        this.data.each(this.renderEl.bind(this));
        return this;
    },
    renderEl: function(model) {
        this.$el.append('<option value="' + model.get('id') + '">' + model.get('value') + '</option>');
    },
    onChange: function(e) {
        this.value = this.$el.val();
    },
    getValue: function() {
        return this.value;
    }
});