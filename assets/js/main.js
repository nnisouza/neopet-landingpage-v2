var master = {window: {el: null, width: null, height: null}};


function calc() {
    master.window.height = $(window).height();
    master.window.width = $(window).width();
    
    afterLoaded();
}
function drawPage() {
    
}
function actions() {
    cheet('s h a k e s p e a r e', function () {
      alert('Doubt thou the stars are fire; \nDoubt that the sun doth move; \nDoubt truth to be a liar; \nBut never doubt I love. \n                                                        - William Shakespeare');
    });
    
    $('#play').click(function() {
        $(this).fadeOut('medium', function() {
            $('#videoHolder').html('<iframe id="neovideo" width="100%" height="100%" src="https://www.youtube.com/embed/LUrNgkHWiWE?autoplay=1&showinfo=0&controls=0&rel=0&playerapiid=neovideo" frameborder="0" allowfullscreen></iframe>');
            $('#videoHolder').fadeIn('slow');
        });
    });
    
    $('.controls li').click(function() {
        var eq = $(this).index();
        $('.slideItems li').removeClass('active');
        $('.controls li').removeClass('current');
        $(this).addClass('current');
        $('.slideItems li').eq(eq).addClass('active');
    });
}
function afterLoaded() {
}



$(window).load(drawPage);
$(document).ready(actions);
$(window).resize(calc).trigger('resize');