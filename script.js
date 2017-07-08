var imgLent = document.getElementsByClassName("imgLent")[0]
var imgDiv = document.getElementsByClassName("imgDiv");
var allDivs = document.getElementsByClassName("secPic")
imgLent.style.width = imgDiv[0].clientWidth * imgDiv.length + "px";

// Auto func
plus = 0;
var AutoFunc = function slide_auto() {  
    for (var i = 0; i < imgDiv.length; i++) {
        imgLent.style.right = plus + "px";
    }
    if (plus == parseFloat(imgLent.style.width) - parseFloat(imgDiv[0].clientWidth)) {
        plus = -parseFloat(imgDiv[0].clientWidth);
    }
    plus += imgDiv[0].clientWidth;  
}
var myVar = setInterval(AutoFunc, 1000);
// ------------------------------------------------------------------------

// goRight func
function goRight() {
    imgLent.style.right = plus + "px"
    if (parseFloat(imgLent.style.right) > parseFloat(imgLent.style.width) - parseFloat(imgDiv[0].clientWidth)) {
        imgLent.style.right = 0 + "px"
        plus = 0;
    }
    plus += imgDiv[0].clientWidth;
    clearInterval(myVar)
}
// -------------------------------------------------------------------------

// goLeft func
function goLeft() {
    clearInterval(myVar);
    if (parseFloat(imgLent.style.right) <= 0) {
        imgLent.style.right = parseFloat(imgLent.style.width) - parseFloat(imgDiv[0].clientWidth) + "px"
    } else {
        plus = parseFloat(imgLent.style.right)
        plus -= parseFloat(imgDiv[0].clientWidth)
        imgLent.style.right = plus + "px"
    }
}
// ----------------------------------------------------------------------------
// Click Func
for (var i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener('click', function() {   
        for (var i = 0; i < allDivs.length; i++) {
            if (this.id == i) {
                imgLent.style.right = imgDiv[0].clientWidth * i + "px"
            }
        }
    });
}
// ---------------------------------------------------------------------------