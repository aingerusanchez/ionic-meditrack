import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'meditrack',
  webDir: '../dist/meditrack',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
