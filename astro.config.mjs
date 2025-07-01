import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import { portfolioIcons } from './utils/portfolio-icons.js';

// https://astro.build/config
export default defineConfig({
    site: 'https://LargatSeif.github.io/slargat.dev', // TODO: Replace USERNAME and REPO with your actual GitHub username and repo name
    base: '/slargat.dev', // TODO: Replace REPO with your actual repo name if deploying to a subdirectory
    integrations: [
        icon({
            include: portfolioIcons,
        })]
});
