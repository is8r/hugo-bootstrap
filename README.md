# Hugo + Webpack + Bootstrap5

## How to Use

インストール:

```
$ hugo new site xxx && cd xxx
$ git submodule add git@github.com:is8r/hugo-bootstrap.git themes/hugo-bootstrap
```

## 開発

server:

```
$ make up
```

watch:

```
$ make dev
```

build:

```
$ make build
```

---

# その他

## シンタックスのカラーの変更方法

https://xyproto.github.io/splash/docs/longer/all.html で良さそうなのを探して以下を実行

```
$ hugo gen chromastyles --style=github > ./assets/stylesheets/styles/imports/syntax.css
```

## archivesの使い方

記事のFront Matterに以下を追加

```
archives = ["2020/08"]
```
