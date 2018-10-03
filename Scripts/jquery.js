$(document).ready(function(){

});

$('body').hide();
$('body').fadeIn('slow');
//onclick of a menu anchor
//display selected text, hide currently display text
$("#skillsHref").mouseenter(function()
{
    $("#skillsHref").css('display', 'block');
})
.mouseleave(function()
{
    $("#skillsHref").css('display', 'none');
});