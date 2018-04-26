function updatePageTitle(){
    if($(window).width() <= 480){
        $(document).prop('title', 'Phone');
    }else if($(window).width() > 480 && $(window).width() < 1024){
        $(document).prop('title', 'Tablet');
    }else if($(window).width() >= 1024){
        $(document).prop('title', 'Desktop');
    }
}
$(window).on("load",function(){
    updatePageTitle();
}).on("resize", function(){
    updatePageTitle();
});