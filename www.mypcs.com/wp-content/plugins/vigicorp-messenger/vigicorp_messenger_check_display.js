$(function() {


});

function checkDisplayFbChat() {
    $.post(
            customerChatVars.url, {
                'action': 'vigicorp_messenger_inject_action',
            }
        )
        .done(function(response) {
            if (response.length) {
                $('footer').prepend(response);
                $('#fb-root').show();

            }
        })
}