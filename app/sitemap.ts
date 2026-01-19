import { MetadataRoute } from 'next'
import locationsData from '@/data/locations.json'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hiddentrails.netlify.app'
  
  // Home page
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]
  
  // Location pages
  const locationRoutes = locationsData.locations.map((location) => ({
    url: `${baseUrl}/location/${location.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  return [...routes, ...locationRoutes]
}
