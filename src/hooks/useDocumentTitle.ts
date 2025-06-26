import { useEffect } from 'react'

interface DocumentMeta {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogType?: string
  articleAuthor?: string
  articlePublishedTime?: string
}

export default function useDocumentTitle(meta: DocumentMeta): void {
  useEffect(() => {
    // Update title
    if (meta.title) {
      document.title = meta.title
    }

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[name="${property}"]`) || 
                   document.querySelector(`meta[property="${property}"]`)
      
      if (!metaTag) {
        metaTag = document.createElement('meta')
        if (property.startsWith('og:') || property.startsWith('article:')) {
          metaTag.setAttribute('property', property)
        } else {
          metaTag.setAttribute('name', property)
        }
        document.head.appendChild(metaTag)
      }
      
      metaTag.setAttribute('content', content)
    }

    // Update canonical link
    const updateCanonical = (href: string) => {
      let linkTag = document.querySelector('link[rel="canonical"]')
      
      if (!linkTag) {
        linkTag = document.createElement('link')
        linkTag.setAttribute('rel', 'canonical')
        document.head.appendChild(linkTag)
      }
      
      linkTag.setAttribute('href', href)
    }

    // Apply meta updates
    if (meta.description) updateMetaTag('description', meta.description)
    if (meta.keywords) updateMetaTag('keywords', meta.keywords)
    if (meta.canonical) updateCanonical(meta.canonical)
    if (meta.ogTitle) updateMetaTag('og:title', meta.ogTitle)
    if (meta.ogDescription) updateMetaTag('og:description', meta.ogDescription)
    if (meta.ogType) updateMetaTag('og:type', meta.ogType)
    if (meta.articleAuthor) updateMetaTag('article:author', meta.articleAuthor)
    if (meta.articlePublishedTime) updateMetaTag('article:published_time', meta.articlePublishedTime)
  }, [meta])
} 