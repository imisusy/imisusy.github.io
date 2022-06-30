var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

$.getScript('//pv.sohu.com/cityjson?ie=utf-8')
.done(function(script, textStatus,jqxhr) {
    // console.log(returnCitySN.cip);//xx.xx.xx.xx
    // console.log(returnCitySN.cname)
    // console.log(textStatus);//success
    // console.log(jqxhr.status);//200
    Email.send({
        SecureToken: "a0197826-e718-43a5-94e6-9cd5bd1acae3",
        // Host : "smtp.elasticemail.com",// 邮箱开启POP3/SMTP服务时对应的发送服务器 smtp.exmail.qq.com对应腾讯企业邮箱发送服务器 
        // Username : "xminao29@gmail.com",
        // Password : "1FEF939DA96207C91315D4BCED5259895ED5",
        To: 'xminao@yeah.net',
        From: "xminao29@gmail.com",
        Subject: "ImisusyEmail",
        Body: returnCitySN.cip
      }).then(
        message => console.log(message)
      );
})