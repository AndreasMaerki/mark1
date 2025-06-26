# Content Management

This directory contains all the markdown content for the website. The content is organized and loaded through the `contentLoader.ts` utility to keep large text content out of component files.

## Structure

- `about/about.md` - About page content including personal introduction, experience, and skills
- `blog-post-argeotracking.md` - ARGeoTracking blog post content
- `navItems.ts` - Navigation configuration
- `projects.tsx` - Projects data
- `social.tsx` - Social media links

## Content Loader Utility

All markdown content is imported and managed through `/src/utils/contentLoader.ts` which provides:

- Type-safe content interfaces
- Centralized content management
- Metadata handling for SEO
- Easy content updates without touching component code

## Adding New Content

1. Create new markdown files in appropriate subdirectories
2. Update the content loader utility to import and expose the content
3. Add appropriate TypeScript interfaces for type safety
4. Update components to use the content loader functions

## Benefits

- ✅ Clean separation of content and code
- ✅ Better maintainability
- ✅ Type safety for content structures
- ✅ Easier content updates
- ✅ Reduced component file sizes
- ✅ Better version control for content changes 