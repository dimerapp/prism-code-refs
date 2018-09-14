<div align="center">
  <div>
    <img width="500" src="https://res.cloudinary.com/adonisjs/image/upload/q_100/v1532274184/Dimer_Readme_Banner_lyy7wv.svg" alt="Dimer App">
  </div>
  <br>
  <p>
    <a href="https://dimerapp.com/what-is-dimer">
      Dimer is an open source project and CMS to help you publish your documentation online.
    </a>
  </p>
  <br>
  <p>
    <sub>We believe every project/product is incomplete without documentation. <br /> We want to help you publish user facing documentation, without worrying <code>about tools or code</code> to write.</sub>
  </p>
  <br>
</div>

# Prism Code Refs
> Define references in code as markdown links

[![npm-image]][npm-url]

This is a tiny [Prismjs](https://prismjs.com) plugin to make you define code parameters with a link reference. Make sure to check the following GIF to see it in action. 

![](http://res.cloudinary.com/adonisjs/image/upload/q_100/v1536940672/code-refs_llgerp.gif)

The rules are simple:

1. Use markdown syntax to define the URL's.
2. Wrap it inside double quotes `"`, which makes it cheaper to parse.

## Setup
Usually Prism is pulled from the CDN and that's the recommended way to use this plugin too.

```html
<script type="text/javascript" src="https://unpkg.com/prism-code-refs"></script>
```

However, you can pull it from npm too.

```shell
npm i prism-code-refs
```

and use it as follows

```js
require('prism-code-refs')
```

## Styling
The link has been given a class of `code-ref-link` that you can style using Css.


## Change log

The change log can be found in the [CHANGELOG.md](https://github.com/dimerapp/prism-ref-links/CHANGELOG.md) file.

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](CONTRIBUTING.md).

## Authors & License
[Harminder Virk](https://github.com/Harminder Virk) and [contributors](https://github.com/dimerapp/prism-ref-links/graphs/contributors).

MIT License, see the included [MIT](LICENSE.md) file.

[npm-image]: https://img.shields.io/npm/v/prism-code-refs.svg?style=flat-square&logo=npm
[npm-url]: https://npmjs.org/package/prism-code-refs "npm"
