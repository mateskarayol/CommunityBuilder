# software-development-practice
Repository for SWE-573 master class.

# Setting Up Development Environment 5.5.1. Setting Up Front-End Environment

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

#Setting Up Backend Environment

In order to run front-end on local environment follow the steps below :

1. Open terminal
2. Run “git clone https://github.com/mateskarayol/software-development-practice"
3. Open IntelliJ or any preferred IDE
4. Open project .../software-development-practice/CommunityBuilder
5. Build project
6. Run “mvn clean install”
7. Start
8. Open “http://localhost:8080/" on browser.

        
#Deployment

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
