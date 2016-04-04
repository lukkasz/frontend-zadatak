var jQuery = require('jquery');

require('simple-lightbox');

module.exports = function() {
    jQuery('.imageGallery a').simpleLightbox();    
}();



