export default function manifest() {
    return {
      name: 'Sportify',
      short_name: 'Sportify',
      description: 'Organize and rule your sport club',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }