module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": 0,
    "jsx-a11y/accessible-emoji": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "import/prefer-default-export": 0,
    "react/destructuring-assignment": 0
  },
  env: {
    jest: true
  }
};
