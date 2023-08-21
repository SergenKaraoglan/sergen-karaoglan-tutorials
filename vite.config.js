import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.glb', '**/*.dae', '**/*.fbx', '**/*.stl', '**/*.obj'],
});
