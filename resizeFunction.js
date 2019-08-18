window.onresize = function(event) {
    let pane = $('.jspPane');
    let block = $('.story_text');
    if (pane.height() > block.height()) {
        pane.css('display', '');
        pane.css('flex-direction', '');
        pane.css('justify-content', '');
        pane.css('height', '');
    }
    else {
        pane.css('display', 'flex');
        pane.css('flex-direction', 'column');
        pane.css('justify-content', 'center');
        pane.css('height', '100%');
    }
};