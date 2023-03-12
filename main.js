//Navigation bar effects on scrol
window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
});
// services section modal
const serviceModals=document.querySelectorAll(".service-modal");
const learnmoreBtns=document.querySelectorAll(".learn-more-btn");
const modalCloseBtns=document.querySelectorAll(".modal-close-btn");
var modal=function(modalClick){
    serviceModals[modalClick].classList.add("active");
}
learnmoreBtns.forEach((learnmoreBtn,i)=>{
    learnmoreBtn.addEventListener("click",()=>{
        modal(i);
    });
});
modalCloseBtns.forEach((modalCloseBtn)=>{
    modalCloseBtn.addEventListener("click",()=>{
        serviceModals.forEach((modalView)=>{
            modalView.classList.remove("active");
        });
    });

});
//dark web site
const themebtn=document.querySelector(".theme-btn");
themebtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme");
    themebtn.classList.toggle("sun");

    localStorage.setItem("saved-theme",getCurrentTheme());
    localStorage.setItem("saved-icon",getCurrentIcon());
});
const getCurrentTheme=()=>document.body.classList.contains("dark-theme") ?"dark":"light";
const getCurrentIcon=()=>themebtn.classList.contains("sun") ? "sun":"moon";
const savedTheme=localStorage.getItem("saved-theme");
const savedIcon=localStorage.getItem("saved-icon");
if(savedTheme){
    document.body.classList[savedTheme==="dark" ? "add":"remove"]("dark-theme");
    themebtn.classList[savedIcon==="sun" ? "add":"remove"]("sun");
}
// scroll to top button
const scrollTopBtn=document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll",function(){
    scrollTopBtn.classList.toggle("active",window.scrollY>500);

});
scrollTopBtn.addEventListener("click",()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});
// Navigation menue
window.addEventListener("scroll",()=>{
    const section=document.querySelectorAll("section");
    const scrollY=window.pageYOffset;
    section.forEach(current=>{
        let sectionHeight=current.offsetHeight;
        let sectionTop=current.offsetTop-50;
        let id=current.getAttribute("id");
        if((scrollY)>sectionTop && scrolly<=sectionTop+sectionHeight){
            document.querySelector(".nav-items a[href*="+id+"]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*="+id+"]").classList.remove("active");
        }
    });

});
//responsive navigation
const menuBtn=document.querySelector(".nav-menu-btn");
const closeBtn=document.querySelector(".nav-close-btn");
const navigation=document.querySelector(".navigation");
const naviItems=document.querySelectorAll(".nav-items a");
menuBtn.addEventListener("click",()=>{
    navigation.classList.add("active");
});
closeBtn.addEventListener("click",()=>{
    navigation.classList.remove("active");
});
naviItems.forEach((navItem)=>{
    navItem.addEventListener("click",()=>{
        navigation.classList.remove("active");
    });
});
