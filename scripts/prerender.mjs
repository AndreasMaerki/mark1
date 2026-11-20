/**
 * Prerender all routes to static HTML using Playwright.
 * Run after `vite build` — serves the build/ dir and captures rendered HTML.
 */
import { chromium } from 'playwright'
import { createServer } from 'node:http'
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BUILD_DIR = join(__dirname, '..', 'build')
const BASE_URL = 'http://localhost:4173'

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/about', file: 'about/index.html' },
  { path: '/projects', file: 'projects/index.html' },
  { path: '/blog', file: 'blog/index.html' },
  { path: '/blog/swift-android-workgroup', file: 'blog/swift-android-workgroup/index.html' },
  { path: '/blog/mv-mvvm-debate', file: 'blog/mv-mvvm-debate/index.html' },
  { path: '/blog/apple-liquid-glass', file: 'blog/apple-liquid-glass/index.html' },
  { path: '/blog/argeotracking-analysis', file: 'blog/argeotracking-analysis/index.html' },
  { path: '/tranceguide', file: 'tranceguide/index.html' },
  { path: '/tranceguide-privacy', file: 'tranceguide-privacy/index.html' },
]

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.md': 'text/markdown',
}

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const urlPath = req.url.split('?')[0]
      let filePath = join(BUILD_DIR, urlPath === '/' ? 'index.html' : urlPath)

      // If the path resolves to a directory, look for index.html inside
      if (existsSync(filePath) && statSync(filePath).isDirectory()) {
        filePath = join(filePath, 'index.html')
      }

      // SPA fallback: if file doesn't exist and URL has no extension, serve index.html
      if (!existsSync(filePath)) {
        const hasExtension = /\.[a-zA-Z0-9]+$/.test(urlPath)
        if (!hasExtension) {
          const candidate = join(BUILD_DIR, urlPath, 'index.html')
          filePath = existsSync(candidate) ? candidate : join(BUILD_DIR, 'index.html')
        }
      }

      try {
        const content = readFileSync(filePath)
        const ext = filePath.slice(filePath.lastIndexOf('.'))
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' })
        res.end(content)
      } catch {
        res.writeHead(404)
        res.end('Not found')
      }
    })

    server.listen(4173, () => resolve(server))
  })
}

async function prerenderRoute(browser, route) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  })
  const page = await context.newPage()

  try {
    await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle', timeout: 30000 })

    // Wait for React effects (useDocumentTitle) to run
    await page.waitForTimeout(800)

    // Remove the initial preloader if still present
    await page.evaluate(() => {
      const preloader = document.getElementById('initial-preloader')
      if (preloader) preloader.remove()
    })

    const html = await page.content()

    const outPath = join(BUILD_DIR, route.file)
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, html, 'utf-8')

    console.log(`  ✓ ${route.path} → ${route.file}`)
  } catch (err) {
    console.error(`  ✗ ${route.path}: ${err.message}`)
  } finally {
    await context.close()
  }
}

async function main() {
  console.log('Prerendering routes...\n')

  const server = await startServer()
  const browser = await chromium.launch()

  try {
    for (const route of routes) {
      await prerenderRoute(browser, route)
    }
  } finally {
    await browser.close()
    server.close()
  }

  console.log(`\nDone. Prerendered ${routes.length} routes.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})