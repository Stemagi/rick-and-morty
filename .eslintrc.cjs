module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb" [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }, 
    "scripts": {
        "build": "eslint src/ && react-scripts build",
        "lint": "eslint src",
        "precommit": "npm run lint"
    }       
}
