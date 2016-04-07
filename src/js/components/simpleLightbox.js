var $ = require('jquery');
var View = require('jquery-simple-view');

module.exports = View.extend({

    initialize: function() {

        var $items = this.$el;

        $items.on('click', function(e) {

            e.preventDefault();
            var self = this;

            require(['simple-lightbox'], function(simpleLightbox) {

                $.simpleLightbox.open({
                    $items: $items,
                    startAt: $items.index(self),
                    bindToItems: false
                });

            });

        });

    }

});
