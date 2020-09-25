require(['jquery', 'text!template.html'], function($, helloMessage){
    $(function(){
        $("#main").html(helloMessage);
    });
});
