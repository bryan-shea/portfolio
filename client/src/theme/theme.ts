import {
	createSystem,
	defaultConfig,
	defineConfig,
	mergeConfigs,
} from "@chakra-ui/react";

import { keyframes } from "./keyframes";
import { layerStyles } from "./layer-styles";
import { recipes } from "./recipes";
import { semanticTokens } from "./semantic-tokens";
import { textStyles } from "./text-styles";
import { tokens } from "./tokens";

const customConfig = defineConfig({
	globalCss: {
		"*": {
			"--glow-color": "var(--chakra-colors-primary-500)",
		},
		"html, body, *": {
			margin: 0,
			p: 0,
		},
		body: {
			height: "100%",
			width: "100%",
			minHeight: "100vh",
			margin: 0,
			display: "inline",
			"--webkit-font-smoothing": "antialiased",
			"--moz-osx-font-smoothing": "grayscale",
		},
		"body, #root": {
			display: "inline",
			margin: 0,
			padding: 0,
		},
	},
	theme: {
		keyframes,
		layerStyles,
		recipes,
		semanticTokens,
		tokens,
		textStyles,
	},
});

const mergedConfig = mergeConfigs(defaultConfig, customConfig);
export const system = createSystem(mergedConfig);
