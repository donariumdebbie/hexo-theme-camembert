# hexo-theme-camembert

Hexo theme powered by camembert cookie!

## Features

## Getting started

### Installation

#### Clone theme into your site.
```bash
$ cd your/hexo/site/directory
$ git clone https://github.com/sw-jung/hexo-theme-camembert.git themes/camembert
```

#### Install dependencies.
```bash
$ cd themes/camembert
$ npm install --production
```

#### Install plugins.
```bash
$ cd ../..
$ npm install -S hexo-auto-canonical hexo-algolia hexo-generator-feed hexo-renderer-sass hexo-renderer-webpack-2-advanced babel-core babel-loader babel-preset-es2015
```

#### Setup configuration

Setup your site _config.yml.(NOT theme's _config.yml!)

Please see [_config.yml](#_configyml) spec

#### Set theme to camembert
```yml
theme: camembert
```

Done! Please enjoy your blog!

## Configuration

### _config.yml
```yml
# _config.yml
author: "<Your name>"
profile:
  background: "/img/ray-hennessy-118049.jpg"
  gravatar: your@email.com
  comment: "Software Developer"
  links:
    Email:
      url: "mailto:your@email.com"
      class: "mdi mdi-email"
    GitHub:
      url: https://github.com/
      class: "mdi mdi-github-circle"
    RSS:
      url: /atom.xml
      class: "mdi mdi-rss"

feed:
  type: atom
  path: atom.xml
  limit: 20
  content: true

# (Optional) For comment section
disqus: "Your discuss name"

# (Optional) For search bar
algolia:
  applicationID: 'application id here'
  apiKey: "aaaappppiiiikkkkeeeeyyyy heeeere"
  indexName: "Algoria index name here"

# (Optional) For google analytics
google_analytics: 'Google analytics app id'

# (Optional, default favicon.ico)
favicon: favicon.ico

# (Optional) For change default cover images
cover_image:
  default: "/img/helloquence-51716.jpg"
  home: "/img/rsz_dino-reichmuth-98982.jpg"
  archive:
  tag:
  
# (Optional, default true) Enable full responsible text
flow_text: true

# (Optional, default [twitter, facebook, googleplus, pinterest, url]) For share modal.
# Support twitter, facebook, googleplus, pinterest, url, email, whatsapp
shares: [twitter, facebook, googleplus, pinterest, url]
```

### Front-matter

```yml
# Post cover background image
cover_image: "/img/helloquence-51716.jpg"
```

## TODO

* [ ] Complete README.md
* [ ] Optimize sources
* [ ] Automatically optimize image size&quality
* [ ] Add thumbnails to post list
* [ ] Support category
* [ ] Support hexo's tag plugins - blockquote, pull quote, ...
* [ ] Support abbr filter