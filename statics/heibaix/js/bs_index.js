/**
 * Created by Administrator on 2016/3/29.
 */
$(document).ready(function(){


    $(".banner_cont .ban_dot").mouseenter(function(){
        $(this).stop(true,true).find("span").fadeIn();
        $(this).find("div").fadeIn();
        if($(this).hasClass("tes")){

            $(this).parents(".banner_zhongbox").find(".ban_dot").last().find("span").stop(true,true).fadeIn()  ;
            $(this).parents(".banner_zhongbox").find(".ban_dot").last().find("div").stop(true,true).fadeIn();
        }else{
            $(this).parents(".banner_zhongbox").find(".ban_dot").last().find("span").stop(true,true).fadeOut()  ;
            $(this).parents(".banner_zhongbox").find(".ban_dot").last().find("div").stop(true,true).fadeOut();


        }

    })
    $(".banner_cont .ban_dot").mouseleave(function(){

        if($(this).hasClass("tes")){

        }else{

            $(".ban_dot").find("span").stop(true,true).fadeOut();
            $(".ban_dot div").stop(true,true).fadeOut();
        }
        $(this).parents(".banner_zhongbox").find(".ban_dot").last().stop(true,true).find("span").fadeIn();
        $(this).parents(".banner_zhongbox").find(".ban_dot").last().find("div").fadeIn();
    })
    $(".banner_cont .ban_dot").last().mouseenter(function(){
        $(this).stop(true,true).find("span").fadeIn();
        $(this).find("div").fadeIn();

    })

    $(".banner_zhongbox").mouseenter(function(){
        $(this).find(".ban_dot").last().stop(true,true).find("span").fadeIn();
        $(this).find(".ban_dot").last().find("div").fadeIn();

    })
    $(".banner_zhongbox").mouseleave(function(){
        $(this).find(".ban_dot").last().find("span").stop(true,true).fadeOut();;
        $(this).find(".ban_dot").last().find("div").stop(true,true).fadeOut();


    })



})


