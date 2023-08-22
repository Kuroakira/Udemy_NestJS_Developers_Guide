# memo
## create a sample nestjs project
```
npm install -g @nestjs/cli
nest new messages
```
select "npm"

### Create Module and Controller
```
nest generate module messages
nest generate controller messages/messages --flat
```

### Install extra Libraries
```
npm install class-validator class-transformer
```
## run message project
```
npm run start:dev
```
## comand description
### nest generate controller messages/messages --flat
```
nest generate [Type of class to generate] [Place the file in the messages folder]/[Call the class 'messages'] [Don't create an extra folder called 'controllers']
```
