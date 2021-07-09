# React Video App

## Description

This is a React Video application. You can add videos from youtube and vimeo by giving url or video id only. You can store your favourite videos (and also mark them as favourites), sort them and watch via this app. Saved videos can be displayed in list or grid mode. If you decide there is some video that you do not want to keep in this app - just delete it (delete them all if you wish!).

### Stack

- React
- HTML
- CSS (+BEM)
- TypeScript

### What I worked on

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Used [YouTube API](https://developers.google.com/youtube/v3) and [Vimeo API](https://developer.vimeo.com/api/guides/start),
- Used [Reactstrap](https://reactstrap.github.io/) and [Bootstrap v4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/),
- Used context API to manage React state,
- Testing (TDD) using Jest and React-testing-library. I tested displaying the data correctly in the DOM and service functions.

## Installation

To use this app you can [clone it](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) from the repository. When it is downloaded open folder with app in your code editor and in terminal enter "npm install" - it should update/install necessary dependencies. After that you can use this app on your device (to use app in developer mode use terminal command: npm start).

### :warning: Note

You have to create an API key on [YouTube developer page](https://developers.google.com/youtube/v3) and [Vimeo developer page](https://developer.vimeo.com/api/guides/start) in advance. After that, please make sure to create .env file in the root and write your API keys like this:

```
REACT_APP_YT_KEY = ***************************************
REACT_APP_VIMEO_KEY = ********************************
```

## License

Copyright (c) 2021, Artur Gałecki

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

Source: http://opensource.org/licenses/ISC
