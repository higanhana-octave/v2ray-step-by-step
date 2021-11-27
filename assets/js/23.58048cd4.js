(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{428:function(t,s,a){"use strict";a.r(s);var e=a(54),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-2-tls-web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-2-tls-web"}},[t._v("#")]),t._v(" HTTP/2+TLS+WEB")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("V2RayClient --|-> Caddy -> V2RayServer -> Internet\n")])])]),a("p",[t._v("流量经 Caddy 通过本地回环（lo）转发给 V2Ray ，如直接使用浏览器访问 "),a("em",[t._v("V2Ray Path")]),t._v(" 将会返回 502 Bad Gateway，直接打开域名或访问其他路径与通过 HTTP/2 访问普通网站一般无二。每一个请求都是真实的 HTTP/2 "),a("code",[t._v("PUT")]),t._v(",正所谓真实是最完美的伪装。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("CDN")]),t._v(" "),a("p",[t._v("H2 流量理论上跟 ws 一样可以被 CDN 转发。 但是遗憾的是, Cloudflare 只支持与源服务器进行 HTTP/1.x 通信。 "),a("a",{attrs:{href:"https://support.cloudflare.com/hc/en-us/articles/200168076-Understanding-Cloudflare-HTTP-2-and-HTTP-3-Support",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cloudflare only uses HTTP/1.x between the origin web server and Cloudflare."),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺陷"}},[t._v("#")]),t._v(" 缺陷")]),t._v(" "),a("ul",[a("li",[t._v("没有使用 "),a("a",{attrs:{href:"https://v2ray.com/chapter_00/01_versions.html#20190712-v4200",target:"_blank",rel:"noopener noreferrer"}},[t._v("h2c"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("没有使用 "),a("a",{attrs:{href:"https://v2ray.com/chapter_02/transport/domainsocket.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DomainSocket"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("其他尚未注明的缺陷，急需你的补充。")])]),t._v(" "),a("h2",{attrs:{id:"服务端配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端配置"}},[t._v("#")]),t._v(" 服务端配置")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("建议的部署顺序")]),t._v(" "),a("p",[a("em",[t._v("先配置 Web 服务器，待 Web 服务器正常工作后部署 V2Ray。")])])]),t._v(" "),a("p",[t._v("本文之示例配置尚未使用 "),a("code",[t._v("h2c")]),t._v("，故 V2Ray 和 Caddy 均需要配置 SSL 证书。")]),t._v(" "),a("p",[t._v("需要自行修改的内容已使用 "),a("em",[t._v("<CustomTag>")]),t._v(" 标注，部署时请注意修改。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("TAG")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("<Host>")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("服务器的域名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("<Port>")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("V2Ray 在本地回环（lo）中监听的端口。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("<UUID>")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("VMess 用户的主 ID。必须是一个合法的 UUID 。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("<H2 Path>")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("以“/”开头的 HTTP 路径，客户端与服务端必须一致。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("<Path to cert>"),a("br"),t._v("<Path to key>")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指向证书/密钥的绝对路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("<Path to webroot>")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指向 Web 页面根目录的绝对路径")])])])]),t._v(" "),a("h3",{attrs:{id:"前期准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前期准备"}},[t._v("#")]),t._v(" 前期准备")]),t._v(" "),a("ul",[a("li",[t._v("注册域名并正确配置域名解析")]),t._v(" "),a("li",[t._v("准备好 SSL 证书 "),a("em",[t._v("（如果需要使用 Caddy 管理 SSL 证书，请自行修改 Caddyfile）")])]),t._v(" "),a("li",[t._v("完成 V2Ray 和 Web 服务器（例如 Caddy）的安装")]),t._v(" "),a("li",[t._v("准备一些人畜无害的 HTML 页面用来挡刀")])]),t._v(" "),a("h3",{attrs:{id:"web-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-服务器"}},[t._v("#")]),t._v(" Web 服务器")]),t._v(" "),a("p",[t._v("此处需要使用能转发 HTTP/2 流量的 Web 服务器。本文以 Caddy 1 的配置文件 "),a("code",[t._v("Caddyfile")]),t._v(" 为例，其他 Web 服务器同理。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("NGINX 不能向后端转发 HTTP2 流量。"),a("sup",{attrs:{id:"a1"}},[a("a",{attrs:{href:"#f1"}},[t._v("1")])])])]),t._v(" "),a("p",[t._v("下面的配置假定你已经拥有现成的 SSL 证书，如果需要使用 Caddy 管理 SSL 证书，请自行修改 "),a("code",[t._v("tls")]),t._v(" 部分。")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Caddyfile")]),t._v(" "),a("div",{staticClass:"language-caddyfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('http://<Host> {\n    redir https://<Host>{url}\n}\n\nhttps://<Host> {\n    log stdout\n    errors stderr\n    root <Path to webroot>\n    tls <Path to cert> <Path to key>\n    proxy <H2 Path> https://localhost:<Port> {\n        insecure_skip_verify\n        header_upstream Host {host}\n        header_upstream X-Real-IP {remote}\n        header_upstream X-Forwarded-For {remote}\n        header_upstream X-Forwarded-Port {server_port}\n        header_upstream X-Forwarded-Proto "https"\n}\n')])])])]),t._v(" "),a("h3",{attrs:{id:"v2ray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2ray"}},[t._v("#")]),t._v(" V2Ray")]),t._v(" "),a("p",[t._v("下列配置不包含 "),a("a",{attrs:{href:"/basics/log"}},[t._v("log")]),t._v(" 部分。")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("V2Ray config.json")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Port>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<UUID>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"httpSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<H2 Path>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Host>"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tlsSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serverName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Host>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificates"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificateFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Path to cert>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keyFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<Path to key>"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freedom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"排错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排错"}},[t._v("#")]),t._v(" 排错")]),t._v(" "),a("ul",[a("li",[t._v("如果你后端的 V2Ray 挂了或配置不正确，访问 "),a("em",[t._v("<H2 Path>")]),t._v(" 仍然会返回 "),a("code",[t._v("502")]),t._v("，因此不能通过 "),a("code",[t._v("502")]),t._v(" 错误判断 V2Ray 正在运行。")]),t._v(" "),a("li",[t._v("同时检查 V2Ray 和 Caddy 的日志，有助于确定问题出在哪一部分。")])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("b",{attrs:{id:"f1"}},[t._v("1.")]),t._v(" v2ray-core "),a("a",{attrs:{href:"https://github.com/v2ray/v2ray-core/issues/1063",target:"_blank",rel:"noopener noreferrer"}},[t._v("#1063"),a("OutboundLink")],1),a("a",{attrs:{href:"#a1"}},[t._v("↩")])])])}),[],!1,null,null,null);s.default=r.exports}}]);