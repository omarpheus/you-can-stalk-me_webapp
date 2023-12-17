const required = [
  // 'VITE_YCSM_API_URL',
  // 'VITE_YCSM_APP_FOLLOWLIMIT',
  // 'VITE_YCSM_CHROMEEXTENSION_DEV_DESKTOP_ID',
  // 'VITE_YCSM_CHROMEEXTENSION_DEV_DESKTOP_URL',
  // 'VITE_YCSM_CHROMEEXTENSION_DEV_LAPTOP_ID',
  // 'VITE_YCSM_CHROMEEXTENSION_DEV_LAPTOP_URL',
  // 'VITE_YCSM_CHROMEEXTENSION_PROD_ID',
  // 'VITE_YCSM_CHROMEEXTENSION_PROD_URL',
  // 'VITE_YCSM_TWITCH_APP_ID',
  // 'VITE_YCSM_STRIPE_PUBLICKEY',
  // 'VITE_YCSM_SUPABASE_ID',
  // 'VITE_YCSM_SUPABASE_KEY',
  // 'VITE_YCSM_SUPABASE_URL',
  // 'VITE_YCSM_SOCKET_URL'
]

for (const key of required) {
  if (!import.meta.env[key]) {
    throw new Error(`Missing the environment variable "${key}"`);
  }
}

export default {
  ycsm: {
    api: {
      url: import.meta.env.VITE_YCSM_API_URL
    },
    app: {
      followLimit: import.meta.env.VITE_YCSM_APP_FOLLOWLIMIT
    },
    chromeExtension: {
      dev: {
        desktop: {
          id: import.meta.env.VITE_YCSM_CHROMEEXTENSION_DEV_DESKTOP_ID,
          url: import.meta.env.VITE_YCSM_CHROMEEXTENSION_DEV_DESKTOP_URL
        },
        laptop: {
          id: import.meta.env.VITE_YCSM_CHROMEEXTENSION_DEV_LAPTOP_ID,
          url: import.meta.env.VITE_YCSM_CHROMEEXTENSION_DEV_LAPTOP_URL
        }
      },
      prod: {
        id: import.meta.env.VITE_YCSM_CHROMEEXTENSION_PROD_ID,
        url: import.meta.env.VITE_YCSM_CHROMEEXTENSION_PROD_URL
      }
    },
    twitch: {
      app: {
        id: import.meta.env.VITE_YCSM_TWITCH_APP_ID,
      }
    },
    stripe: {
      publicKey: import.meta.env.VITE_YCSM_STRIPE_PUBLICKEY,
    },
    supabase: {
      id: import.meta.env.VITE_YCSM_SUPABASE_ID,
      key: import.meta.env.VITE_YCSM_SUPABASE_KEY,
      url: import.meta.env.VITE_YCSM_SUPABASE_URL,
    },
    socket: {
      url: import.meta.env.VITE_YCSM_SOCKET_URL
    }
  }
}