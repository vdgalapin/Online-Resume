function switchDivs() { 
  // Create a condition that targets viewports at most 991px wide
  const mediaQuery1 = window.matchMedia('(max-width: 991px)');
  // Create a condition that targets viewports at least 992px wide
  const mediaQuery2 = window.matchMedia('(min-width: 992px)');

  function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
      div1 = jQuery('.DivOne');
      div2 = jQuery('.DivTwo');
      
      tdiv1 = div1.clone();
      tdiv2 = div2.clone();
      
      if(!div2.is(':empty')){
        div1.replaceWith(tdiv2);
        div2.replaceWith(tdiv1);    
      }

    }
  }

  // Register event listener
  mediaQuery1.addListener(handleTabletChange);
  mediaQuery2.addListener(handleTabletChange);

  // Initial check
  handleTabletChange(mediaQuery1);
}