# memo
## create a sample nestjs project
```
mkdir scratch
cd scratch
npm init -y
npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2
```

## run the sample nestjs projet
```
npx ts-node-dev src/main.ts
```

I faced a problem related to npm. I solved the probram by [the post of stack overflow](https://stackoverflow.com/questions/25093276/node-js-windows-error-enoent-stat-c-users-rt-appdata-roaming-npm). 

```
Manually creating a folder named 'npm' in the displayed path fixed the problem.
```
