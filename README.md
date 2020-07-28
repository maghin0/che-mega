# Gatsby + Netlify CMS Starter

This is a Scientific website for a Electron Microscope unit based in Mansoura University, Egypt. an upgrade from the previous website [emunit](http://emunit.mans.edu.eg/)

![EM Unit Mansoura University](/img/logo.png)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Features

- Netlify CMS
- Netlify Form support
- Create Blog posts from Netlify CMS
- Tags: Separate page for posts under each tag
- Basic directory organization
- Uses Bulma for styling, but size is reduced by `purge-css-plugin`
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Netlify function support, see `lambda` folder
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)
