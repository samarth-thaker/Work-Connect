let card = document.querySelectorAll(".work");
let card2 = document.getElementById("workSec");
let blog = document.querySelector(".work");
let about = document.querySelector(".about");
let mainPage = document.querySelector(".main");
let workContainer = document.querySelector(".work");
function Home(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";   
    blog,style.display="block";
    document.getElementById("Blogs").style.color="black";
    document.getElementById("Home").style.color="rgb(222, 184, 135)";
    document.getElementById("Explore").style.color="black";
    document.getElementById("AboutUs").style.color="black";
    document.getElementById("Contact").style.color="black";
}
function Explore(){
     mainPage.style.display = "none";
     blog.style.display = "block";
    about.style.display="none"
    card.style.display="block";
    card2.style.display="block";
    document.getElementById("Blogs").style.color="black";
    document.getElementById("Home").style.color="black";
    document.getElementById("Explore").style.color="rgb(222, 184, 135)";
    document.getElementById("AboutUs").style.color="black";
    document.getElementById("Contact").style.color="black";
}
function Blogs(){
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display="none";
    blog.style.display="block";
    about.style.display="none"
    document.getElementById("Blogs").style.color="rgb(222, 184, 135)";
    document.getElementById("Home").style.color="black";
    document.getElementById("Explore").style.color="black";
    document.getElementById("AboutUs").style.color="black";
    document.getElementById("Contact").style.color="black";

}
function AboutUs(){
    mainPage.style.display = "none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="block";
    workContainer.style.display="none";

    document.getElementById("Blogs").style.color="black";
    document.getElementById("Home").style.color="black";
    document.getElementById("Explore").style.color="black";
    document.getElementById("AboutUs").style.color="rgb(222, 184, 135)";
    document.getElementById("Contact").style.color="black";
 } 

    