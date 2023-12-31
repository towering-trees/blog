(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{514:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://wwb.lanzouf.com/iYTLD08o7l5g",target:"_blank",rel:"noopener noreferrer"}},[s._v("源码下载地址（带搭建教程）"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_1-宝塔面板搭建安装mongodb数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-宝塔面板搭建安装mongodb数据库"}},[s._v("#")]),s._v(" 1. 宝塔面板搭建安装MongoDB数据库")]),s._v(" "),a("p",[a("strong",[s._v("1. 安装 MongoDB 数据库")]),s._v(" "),a("img",{attrs:{src:"/blog/server/%E5%9B%BE%E7%89%871.png",alt:"avatar"}}),s._v(" "),a("strong",[s._v("2. 放行端口号：27017")]),s._v(" "),a("strong",[s._v("3. MongoDB 配置项（设置远程访问）")]),s._v(" "),a("img",{attrs:{src:"/blog/server/%E5%9B%BE%E7%89%872.png",alt:"avatar"}}),s._v(" "),a("strong",[s._v("4. 如果 MongoDB 配置项保存出错的话,可以在配置文件中修改")]),s._v(" "),a("img",{attrs:{src:"/blog/server/%E5%9B%BE%E7%89%873.png",alt:"avatar"}}),s._v(" "),a("strong",[s._v("5. 在宝塔内置的终端访问mongo服务，新建数据库，创建user集合等，依次执行如下命令：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mongo // 开启mongo服务\nshow dbs // 显示数据库列表\nuse wallBlog // 新建一个wallBlog数据库\ndb.createUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wall"')]),s._v(",pwd:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v(",roles:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWrite"')]),s._v(",db:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wallBlog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" // 在wallBlog数据库创建一个wall用户，密码为123456\nshow "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" // 展示该库有哪些用户\ndb.auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wall"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 数据库认证一下用户、密码（返回1，表示成功）\ndb.users.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  // 往该库的users集合插入一条数据，账号：admin  密码：123456\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pwd"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e10adc3949ba59abbe56e057f20f883e"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"roles"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nshow collections // 查询该库下的集合（类似于mysql的表）\ndb.users.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" // 查询users集合下的所有数据\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"_2-宝塔面板运行nodejs项目-api服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-宝塔面板运行nodejs项目-api服务端"}},[s._v("#")]),s._v(" 2. 宝塔面板运行nodejs项目（api服务端）")]),s._v(" "),a("blockquote",[a("p",[s._v("准备阶段"),a("br"),s._v("\n环境：Nginx 1.17"),a("br"),s._v("\n软件商店中安装：PM2管理器"),a("br"),s._v("\n放行端口：3000"),a("br"),s._v("\n修改数据库文件：code/server/config.js")])]),s._v(" "),a("p",[a("strong",[s._v("1. 上传api服务端 文件至服务器")]),a("br"),s._v(" "),a("img",{attrs:{src:"/blog/server/%E5%9B%BE%E7%89%874.png",alt:"avatar"}}),a("br"),s._v(" "),a("strong",[s._v("2. 宝塔面板 安装 pm2管理器")]),a("br"),s._v(" "),a("img",{attrs:{src:"/blog/server/%E5%9B%BE%E7%89%875.png",alt:"avatar"}}),a("br"),s._v(" "),a("strong",[s._v("3. 执行命令：npm i 安装 依赖")]),a("br"),s._v(" "),a("img",{attrs:{src:"/blog/server/%E5%9B%BE%E7%89%876.png",alt:"avatar"}}),a("br"),s._v(" "),a("strong",[s._v("4. 在 pm2管理器 中添加项目，并启动")]),a("br"),s._v(" "),a("img",{attrs:{src:"/blog/server/%E5%9B%BE%E7%89%877.png",alt:"avatar"}}),a("br"),s._v(" "),a("img",{attrs:{src:"/blog/server/%E5%9B%BE%E7%89%878.png",alt:"avatar"}}),a("br"),s._v(" "),a("img",{attrs:{src:"/blog/server/%E5%9B%BE%E7%89%879.png",alt:"avatar"}}),a("br"),s._v(" "),a("strong",[s._v("5. 访问 域名:3000 即可查看api服务端")])])])}),[],!1,null,null,null);t.default=r.exports}}]);