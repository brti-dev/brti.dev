---
title: Flask on Windows
date: '2020-09-18'
tags:
  - Python
  - Flask
  - Windows
---

This is, I think, the best way to get [Flask](https://flask.palletsprojects.com/) up and running on a Windows machine.

## Install the Windows Subsystem for Linux

Although you can run Python just fine in Windows, it can get tricky when it comes to virtual environments, that is, the backround process that manages your different project's dependencies and packages.

As an option, you might use Anaconda to manage virtual environments on Windows. However, I found the Linux approach to be much easier. [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) will allow you to run Linux binary executitibles natively and magically on your Windows system.

1. To install it, enable the "Windows Subsystem for Linux" optional feature by Opening Powershell as an administrator and running the following command.

````cmd
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
````

2. Install Ubuntu via the Windows Store, or just follow this link: [Ubuntu 18.04 LTS](https://www.microsoft.com/store/apps/9N9TNGVNDL3Q)

3. Run the distro! <kbd>Windows</kbd> &rarr; Ubuntu

## Install Python, Pip, and Virtual Environment

Your Ubuntu distro should already have Python and Pip (*magic*). Just double-check to be sure:

````cmd
$ python3 --version
$ pip --version
````

If it's not there, follow [these instructions](https://docs.python-guide.org/starting/install3/linux/) to install it.

Next install Virtual Environment:

````cmd
$ sudo apt-get install python-virtualenv
````

## Make a New Project and Virtual Environment

````cmd
$ mkdir myproject
$ cd !$
$ python3 -m venv .venv
$ source .venv/bin/activate
````

For reference:

- Line 2 changes directory to ./myproject
- Line 3 makes a new virtual environment in the `.venv` directory in the project folder
- Line 4 activates the virtual environment

Run line 4 again to reactivate the venv (after restart, for example). To dectivate the venv:

````cmd
$ deactivate
````

You'll know the venv is running when your command line is prefixed with `(venv)`, like so:

````cmd
(.venv) yourusername@DESKTOP-UD2C7H4:~$
````

Install Flask and its dependencies:

````cmd
$ pip install flask
````

You can check to see if Flask is working:

````cmd
$ pip freeze
$ python3
>>> import flask
>>> exit()
````

- Line 1 prints the packages installed in the virtual environment
- Line 2-4 emulates a Python script that imports the purportedly installed Flask package

Now the fun part! Built your app, routes, views, etc. Set some environmental variables and run your app:

````cmd
$ export FLASK_APP=app.py
$ export FLASK_DEBUG=1
$ python3 app.py --refresh
````

Your project should have a `requirements.txt` in the root directory that lists package dependencies for this venv. Pip can generate it automatically. Do again whenever you add/mod installed package dependencies.

````cmd
$ pip freeze >requirements.txt
````

That's pretty much it. Nice work!

<img alt="Nice work" src="/img/posts/therock.gif">
