# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




````markdown
## React Function Component Keyboard Shortcut (VS Code)

In **Visual Studio Code**, you can quickly generate a React function component using **keyboard shortcut–based snippets**.

---

### ✅ Shortcut (Using ES7+ React Snippets Extension)

**Type the following in the file and press `Enter`:**

```text
rfc
````
**The Result:**
```
import React from 'react'

export default function NewState() {
  return (
    <div>NewState</div>
  )
}
```

➡️ **rfc** Generates a **basic React function component**

OR

```text
rafce
```

**The Result:**
```
const NewState = () => {
  return (
    <div>NewState</div>
  )
}

export default NewState
```


➡️ **rafce** Generates a **React arrow function component with export**

You can then rename the component to `Props` and add `{ Interest }` as props.

---

### 📌 Required Extension

You must install the following VS Code extension:

* **ES7+ React/Redux/React-Native snippets**
  Author: *dsznajder*

---

### 🔗 Authentic References (Official & Trusted Sources)

1. **VS Code Marketplace – ES7 React Snippets**
   [https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

2. **Official GitHub Repository (Snippet Documentation)**
   [https://github.com/dsznajder/vscode-es7-javascript-react-snippets](https://github.com/dsznajder/vscode-es7-javascript-react-snippets)

3. **VS Code Official Documentation – User Snippets**
   [https://code.visualstudio.com/docs/editor/userdefinedsnippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

---

### ✅ Summary

* Use `rfc` or `rafce`
* Press `Enter`
* Works inside `.js` or `.jsx` files
* Requires **ES7+ React Snippets** extension
