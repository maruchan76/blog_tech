(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{516:function(t,_,v){"use strict";v.r(_);var e=v(4),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"_1-はじめに"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-はじめに"}},[t._v("#")]),t._v(" 1. はじめに")]),t._v(" "),v("p",[t._v("普段､Minecraft のプラグインサーバーを運用していく上でよくあるのが "),v("strong",[t._v("｢急激に重い!｣")]),t._v("､"),v("strong",[t._v("｢え?!めっちゃラグい!!｣")]),t._v("､"),v("strong",[t._v("｢あれ?!サーバー落ちてない?!｣")]),t._v(" などが...あります｡(たいへんもうしわけない)")]),t._v(" "),v("blockquote",[v("p",[t._v("Minecraft鯖の運営者としては､ユーザーが快適に遊べるている = 【"),v("strong",[t._v("つまりサービスが快適に提供出来ている")]),t._v("】")])]),t._v(" "),v("p",[t._v("ただ､ユーザーからは重かった報告は上がるが･･･現状ではいつ重かったのか不明である｡"),v("br"),t._v("\nならば､監視ツールを入れて報告があった時間を確認して更にはトライ・アンド・エラーで直していこうと思う｡")]),t._v(" "),v("p",[t._v("以前に CloudWatch Agent を入れて､監視を実施していたが､わざわざ複数のステップを踏むのが面倒になって削除しました｡")]),t._v(" "),v("p",[t._v("ここのページでは､Datadog を用いて何を監視するかを定義する｡(実現出来たのはグラフとかを載せていきます｡)")]),t._v(" "),v("p",[t._v("また､実現出来る出来ないは一旦隅に置いといて､コレがあったら良いなーと考えてみる｡")]),t._v(" "),v("h3",{attrs:{id:"_1-1-サーバーの環境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-サーバーの環境"}},[t._v("#")]),t._v(" 1.1. サーバーの環境")]),t._v(" "),v("ul",[v("li",[t._v("CPU")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("項目")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("値")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("アーキテクチャ")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("x86_64")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Model name")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("CPU(s)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("12")])])])]),t._v(" "),v("ul",[v("li",[t._v("メモリ(新品 同じ型で2枚差し : 合計32GB)")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("項目")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("値")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Size")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("16384 MB")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("DDR4")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Speed")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2666 MT/s")])])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"_2-【ユーザー目線】サービスが正常であること"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-【ユーザー目線】サービスが正常であること"}},[t._v("#")]),t._v(" 2. 【ユーザー目線】サービスが正常であること")]),t._v(" "),v("p",[t._v("まずは､ユーザー目線で考えてみる")]),t._v(" "),v("ul",[v("li",[t._v("【"),v("a",{attrs:{href:"https://speakerdeck.com/takumanakagame/what-is-the-first-step-for-system-monitoring?slide=14",target:"_blank",rel:"noopener noreferrer"}},[t._v("サービスが正常であることを定義しよう"),v("OutboundLink")],1),t._v("】｡")]),t._v(" "),v("li",[t._v("【"),v("a",{attrs:{href:"https://speakerdeck.com/takumanakagame/what-is-the-first-step-for-system-monitoring?slide=13",target:"_blank",rel:"noopener noreferrer"}},[t._v("サービスが正常であることを監視しよう"),v("OutboundLink")],1),t._v("】｡")])]),t._v(" "),v("h3",{attrs:{id:"_2-1-チェック志向-『アラート発砲』"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-チェック志向-『アラート発砲』"}},[t._v("#")]),t._v(" 2.1. チェック志向 『アラート発砲』")]),t._v(" "),v("blockquote",[v("p",[t._v("特性 : 異常検知"),v("br"),t._v("\n典型的な動作 : 定期的に監視対象の動作確認を行う (HTTP 対応など)"),v("br"),t._v("\n典型的な出力 : 異常を通知するメール (Slack/Discord など)"),v("br"),t._v('\n狭義の監視 : 定期的/継続的に､観測し "異常" を検知し復旧させること')])]),t._v(" "),v("h4",{attrs:{id:"_2-1-1-【ユーザー目線-サービスが正常であること】-を監視"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-【ユーザー目線-サービスが正常であること】-を監視"}},[t._v("#")]),t._v(" 2.1.1. 【ユーザー目線 : サービスが正常であること】 を監視")]),t._v(" "),v("ul",[v("li",[t._v("Minecraft サーバーに正常にログインができる\n"),v("ul",[v("li",[t._v("外部からの Ping 25565 番ポートが帰ってくる")])])]),t._v(" "),v("li",[t._v("Web サイト (Dynmap) が正常に閲覧できる\n"),v("ul",[v("li",[t._v("/map/ を GET したら 200 が帰ってくる")])])])]),t._v(" "),v("h3",{attrs:{id:"_2-2-メトリクス志向-『ダッシュボード』"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-メトリクス志向-『ダッシュボード』"}},[t._v("#")]),t._v(" 2.2. メトリクス志向 『ダッシュボード』")]),t._v(" "),v("blockquote",[v("p",[t._v("特性 : 状況把握"),v("br"),t._v("\n典型的な動作 : 定期的に監視対象の状況を示すデータを取得/収集する (CPU利用率) "),v("br"),t._v("\n典型的な出力 : 監視対象の状況を示すグラフ"),v("br"),t._v('\n広義の監視 : 定期的/継続的に､観測しシステムの "価値" を維持/向上させる営みの全て')])]),t._v(" "),v("ul",[v("li",[t._v("Web サイトの閲覧数を表示")]),t._v(" "),v("li",[t._v("Minecraft サーバーに対するユーザーのログイン数")])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"_3-【サーバー目線】サーバーが正常であること"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-【サーバー目線】サーバーが正常であること"}},[t._v("#")]),t._v(" 3. 【サーバー目線】サーバーが正常であること")]),t._v(" "),v("p",[t._v("まずは､アンチパターンから考える")]),t._v(" "),v("ul",[v("li",[t._v("CPU\n"),v("ul",[v("li",[t._v("使用率")]),t._v(" "),v("li",[t._v("LoadAverage 1-5-15")])])]),t._v(" "),v("li",[t._v("メモリ\n"),v("ul",[v("li",[t._v("搭載されているメモリの空き状況 『全体 - 使用率 = 空き状況』")]),t._v(" "),v("li",[t._v("Minecraft サーバーに割り当てられているメモリの空き状況 『全体 - 使用率 = 空き状況』")])])]),t._v(" "),v("li",[t._v("ストレージ\n"),v("ul",[v("li",[t._v("SSDの全体の空き状況")]),t._v(" "),v("li",[t._v("/opt/minecraft 配下のストレージの空き状況 『/opt/minecraft 全体 - 使用率 = 空き状況』")]),t._v(" "),v("li",[t._v("書き込み/読み込み速度")])])]),t._v(" "),v("li",[t._v("inode")]),t._v(" "),v("li",[t._v("プロセス\n"),v("ul",[v("li",[t._v("Minecraft サーバーのプロセスを監視")])])]),t._v(" "),v("li",[t._v("ネットワーク\n"),v("ul",[v("li",[t._v("トラフィック量")])])]),t._v(" "),v("li",[t._v("ログ監視\n"),v("ul",[v("li",[t._v("Error を検知")])])])]),t._v(" "),v("h3",{attrs:{id:"_3-1-チェック志向-『アラート発砲』"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-チェック志向-『アラート発砲』"}},[t._v("#")]),t._v(" 3.1. チェック志向 『アラート発砲』")]),t._v(" "),v("ul",[v("li",[t._v("Error ログ検知時にアラート\n"),v("ul",[v("li",[t._v("現状はフォーマットが確定していないのとコスト的に破産するので辞める")])])]),t._v(" "),v("li",[t._v("Minecraft サーバーがダウン時にアラート")]),t._v(" "),v("li",[t._v("ホストマシン自体がダウン時にアラート")]),t._v(" "),v("li",[t._v("Web ページに対する 5XX シリーズを検知した時にアラート")]),t._v(" "),v("li",[t._v("ストレージが枯渇時にアラート")]),t._v(" "),v("li",[t._v("ストレージの書き込み速度が 5 分以上遅くなった時にアラート")]),t._v(" "),v("li",[t._v("CPU 使用率が 5 分以上キープしてた時にアラート")]),t._v(" "),v("li",[t._v("inode の空き数が枯渇してきたらアラート")]),t._v(" "),v("li",[t._v("Web サイトの SSL 期限日の 10 日前になったらアラート")])]),t._v(" "),v("h3",{attrs:{id:"_3-2-メトリクス志向-『ダッシュボード』"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-メトリクス志向-『ダッシュボード』"}},[t._v("#")]),t._v(" 3.2. メトリクス志向 『ダッシュボード』")]),t._v(" "),v("ul",[v("li",[t._v("CPU 使用率")]),t._v(" "),v("li",[t._v("LoadAverage 1-5-15")]),t._v(" "),v("li",[t._v("メモリ 空き状況")]),t._v(" "),v("li",[t._v("ストレージ 使用率")]),t._v(" "),v("li",[t._v("Minecraft サーバー プロセス数")]),t._v(" "),v("li",[t._v("ネットワークトラフィック量")])]),t._v(" "),v("h2",{attrs:{id:"_4-最後に"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-最後に"}},[t._v("#")]),t._v(" 4. 最後に")]),t._v(" "),v("p",[t._v("フルマネージドサービスが便利｡")])])}),[],!1,null,null,null);_.default=a.exports}}]);