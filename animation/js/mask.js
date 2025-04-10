$(function(){
    buttonCircle();
    function buttonCircle() {
        $('#follower').addClass('click');
        $(document).mousemove(function(e) {
            var mouseX = e.clientX;
            var mouseY = e.clientY;
            var follower = $('#follower');
            follower.addClass('on');
            
            // 효과를 부드럽게 하기 위해 transform 속성 사용
            follower.css({
              transform: "translate(-50%, -50%) translate3d(" + mouseX + "px, " + mouseY + "px, 0)"
            });
    
            $(".block-effect, .myName").on({
                'mouseenter focusin' : function(){
                    $('#follower').addClass('black');
                },
                'mouseleave focusout' : function(){
                    $('#follower').removeClass('black');
                }
            });
    
            $(".click").on({
                'mouseenter focusin' : function(){
                    $('#follower').addClass('click');
                },
                'mouseleave focusout' : function(){
                    $('#follower').removeClass('click');
                }
            });
    
            $(".hover").on({
                'mouseenter focusin' : function(){
                    $('#follower').addClass('hover');
                },
                'mouseleave focusout' : function(){
                    $('#follower').removeClass('hover');
                }
            });
    
        });
    }
})
