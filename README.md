![Image](https://github.com/enditabaku/GalleryApp/blob/main/src/assets/images/logo.png)

## <b> Discover </b> is a community-powered entertainment destination (powered by Imgur)!

## How to run Discover

* Clone the repo: git clone https://github.com/enditabaku/GalleryApp.git
* Change the directory to the downloaded folder: cd galleryApp
* Install the necessary packages: npm i
* Run the project: npm start


## Built With

* https://react.dev/
* https://redux-toolkit.js.org/
* https://vitejs.dev/
* https://www.typescriptlang.org/

## Project Structure

There are 3 important things you need to know about the project structure:
* main.tsx file 
* package.json file
* 7 main folders (assets, components, config, display, services, store, and utils)  

   main.tsx file
   
It contains the first steps when the project is opened: makes the Redux store available to any nested components that need to access the Redux store and renders what App. tsx file contains (all project routes, '/' as root URL )
    
   Package.json file
    
It contains an object with the main project information, such as project name, project version, scripts to run the project, and dependencies (packages installed) for the project
    
   Main Folders
    
    * Assets => Two folders, images, and fonts that are used in the project
    * Components => It contains global components for the project, in such cases the global components: Header and Intro
    * Config => Contains the creation of our 'HTTP' request using Axios and creating our baseUrl with our Client ID generated from Imgur profile settings        
    * Display => The display folder has subfolders named after the project screen. Each subfolder has an index.tsx file which is
                  the main file to render the screen and it may also contain a child folder named components which includes components created only for that screen (not global)
    * Services => The gallery service which returns the API methods used in the project     
    * Store => The main bucket which stores all the states of the application       
    * Utils => It has subfiles that are used in the project for utilization and also as helpers globally.
                    the types used in the project
                    the constants used in the project
                    and the configuration file with the client's data such as the client's name and id

### Built with ❤ for a Coding Challenge by Endi Tabaku.
