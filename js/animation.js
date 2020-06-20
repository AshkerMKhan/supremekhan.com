//Select photography div
var div1 = document.getElementById("photography");
//Select Graphics Design Div
var div2 = document.getElementById("graphicsDesign");

//Hide show effect
//for photography div
var display1 =function()
{
    if(div1.style.display == "none")
    {
        div1.style.display = "block";
        div2.style.display = "none"
    }
    else
    {
        div1.style.display = "none";
    }
};
//for graphics design div
var display2 = function()
{
    if(div2.style.display == "none")
    {
        div2.style.display = "block";
        div1.style.display = "none";
    }
    else
    {
        div2.style.display = "none";
    }
}
//Make hide and show animatikon for photograph div
document.getElementById("btn1").addEventListener("click",display1);
//Make hide and show animation for graphics design div
document.getElementById("btn2").addEventListener("click",display2);
