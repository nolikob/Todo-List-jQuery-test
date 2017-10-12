// Check off specific Todos by clicking
$("ul").on("click","li"/*we can add listener only on existing objects*/,function(){
    $(this).toggleClass("done");
})
// click on x to remove
$("ul").on("click",".remove",function(e){
    $(this).parent().fadeOut(350,function(){
        // here this refers to the li, not the span
        $(this).remove();
    });
    e.stopPropagation();
})
// new todo from input
$("input[type='text']").keypress(function(e){
    if(e.which === 13) {
        // getting new todo text from input
        var inputVal = $(this).val();
        // create new li and add it to ul
        $("ul").append("<li><span class=\"remove\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i></span> " + inputVal + "</li>")
        $(this).val("");
    }
});
$(".fa-pencil").click(function(){
    $("input[type='text']").slideToggle();
});