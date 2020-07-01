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
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("Thank you!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    
    

});