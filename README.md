Notes by Omar Luay

Important Notes

This template provides a minimal setup to get React working in Vite with TypeScript, including HMR support and some ESLint rules.

Currently, two official plugins are available:
	•	@vitejs/plugin-react uses Babel for Fast Refresh.
	•	@vitejs/plugin-react-swc uses SWC for Fast Refresh.

Expanding the ESLint Configuration

For production applications, it’s recommended to update the ESLint configuration to enable type-aware lint rules:
	1.	Configure parserOptions:

export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}


	2.	Update TypeScript ESLint rules:
	•	Replace plugin:@typescript-eslint/recommended with plugin:@typescript-eslint/recommended-type-checked or plugin:@typescript-eslint/strict-type-checked.
	•	Optionally add plugin:@typescript-eslint/stylistic-type-checked.
	3.	Add React support in ESLint:
	•	Install eslint-plugin-react.
	•	Add plugin:react/recommended and plugin:react/jsx-runtime to the extends list.