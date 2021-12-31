import { readdirSync, readFileSync } from 'fs'
import { format as formatDate } from 'date-fns'
import path from 'path'
import parseYaml from 'gray-matter'

import { markdownToHtml } from './markdown'
import fileExists from './file-exists'

const POSTS_DIR = path.join(process.cwd(), 'posts')
const CSS_DIR = path.join(process.cwd(), 'public/css/posts')

// <!-- more[-custom] -->
const LEDE_TEST = /<!--\s*more[-:| ]*(.*)\s*-->/

/**
 * @returns An array of the raw lede and anchor words
 */
function parseLede(content: string): [string, string]|null {
    const matches = content.match(LEDE_TEST)
    if (matches) {
        const ledeAnchorWords = matches[1] ? matches[1].trim() : 'Keep reading'
        return [content.substr(0, matches.index), ledeAnchorWords]
    }

    return null
}

export type PostType = {
    slug: string
    lede: string
    contentHtml: string
    customCss?: string
    title: string
    date: string|Date
    tags: string[]
    header?: string
    image?: string
}

export async function getPost(slug: string): Promise<PostType> {
    const fullPath = path.join(POSTS_DIR, `${slug}.md`)
    const fileContents = readFileSync(fullPath, 'utf8')

    const { content: contentMd, data } = parseYaml(fileContents)

    const meta = { ...data }
    if (data.date && Object.prototype.toString.call(data.date) === '[object Date]') {
        meta.date = formatDate(data.date, 'yyyy-MM-dd')
    }

    const contentHtml = await markdownToHtml(contentMd)
    let lede: null|string = null
    const parsedLede = parseLede(contentHtml)
    if (parsedLede) {
        const [ledeRaw, ledeAnchorWords] = parsedLede
        lede = `${ledeRaw} <a href="/blog/${slug}" title="${meta.title}" class="more">${ledeAnchorWords} &rarr;</a>`
    }

    // Check for custom stylesheet
    const cssFile = path.join(CSS_DIR, `${slug}.css`)
    const customCss = fileExists(cssFile) ? `/css/posts/${slug}.css` : null

    return {
        slug,
        lede,
        contentHtml,
        customCss,
        title: meta.title,
        date: meta.date,
        tags: meta.tags ?? null,
        header: meta.header ?? null,
        image: meta.image ?? null,
    }
}

export async function getSortedPosts() {
    const fileNames = readdirSync(POSTS_DIR)
    const promises = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        return getPost(slug)
    })
    const allPostsData = await Promise.all(promises)

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostSlugs() {
    const fileNames = readdirSync(POSTS_DIR)

    return fileNames.map(fileName => ({
        params: {
            slug: fileName.replace(/\.md$/, ''),
        },
    }))
}
