var slideIndex = 0;
slideShow();

function slideShow() {
    var x = document.getElementsByClassName("banner-img");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }

    x[slideIndex-1].style.display = "block";
    setTimeout(slideShow, 10000);
}
