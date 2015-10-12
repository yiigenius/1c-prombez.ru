$(function(){

  var overflow = $('.overflow');  
  var slides = $('.overflow').children();
  var btns = $('.btns').children();    
  
  //Set widths
  var slidesC = $(slides).length;  
  $(overflow).css('width', 100 * slidesC + '%');
  $(slides).css('width', 100 / slidesC + '%');
  // $(btns).css('width', 100 / slidesC + '%');
  
  //Active 1st
  $(slides).eq(0).addClass('active');
  $(btns).eq(0).addClass('active-slide');
  
  
  $(btns).click(function () {
    var btn = $(this);
    if (!$(btn).hasClass('active-slide')) {
      
      //Change btn
      $('.btns div').removeClass('active-slide');
      $(btn).addClass('active-slide');
      
      //Get ready to move
      $(overflow).addClass('moving');
      
      //Calculate move & change slide
      var slide = $(btn).index();
      var left = -100 * slide;
      $(overflow).children('div').removeClass('active');
      $(overflow).children('div:eq(' + slide + ')').addClass('active');        
      
      //Move & remove
      $(overflow).animate({'margin-left': left +'%'}, function(){
        $(overflow).removeClass('moving');
      });
    }
  });
      

});