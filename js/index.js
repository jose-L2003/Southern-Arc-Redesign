function myFunction () {
    var moreText = document.getElementById("more")
    var btnText = document.getElementById;("myBtn");

    if (moreText.style.display === "none") {
        btnText.innerHTML = "Read more";
        moreText.style.display = "Read more";
    } else {
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}