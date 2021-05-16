(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{534:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("自分が下記で学んだ事を雑に書いていく")]),t._v(" "),a("p",[t._v("【"),a("a",{attrs:{href:"https://amzn.to/33KXXqL",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kubernetes on AWS ~アプリケーションエンジニア 本番環境へ備える"),a("OutboundLink")],1),t._v("】")]),t._v(" "),a("blockquote",{staticClass:"twitter-tweet"},[a("p",{attrs:{lang:"ja",dir:"ltr"}},[t._v("はい "),a("a",{attrs:{href:"https://t.co/Ai3tcVfpSQ"}},[t._v("pic.twitter.com/Ai3tcVfpSQ")])]),t._v("— 丸屋 正志/まるちゃんLv25 (@M_Maru76) "),a("a",{attrs:{href:"https://twitter.com/M_Maru76/status/1393806724813910017?ref_src=twsrc%5Etfw"}},[t._v("May 16, 2021")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}}),t._v(" "),a("h2",{attrs:{id:"_1-2-2-2-eks-クラスターの構築"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-2-eks-クラスターの構築"}},[t._v("#")]),t._v(" 1. 2-2-2 EKS クラスターの構築")]),t._v(" "),a("h3",{attrs:{id:"_1-1-eks-クラスター作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-eks-クラスター作成"}},[t._v("#")]),t._v(" 1.1. EKS クラスター作成")]),t._v(" "),a("p",[t._v("EKS に対してクラスターを作成する際に用いるコマンドである｡"),a("br")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("eksctl create cluster "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" ←以下の引数を指定して eksctl を実行\n --vpc-public-subnets SubnetsのA値,SubnetsのB値,SubnetsのC値 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" ←ワーカーノード用サブネット\n --name eks-work-cluster "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" ←クラスター名\n --region ap-northeast-1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" ←リージョン\n --version "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.19")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" ←EKSクラスターのバージョン"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.16")]),t._v("~1.19"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n --nodegroup-name eks-work-nodegroup "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" ←ノードグループ名\n --node-type t2.small "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" ←ワーカーノードのインスタンスタイプ\n --nodes "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" ←ワーカーノードの数\n --nodes-min "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" ←ワーカーノードの最小ノード数\n --nodes-max "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" ←ワーカーノードの最大ノード数\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("ul",[a("li",[t._v("eksctl は EKS クラスター構築の中で kubeconfig ファイルを自動的に更新してくれる｡")]),t._v(" "),a("li",[t._v("kubeconfig ファイル､kubernetes クライアントであるkubectl が利用する設定ファイルの接続先のkubernetesクラスターの接続情報(コントロールプレーンのURL､認証情報､Namespaceなど)を保持している")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-コンテキストの確認"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-コンテキストの確認"}},[t._v("#")]),t._v(" 1.2. コンテキストの確認")]),t._v(" "),a("p",[t._v("eksctlを使って作成後にコンテキストが作成されているかを確認と有効になっているかを確認｡")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl config get-contexts\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("理解しやすいために出力結果をテーブルに記載｡"),a("br")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("CURRENT")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("NAME")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("CLUSTER")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("AUTHINFO")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("NAMESPACE")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker-desktop")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker-desktop")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker-desktop")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("minikube")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("minikube")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("minikube")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("default")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("まるちゃん@eks-work-cluster.ap-northeast-1.eksctl.io")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("eks-work-cluster.ap-northeast-1.eksctl.io")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("まるちゃん@eks-work-cluster.ap-northeast-1.eksctl.io")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h3",{attrs:{id:"_1-3-接続確認"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-接続確認"}},[t._v("#")]),t._v(" 1.3. 接続確認")]),t._v(" "),a("p",[t._v("kubectl から EKS クラスターに接続できるようになったことを確認する場合は､下記コマンド")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl get nodes\n\nNAME                                               STATUS   ROLES    AGE   VERSION\nip-192-168-1-244.ap-northeast-1.compute.internal   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   18m   v1.19.6-eks-49a6c0\nip-192-168-2-178.ap-northeast-1.compute.internal   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   18m   v1.19.6-eks-49a6c0\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"_2-2-2-3-eks-クラスターの動作確認"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-3-eks-クラスターの動作確認"}},[t._v("#")]),t._v(" 2. 2-2-3 EKS クラスターの動作確認")]),t._v(" "),a("h3",{attrs:{id:"_2-1-リソースの作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-リソースの作成"}},[t._v("#")]),t._v(" 2.1. リソースの作成")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl apply -f ファイル名.yaml\n\npod/nginx-pod created\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2-2-pod-が配置されていることを確認"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-pod-が配置されていることを確認"}},[t._v("#")]),t._v(" 2.2. Pod が配置されていることを確認")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl get pods\n\nNAME        READY   STATUS    RESTARTS   AGE\nnginx-pod   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          11m\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_2-3-ポートフォワーディング"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-ポートフォワーディング"}},[t._v("#")]),t._v(" 2.3. ポートフォワーディング")]),t._v(" "),a("p",[t._v("8080 に対してアクセスしたのを 80 に切り替え")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl port-forward nginx-pod "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(":80\n\nForwarding from "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:8080 -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\nForwarding from "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("::1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":8080 -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_2-4-pod-の削除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-pod-の削除"}},[t._v("#")]),t._v(" 2.4. Pod の削除")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl delete pod nginx-pod\n\npod "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx-pod"')]),t._v(" deleted\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);