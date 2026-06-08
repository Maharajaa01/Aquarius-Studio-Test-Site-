'use server'

import fs from 'fs'
import path from 'path'

export interface TattooImage {
  src: string
  category: string
}

export async function getTattooImages() {
  const publicDir = path.join(process.cwd(), 'public')
  const tattoosDir = path.join(publicDir, 'tattoos')
  
  let categories: string[] = []
  let allImages: TattooImage[] = []

  try {
    if (fs.existsSync(tattoosDir)) {
      const dirs = fs.readdirSync(tattoosDir, { withFileTypes: true })
      
      for (const dirent of dirs) {
        if (dirent.isDirectory()) {
          const category = dirent.name
          categories.push(category)
          
          const categoryPath = path.join(tattoosDir, category)
          const files = fs.readdirSync(categoryPath)
          
          for (const file of files) {
            if (/\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
              allImages.push({
                src: `/tattoos/${category}/${file}`,
                category
              })
            }
          }
        }
      }
    }
  } catch (error) {
    console.error('Error reading tattoo images:', error)
  }

  // Fallback if no images found
  if (allImages.length === 0) {
    categories = ['realistic', 'traditional', 'minimalist', 'blackwork', 'geometric', 'portrait']
    allImages = categories.flatMap(cat => [
      { src: '/hero-tattoo.jpg', category: cat },
      { src: '/hero-tattoo.jpg', category: cat }
    ])
  }

  return { categories, allImages }
}

export async function getRandomTattooImages(count: number): Promise<TattooImage[]> {
  const { allImages } = await getTattooImages()
  
  if (allImages.length <= count) return allImages
  
  const shuffled = [...allImages].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
