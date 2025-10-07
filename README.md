# React Template

> **A boilerplate for React applications**

## Features

This template comes pre-configured with a modern tech stack:

- **Core**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Module Bundler**: [Webpack 5](https://webpack.js.org/) with optimized development and production configurations
- **Styling**: [Sass/SCSS](https://sass-lang.com/) - support out-of-the-box
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Code Quality**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- **Developer Experience**: Hot Module Replacement (HMR) with [React Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/okonet/lint-staged)

## Getting Started

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aleksei-Uzin/react-template.git
   cd react-template
   ```

2. **Install dependencies:**
   This project uses `npm` for package management. Run the following command to install the necessary packages:

   ```bash
   npm install
   ```

### Running the App

1. **Start the development server:**
   To run the app in development mode, use:

   ```bash
   npm start
   ```

2. **Open your browser:**
   Navigate to `http://localhost:9000`. You should see your application running.

## Working with Assets

This boilerplate is configured to handle common assets like images, SVGs, and fonts.

### Images

You can import images directly into your components.

```tsx
import myImage from 'assets/my-image.png'

function MyComponent() {
  return <img src={myImage} alt="A descriptive alt text" />
}
```

### SVGs

SVGs can be handled in two ways:

1. **As React Components (Default)**: Importing an SVG file directly will turn it into a React component that you can use in your JSX. This is the recommended approach for icons.

   ```tsx
   import { ReactComponent as MyIcon } from 'assets/my-icon.svg'

   function MyComponent() {
     return <MyIcon className="my-icon-class" />
   }
   ```

2. **As a URL**: If you need the URL of an SVG (for example, to use in an `<img>` tag), append `?url` to the import path.

   ```tsx
   import mySvgUrl from 'assets/my-icon.svg?url'

   const ImageComponent = () => <img src={mySvgUrl} alt="My SVG" />
   ```

## Available Scripts

In the project directory, you can run:

- **`npm start`**: runs the app in development mode.
- **`npm run build`**: builds the app for production to the `dist` folder.
- **`npm test`**: runs the test suite using Jest and React Testing Library.
- **`npm run lint`**: lints the project files using ESLint.
- **`npm run format`**: formats the code using Prettier.
