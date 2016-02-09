var View = require('jquery-simple-view');

module.exports = View.extend({

    events: {
        'click .toggleBtn': 'toggle'
    },

    toggle: function(e) {

        this.$el.hasClass('opened') ? this.hide() : this.show();

    },

    show: function() {

        this.$el.addClass('opened');

    },

    hide: function() {

        this.$el.removeClass('opened');

    }

});
