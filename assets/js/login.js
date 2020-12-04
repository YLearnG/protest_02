$(function() {
    $('#link-reg').on('click', function() {
        // 去注册账号
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 去登陆账号
    $('#link-login').on('click', function() {
        $('reg-box').hide()
        $('.login-box').show()
    })
})