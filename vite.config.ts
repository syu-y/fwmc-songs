/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

/** @type {import('@sveltejs/kit').Config} */
const config: UserConfig = {
  plugins: [sveltekit(), enhancedImages()],
  test: {
    // testの対象ファイル
    // include: ['src/**/*.{test,spec}.{js,ts}']
    include: ['test/**/*.{test,spec}.{js,ts}'],
    globals: true,
    // testの環境
    environment: 'jsdom',
  },
};

export default config;
