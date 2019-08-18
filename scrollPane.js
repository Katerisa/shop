jQuery(function()
{
    jQuery('.story_text').jScrollPane();

});
$('.story_text').on('mousewheel', function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
});