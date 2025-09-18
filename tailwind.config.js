/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				hj: {
					pink: "#F6CDD1",
					green: "#CFE6D8",
					sand: "#F3EDE4",
					ink: "#1B1F23",
				},
			},
			borderRadius: {
				"2xl": "1rem",
			},
			boxShadow: {
				soft: "0 8px 24px rgba(0,0,0,0.08)",
			},
		},
	},
	plugins: [],
};
