(function() {
    
    if (!('classList' in document.body)) {
        return; //old browser, don't care..
    }

    var slideIndex = 0;

    var slideShow = function() {
        var x = document.querySelectorAll('.banner-img');
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("show")
        }

        slideIndex++;
        if (slideIndex > x.length) {
            slideIndex = 1;
        }

        x[slideIndex-1].classList.add('show');
    };
    
    
    setInterval(slideShow, 8 * 1000);
}());
