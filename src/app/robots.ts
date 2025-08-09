import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Use your specific Vercel deployment URL
  const baseUrl = 'https://shopvibe-tech-aktc2m999-raihan-uddins-projects-2fcd2e9f.vercel.app'
    
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
