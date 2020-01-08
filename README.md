# Deeptech.id Web

## Dev Dependencies

For contributing to this system, please refer to this guide.

### System Dependencies

- NodeJS v.8.\* or newer
- ReactJS v.16.\*
- Yarn

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.
Please avoid using NPM instead use Yarn.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything is fine, you should run

    $ brew install node

#### Node installation on Linux

    $ sudo apt-get install python-software-properties
    $ sudo add-apt-repository ppa:chris-lea/node.js
    $ sudo apt-get update
    $ sudo apt-get install nodejs

## Install

    $ https://github.com/deeptechid/deeptech.id/
    $ cd deeptech.id
    $ yarn install

### Configure app

- Copy configuration file `.env.example` to `.env`
- Ask our maintainer to give development credentials

## Start & watch

    $ yarn dev

## Languages & tools

- Typescript (.ts)
- React Typescript (.tsx)
- [Eslint](https://eslint.org/) used to prevent JavaScript error
- [Prettier](https://npmjs.org/package/jscs) used to check coding conventions
- [React](http://facebook.github.io/react) used for UI
- [Gatsby](https://www.gatsbyjs.org) used for static content website themes
- [Contentful](https://www.contentful.com) used for fetch data via GraphQL

## Style Guide

- Important to use tab with two space setting
- Always run `yarn format` and `yarn lint`
- Any pull request must follow `MERGE_REQUEST.md` guideline template

## Branch Conventions

There are 4 kinds of branch

- features/{your-feature-name}
- enhancement/{your-enhancement-name}
- hot-fix/{your-hot-fix-name}
- bug-fix/{your-bug-fix-name}
