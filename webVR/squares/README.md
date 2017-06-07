# Possible - Costa Rica

## THREE.js + Gulp

* This is a project template. The idea is to create a basic THREE.js scene.
* The project uses Gulp for the development environment.

### installation
1. Clone this project into the desired folder. On a terminal, type `git clone git@git.sjo.possible.com:julio.delvalle/threejs-boilerplate.git`.

2. Go into the project's folder, where the **package.json** file is located and type `npm install`. After this command is properly finished, there will be a new **node_modules** folder.

3. To run the project type `gulp`.
CSS and javascript will not be minified.

4. To build the project (dist) type `gulp build`.
CSS and javascript will be minified.

### gulpfile tasks
* **sass**: takes all scss files on the app/scss folder and creates the app/css/styles.css file.
* **minify-css**: minifies the app/css/styles.css file.
* **browserSync**: reloads the app on the browser.
* **useref**: concatenates referenced non-optimized js and css files. Uses gulpIf and uglify to minify javascript files.
* **clean**:dist: cleans the dist production environment.
* **cache**:clear: cache clear task.
* **watch**: watches the sass and javascript files and reloads the browser.
* **default**: runs this task sequence in the provided order: sass, browserSync, watch.

### .gitignore
There's a .gitignore file. It avoids the following files and folders to be included on the git repository.
* the node_modules folder
* DS_Store files
* sass-cache files
* dist production folder


### .ftpconfig
There's a .ftpconfig file on the **app** folder.
This file sets the FTP configuration on Atom.io editor with the **Remote-FTP** package.
* Download **Atom** at [https://atom.io/](https://atom.io/)
* **Remote-FTP** website at [https://atom.io/packages/remote-ftp](https://atom.io/packages/remote-ftp)


### gotham font
**Gotham-Black** and **Gotham-ExtraLight** fonts were included because they are part of the official **POSSIBLE** font. They can be used on CSS and inside THREE.js scene.


### demo
You can check this boilerplate working with a cool animation of the POSSIBLE letters at [http://julio.dev01-aws.possible.com/](http://julio.dev01-aws.possible.com/)
