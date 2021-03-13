# webapp
This is a simple web application. This application will help you find 10 most recent questions and 10 most popular questions from Stack Overflow in a recent week. The questions are arranged by creation date in descending order. The web application is implemented by CSS, html, and JavaScript. The logic is simple. The application will send request to Stack Overflow by using their API to get response. Convert the responses into JSON. Then parse the JSON. Get data and put them into proper position in the application. Creation date and votes always be the bottom of its comments, answers and questions.
Here is docker image link on Docker hub:  https://hub.docker.com/repository/docker/cbmbob/webapp.

Here is Github repo for the source code link: https://github.com/CBM6/webapp

## Instruction:
1.	Install docker on your computer.
2.	In the terminal, type “docker run -dp 80:80 cbmbob/webapp” to run the application.
3.	In browser, type “localhost” or “127.0.0.1” to go to the website.
4.	Search tag you are interested, Do not use Enter key on keyboard to submite! Just click on submit button to get search results.
5.	Click question you want to take a look.
6.	Response is at bottom of the page.
7.  type "docker stop <the container id>" to stop the container.
