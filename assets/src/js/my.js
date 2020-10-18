$(function() {
    $('.item').matchHeight(
        {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        }
    );
    $('.icons-carousel').slick({

        responsive: [
            {
                breakpoint: 100000,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings:
                    {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1,
                        dots: true
                    }
            },

        ]
    });
    $('.about-carousel').slick({

        responsive: [
            {
                breakpoint: 100000,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings:
                    {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1,
                        dots: true
                    }
            },

        ]
    });
    $('.reviews-carousel').slick({

        responsive: [
            {
                breakpoint: 100000,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings:
                    {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1,
                        dots: true
                    }
            },

        ]
    });
    //валидация формы
    $("#form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },

        },

        submitHandler: function() {
            alert("форма успешно отпралена");
        }
    });
});
