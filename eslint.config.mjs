// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['eslint.config.mjs', '.next/**', 'node_modules/**', 'out/**', 'dist/**'],
	},
	eslint.configs.recommended,
	eslintPluginPrettierRecommended,
	// Configuration for JavaScript files (no TypeScript type checking)
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2020,
			},
			sourceType: 'module',
		},
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			'prettier/prettier': [
				'warn',
				{
					printWidth: 160,
					singleQuote: true,
					semi: true,
					useTabs: true,
					tabWidth: 2,
					bracketSpacing: true,
					trailingComma: 'all',
					endOfLine: 'lf',
				},
			],
		},
	},
	// Configuration for TypeScript files (with type checking)
	{
		files: ['**/*.{ts,tsx}'],
		extends: [...tseslint.configs.recommendedTypeChecked],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2020,
			},
			sourceType: 'module',
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			prettier: eslintPluginPrettier,
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-misused-promises': 'off',
			'@typescript-eslint/no-unsafe-argument': 'warn',
			'@typescript-eslint/no-unused-expressions': 'off',
			'@typescript-eslint/prefer-promise-reject-errors': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'prettier/prettier': [
				'warn',
				{
					printWidth: 160,
					singleQuote: true,
					semi: true,
					useTabs: true,
					tabWidth: 2,
					bracketSpacing: true,
					trailingComma: 'all',
					endOfLine: 'lf',
				},
			],
		},
	},
);
