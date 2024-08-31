import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8', 
      reporter: ['text', 'json', 'html'], 
      include: ['controllers/**/*.js', 'models/**/*.js', 'routes/**/*.js', 'middlewares/**/*.js'], 
      all: false,
      exclude: [
        'back_nerimo/test/**/*.js'
      ],
      
    },
  },

});
