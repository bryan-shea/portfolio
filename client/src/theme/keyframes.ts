export const keyframes = {
	glow: {
		"0%": {
			boxShadow: "0 0 0px var(--glow-color)",
		},
		"10%": {
			boxShadow: "0 0 5px var(--glow-color)",
		},
		"50%": {
			boxShadow: "0 0 20px var(--glow-color)",
		},
		"90%": {
			boxShadow: "0 0 5px var(--glow-color)",
		},
		"100%": {
			boxShadow: "0 0 0px var(--glow-color)",
		},
	},
	floatUpDown: {
		"0%, 100%": {
			transform: "translateY(0px) translateX(0px)",
			opacity: "0.3",
		},
		"25%": {
			transform: "translateY(-20px) translateX(10px)",
			opacity: "0.8",
		},
		"50%": {
			transform: "translateY(-10px) translateX(-5px)",
			opacity: "0.6",
		},
		"75%": {
			transform: "translateY(-30px) translateX(-10px)",
			opacity: "0.9",
		},
	},
	fadeInOut: {
		"0%, 100%": {
			opacity: "0",
			transform: "scale(0.8)",
		},
		"50%": {
			opacity: "1",
			transform: "scale(1.2)",
		},
	},
	wave: {
		"0%": {
			transform: "translateX(-100%)",
		},
		"100%": {
			transform: "translateX(100%)",
		},
	},
	orbFloat: {
		"0%, 100%": {
			transform: "translate(0, 0) scale(1)",
		},
		"33%": {
			transform: "translate(30px, -30px) scale(1.1)",
		},
		"66%": {
			transform: "translate(-20px, 20px) scale(0.9)",
		},
	},
	gridPulse: {
		"0%, 100%": {
			opacity: "0.1",
		},
		"50%": {
			opacity: "0.3",
		},
	},
	nodeConnect: {
		"0%": {
			strokeDasharray: "0 100",
		},
		"100%": {
			strokeDasharray: "100 0",
		},
	},
};
