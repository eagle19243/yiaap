<html>
    <head>
	<title>##TITLE##</title>
	<style>img, a { border: 0px !important; }</style>
    </head>
    <body style="background-color: #FFFFFF; margin: 20px; padding: 0px;">
	<div id="main-wrapper" style="float: left; width: 100%; min-height: 400px;">
	    <div id="logo-wrapper" style="float: left; width: 100%;">##LOGO##</div>
	    <div id="message-content" style="width: 100%; float: left; display: block;">
		<h2>##H2##</h2>
		<p>{lang_entry key="payment.notif.fe.txt1"}</p>
		<p>{lang_entry key="payment.notif.be.txt4"} ##SUB_CHANNEL##</p>
		<p>{lang_entry key="payment.notif.fe.txt2"} ##PACK_NAME##</p>
		<p>{lang_entry key="payment.notif.fe.txt3"} ##PAID_TOTAL##</p>
		<p>{lang_entry key="payment.notif.fe.txt4"} ##PACK_EXPIRE##</p>
		<p></p>
		<p>{lang_entry key="email.notif.general.txt1"} {$website_shortname}!</p>
		<p style="text-align: center; color: #cccccc; padding-top: 15px;">&copy; ##YEAR## {$website_shortname}, LLC</p>
	    </div>
	</div>
    </body>
</html>