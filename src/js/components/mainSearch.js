var View = require('jquery-simple-view');
require('fastsearch');

module.exports = View.extend({

    initialize: function() {

        this.$('.query').fastsearch({

            onItemSelect: 'fillInput'

        });

    }

});
