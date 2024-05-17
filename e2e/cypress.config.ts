import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run meditrack:serve:development',
        production: 'nx run meditrack:serve:production',
      },
      ciWebServerCommand: 'nx run meditrack:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
