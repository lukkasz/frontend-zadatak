var $ = require('jquery');
var View = require('jquery-simple-view');

require('simple-lightbox');

module.exports = View.extend({

    initialize: function(options) {

        $.get('../login-modal.html', function(data) {

            $.simpleLightbox.open({
                content: data,
                elementClass: 'slbContentEl'
            });

        });

    }

});
