// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: ["en", "id"],
		defaultLocale: "en",
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
								"learning/linux/fundamental",
								"learning/linux/awesome-linux-apps",
							],
						},
						{
							label: "HTML",
							collapsed: false,
							items: ["learning/html/fundamental"],
						},
						{
							label: "CSS",
							items: ["learning/css/fundamental"],
						},
						{
							label: "Tailwind CSS",
							items: ["learning/tailwindcss/fundamental"],
						},
						{
							label: "Javascript",
							items: ["learning/javascript/fundamental"],
						},
						{
							label: "Typescript",
							items: ["learning/typescript/fundamental"],
						},
						{
							label: "Node JS",
							items: ["learning/nodejs/fundamental"],
						},
						{
							label: "React JS",
							items: ["learning/reactjs/fundamental"],
						},
						{
							label: "Remix",
							items: ["learning/remixjs/fundamental"],
						},
						{
							label: "Astro",
							items: ["learning/astro/fundamental"],
						},
						{
							label: "My Sql",
							items: ["learning/mysql/fundamental"],
						},
						{
							label: "Prisma",
							items: ["learning/prisma/fundamental"],
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
