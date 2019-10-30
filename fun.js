const nav = document.querySelector('.nav');
let navLink = document.querySelectorAll('.nav a');
console.log(navLink);

nav.addEventListener('click',(e)=>{
    if(e.target.tagName === 'A'){
      for(let i=0; i<navLink.length; i++){
          navLink[i].removeAttribute('class');
          e.target.className = "selected";
      }
    }
});
