# COMMUNITY BUILDER
Repository for SWE-573 master class.


Community Builder web project consist of two different parts namely front-end application which is javascript based client application and backend application which is rest service api.

## Front-end Application
### Specifications
————————————————————————————————————————
- Code is located under {github_repository}/community-builder-web
- Front-end application is a React Single Page Application. Front-end and back-end is stored in the
same repository.
- Pages in the project is located under community-builder-web/src/forms.
- Libraries used in project is located in community-builder-web/package.json file.
- Css implementation used in project is located in community-builder-web/src/App.css file.
- Routing configuration used in project is location in community-builder-web/src/App.js file.
Client application gets and send data from rest api via rest get and post requests with fetch.

## Back-end Application
### Specifications
————————————————————————————————————————
- {github_repository}/CommunityBuilder
- Back-end application is Spring Boot Rest API service.
- Rest Service endpoints are located under package com.mates.demo.controller
- Rest Service request and response types are located under package com.mates.demo.data
- Domain objects for MongoDb are located under package com.mates.demo.domain
- Repositories are located under package com.mates.demo.repository
- Services are located under package com.mates.demo.service
- Configuration parameters are stored in src/main/resources/application.properties file.
- Dependencies for used repositories is stored in pom.xml

### Database
MongoDb is used in project. Atlas cloud system is used to store database.

# Setting Up Development Environment 

## Setting Up Front-End Environment

In order to run front-end on local environment follow the steps below :

1. Open terminal
2. Run “git clone https://github.com/mateskarayol/software-development-practice"
3. Run “cd software-development-practice/community-builder-web”
4. Run “npm install”
5. Run “npm start”
6. As default “http://localhost:3000/" would be shown on browser as mainpage.

or

1. On provided disk, go to the .../software-development-practice/community-builder-web
2. Run “npm install”
3. Run “npm start”
4. As default “http://localhost:3000/" would be shown on browser as mainpage.

## Setting Up Backend Environment

In order to run front-end on local environment follow the steps below :

1. Open terminal
2. Run “git clone https://github.com/mateskarayol/software-development-practice"
3. Open IntelliJ or any preferred IDE
4. Open project .../software-development-practice/CommunityBuilder
5. Build project
6. Run “mvn clean install”
7. Start
8. Open “http://localhost:8080/" on browser.

        
# Deployment

## Back-end Deployment
In order to deploy back-end module follow the steps below :
Deployed back-end module : https://community-builder-prj.herokuapp.com/

1. First download Heroku command line interface from internet.
2. Open terminal
3. Go to folder .../software-development-practice/CommunityBuilder
4. Run “heroku login”
5. Run “heroku git:remote -a community-builder-prj”
6. Run “mvn clean package”
7. Run “heroku buildpacks:set heroku/jvm”
8. Run “heroku deploy:jar target/demo-0.0.1-SNAPSHOT.jar --app community-builder-prj”
9. Run “heroku open”
10. Run “heroku logs”

## Front-end Deployment

In order to deploy front-end module follow the steps below :
Deployed front-end module : https://community-builder-web.herokuapp.com/

Note : It is important to locate front-end project folder as a main repository folder in GitHub so as to Heroku system could deploy React application properly. Otherwise, deployment would fail.

1. First download Heroku command line interface from internet.
2. Open terminal
3. Go to folder .../software-development-practice/community-builder-web
4. Run “heroku login”
5. Run “heroku git:remote -a community-builder-web”
6. Run “git push”
7. Run “git push heroku master”
8. Run “heroku open”
9. Run “heroku logs”
