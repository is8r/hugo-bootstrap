## How to Use

インストール:

```
$ git submodule add git@github.com:is8r/hugo-bootstrap.git themes/hugo-bootstrap
```

config.tomlの例:

```
baseURL = "http://example.org/"
languageCode = "ja"
title = "Test"
theme = "hugo-bootstrap"
copyright = "copyright"

[params]
description = "description"
keywords = "keywords"
googleAnalyticsId = ""
fbAppId = ""

[permalinks]
post = "/:year/:month/:title/"

[taxonomies]
tag = "tags"
category = "categories"
```

あと、packege.jsonに追加しておくと便利:

```
{
  "scripts": {
    "hugo": "open http://localhost:1313/ && hugo server -D --watch",
    "dev": "cd ./themes/hugo-bootstrap && npm install && gulp"
  }
}
```
