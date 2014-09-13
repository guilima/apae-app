$().ready(function(){
  setActiveLink();
});


function setActiveLink(){

  // get the current url
  var url = window.location.pathname;
  // decode the url
  url = decodeURIComponent(url);

  // this is incase your project isn't in the root directory of your url
  // for example localhost/ActiveNavLink/index.html
  //projectPrefix = "/ActiveNavLink/";

  // loop through each nav li
  $('.navbar-main__btn').each(function(){

    // get the menu a tag and get its href attribute
    var href = $(this).find('a').attr('href');

    // href can be undinded if there is a divider
    if(href === undefined)
      return;

    // add the project prefix
    href =  href;
    
    // check if the menu item is equal to the current url    
    if(url.substring(0, href.length) == href){
      // set active class to li
      $(this).addClass('active');
    }
      
  });

}