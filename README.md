# Blog App

## Description:
This is a simple blogging application built on Node js.

## Table of Contents

- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Additional Information](#addinfo)

## Architecture <a name="architecture"></a>:
`index.js`: Database connection and server setup\
`views`: Client side static pages\
`models`: Mongoose models' definition\
`middlewares`: Contains the authentication middleware\
`routes`: Route definitions\
`controllers`: Controller function definitions, to write or read data\
`public`: Holds user image uploads and default images\
`services`: Functions to create and validate token to keep user signed in

## Installation <a name="installation"></a>:
To install the project, follow these steps:

Clone the repository: `https://github.com/pnaruka/blog_app`\
Navigate to the project directory: `cd blog_app`

Install dependencies: `npm install`

## Usage <a name="usage"></a>:
After installation, you can use the project as follows:

Run the project: `npm start`\
Access the application through your web browser at `http://localhost:8000` \
(You can change the port in index.js file)

## Screenshots <a name="screenshots"></a>:
`Signup`: ![Signup](readMe_screenshots/signup.png) \
`Login`: ![Login](readMe_screenshots/login.png) \
`Home`: ![Home](readMe_screenshots/home.png) \
`Add Blog`: ![Add Blog](readMe_screenshots/addBlog.png) \
`Blog View`: ![Blog View](readMe_screenshots/viewBlog.png) \
`Comments`: ![Comments](readMe_screenshots/comments.png) \

## Contributing <a name="contributing"></a>:
Contributions are welcome! Here's how you can contribute:\
Fork the repository\
Create a new branch: `git checkout -b feature`\
Make your changes and commit them: `git commit -am 'Add new feature'`\
Push to the branch: `git push origin feature`\
Submit a pull request

## Additional Information <a name="addinfo"></a>

For additional information or support, please contact the project maintainers at pankajnaruka111@gmail.com.