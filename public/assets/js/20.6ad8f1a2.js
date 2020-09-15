(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{500:function(t,a,e){"use strict";e.r(a);var s=e(4),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-今回の内容について"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-今回の内容について"}},[t._v("#")]),t._v(" 1. 今回の内容について")]),t._v(" "),e("p",[t._v("個人的に Amazon Elastic File System(EFS) について使用してみて良かった点やメリットを紹介していこうと思います｡")]),t._v(" "),e("p",[t._v("EFS自体は､2015年4月からありました･･･が､今までは東京リージョンにはありませんでした｡\n(1年経ちましたが)2018年の7月に東京リージョンに出たのをきっかけに試しに触れてみました｡")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://aws.amazon.com/jp/about-aws/whats-new/2018/07/amazon-elastic-file-system-amazon-efs-available-in-asia-pacific-tokyo-region/",target:"_blank",rel:"noopener noreferrer"}},[t._v("アジアパシフィック (東京) リージョンで Amazon Elastic File System (Amazon EFS) が利用可能に"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"_2-amazon-elastic-file-system-とは"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-amazon-elastic-file-system-とは"}},[t._v("#")]),t._v(" 2. Amazon Elastic File System とは")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://qiita-image-store.s3.amazonaws.com/0/131274/0a192cf3-4448-2596-2c8d-fa5ecac37e03.png",alt:"cap2018_9_2_23_8_6_543.png"}})]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.aws.amazon.com/ja_jp/efs/latest/ug/whatisefs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon Elastic File System"),e("OutboundLink")],1),t._v("(EFS) とは､AWS上で使用出来る高速かつ大容量の共有ファイルストレージです｡")]),t._v(" "),e("h3",{attrs:{id:"_2-1-まずは料金体系を"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-まずは料金体系を"}},[t._v("#")]),t._v(" 2.1. まずは料金体系を")]),t._v(" "),e("p",[t._v("海外リージョンと比べると少し高いかもしれませんが､ "),e("strong",[t._v("東京リージョン")]),t._v(" と "),e("strong",[t._v("バージニア北部リージョン")]),t._v(" の料金表を載せておきます｡")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("リージョン")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("ストレージ(GB-月)")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("プロビジョンドスループット(MB/秒-月)")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("EFS File Sync (EFSへのGBあたり)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("米国東部 (バージニア北部)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0.30 USD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("6.00 USD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0.01 USD")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("アジアパシフィック (東京)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0.36 USD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("7.20 USD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0.01 USD")])])])]),t._v(" "),e("p",[t._v("詳しい料金表はこちらを "),e("a",{attrs:{href:"https://aws.amazon.com/jp/efs/pricing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon EFS Pricing"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"_2-2-メリットとしては"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-メリットとしては"}},[t._v("#")]),t._v(" 2.2. メリットとしては")]),t._v(" "),e("ul",[e("li",[t._v("マルチAZの複数インスタンスから同時にアクセス可能")]),t._v(" "),e("li",[t._v("ディスク容量制限がなく､使用した分だけスケーラブルに拡張")]),t._v(" "),e("li",[t._v("VPCからの使用のみに限られるため､インターネット上に公開しなくても良い")]),t._v(" "),e("li",[t._v("書き始めから転送が可能")])]),t._v(" "),e("h4",{attrs:{id:"_2-2-1-他のawsサービスと比べてみると"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-他のawsサービスと比べてみると"}},[t._v("#")]),t._v(" 2.2.1. 他のAWSサービスと比べてみると")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}}),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("S3")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("EBS")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("EFS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("接続数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1:n")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1:1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1:n")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("耐久度")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("99.999999999%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("99.999%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("高い耐久性")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("料金")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("使用量課金")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("事前に確保領域分")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("使用量課金")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("主なアクセス方法")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("ブラウザー･API･CLI")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("マウント･ローカル接続")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("マウント")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("レイテンシー")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("低い")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("かなり低い")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("低い")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("CFとの連携")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("○")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("X")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("OSからのマウント")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("○")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("○")])])])]),t._v(" "),e("h2",{attrs:{id:"_3-efs-作成方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-efs-作成方法"}},[t._v("#")]),t._v(" 3. EFS 作成方法")]),t._v(" "),e("ul",[e("li",[t._v("デフォルトのVPCでも使用可能")])]),t._v(" "),e("h3",{attrs:{id:"_3-1-ファイルシステム"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-ファイルシステム"}},[t._v("#")]),t._v(" 3.1. ファイルシステム")]),t._v(" "),e("h4",{attrs:{id:"_3-1-1-ステップ-1-ファイルシステムアクセスの設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-ステップ-1-ファイルシステムアクセスの設定"}},[t._v("#")]),t._v(" 3.1.1. ステップ 1: ファイルシステムアクセスの設定")]),t._v(" "),e("ol",[e("li",[t._v("ファイルシステムアクセスの設定\n"),e("ul",[e("li",[t._v("ターゲットにしたい 【"),e("strong",[t._v("VPC")]),t._v("】 を選択")])])]),t._v(" "),e("li",[t._v("マウントターゲットの作成\n"),e("ul",[e("li",[t._v("【"),e("strong",[t._v("セキュリティグループ")]),t._v("】 の選択")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://qiita-image-store.s3.amazonaws.com/0/131274/8ea0b817-9f5a-643b-6898-9d50d72ffbde.png",alt:"cap2018_9_2_22_10_2_685.png"}})]),t._v(" "),e("h4",{attrs:{id:"_3-1-2-ステップ-2-オプション設定の構成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-ステップ-2-オプション設定の構成"}},[t._v("#")]),t._v(" 3.1.2. ステップ 2: オプション設定の構成")]),t._v(" "),e("p",[t._v("項目の指定については､今回は触れません｡")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.aws.amazon.com/ja_jp/efs/latest/ug/performance.html#throughput-modes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon EFS のパフォーマンスについて"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"_3-1-3-ステップ-3-確認と作成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-ステップ-3-確認と作成"}},[t._v("#")]),t._v(" 3.1.3. ステップ 3: 確認と作成")]),t._v(" "),e("p",[t._v("問題が無ければ 【"),e("strong",[t._v("ファイルシステムの作成")]),t._v("】 を選択して作成")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://qiita-image-store.s3.amazonaws.com/0/131274/c1c0a0c0-05e5-7b8b-dd74-691fb0f459cd.png",alt:"cap2018_9_2_22_23_58_614.png"}})]),t._v(" "),e("h3",{attrs:{id:"_3-2-完成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-完成"}},[t._v("#")]),t._v(" 3.2. 完成")]),t._v(" "),e("ul",[e("li",[t._v("黄色のラインで隠している所はインスタンスのセットアップの際に使用\n"),e("ul",[e("li",[t._v("ファイルシステムID : "),e("strong",[t._v("fs-1234567")])]),t._v(" "),e("li",[t._v("DNS名 : "),e("strong",[t._v("fs-1234567.efs.ap-northeast-1.amazonaws.com")])])])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://qiita-image-store.s3.amazonaws.com/0/131274/a9c8ae98-99a2-abd1-6c5e-64a34f02df7f.png",alt:"cap2018_9_2_22_29_2_748.png"}})]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"_4-インスタンスのセットアップ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-インスタンスのセットアップ"}},[t._v("#")]),t._v(" 4. インスタンスのセットアップ")]),t._v(" "),e("p",[t._v("今回は､Amazon Linuxのセットアップ方法のみになります｡(Amazon Linux2でも可)\nインスタンスは最低でも2台あると､確認がしやすいかと思います｡")]),t._v(" "),e("h3",{attrs:{id:"_4-1-ec2インスタンスにて-amazonlinux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-ec2インスタンスにて-amazonlinux"}},[t._v("#")]),t._v(" 4.1. EC2インスタンスにて(AmazonLinux)")]),t._v(" "),e("h4",{attrs:{id:"_4-1-1-efsマウントヘルパーのインストール"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-efsマウントヘルパーのインストール"}},[t._v("#")]),t._v(" 4.1.1. EFSマウントヘルパーのインストール")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yum install -y amazon-efs-utils")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h4",{attrs:{id:"_4-1-2-ターゲットにしたいディレクトリを作成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-ターゲットにしたいディレクトリを作成"}},[t._v("#")]),t._v(" 4.1.2. ターゲットにしたいディレクトリを作成")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir /mnt/efs")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h4",{attrs:{id:"_4-1-3-各種マウントの仕方"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-各種マウントの仕方"}},[t._v("#")]),t._v(" 4.1.3. 各種マウントの仕方")]),t._v(" "),e("ul",[e("li",[t._v("EFSマウントヘルパーの使用")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mount -t efs fs-1234567:/ /mnt/efs")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("暗号化の場合")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mount -t efs -o tls fs-1234567:/ /mnt/efs")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("NFSクライアントの使用の場合")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mount -t nfs4 -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport fs-1234567.efs.ap-northeast-1.amazonaws.com:/ /mnt/efs")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h4",{attrs:{id:"_4-1-4-自動で接続"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-4-自動で接続"}},[t._v("#")]),t._v(" 4.1.4. 自動で接続")]),t._v(" "),e("p",[t._v("お好みのエディターで下記の内容を追加")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim /etc/fstab")]),t._v("\n\nfs-1234567:/   /mnt/efs       efs     defaults,_netdev        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("ul",[e("li",[t._v("オプションなどは､｢"),e("a",{attrs:{href:"https://docs.aws.amazon.com/ja_jp/efs/latest/ug/mount-fs-auto-mount-onreboot.html?shortFooter=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon EFS ファイルシステムの自動マウント"),e("OutboundLink")],1),t._v("｣ を参考にしています｡\n"),e("ul",[e("li",[t._v("defaults オプションについて\n"),e("ul",[e("li",[t._v("rw,suid,dev,exec,auto,nouser,async")])])]),t._v(" "),e("li",[t._v("_netdev オプションについて\n"),e("ul",[e("li",[t._v("ネットワークアクセスが必要なデバイス上にあるファイルシステム")])])])])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"_5-最後に"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-最後に"}},[t._v("#")]),t._v(" 5. 最後に")]),t._v(" "),e("p",[t._v("今回の投稿には記載はしていないですが､EFSを使って約4時間ほど生配信をしていたのですがSegmentFileやPlayListが一切途切れることなく､別のインスタンス2台に対して高速転送が出来ていました｡")]),t._v(" "),e("p",[t._v("配信構成としては")]),t._v(" "),e("blockquote",[e("p",[t._v("映像 => EC2(エンコーダ -> EFS) => EC2x2(EFS -> Webサーバ) => ELB => PC/スマホ")])]),t._v(" "),e("p",[t._v("個人的に一番驚いている点としては､｢"),e("strong",[t._v("S3の場合は､書き終わり後に転送")]),t._v("｣に対して､｢"),e("strong",[t._v("EFSの場合は書き始めから転送")]),t._v("｣をしているのが今後もっと需要が増えると思いました｡")]),t._v(" "),e("p",[t._v("以下のカクカクGIF動画は実際に配信した際の映像になります｡")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://gyazo.com/4341511baa68818397ea7dc15807f9c8",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://i.gyazo.com/4341511baa68818397ea7dc15807f9c8.gif",alt:"Image from Gyazo"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://gyazo.com/4341511baa68818397ea7dc15807f9c8",target:"_blank",rel:"noopener noreferrer"}},[t._v("こちらにMP4の動画があります"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("使用した動画は､私が撮影した動画になります｡(ご自由にお使いください｡)\n"),e("a",{attrs:{href:"https://www.youtube.com/watch?v=LzZmQDoYa7Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.youtube.com/watch?v=LzZmQDoYa7Q"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);