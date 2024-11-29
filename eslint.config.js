import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslint from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import markdown from "eslint-plugin-markdown";
import n from "eslint-plugin-n";
import packageJson from "eslint-plugin-package-json/configs/recommended";
import perfectionist from "eslint-plugin-perfectionist";
import * as regexp from "eslint-plugin-regexp";
import yml from "eslint-plugin-yml";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: [".vercel", "node_modules", "pnpm-lock.yaml", "src/env.d.ts"],
	},
	{
		linterOptions: {
			reportUnusedDisableDirectives: "error",
		},
	},
	eslint.configs.recommended,
	...jsonc.configs["flat/recommended-with-json"],
	...markdown.configs.recommended,
	...yml.configs["flat/recommended"],
	...yml.configs["flat/prettier"],
	comments.recommended,
	jsdoc.configs["flat/recommended-typescript-error"],
	n.configs["flat/recommended"],
	packageJson,
	perfectionist.configs["recommended-natural"],
	regexp.configs["flat/recommended"],
	...tseslint.config({
		extends: [
			...tseslint.configs.strictTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
		],
		files: ["**/*.js", "**/*.ts"],
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ["*.config.*s"],
				},
			},
		},
		rules: {
			// These off-by-default rules work well for this repo and we like them on.
			"jsdoc/informative-docs": "error",
			"logical-assignment-operators": [
				"error",
				"always",
				{ enforceForIfStatements: true },
			],
			"operator-assignment": "error",

			// These on-by-default rules don't work well for this repo and we like them off.
			"jsdoc/require-jsdoc": "off",
			"jsdoc/require-param": "off",
			"jsdoc/require-property": "off",
			"jsdoc/require-returns": "off",
			"no-constant-condition": "off",

			// These on-by-default rules work well for this repo if configured
			"@typescript-eslint/no-unused-vars": ["error", { caughtErrors: "all" }],
			"perfectionist/sort-objects": [
				"error",
				{
					order: "asc",
					partitionByComment: true,
					type: "natural",
				},
			],

			// Stylistic concerns that don't interfere with Prettier
			"no-useless-rename": "error",
			"object-shorthand": "error",
		},
	}),
	{
		files: ["**/*.{yml,yaml}"],
		rules: {
			"yml/file-extension": ["error", { extension: "yml" }],
			"yml/sort-keys": [
				"error",
				{
					order: { type: "asc" },
					pathPattern: "^.*$",
				},
			],
			"yml/sort-sequence-values": [
				"error",
				{
					order: { type: "asc" },
					pathPattern: "^.*$",
				},
			],
		},
	},
);
