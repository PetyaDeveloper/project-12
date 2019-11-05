// nav links asigning class active
const nav = document.querySelector('.nav');
let navLink = document.querySelectorAll('.nav a');
console.log(navLink);
//
//nav.addEventListener('click',(e)=>{
//    if(e.target.tagName === 'A'){
//      for(let i=0; i<navLink.length; i++){
//          navLink[i].removeAttribute('class');
//          e.target.className = "selected";
//      }
//    }
//});

$('.nav').on('click', function(e){
   if(e.target.tagName === 'A'){
      for(let i=0; i<navLink.length; i++){
          navLink[i].removeAttribute('class');
          e.target.className = "selected";
      }
      if(e.target.textContent !== 'Values'){
          const originalText = `<img src="images/petya.jpg" alt="Picture of Petya Katsarova" class="profile-image">
                                <h1 class="tag name">Hello, I’m Petya.</h1>
                                <p class="tag location">You can find me in Dubai, UAE or somewhere around the world, travelling.</p>`
          document.getElementById('values').innerHTML = originalText;
      }
   }
});
$('.chit-chat').on('click', function(e){
   const replaceText = `<div><ul>
                             <li>Let's make clean and beautiful code</li>
                             <li>Let's have fun while doing it</li>
                             <li>Keep growing</li>
                        </ul></div>` 
   document.getElementById('values').innerHTML = replaceText;
});
