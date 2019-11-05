// nav links asigning class active
const nav = document.querySelector('.nav');
let navLink = document.querySelectorAll('.nav a');
console.log(navLink);

//nav.addEventListener('click',(e)=>{
//    if(e.target.tagName === 'A'){
//      for(let i=0; i<navLink.length; i++){
//          navLink[i].removeAttribute('class');
//          e.target.className = "selected";
//      }
//    }
//});

// ****************** creating the chit chat page ***************


$('.chit-chat').on('click', function(e){
//   alert('Welcome to my world'); 
    e.target.preventDefault();
    const funFacts = `<div><ul>
                             <li>Treat people the way you want to be treated</li>
                             <li>I believe in cooperation and learning from each other</li>
                             <li>My hobby is latin dances: salsa and bachata</li>
                         </ul></div>`;
    document.getElementsByTagName("header")[0].innerHTML = funFacts;
});

// returns back the header pictures when clicking on any nav links
$('.nav').on('click', function(e){
   if(e.target.textContent !== 'Chit chat' && e.target.tagName === 'A' ){
          const originalInfo = ` <img src="images/petya.jpg" alt="Picture of Petya Katsarova" class="profile-image">
                             <h1 class="tag name">Hello, I’m Petya.</h1>
                             <p class="tag location">You can find me in Dubai, UAE or somewhere around the world, travelling.</p>`;
    document.getElementsByTagName("header")[0].innerHTML = originalInfo;
    for(let i=0; i<navLink.length; i++){
          navLink[i].removeAttribute('class');
          e.target.className = "selected";
      }
   } 
});




// function myFunction() {
//    // Declare variables
//    var input, filter, ul, li, a, i;
//    input = document.getElementById('myInput');
//    filter = input.value.toUpperCase();
//    ul = document.getElementById("myUL");
//    li = ul.getElementsByTagName('li');
//
//    // Loop through all list items, and hide those who don't match the search query
//    for (i = 0; i < li.length; i++) {
//        a = li[i].getElementsByTagName("a")[0];
//        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//            li[i].style.display = "";
//        } else {
//            li[i].style.display = "none";
//        }
//    }
//}
