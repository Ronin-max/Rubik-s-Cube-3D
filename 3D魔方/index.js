//获取对象
var oMagicCube = document.getElementsByClassName("magicCube")[0];



//拖动鼠标  控制视角
document.addEventListener("mousedown", handleDown);

var lastMoveX = 0;
var lastMoveY = 0;

function handleDown(e) {
    var e = e || window.event;
    var startX = e.pageX;
    var startY = e.pageY;
    var rotateX = null;
    var rotateY = null;
    document.onmousemove = function(e) {
        var moveX = (e.pageX - startX) / 5;
        var moveY = (e.pageY - startY) / 5;
        rotateX = moveX + lastMoveX;
        rotateY = moveY + lastMoveY;
        oMagicCube.style.transform = "rotateX(" + (-rotateY) + "deg) rotateY(" + rotateX + "deg)";
    }
    document.onmouseup = function() {
        lastMoveX = rotateX;
        lastMoveY = rotateY;
        document.onmousemove = null;
    }
}

//移动旋转