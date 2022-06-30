var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

$.getScript('https://pv.sohu.com/cityjson?ie=utf-8')
.done(function(script, textStatus,jqxhr) {
    // console.log(returnCitySN.cip);//xx.xx.xx.xx
    // console.log(returnCitySN.cname)
    // console.log(textStatus);//success
    // console.log(jqxhr.status);//200

    var data = {
        service_id: 'service_qj0yswn',
        template_id: 'template_p389poe',
        user_id: 'G0BV-cdLYNuaBS5-d',
        template_params: {
            'message': returnCitySN.cip,
            'location': returnCitySN.cname
        }
    };
     
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    })
})