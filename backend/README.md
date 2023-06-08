## Command Line


### Init the project
```bash
npm init 
```
* entry point should be main.js 
* author and description are required


### Install electron library
```bash 
npm install --save-dev electron
```

### Modify the `package.json` to allow run the app with electron
```json
{
  "scripts": {
    "start": "electron ."
  }
}
```


### Package and distribute the application
```bash
npm install --save-dev @electron-forge/cli
npx electron-forge import
```