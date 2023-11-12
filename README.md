# Metropolia WebDev Project

## Installation

- npm install

- npm start

## Best practices

### Components

- Use `./src/components/ComponentName/ComponentName.js` for component logic

- Export the component as default

  ```javascript
  export default ComponentName;
  ```

- Make `./src/components/ComponentName/index.js`

  ```javascript
  export { default } from "./ComponentName";
  ```

- Usage

  ```javascript
  import ComponentName from "../ComponentName";
  ```

### CSS

- Use `./src/css/style.css` for global styles

- Use `./src/css/styleguide.css` for declaring global variable styles

- Use `./src/components/ComponentName/ComponentName.css` for component specific styles  
  these styles should match the component's classNames and only be used in that component

### Images

- Use `./src/images/subfolder` for images.  
  `/subfolder` can be for example `./src/images/products` or `./src/images/icons`

- Usage

  ```javascript
  import whatever from "../../images/imageFolder/imageName.png";
  ```

### State variable / signals

- Signals have many benefits over react's useState, but  
  useState has it's own purposes and should be used when  
  needed.
  Otherwise it's recommended to use react signal from preact library

  ```javascript
  import { signal } from "@preact/signals-react";
  ```

- Declaration

  ```javascript
  export let signalName = signal('initial value'); // the value can be anything (true, false, 1, "String", [], {})
  ```
  
  Export it in the index.js file
  
  ```javascript
  export { signalName } from "./ComnponentName";
  ```

- Usage in another component

  ```javascript
  import { signalName } from "../ComponentName";
  ```

- Accessing the value

  ```javascript
  signalName.value = "new value";
  ```

### Recommended material 
  - Signals  

    <a href="https://www.youtube.com/watch?v=SO8lBVWF2Y8&list=PLAF7qpb3JaOsnblzvagARCIoO5gplFyR3&index=11&t=690s&ab_channel=WebDevSimplified">
    <img src="https://i.ytimg.com/vi/SO8lBVWF2Y8/maxresdefault.jpg" alt="Watch the video" width="200"/>
    </a>  

    <br>
    
  -  Icons  

     Useful library for icons: [React Icons](https://react-icons.github.io/react-icons/)
