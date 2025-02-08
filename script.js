let size = 16;
let isEraser = false;
let mousedown = false;
let parent = document.querySelector(".container");
let color = document.querySelector("#color");
let reset =  document.querySelector(".clear");
let eraser = document.querySelector(".eraser");
let range =  document.querySelector("#numberOfGrids");

range.addEventListener("change", (e) => 
{
    size =  e.target.value;
    console.log(size);
    if (size <= 100)
    {
        removeDivs();
        createDivs();
    }
});
color.addEventListener("input" , () => {
    eraser.classList.remove("isOn");
    isEraser = false;
})
reset.addEventListener("click",  (e) => 
    {
        let children = parent.children
        for (let i = 0; i < children.length; i++)
            children[i].style.backgroundColor = "white";
    })
eraser.addEventListener("click", () =>
{
    if (isEraser == false)
        isEraser = true
    else
        isEraser = false;
    eraser.classList.toggle("isOn");

});
parent.addEventListener("mousedown",  (e) => mousedown = true);
parent.addEventListener("mouseup",  (e) => mousedown = false);

function removeDivs()
{
    let length  =  parent.children.length;
    let children  =  parent.children;
    for (let i = 0 ; i < length ; i++)
        parent.removeChild(children[0]);
}
function createDivs()
{
    
    for (let i = 0; i < Math.pow(size, 2); i++)
    {
        let div = document.createElement("div");
        div.classList.add("pixel");
        div.style.width = 600 / size + "px";
        div.style.height = 600 / size + "px";
        parent.appendChild(div);
        div.addEventListener("mousemove" , (e) =>
        {
            if (mousedown == true && isEraser == false)
                e.target.style.backgroundColor = color.value;
            else if (mousedown == true && isEraser == true)
                e.target.style.backgroundColor = "#FFFFFF";
        });
    }   
}
createDivs();