import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mahmoudmossad.portfolio',
  appName: 'Mahmoud Mossad',
  webDir: 'dist',
  backgroundColor: '#050507',
  server: {
    androidScheme: 'https',
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
