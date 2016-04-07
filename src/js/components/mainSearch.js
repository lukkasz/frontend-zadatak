var View = require('jquery-simple-view');

module.exports = View.extend({

    initialize: function() {

        var self = this;

        self.$('.query').on('keydown', function(e) {

            require(['fastsearch'], function(fastsearch) {

                self.$('.query').fastsearch({
                    onItemSelect: 'fillInput'
                });

            });

        });
    }

});
