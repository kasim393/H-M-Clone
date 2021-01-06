const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

        
        if (toggle && nav) {
          toggle.addEventListener('click',()=>{
            nav.classList = "mobile-navbar";
            nav.classList.toggle('show');
          })
      }
    


}
showMenu('nav-toggle','nav-menu');

const hidemenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

        
        if (toggle && nav) {
          toggle.addEventListener('click',()=>{
            nav.classList = "mobile-navbar";
            nav.classList.toggle('hide');
          })
      }


}
hidemenu('hide-toggle','nav-menu');

