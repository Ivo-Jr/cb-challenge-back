<h1 align="center" style="    max-width: 250px;
    margin: 30px 0;">
    <br>
    Curso Beta &nbsp; &#128218
</h1>


<h4 align="center">
  An API that helps you navigate the largest school of judicial experts - (https://www.cursobeta.com.br/)
</h4>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sunny-result">Result</a>
</p>



## :rocket: Technologies

This project was developed with the following technologies:

- [ReactJS](https://reactjs.org/)
- [Docker](https://hub.docker.com/_/postgres)
- [Yup](https://reactjs.org/)
- [Multer](https://www.npmjs.com/package/multer)
- [Sequelie](https://sequelize.org/master/manual/getting-started.html)
- [Prettier](https://prettier.io/)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Ivo-Jr/cb-challenge.git

# Go into the repository
$ cd cd-challenge

# Install dependencies
$ yarn or npm install

# Install dependencies 
$ yarn or npm install

# Run the app
$ yarn or npm start
```

## :file_folder: Folder structure

```bash

.


├── src >> source code
│   ├── app
│   │   ├── controllers
│   │   │   └── CategoryController.js
│   │   │   └── CourseController.js
│   │   │   └── FileController.js
│   │   │   └── NameController.js
│   │   │
│   │   ├── Models
│   │   │   └── Course.js
│   │   │   └── File.js
│   │   │
│   │   ├── config
│   │   │   └── database.js
│   │   │   └── multer.js
│   │   │   
│   │   └── database
│   │       ├── migrationss
│   │       │   └── 20210305012236-create-course.js
│   │       │   └── 20210305171106-create-files.js
│   │       │   └── 20210305181403-add-avatar-field-to-courses.js
│   │       └── index.js
│   │
│   └── app.js
│   └── routes.js
│   └──server.js
│
│
├── temp
│   └── uploads
│   
├── .editorconfig
├── .eslintrc.js
├── .gitignore.js
├── .prettierrc.js
├── .sequelizerc.js
├── nodemon.json
├── package.json
├── README.md
└── yarn.lock



