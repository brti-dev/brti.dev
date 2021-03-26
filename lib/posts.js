import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import parseYaml from 'gray-matter'
import remark from 'remark'
import remarkHtml from 'remark-html'

import fileExists from './file-exists'

const POSTS_DIR = path.join(process.cwd(), 'posts')
const CSS_DIR = path.join(process.cwd(), 'public/css/posts')

// <!-- more[-custom] -->
const LEADIN_TEST = /<!--\s*more[-:| ]*(.*)\s*-->/

async function markdownToHtml(md) {
    const processedContent = await remark()
        .use(remarkHtml)
        .process(md)

    return processedContent.toString()
}

function parseLeadIn(contentHtml) {
    const matches = contentHtml.match(LEADIN_TEST)
    if (matches) {
        const ledeLinkWords = matches[1] ? matches[1].trim() : 'Keep reading'
        return [contentHtml.substr(0, matches.index), ledeLinkWords]
    }

    return null
}

/**
 * @param {string} slug
 */
export async function getPost(slug) {
    const fullPath = path.join(POSTS_DIR, `${slug}.md`)
    const fileContents = readFileSync(fullPath, 'utf8')

    const { content, data: meta } = parseYaml(fileContents)
    const contentHtml = await markdownToHtml(content)
    const leads = parseLeadIn(contentHtml)
    let lede = null
    if (leads) {
        const [ledeRaw, ledeLinkWords] = leads
        lede = `${ledeRaw} <a href="/blog/${slug}" title="${meta.title}" class="more">${ledeLinkWords} &rarr;</a>`
    }

    // Check for custom stylesheet
    const cssFile = path.join(CSS_DIR, `${slug}.css`)
    const customCss = fileExists(cssFile) ? `/css/posts/${slug}.css` : null

    return {
        slug,
        contentHtml,
        lede,
        customCss,
        ...meta,
    }
}

export async function getSortedPosts() {
    const fileNames = readdirSync(POSTS_DIR)
    const promises = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        return getPost(slug)
    });
    const allPostsData = await Promise.all(promises);

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
