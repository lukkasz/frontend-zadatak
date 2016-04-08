var $ = require('jquery');
var View = require('jquery-simple-view');
var MainNav = require('js/components/mainNav');

module.exports = View.extend({

    delegatedEvents: false,

    initialize: function() {
        this.setupBaseComponents();
    },

    events: {
        'click .mainHeader .signIn': function(e) {

            e.preventDefault();
            this.showLoginModal();

        },

        'click .gallery-thumb': function(e) {

            e.preventDefault();
            this.loadSimpleLightBox();

        },

        'keydown .mainSearch': function(e) {

            this.loadMainSearch();

        }
    },

    setupBaseComponents: function() {

        this.mainNav = this.addView(new MainNav({$el: $('.mainNav')}));
        return this;

    },

    showLoginModal: function(e) {

        require.ensure([], function() {

            var LoginModal = require('js/components/loginModal');
            new LoginModal();

        });

    },

    loadSimpleLightBox: function() {

        require.ensure([], function() {

            var SimpleLightbox = require('js/components/simpleLightbox');
            new SimpleLightbox({$el: $('.gallery-thumb')});

        });
    },

    loadMainSearch: function() {

        require.ensure([], function() {

            var MainSearch = require('js/components/mainSearch');
            new MainSearch({$el: $('.mainSearch')});

        });

    }

});
