
let names = document.querySelector(".name")
let btn = document.querySelector(".changeName");
let userInput = document.querySelector("#userInput")
btn.addEventListener("click" , function(){
names.innerHTML = userInput.value;
});

let descInput = document.querySelector("#userInput")
let changedescbtn = document.querySelector(".changeDescription");
let occupation = document.querySelector(".occupation");
changedescbtn.addEventListener("click" , function(){
    occupation.innerHTML = descInput.value;
});

let image = document.querySelector("#profile-image")
let changePicBtn = document.querySelector(".changePicture");
let imageUrls = [
    "https://crictoday.com/wp-content/uploads/2023/04/Untitled-design.jpg",
    "https://i.aaj.tv/primary/2023/05/03125200e8011d7.webp",
    "https://media.gettyimages.com/id/1774301463/photo/bangalore-india-fakhar-zaman-of-pakistan-celebrates-their-century-during-the-icc-mens-cricket.jpg?s=612x612&w=gi&k=20&c=5pBNw6cYyhzVx84n7KGFyelIXA7-95Oa6MOEY1F0o7E=",
    "https://i0.wp.com/iansportalimages.s3.amazonaws.com/images/ICC_NZ_VS_PAK_097.JPG?w=1200&ssl=1",
];
let currentImagesIndex = 0 ;
changePicBtn.addEventListener("click" , function(){
    image.setAttribute("src" ,imageUrls[currentImagesIndex])
    currentImagesIndex = (currentImagesIndex + 1) % imageUrls.length;
});

let changeBackGroundbtn = document.querySelector(".changeBackground");
let backroundColor = document.querySelector(".profile-card")    
let color = ["skyblue" , "Orange" , "Blue" , "red" , "Yellow"];
count = 0;
changeBackGroundbtn.addEventListener("click" , function(){
    backroundColor.style.backgroundColor = color[count];
    count = (count + 1) % color.length;
})

let resetBtn = document.querySelector(".resetFile");
resetBtn.addEventListener("click" , function(){
names.innerHTML = "Asim Siddiqui";
occupation.innerHTML = "Web Developer";
backroundColor.style.backgroundColor = "pink";
image.setAttribute("src" ,"profile.jpeg");
})

