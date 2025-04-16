// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: ["id", "en"],
		defaultLocale: "id",
	},
	integrations: [
		starlight({
			plugins: [
				starlightBlog({
					authors: {
						huda: {
							name: "Huda",
							title: "Sofware Developer",
							picture:
								"https://avatars.githubusercontent.com/u/127742560?s=200",
							url: "https://hudamnhd.dev/about-me/",
						},
					},
				}),
			],
			editLink: {
				baseUrl: "https://github.com/hudamnhd/personal-site/edit/main/docs/",
			},
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 6 },
			title: "Huda",
			defaultLocale: "en",
			lastUpdated: true,
			customCss: ["./src/styles/custom.css"],
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/hudamnhd",
				},
				{
					icon: "twitter",
					label: "Twitter",
					href: "https://twitter.com/hudamnhd",
				},
				{
					icon: "linkedin",
					label: "LinkedIn",
					href: "https://www.linkedin.com/in/hudamnhd",
				},
				{
					icon: "email",
					label: "Email",
					href: "mailto:muhamadhuda519@gmail.com",
				},
			],
			sidebar: [
				{
					label: "About Me",
					translations: {
						id: "Tentang Saya",
					},
					link: "/about-me",
				},
				// A group of links labelled "Learning".
				{
					label: "Learn",
					collapsed: false,
					translations: {
						id: "Belajar",
					},
					items: [
						{
							label: "Linux",
							collapsed: false,
							items: [
								"learn/linux/fundamental",
								"learn/linux/awesome-linux-apps",
							],
						},
						{
							label: "HTML",
							collapsed: false,
							items: ["learn/html/fundamental"],
						},
						{
							label: "CSS",
							items: ["learn/css/fundamental"],
						},
						{
							label: "Tailwind CSS",
							items: ["learn/tailwindcss/fundamental"],
						},
						{
							label: "Javascript",
							items: ["learn/javascript/fundamental","learn/javascript/cheat-sheet"],
						},
						{
							label: "Typescript",
							items: ["learn/typescript/fundamental"],
						},
						{
							label: "Node JS",
							items: ["learn/nodejs/fundamental"],
						},
						{
							label: "React JS",
							items: ["learn/reactjs/fundamental"],
						},
						{
							label: "Remix",
							items: ["learn/remixjs/fundamental"],
						},
						{
							label: "Astro",
							items: ["learn/astro/fundamental"],
						},
						{
							label: "My Sql",
							items: ["learn/mysql/fundamental"],
						},
						{
							label: "Prisma",
							items: ["learn/prisma/fundamental"],
						},
					],
				},
				{
					label: "Tutorial",
					autogenerate: { directory: "tutorial" },
				},
			],
			credits: true,
		}),
	],
	image: {
		service: passthroughImageService(),
	},
});
