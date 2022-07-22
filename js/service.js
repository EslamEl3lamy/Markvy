/************************************
    File Name: service.js
    Template Name: Markvy
    Created By: Ahmed Tawfik
    Version: 1.0
************************************

***********************************
IMPORT FILES
************************************/

$(document).ready(function(){
            $(".branding").on({
                mouseenter : function(){
                    $("#dg-panel").slideUp("slow");
                    $("#wb-panel").slideUp("slow");
                    $("#mob-panel").slideUp("slow");
                    $("#crm-panel").slideUp("slow");
                    $("#br-panel").slideDown("slow");
                    $(".brand").animate({marginTop: '-61px'}, "slow");
//                    $(".brand").animate({marginLeft: '38%'}, "slow");
                    $(".brand").animate({marginLeft: $(".brand").parent().width() / 2.3 - $(".brand").width() / 2}, "slow");
                    $(".brand").animate({fontSize: '36px'}, "slow");
                },
                mouseleave : function(){
                    setTimeout(function(){ $("#br-panel").slideUp("slow"); }, 8000);
                }
            });
            
            $(".digital").on({
                mouseenter : function(){
                    $("#br-panel").slideUp("slow");
                    $("#wb-panel").slideUp("slow");
                    $("#mob-panel").slideUp("slow");
                    $("#crm-panel").slideUp("slow");
                    $("#dg-panel").slideDown("slow");
                    $(".digi").animate({marginTop: '-90px'}, "slow");
                    $(".digi").animate({marginLeft: $(".digi").parent().width() / 2.3 - $(".digi").width() / 2}, "slow");
                    $(".digi").animate({fontSize: '34px'}, "slow");
                },
                mouseleave : function(){
                    setTimeout(function(){ $("#dg-panel").slideUp("slow"); },8000000);
                }
            });
            
            $(".design").on({
                mouseenter : function(){
                    $("#br-panel").slideUp("slow");
                    $("#dg-panel").slideUp("slow");
                    $("#mob-panel").slideUp("slow");
                    $("#crm-panel").slideUp("slow");
                    $("#wb-panel").slideDown("slow");
                    $(".wbdesign").animate({marginTop: '-111px'}, "slow");
                    $(".wbdesign").animate({marginLeft: $(".wbdesign").parent().width() / 2.2 - $(".wbdesign").width() / 2}, "slow");
                    $(".wbdesign").animate({fontSize: '32px'}, "slow");
                },
                mouseleave : function(){
                    setTimeout(function(){ $("#wb-panel").slideUp("slow"); }, 8000);
                }
            });
            
            $(".mobile").on({
                mouseenter : function(){
                    $("#br-panel").slideUp("slow");
                    $("#dg-panel").slideUp("slow");
                    $("#wb-panel").slideUp("slow");
                    $("#crm-panel").slideUp("slow");
                    $("#mob-panel").slideDown("slow");
                    $(".mob").animate({marginTop: '-90px'}, "slow");
                    $(".mob").animate({marginLeft: $(".mob").parent().width() / 2.3 - $(".mob").width() / 2}, "slow");
                    $(".mob").animate({fontSize: '36px'}, "slow");
                },
                mouseleave : function(){
                    setTimeout(function(){ $("#mob-panel").slideUp("slow"); }, 8000);
                }
            });
            
            $(".customer").on({
                mouseenter : function(){
                    $("#br-panel").slideUp("slow");
                    $("#dg-panel").slideUp("slow");
                    $("#wb-panel").slideUp("slow");
                    $("#mob-panel").slideUp("slow");
                    $("#crm-panel").slideDown("slow");
                    $(".crm").animate({marginTop: '-90px'}, "slow");
                    $(".crm").animate({marginLeft: $(".crm").parent().width() / 2.3 - $(".crm").width() / 2}, "slow");
                    $(".crm").animate({fontSize: '36px'}, "slow");
                },
                mouseleave : function(){
                    setTimeout(function(){ $("#crm-panel").slideUp("slow"); }, 8000);
                }
            });

        });