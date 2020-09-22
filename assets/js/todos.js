//check off tods by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//deleting todos
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//adding todos
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todoText=$(this).val();
        $(this).val("");
        //create new li and append new todo
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
    }
});
$("#toggleform").click(function(){
    $("input[type='text']").fadeToggle();
});