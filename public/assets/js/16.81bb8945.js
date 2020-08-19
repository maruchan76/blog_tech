(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{499:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"【ec2-amazon-linux2】wordpressをlempでの構築手順"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【ec2-amazon-linux2】wordpressをlempでの構築手順"}},[s._v("#")]),s._v(" 【EC2 Amazon Linux2】WordPressをLEMPでの構築手順")]),s._v(" "),t("p",[s._v("LEMP を使った WordPress の簡単な構築手順")]),s._v(" "),t("h2",{attrs:{id:"用語解説"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用語解説"}},[s._v("#")]),s._v(" 用語解説")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[s._v("項目")]),s._v(" "),t("th",{staticStyle:{"text-align":"center"}},[s._v("説明")]),s._v(" "),t("th",{staticStyle:{"text-align":"center"}},[s._v("備考")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("$(ドル)")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("一般ユーザー")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}})]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("#(シャープ)")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("rootユーザー")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}})]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("=>")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("短文の実行結果など")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}})]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("----"),t("br"),s._v("~hoge~"),t("br"),s._v("----")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("長文の実行結果や編集内容など")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}})]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("mysql>")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("データベース内での実行文")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}})])])]),s._v(" "),t("h2",{attrs:{id:"最初の設定など"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最初の設定など"}},[s._v("#")]),s._v(" 最初の設定など")]),s._v(" "),t("h3",{attrs:{id:"パッケージ更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パッケージ更新"}},[s._v("#")]),s._v(" パッケージ更新")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum -y update\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"timezone-の変更と反映"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timezone-の変更と反映"}},[s._v("#")]),s._v(" TimeZone の変更と反映")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" UTC\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" timedatectl set-timezone Asia/Tokyo\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" JST\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"パッケージ導入-起動編"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パッケージ導入-起動編"}},[s._v("#")]),s._v(" パッケージ導入~起動編")]),s._v(" "),t("h3",{attrs:{id:"導入パッケージの確認"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#導入パッケージの確認"}},[s._v("#")]),s._v(" 導入パッケージの確認")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ amazon-linux-extras list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n$ amazon-linux-extras list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" php\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"各種パッケージのインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#各種パッケージのインストール"}},[s._v("#")]),s._v(" 各種パッケージのインストール")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" amazon-linux-extras "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx1\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" amazon-linux-extras "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php7.4\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mariadb-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"各種パッケージのバージョン確認"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#各種パッケージのバージョン確認"}},[s._v("#")]),s._v(" 各種パッケージのバージョン確認")]),s._v(" "),t("ul",[t("li",[s._v("nginx")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ nginx -v\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nginx version: nginx/1.16.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("php")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ php-fpm -v\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" PHP "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.4")]),s._v(".5 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fpm-fcgi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("built: Apr "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" 00:11:38"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("mysql")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ mysql --version\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mysql  Ver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.1")]),s._v(" Distrib "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(".64-MariaDB, "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Linux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x86_64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" using readline "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"各種サービスの起動-自動起動有効化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#各種サービスの起動-自動起動有効化"}},[s._v("#")]),s._v(" 各種サービスの起動&自動起動有効化")]),s._v(" "),t("ul",[t("li",[s._v("nginx")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("php")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start php-fpm\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" php-fpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("mysql")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start mariadb\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mariadb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"wordpress-導入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wordpress-導入"}},[s._v("#")]),s._v(" WordPress 導入")]),s._v(" "),t("h3",{attrs:{id:"データベース周りの設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#データベース周りの設定"}},[s._v("#")]),s._v(" データベース周りの設定")]),s._v(" "),t("ul",[t("li",[s._v("データベースのパスワード設定などの設定")]),s._v(" "),t("li",[s._v("データベース内に接続")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ mysql_secure_installation\n\n----初期セットアップ開始----\nSet root password? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" y\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" root パスワードを設定\n\nRemove anonymous users? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" y\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 匿名ユーザーは削除する\n\nDisallow root login remotely? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" y\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" root のリモートログインは無効とする\n\nRemove "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" database and access to it? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" y\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" テストデータベースは削除する\n\nReload privilege tables now? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" y\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 特権情報をリロードする\n----初期セットアップ終了----\n\n$ mysql -u root -p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("ul",[t("li",[s._v("データベース作成")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" Oreodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" OreoUser"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@localhost")]),s._v(" identified "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OreoUserPass@0113'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" Oreodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" OreoUser"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@localhost")]),s._v(" identified "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OreoUserPass@0113'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"wordpressのダウンロード"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wordpressのダウンロード"}},[s._v("#")]),s._v(" WordPressのダウンロード")]),s._v(" "),t("ul",[t("li",[s._v("作業ディレクトリを作成")]),s._v(" "),t("li",[s._v("最新版のWordPressをDL")]),s._v(" "),t("li",[s._v("解凍")]),s._v(" "),t("li",[s._v("User:Groupの変更")]),s._v(" "),t("li",[s._v("不要ファイルを削除")]),s._v(" "),t("li",[s._v("パスの確認")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/www/oreo_html\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/www/oreo_html/\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://ja.wordpress.org/latest-ja.tar.gz\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf latest-ja.tar.gz\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" latest-ja.tar.gz\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" wordpress\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/www/oreo_html/wordpress\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"nginx側設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx側設定"}},[s._v("#")]),s._v(" Nginx側設定")]),s._v(" "),t("ul",[t("li",[s._v("nginx.conf のバックアップ作成")]),s._v(" "),t("li",[s._v("ドキュメントルートの場所を変更\n"),t("ul",[t("li",[s._v("42行目の root の場所を上記で実行した pwd 結果に置き換える")])])])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -ip /etc/nginx/nginx.conf /etc/nginx/nginx.conf_20200622\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/nginx/nginx.conf\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" root         /var/www/oreo_html/wordpress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("config ファイルの中身が正しいか確認")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -t\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nginx: the configuration "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /etc/nginx/nginx.conf syntax is ok\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nginx: configuration "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /etc/nginx/nginx.conf "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" is successful\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("nginx 再起動")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"ブラウザにて"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ブラウザにて"}},[s._v("#")]),s._v(" ブラウザにて")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("インスタンスのIPを検索")])]),s._v(" "),t("li",[t("p",[s._v("【さぁ､始めましょう!】 を選択\n"),t("a",{attrs:{href:"https://gyazo.com/e4eaa88d4a2ba8fbcdf85313c536cdf5",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://i.gyazo.com/e4eaa88d4a2ba8fbcdf85313c536cdf5.png",alt:"Image from Gyazo"}}),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[s._v("必要な項目を入力\n"),t("a",{attrs:{href:"https://gyazo.com/a86abd0097f81ade1935a8e0f337d111",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://i.gyazo.com/a86abd0097f81ade1935a8e0f337d111.png",alt:"Image from Gyazo"}}),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[s._v("情報をコピー\n"),t("a",{attrs:{href:"https://gyazo.com/731d7721f9e32c2864aa66ddd6b487c0",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://i.gyazo.com/731d7721f9e32c2864aa66ddd6b487c0.png",alt:"Image from Gyazo"}}),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[s._v("wp-config.phpの作成")])])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /var/www/oreo_html/wordpress/wp-config.php\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" nginx. -R /var/www/oreo_html/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("必要情報の入力\n"),t("a",{attrs:{href:"https://gyazo.com/2a21890db4af7faf0be865e34a565154",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://i.gyazo.com/2a21890db4af7faf0be865e34a565154.png",alt:"Image from Gyazo"}}),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"hello-wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hello-wordpress"}},[s._v("#")]),s._v(" Hello WordPress !")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://gyazo.com/af1e42c69b3eeac1a5766925751841e7",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://i.gyazo.com/af1e42c69b3eeac1a5766925751841e7.png",alt:"Image from Gyazo"}}),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);