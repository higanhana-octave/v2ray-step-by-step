(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{385:function(t,s,a){t.exports=a.p+"assets/img/tls_test1.fe1427b6.png"},386:function(t,s,a){t.exports=a.p+"assets/img/tls_test2.d11e5de5.png"},387:function(t,s,a){t.exports=a.p+"assets/img/tls_test3.6bbd955b.png"},436:function(t,s,a){"use strict";a.r(s);var e=a(54),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tls"}},[t._v("#")]),t._v(" TLS")]),t._v(" "),e("p",[t._v("从 v1.19 起引入了 TLS，TLS 中文译名是传输层安全，如果你没听说过，请 Google 了解一下。以下给出些我认为介绍较好的文章链接：")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSL/TLS 协议运行机制的概述"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%82%B3%E8%BC%B8%E5%B1%A4%E5%AE%89%E5%85%A8%E5%8D%94%E8%AD%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("传输层安全协议"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"注册一个域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册一个域名"}},[t._v("#")]),t._v(" 注册一个域名")]),t._v(" "),e("p",[t._v("如果已经注册有域名了可以跳过。\nTLS 需要一个域名，域名有免费的和有付费的，如果你不舍得为一个域名每年花点钱，用个免费域名也可以，但总体来说付费的会优于免费的。为了方便，在本文中我就忽略如何注册购买域名了。关于如何获取域名，具体搜索相关文章教程。")]),t._v(" "),e("p",[e("strong",[t._v("注册好域名之后务必记得添加一个 A 记录指向你的 VPS!")])]),t._v(" "),e("p",[e("strong",[t._v("以下假设注册的域名为 mydomain.me，请将之替换成自己的域名。")])]),t._v(" "),e("h2",{attrs:{id:"证书生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#证书生成"}},[t._v("#")]),t._v(" 证书生成")]),t._v(" "),e("p",[t._v("TLS 是证书认证机制，所以使用 TLS 需要证书，证书也有免费付费的，同样的这里使用免费证书，证书认证机构为 "),e("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),e("OutboundLink")],1),t._v("。\n证书的生成有许多方法，这里使用的是比较简单的方法：使用 "),e("a",{attrs:{href:"https://github.com/Neilpang/acme.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("acme.sh"),e("OutboundLink")],1),t._v(" 脚本生成，本部分说明部分内容参考于"),e("a",{attrs:{href:"https://github.com/Neilpang/acme.sh/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("acme.sh README"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("证书有两种，一种是 ECC 证书（内置公钥是 ECDSA 公钥），一种是 RSA 证书（内置 RSA 公钥）。简单来说，同等长度 ECC 比 RSA 更安全,也就是说在具有同样安全性的情况下，ECC 的密钥长度比 RSA 短得多（加密解密会更快）。但问题是 ECC 的兼容性会差一些，Android 4.x 以下和 Windows XP 不支持。只要您的设备不是非常老的老古董，建议使用 ECC 证书。")]),t._v(" "),e("p",[t._v("以下只给出 ECC 证书的部分。")]),t._v(" "),e("p",[t._v("证书生成只需在服务器上操作。")]),t._v(" "),e("h3",{attrs:{id:"安装-acme-sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-acme-sh"}},[t._v("#")]),t._v(" 安装 acme.sh")]),t._v(" "),e("p",[t._v("执行以下命令，acme.sh 会安装到 ~/.acme.sh 目录下。")]),t._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[t._v("$ curl  https://get.acme.sh | sh\n% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                               Dload  Upload   Total   Spent    Left  Speed\n100   671  100   671    0     0    680      0 --:--:-- --:--:-- --:--:--   679\n% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                               Dload  Upload   Total   Spent    Left  Speed\n100  112k  100  112k    0     0   690k      0 --:--:-- --:--:-- --:--:--  693k\n[Fri 30 Dec 01:03:32 GMT 2016] Installing from online archive.\n[Fri 30 Dec 01:03:32 GMT 2016] Downloading https://github.com/Neilpang/acme.sh/archive/master.tar.gz\n[Fri 30 Dec 01:03:33 GMT 2016] Extracting master.tar.gz\n[Fri 30 Dec 01:03:33 GMT 2016] Installing to /home/user/.acme.sh\n[Fri 30 Dec 01:03:33 GMT 2016] Installed to /home/user/.acme.sh/acme.sh\n[Fri 30 Dec 01:03:33 GMT 2016] Installing alias to '/home/user/.profile'\n[Fri 30 Dec 01:03:33 GMT 2016] OK, Close and reopen your terminal to start using acme.sh\n[Fri 30 Dec 01:03:33 GMT 2016] Installing cron job\nno crontab for user\nno crontab for user\n[Fri 30 Dec 01:03:33 GMT 2016] Good, bash is found, so change the shebang to use bash as preferred.\n[Fri 30 Dec 01:03:33 GMT 2016] OK\n[Fri 30 Dec 01:03:33 GMT 2016] Install success!\n\n")])])]),e("p",[t._v("安装成功后执行 "),e("code",[t._v("source ~/.bashrc")]),t._v(" 以确保脚本所设置的命令别名生效。")]),t._v(" "),e("p",[t._v("如果安装报错，那么可能是因为系统缺少 "),e("a",{attrs:{href:"https://github.com/Neilpang/acme.sh/wiki/Install-preparations",target:"_blank",rel:"noopener noreferrer"}},[t._v("acme.sh 所需要的依赖项"),e("OutboundLink")],1),t._v("，acme.sh 的依赖项主要是 socat，我们通过以下命令来安装这些依赖项，然后重新安装一遍 acme.sh:")]),t._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[t._v("$ sudo apt-get install openssl cron socat curl\n")])])]),e("h3",{attrs:{id:"使用-acme-sh-生成证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-acme-sh-生成证书"}},[t._v("#")]),t._v(" 使用 acme.sh 生成证书")]),t._v(" "),e("h4",{attrs:{id:"证书生成-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#证书生成-2"}},[t._v("#")]),t._v(" 证书生成")]),t._v(" "),e("p",[t._v("执行以下命令生成证书：")]),t._v(" "),e("p",[t._v("以下的命令会临时监听 80 端口，请确保执行该命令前 80 端口没有使用")]),t._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[t._v("$ ~/.acme.sh/acme.sh --issue -d mydomain.me --standalone --keylength ec-256 --force\n[Fri Dec 30 08:59:12 HKT 2016] Standalone mode.\n[Fri Dec 30 08:59:12 HKT 2016] Single domain='mydomain.me'\n[Fri Dec 30 08:59:12 HKT 2016] Getting domain auth token for each domain\n[Fri Dec 30 08:59:12 HKT 2016] Getting webroot for domain='mydomain.me'\n[Fri Dec 30 08:59:12 HKT 2016] _w='no'\n[Fri Dec 30 08:59:12 HKT 2016] Getting new-authz for domain='mydomain.me'\n[Fri Dec 30 08:59:14 HKT 2016] The new-authz request is ok.\n[Fri Dec 30 08:59:14 HKT 2016] mydomain.me is already verified, skip.\n[Fri Dec 30 08:59:14 HKT 2016] mydomain.me is already verified, skip http-01.\n[Fri Dec 30 08:59:14 HKT 2016] mydomain.me is already verified, skip http-01.\n[Fri Dec 30 08:59:14 HKT 2016] Verify finished, start to sign.\n[Fri Dec 30 08:59:16 HKT 2016] Cert success.\n-----BEGIN CERTIFICATE-----\nMIIEMTCCAxmgAwIBAgISA1+gJF5zwUDjNX/6Xzz5fo3lMA0GCSqGSIb3DQEBCwUA\nMEoxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MSMwIQYDVQQD\nExpMZXQncyBFbmNyeXB0IEF1dGhvcml0eSBYMzAeFw0xNjEyMjkyMzU5MDBaFw0x\nNzAzMjkyMzU5MDBaMBcxFTATBgNVBAMTDHdlYWtzYW5kLmNvbTBZMBMGByqGSM49\n****************************************************************\n4p40tm0aMB837XQ9jeAXvXulhVH/7/wWZ8/vkUUvuHSCYHagENiq/3DYj4a85Iw9\n+6u1r7atYHJ2VwqSamiyTGDQuhc5wdXIQxY/YQQqkAmn5tLsTZnnOavc4plANT40\nzweiG8vcIvMVnnkM0TSz8G1yzv1nOkruN3ozQkLMu6YS7lk/ENBN7DBtYVSmJeU2\nVAXE+zgRaP7JFOqK6DrOwhyE2LSgae83Wq/XgXxjfIo1Zmn2UmlE0sbdNKBasnf9\ngPUI45eltrjcv8FCSTOUcT7PWCa3\n-----END CERTIFICATE-----\n[Fri Dec 30 08:59:16 HKT 2016] Your cert is in  /root/.acme.sh/mydomain.me_ecc/mydomain.me.cer\n[Fri Dec 30 08:59:16 HKT 2016] Your cert key is in  /root/.acme.sh/mydomain.me_ecc/mydomain.me.key\n[Fri Dec 30 08:59:16 HKT 2016] The intermediate CA cert is in  /root/.acme.sh/mydomain.me_ecc/ca.cer\n[Fri Dec 30 08:59:16 HKT 2016] And the full chain certs is there:  /root/.acme.sh/mydomain.me_ecc/fullchain.cer\n")])])]),e("p",[e("code",[t._v("--keylength")]),t._v(" 表示密钥长度，后面的值可以是 "),e("code",[t._v("ec-256")]),t._v(" 、"),e("code",[t._v("ec-384")]),t._v("、"),e("code",[t._v("2048")]),t._v("、"),e("code",[t._v("3072")]),t._v("、"),e("code",[t._v("4096")]),t._v("、"),e("code",[t._v("8192")]),t._v("，带有 "),e("code",[t._v("ec")]),t._v(" 表示生成的是 ECC 证书，没有则是 RSA 证书。在安全性上 256 位的 ECC 证书等同于 3072 位的 RSA 证书。")]),t._v(" "),e("h4",{attrs:{id:"证书更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#证书更新"}},[t._v("#")]),t._v(" 证书更新")]),t._v(" "),e("p",[t._v("由于 Let's Encrypt 的证书有效期只有 3 个月，因此需要 90 天至少要更新一次证书，acme.sh 脚本会每 60 天自动更新证书。也可以手动更新。")]),t._v(" "),e("p",[t._v("手动更新证书，执行：")]),t._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[t._v("$ ~/.acme.sh/acme.sh --renew -d mydomain.com --force --ecc\n")])])]),e("p",[e("strong",[t._v("由于本例中将证书生成到 "),e("code",[t._v("/etc/v2ray/")]),t._v(" 文件夹，更新证书之后还得把新证书生成到 /etc/v2ray。")])]),t._v(" "),e("h3",{attrs:{id:"安装证书和密钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装证书和密钥"}},[t._v("#")]),t._v(" 安装证书和密钥")]),t._v(" "),e("p",[t._v("将证书和密钥安装到 /etc/v2ray 中：")]),t._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[t._v("$ sudo ~/.acme.sh/acme.sh --installcert -d mydomain.me --ecc \\\n                          --fullchain-file /etc/v2ray/v2ray.crt \\\n                          --key-file /etc/v2ray/v2ray.key\n")])])]),e("p",[e("strong",[t._v("注意：无论什么情况，密钥(即上面的 v2ray.key)都不能泄漏，如果你不幸泄漏了密钥，可以使用 acme.sh 将原证书吊销，再生成新的证书，吊销方法请自行参考 "),e("a",{attrs:{href:"https://github.com/Neilpang/acme.sh/wiki/Options-and-Params",target:"_blank",rel:"noopener noreferrer"}},[t._v("acme.sh 的手册"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"配置-v2ray"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-v2ray"}},[t._v("#")]),t._v(" 配置 V2Ray")]),t._v(" "),e("h3",{attrs:{id:"服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器"}},[t._v("#")]),t._v(" 服务器")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 建议使用 443 端口")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    \n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"23ad6b10-8d1a-40f7-8ad0-e3e35cd38297"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// security 要设置为 tls 才会启用 TLS")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tlsSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificates"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificateFile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/v2ray/v2ray.crt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 证书文件")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keyFile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/v2ray/v2ray.key"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 密钥文件")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freedom"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1080")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"socks"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sniffing"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destOverride"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"auth"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noauth"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vnext"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mydomain.me"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tls 需要域名，所以这里应该填自己的域名")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"23ad6b10-8d1a-40f7-8ad0-e3e35cd38297"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 客户端的 security 也要设置为 tls")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),e("p",[t._v("一般来说，按照以上步骤操作完成，V2Ray 客户端能够正常联网说明 TLS 已经成功启用。但要是有个可靠的方法来验证是否正常开启 TLS 无疑更令人放心。\n验证的方法有很多，我仅介绍一种小白化一点的，便是 "),e("a",{attrs:{href:"https://www.ssllabs.com/ssltest/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qualys SSL Labs's SSL Server Test"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("注意：使用 Qualys SSL Labs's SSL Server Test 要求使用 443 端口，意味着你服务器配置的 inbound.port 应当是 443")])]),t._v(" "),e("p",[t._v("打开 "),e("a",{attrs:{href:"https://www.ssllabs.com/ssltest/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qualys SSL Labs's SSL Server Test"),e("OutboundLink")],1),t._v("，在\nHostname 中输入你的域名，点提交，过一会结果就出来了。\n"),e("img",{attrs:{src:a(385),alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(386),alt:""}}),t._v("\n这是对于你的 TLS/SSL 的一个总体评分，我这里评分为 A，看来还不错。有这样的界面算是成功了。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(387),alt:""}}),t._v("\n这是关于证书的信息。从图中可以看出，我的这个证书有效期是从 2016 年 12 月 27 号到 2017 年的 3 月 27 号，密钥是 256 位的 ECC，证书签发机构是 Let's Encrypt，重要的是最后一行，"),e("code",[t._v("Trusted")]),t._v(" 为 "),e("code",[t._v("Yes")]),t._v("，表明我这个证书可信。")]),t._v(" "),e("h2",{attrs:{id:"温馨提醒"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#温馨提醒"}},[t._v("#")]),t._v(" 温馨提醒")]),t._v(" "),e("p",[e("strong",[t._v("V2Ray 的 TLS 不是伪装或混淆，这是完整、真正的 TLS。因此才需要域名和证书。后文提到的 WS(WebSocket) 也不是伪装。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);