import $ from 'jquery';

$(function () {
    $('select').selectize({
        create: true,
    })

    $("form.call-back").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/dist/mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function () {
                $(th).find(".success").removeClass('active').fadeOut();
                // Done Functions
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });;
})