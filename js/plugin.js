/*golable $, document*/

$(document).ready(function ()  {
    'use strict';

    //Start Set The Vars These I Need In My Project
    var scrolling = $(window).scrollTop();

    // Calculate Body Padding Top Depend On Navbar Height

    $('body').css({
        paddingTop: $('nav').innerHeight()
    })

    // Make The Navbar Transparent Whene It Gose To First Section

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >=  $('section:first').offset().top - $('nav').innerHeight()) {
            $('nav').css({opacity: .7})
        } else {
            $('nav').css({opacity: 1})
        }
        // console.log($('section:first').offset().top);
        // console.log($(window).scrollTop());
    })

    //Smoothly Scroll To Element
    $('nav ul li').on('click', function () {
        // console.log($('.' + $(this).data('scroll')).offset().top)
        $('html').animate({
            scrollTop: $('.' + $(this).data('scroll')).offset().top - $('nav').innerHeight()
        }, 1000);
        // $('nav ul li').removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
        
    });

    
    $(window).on('scroll', function() {
        //Sync Navbar Button With The Scrolling
        $('section').each(function () {
            if($(window).scrollTop() >= $(this).offset().top - $('nav').innerHeight() -200) {
                // console.log($(this).attr('id'));
                var sectionID = $(this).attr('class');
                if($(this).hasClass('active')) {
                    $('nav ul li[data-scroll= '+sectionID+']').siblings().removeClass('active')
                } else {
                    $('nav ul li[data-scroll= '+sectionID+']').addClass('active').siblings().removeClass('active')
                }
                // $('nav ul li[data-scroll= '+sectionID+']').addClass('active').siblings().removeClass('active')
            }
        });

        // Start Show And Hide Button Go To Button
        var GoToTop = $('.go-to-top');
        if ($(window).scrollTop() > 1000) {
            if($(GoToTop).is(':hidden')) {
                $(GoToTop).fadeIn()
            }
            // $(GoToTop).fadeIn()
        } else {
            $(GoToTop).fadeOut();
        }
    });

    //Start Set The Event Click at The Button To Go Top
    $('.go-to-top').on('click', function (e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        })
    })

    // Start Popup

    // Show The Popup By The Button Of Popup

    $('.pop-btn').on('click', function () {

        $('.'+ $(this).data('popup')).fadeIn(500);
    })

    // Fade Out The Popup By Click at It

    $('.popup').on('click', function () {
        $('.popup').fadeOut(500);
    })

    // Make Stop To The Popup Event That FadeOut It!

    $('.popup .popup-inner').on('click', function (e) {
        e.stopPropagation();
    });

    // FadeOut  The Popup With Close Button

    $('.close-popup').on('click', function () {
        $(this).parentsUntil('.popup').parent().fadeOut(500);
    })

    // FadeOut The Popup With KeyCode Event

    $(document).keydown(function (e) {
        if (e.keyCode == 18) { //Key Code Here Is Alt Key In The Keyboard
            $('.popup').fadeOut(500);
        } 
    })

    // Set Event at The Left Button

    $('.btn-from-left').click(function (e) {
        e.preventDefault();
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 4000);
        // $('.home .download span:last-child').text($('.home .download span:first-child').width() / $('.home .download').width() * 100  + "%")
        var myDownloadLeft = setInterval(DownloadLeft,100);
        function DownloadLeft() {
            var cont = ($('.btn-from-left').find('span').eq(0).width() * 100) / $(".btn-from-left").width() ,
                num = parseInt(cont)
            $('.btn-from-left').find('span').eq(1).text(num + "%")
        
        }

    });
        
    // clearInterval(myDownloadLeft)

    // Set Event at The Top Button

    $('.btn-from-top').on('click', function (e) {
        e.preventDefault();
        $(this).find('span').eq(0).animate({
            height: '100%'
        }, 40000);
    
        // $('.home .download span:last-child').text($('.home .download span:first-child').width() / $('.home .download').width() * 100  + "%")
        var myDownloadTop = setInterval(DownloadTop,100);
        function DownloadTop() {
            var cont = ($('.btn-from-top').find('span').eq(0).height() * 100) / $('.btn-from-top').height(),
                num = parseInt(cont);
            $('.btn-from-top').find('span').eq(1).text(num + "%")
    
        }
    });
    // clearInterval(myDownloadTop)

    // $('.buttons-effect > span').each(function () {
    //     $(this).wrap('<button></button>');
    // })

    $('.buttons-effect button').each(function () {
        $(this).prepend('<span></span>')
    })

    $('.border-left').hover(
    function () {
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 500)
    },
    function () {
        $(this).find('span').eq(0).animate({
            width: 0
        }, 500)
    
    }
)

    $('.border-bottom').hover(
    function () {
        $(this).find('span').eq(0).animate({
            height: '100%'
        }, 500)
    },
    function () {
        $(this).find('span').eq(0).animate({
            height: 0
        }, 500)

    });

    // Start Progress 

    $('.progress span').each(function () {
        $(this).animate({
            width: $(this).data('progress') + '%'
        }, 2000, function () {
            $(this).text($(this).data('progress') + '%')
        });
        // var myWid = $(this).width(),
        //     myNum = parseInt(myWid);
        // var i = 0;
        // for (; i < myNum;) {
        //     $(this).text(i + '%');
        //     console.log(i + "%");
        //     i++
        // }
        
    })

    //Start Menu

    $('.menu i').on('click', function () {
        $(this).parent('.menu').toggleClass('in-visible');
        if ($(this).parent('.menu').hasClass('in-visible')) {
            $(this).parent('.menu').animate({
                left: 0
            }, 2000);
            $('body').animate({
                paddingLeft: $(this).parent().innerWidth()
            }, 2000);
            console.log($(this).parent().innerWidth())
        } else {
            $(this).parent('.menu').animate({
                left: -$(this).parent().innerWidth()
            }, 2000);
            $('body').animate({
                paddingLeft: 0
            }, 2000);
        };

        
        $('.change-colors li').on('click', function () {
            $('body').attr('data-default-color', $(this).data('color'));
        })
    });

    

    // Start Error Message

    $('.error-message').each(function () {
        $(this).animate({
            right: 0
        }, 1000, function () {
            $(this).delay(3000).fadeOut(1000)
        })
    });

    // Start Gallery


    var thumbnailsLength = $('.gallery .thumbnails img').length,
        marginThumbnails = .5,
        marginBetweenThumbnails = marginThumbnails * thumbnailsLength,
        thumbnailWidth = (100 - marginBetweenThumbnails) / thumbnailsLength;

        $('.gallery .thumbnails img').css({
            width: thumbnailWidth + "%"
        });

        $('.gallery .thumbnails img:not(":last-child")').css({
            marginRight: .5 + "%"
        });




    $('.gallery .thumbnails img').on('click', function () {
        $(this).addClass('custom').siblings().removeClass('custom');
        $('.gallery .main-img img').hide().attr('src', $(this).attr('src')).fadeIn();
    })

    $('.main-img div:first-child').on('click', function () {

        if($('.gallery .thumbnails img.custom').is(':first-child')) {
            $('.gallery .thumbnails img:last').click();
        } else {
            $('.gallery .thumbnails img.custom').prev().click();
        }
        
    });

    $('.main-img div:nth-of-type(2)').on('click', function () {

        if($('.gallery .thumbnails img.custom').is(':last-child')) {
            $('.gallery .thumbnails img').eq(0).click();
        } else {
            $('.gallery .thumbnails img.custom').next().click();
        }
        
    });


    // Start Toggle 

    $('.products .product i, .items .item i').on('click', function () {
        $(this).toggleClass('fa-plus fa-minus');
        $(this).parent().find('p').slideToggle();
    })

    //Start Toggle Between Grid/List

    $('.fa-list').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.items').removeClass('grid-view list-view').addClass($(this).data('class'));
    });

    $('.fa-th-large').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.items').removeClass('grid-view list-view').addClass($(this).data('class'));
    });

    //  Start Form Show/Hide The Placeholder Whene You Focus Or Blur

    var placeAttr = "";

    $("[placeholder]").on({
        focus: function () {
            placeAttr = $(this).attr('placeholder');
            $(this).attr('placeholder', "");
        },
        blur: function () {
            $(this).attr('placeholder', placeAttr);
        },
    });


    //Start Form Show/hide Error Message

    $("[type='button'").click(function (e) {
        if ($("[placeholder]").val() == "") {
            e.preventDefault();
            $(this).parent().siblings().find('.err-msg').fadeIn(200).delay('2000').fadeOut()
        };
    });
    $("[placeholder]").blur(function () {
        if ($(this).val() == "") {
            $(this).parent().find('.err-msg').fadeIn(200).delay('2000').fadeOut()
        }
    })



    // Add AsterRisk To Required Field

    $('<span class="asterisk">*</Span>').insertBefore(':input[required]');
    $('.asterisk').parent('div').css({
        position: 'relative'
    });
    $('.asterisk').each(function () {
        $('.asterisk').css({
            display: 'inline-block',
            background: 'none',
            color: '#ea4f4f',
            fontWeight: "bold",
            position: "absolute",
            top: '13px' ,
            left: $(this).next(':input').innerWidth() - 15,
        })
        
    });

    //Customize Input Field

    $('.our-form form input[type="file"]').wrap("<div class='custom-file'></div>");
    $('.our-form form input[type="file"]').before('<span>Upload Your File</span>');
    $('.our-form form input[type="file"]').after('<i class="fa fa-upload skin-color"></i>');
    $("i.fa-upload").css({
        position: "absolute",
        top: 15,
        right: 15,
        zIndex: 1
    });
    $('.our-form form input[type="file"]').change(function () {
        $(this).prev('span').text($(this).val())
    });

    // Start Detect Unicode

    $('.detect-unicode').on('keyup', function (event) {
        var keyBoardKey = event.keyCode || event.which;
        $('.unicode').html(keyBoardKey);
    });

    // // Auto Direction

    // $('.auto-direction').on('keyup', function () {
    //     if($(this).val().charCodeAt(0) < 200) {
    //         $(this).css({
    //             direction: "ltr"
    //         });
    //     } else {
    //         $(this).css({
    //             direction: "rtl"
    //         });
    //     }
    // })
    // var english = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVZXYZ',
    //     textEn = "",
    //     textAr = "";

    //     for (var i = 0; i < english.length; i++) {

    //         textEn += english.charCodeAt(i) + '<br>';
            
    //     };

    //     console.log(textEn);
    //     var arabic = 'ابجتثجحخدذرزسشصضطظعغفقكلملأي',
    //     text = "";

    //     for (var i = 0; i < arabic.length; i++) {

    //         textAr += arabic.charCodeAt(i) + '<br>';
            
    //     };

    //     console.log(textAr)

    // Convert Input Value To Tags

    $('body').on('keyup', '.add-tags', function (e) {
        var keyBoardKey = e.keyCode || e.which;
        var thisValue = $(this).val();

        if (keyBoardKey === 13) {
            if ($(this).parent().find('span').is(':contains(' + thisValue + ')')) {
                $(this).val('')
            } else {
                $('.tags').append("<span><i class='fas fa-times'></i>" + thisValue + "</span>");
                $(this).val('')
            }
        };
    });

    $('.tags').on('click', "span .fa-times", function () {
        $(this).parent('span').fadeOut();
    })

    // Trimmed Text
    
    function TrimText(selector, maxLength) {
        $(selector).each(function () {
            if ($(this).text().length > maxLength) {
                var TrimmedText = $(this).text().slice(0, maxLength);
                $(this).text(TrimmedText + "...")
            }
        });
    };

    TrimText(".trim p:first", 90);
    TrimText(".trim p:nth-child(2)", 120);
    TrimText(".trim p:last", 150);

    // UnTrimmed Text

//     $('.more').on('click', function () {
//         console.log($('.trim p').text().length)
// })

// Bounce Button

function bounceElement(selector, times, distance, speed) {
    // e.preventDefault();
    
    for (var i = 0; i < times; i++) {
        $(selector).animate({
            top: "-=" + distance
        }, speed).animate({
            top: '+=' + distance
        }, speed)
    }   
}

$('.bounces .bounce-btn').click(function () {
    bounceElement($(this), 3, 10, 200)
});


// Loop On Elemnets To You Want To Adjust Height

var maxHeight = 0;

$('.container div').each(function () {
    if ($(this).height() > maxHeight) {
        maxHeight = $(this).height() ;
    };
})

$('.container div').height(maxHeight);

//Suffle Cards
var zIndex = 0;
$('.cards .card').on('click', function () {
    $(this).animate({
        left: "20%"
    }, 400, function () {
        zIndex--;
        $(this).css({
            transform: 'rotate(-360deg)',
            zIndex: zIndex
        })

    }).animate({
        left: $(this).css("left")
    }, 400)
})

// Blink Warnning
containerBlink();
function containerBlink() {
$('.container-blink').fadeOut(700, function () {
    $(this).fadeIn(700);
    containerBlink();
});
}

// To Do List

$('.container-to-do form').on('submit', function (e) {
    e.preventDefault();
    var myTasks = $(this).find(':input').val();

    if (myTasks != '') {
        $('<li>' + myTasks + ' <i class="fas fa-times"></i></li>').appendTo('.container-to-do .to-do .tasks');
        $(this).find(':input').val('');   
    }

})

$('.container-to-do .to-do').on('click', '.tasks li .fa-times', function () {
    $(this).parent('.tasks li').fadeOut(400);
})

$('.container-to-do .to-do').on('click','.tasks li', function () {
    $(this).addClass('to-do-customize');
    $(this).find('i').toggleClass('fa-times fa-check');
});

// start Text Typer

var theText = $('.typer').data('text'),
    textLength = theText.length,
    n = 0,
    theTyper = setInterval(function () {
            $('.typer').each(function () {
                $(this).text($(this).text() + theText[n]).reverse;
            })
            n  += 1;
            if (n >= textLength) {
                clearInterval(theTyper);
            }
        }, 300);



        // Clac The Items

        var theSummary = 0;

        $('.price').each(function () {
            theSummary += parseInt($(this).text());
            
        })

        $('.container-culc-items > span:last-child').text( "= " + theSummary);



    //Start Notes

    (function autochange() {

        $('.note-active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(1000).fadeOut(1000, function () {
                    $(this).removeClass('note-active').next().fadeIn(1000).addClass('note-active');
                    autochange()
                })
            } else {
                $(this).delay(1000).fadeOut(1000, function () {
                    $(this).removeClass('note-active');
                    $('.notes ul li').eq(0).addClass('note-active').fadeIn(1000);
                    autochange();
                });
            }
        })

    }())


    // Start Dynamic Tabs

    $('.dynamic-tabs ul li').on('click', function () {
        $(this).addClass('active-tab').siblings().removeClass('active-tab');
        $($(this).data('content-list')).fadeIn().siblings().fadeOut();
        console.log($(this).data('content-list'))
    })

    // Switch Between the Tabs

    $('.switch-tabs').click(function () {
        $('.container-tabs > div').next('.dynamic-tabs').toggleClass('left-tabs')
    })

    // Suggest Box

    var emailProviders = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmaol.com', 'test.ur'],
        finalString = '';

    $('.container-email-suggest form input').on('keyup', function () {
        if (!$(this).next().is('.suggest')) {
            $('<ul class="suggest"></ul>').insertAfter($(this));
        }
        finalString = ''; //Reset Variable

        for (var i = 0; i < emailProviders.length; i++) {
            finalString += '<li>' + $(this).val() + '@' + emailProviders[i] + '</li>'
        }

        $('.suggest').html(finalString);


        
    })




        
    
});