import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['./src/index.ts'],
  outdir: './dist',
  bundle: true,
  format: 'esm',
  splitting: true,
  chunkNames: '[name]',
  minify: true,
  loader: {
    '.ts': 'ts'
  },
  tsconfig: './config/tsconfig.json',
  platform: 'node',
  sourcemap: true
}).catch(() => process.exit(1));
