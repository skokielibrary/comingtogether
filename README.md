comingtogether
==============

Website for Coming Together in Skokie and Niles Township

## About this site

This site is built using Jekyll and served using Github pages. All of the production code lives in the `gh-pages` branch. Any changes pushed to `gh-pages` triggers a rebuild of the site.

Events can be edited through Prose.io

## Getting setup

If you want to develop on the site, be sure the have the following installed on your machine:

- [Jekyll](http://jekyllrb.com/)
- [Node](http://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io/)

It assume you have [Git](http://git-scm.com/) up and running too. Why else would be looking at Github?

Now you're ready to:

1. Clone this repository to your local machine using `git clone <<url>>`
2. Run `bower install` (this looks at the `bower.json` file)
3. Run `npm install` (this looks at the `package.json` file)

## Working on the site

1. Get Jeykll up and running with `jekyll serve --baseurl ""`
2. Run gulp to watch SASS files `gulp`.
3. Push changes with `git push origin gh-pages`

Remember that you must push to gh-pages for the site to rebuild itself on Github's end.

## Rebuilding site

If you have Gulp watching files, you don't need to worry too much, but be sure to run `gulp` to rebuild css and js before pushing changes to Github. *This site doesn't use Jekyll's native support for SASS*
