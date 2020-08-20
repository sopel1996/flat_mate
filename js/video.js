$(document).ready(function () {
    // var video = $('#video');
    // var src = $(video).attr('src');
    const cover = $('.section-video_cover');
    $(cover).click(function () {
        $(cover).css({
            opacity: 0,
        });
        // $(video).attr('src', src + '&autoplay=1');
    });
});