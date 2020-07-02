$(function(){

    $('.phone').inputmask('+7 (999) 999-99-99'); 
    
    $('.header__link').on('click', function(){
        $('.modal').fadeIn()
    });

    $('.modal__close').on('click', function(){
        $('.modal').fadeOut();
    });

    

        //E-mail Ajax Send
        $("form").submit(function() { //Change
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: $(this).serialize()
            }).done(function() {
                /* alert("Thank you!"); */
                $(this).find('input').val('');
                $(this).trigger('reset');
                $('.js-overlay-thank-you').fadeIn();
                setTimeout(function() {
                    // Done Functions
                    $(this).trigger("reset");
                }, 1000);
            });
            return false;
        });
    
        $('.js-close-thank-you').click(function() { // по клику на крестик
            $('.js-overlay-thank-you').fadeOut();
        });
        
        $(document).mouseup(function (e) { // по клику вне попапа
            var popup = $('.popup');
            if (e.target!=popup[0]&&popup.has(e.target).length === 0){
                $('.js-overlay-thank-you').fadeOut();
            }
        });
});