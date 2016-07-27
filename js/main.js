/**
 * Created by suraj on 27/7/16.
 */
$(document).ready(function(){
   $(".menu-button-1").click(function(e){
       if($(".menu-button-1 .bar").hasClass("open")){
           $(".menu-button-1 .bar").removeClass("open");
       }else{
           $(".menu-button-1 .bar").addClass("open");
       }
   });
    $(".menu-button-2").click(function(e){
       if($(".menu-button-2 .bar").hasClass("open")){
           $(".menu-button-2 .bar").removeClass("open");
       }else{
           $(".menu-button-2 .bar").addClass("open");
       }
   });

    setInterval(function(){
        $(".menu-button-1").trigger("click");
        $(".menu-button-2").trigger("click");
    },1000);

});