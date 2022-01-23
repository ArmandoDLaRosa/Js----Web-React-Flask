# REACT-Django-MYSQL API Project

## Tools 
---
* WSL (Ubuntu 20.04)
* Vscode (Remote Wsl, Python Extension, Django Extension)
* Postman
* Python
  * configparser
    * Helps to deal with config.ini files
  * Django
  * Django Rest Framework
  * Django Cors Headers Module
    * Helps to unlocks django's CORS to allow request from diffrent domains
  * Pymysql
    * Helps to connect the db to the App
  * Cryptography
    * To connect WSL(Django Project) - Windows (Mysql standard auth user)
* MySQL 
  * Workbench
  * Server
  * Shell
  * Route
  * Connectors for ODBC and Python 
* Node JS

## Steps to be setup
---
0) Make sure you've WSL working in VSCODE and your USER/Root passwords in hand. 
1) Create python environment (venv files should be good inside the project folder)
    ```
    sudo apt install python3-virtualenv
    virtualenv djangoEnv
    ```
2) Activate python environment
    ``` 
    source djangoEnv/bin/activate
    ```
3) Change in vscode the interpreter to the python inside djangoEnv/bin/python3.8 
   1) This way you can run the .py with the extension RUN button with the env activated.
   2) Otherwise, you'll have to run it like `python3 fileName.py` and the env activated.

4) Install Node JS or check if you've it `npm -v` or `node -v`
    ``` 
    sudo apt update
    sudo apt install nodejs
    sudo apt install npm
    sudo npm install -g n
    sudo n stable 
    ```
5) Install Django
    ```
    pip install django
    ```
6) Install DjangoRestFramework
    ```
    pip install djangorestframework
    ```
7) Install Django CORs Headers Module
   ```
    pip install django-cors-headers
   ```
8) Inside the project folder start a DJANGO PROJECT writting this in the terminal
    ```
    django-admin startproject <ProjectName>
    ```
9) Run the project in the backend
    ```
    python3 manage.py runserver
    ```
10) Install Pymsql
    ```
    pip install pymysql
    ```
11) Install cryptography
    ```
    pip install cryptography
    ```
12) Install ConfigParser
    ```
    pip install ConfigParser
    ```
   
## Project
---
1) A PROJECT can have many Apps, to start one App run the following
    ```
    python3 manage.py startapp <AppName>
    ```
2) Add to settings.py file in the Installed Apps array the following:
    `'rest_framework', 'corsheaders', '<AppName>.apps.<AppName>Config'`
3) Add to settings.py file in the Middleware array the following:
    `'corsheaders.middleware.CorsMiddleware'`

4) Add this to settings.py file :  
    **Dev Env**
    > This only works for dev environment

    `CORS_ORIGIN_ALLOW_ALL = True`

    **Production Env**
    > Au contraire of dev env, in production you preferably
    > list just the domains that need to be whitelisted

    `CORS_ORIGIN_ALLOW_ALL = whiteListedDomainList`

5) Write the models in models.py

···
---
> It's assumed that just the project is running in WSL, but the
> apps like MySQL Workbench(MySQL Server process), Vscode and Postman are on Windows.
---


6) Use MySQL Workbench to create a database in the MySQL Local/Cloud Server Process
    1)  Add the new connection (Local/Cloud)
    2)  Create a new database **(check 'sqlScripts(myFolder)')**
    3)  Make sure you've a Root and Main User Connection for the Server Process
    4)  Create a new user for the connection with the following characteristics
        1) "Login Name" : 'wslConnection'
        2) "Auth": 'Standard'
        3) "Limit to Host": windows Ipv4 
        4) Password: ________
        5) DBA Administrative role
   
7) Add the DB Connection in settings.py in the Databases = {...}
    ```
    import pymysql
    pymysql.install_as_MySQLdb()
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'dbName',
            'USER': 'wslConnection',
            'PASSWORD':'________',
            'HOST': windows Ipv4 ,
            'PORT': '3306'
        }
    }
    ```
1) Check wich changes will be added to the db creating a Migration file
    ```python manage.py makemigrations <AppName>```

2)  Push those changes to the database
    
    ```python manage.py migrate <AppName>```

3) Create the `serializers.py` file, which convert model instances into python data types and viceversa. 

4) Create the API's methods
 in `views.py`

5) Create routes for the API's methods in a new file called `urls.py` inside the Workers Folder, which is the app folder.

6) Add those new routes in the main `urls.py`file inside the Project Folder, which is the project folder.

...
---
Now we can test the project 
1)  Start the project running this command in the parent folder, not in the Project Folder, not in the App Folder
    ```
    python manage.py runserver
    ```
   
## Django Production
1) Change the secret key in settings.py [Example on how to change the one ](https://programadorwebvalencia.com/como-generar-un-secret-key-en-django/)
2) Change the Debug in settings.py from 'True' to 'False'
3) Change CORs Configurations in settings.py to just whilelist unimportant stuff
   
## CLOSE / RESTART / START  THE PROJECT
---
* Repository
  * Create 1 in github
  * Clone it in vscode
  * Create a branch to develop
  * Create a `config.ini` file, below is just an example
    ```
      [DATABASE]
      NAME: dbName
      USER: wslConnection
      PASSWORD: ________
      HOST: windows Ipv4

      [DJANGO]
      SECRET_KEY = 
    ```
    * When needed you can read the variables like this:
        ```
        from configparser import ConfigParser

        #Read config.ini file
        config_object = ConfigParser()
        config_object.read("config.ini") #Path

        #Get the password
        userinfo = config_object["DATABASE"]
        print(f'{dataBaseInfo["HOST"]}')
        ```
  * Create a git ignore file, for inspo look at this forked repo [.gitignore examples](https://github.com/ArmandoDLaRosa/gitignore)
    * `nano .gitignore`
    * Paste inside the example + add `config.ini` file's name
* Save requirements to install (activate the virtual env)
    `pip freeze > requirements.txt`
* Load the requirements (start a virtual env first)
    `sudo apt install python3-pip`
    `virtualenv <envName>`
    `pip install -r requirements.txt`
* Open/Close MySQLService.exe in Task 
  Manager
* Close/Open the virtual env
* Open/Shutdown WSL, Vscode, other .exe
* Commit the changes with a meaninful commit message


## Dealing with security risks related to git commits
---
[Step by Step](https://sethrobertson.github.io/GitFixUm/fixup.html)

[Reset Hard Recovery](https://stackoverflow.com/questions/7374069/undo-git-reset-hard-with-uncommitted-files-in-the-staging-area)

[Reset Commit History](https://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github)

## Resources Used
---
[React JS and Python Django Full Stack Master Course](https://www.udemy.com/course/react-js-and-python-django-full-stack-master-course/)
