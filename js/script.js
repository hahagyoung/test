$(function () {

    //header
    $("header").each(function () {

        let win = $(window);
        let header = $(this);

        win.scroll(function () {
            if (win.scrollTop() > 850) {
                header.addClass("fix")
            } else {
                header.removeClass("fix")
            }

        });

    });

    //best-contents 박스 선택시 오버레이+글자
    $('.best .row .col-2 .box').on({
        mouseover:function(){
            $(this).find('span,p').stop(true).animate({opacity: '1'},50)
        },
        mouseout:function(){
            $(this).find('span,p').stop(true).animate({opacity: '0'},100)
        }
    })

    //best box 선택시 위 안내 창 변화
    $('.best2').on({
        click:function(){
            $('.w1').css({display:"none"}),
            $('.w3').css({display:"none"}),
            $('.w2').css({display: "flex"})
        }
    })
    $('.best1').on({
        click:function(){
            $('.w1').css({display:"flex"}),
            $('.w3').css({display:"none"}),
            $('.w2').css({display: "none"})
        }
    })
    $('.best3').on({
        click:function(){
            $('.w1').css({display:"none"}),
            $('.w3').css({display:"flex"}),
            $('.w2').css({display: "none"})
        }
    })
    // $('.best .row .col-2 .box:nth-child(2)').on({
    //     click:function(){
    //     }
    // })
    // $('.best .row .col-2 .box:nth-child(3)').on({
    //     click:function(){
    //     }
    // })


    //할인요금 더보기 버튼
    let disbtn = $(".discount").find("button");
    console.log(disbtn)

    disbtn.on('click',function(){
        discount.toggleClass("open");

        if(discount.hasClass("open")){
            discount.find(".content:nth-child(2)").css({display: 'block'})
        }else{
            discount.find(".content:nth-child(2)").css({display: 'none'})
        }
    });

    ///////////////////////
});