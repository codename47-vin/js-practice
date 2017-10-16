<script type='text/javascript'>

$(function() {

let cart_trigger = $('#cart-trigger'),
    cart = $('#cart'),
    shadow_layer = $('#shadow-layer');

let close = $('.close');
let hamburger = $('#hamburger');
let mega = $('.mega-menu');

hamburger.click(function() {
    check_panel(cart, shadow_layer);
    toggle_panel(mega, shadow_layer);
});

close.click(function() {
    mega.removeClass('active');
    shadow_layer.removeClass('is-visible');
});

cart_trigger.click(function () {
    check_panel(mega, shadow_layer);
    toggle_panel(cart, shadow_layer);
});

});

function toggle_panel(panel, background_layer) {
    panel.toggleClass('speed-in active');
    background_layer.toggleClass('is-visible');
}

function check_panel(panel, back_layer) {
 if (panel.hasClass('speed-in active')) {
     panel.removeClass('speed-in active');
     back_layer.toggleClass('is-visible');
 }
}

</script>
