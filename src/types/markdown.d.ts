/**
 * TypeScript declaration for markdown file imports
 * This allows importing .md files as raw strings
 */

declare module '*.md?raw' {
  const content: string
  export default content
} 