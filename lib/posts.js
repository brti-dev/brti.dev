import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import parseYaml from 'gray-matter'
import remark from 'remark'
import remarkHtml from 'remark-html'

const POSTS_DIR = path.join(process.cwd(), 'posts')

// <!-- more[-custom] -->
const LEADIN_TEST = /<!--\s*more[-:| ]*(.*)\s*-->/

async function markdownToHtml(md) {
    const processedContent = await remark()
        .use(remarkHtml)
        .process(md)

    return processedContent.toString()
}

/**
 * @param {string} slug
 */
export async function getPost(slug) {
    const fullPath = path.join(POSTS_DIR, `${slug}.md`)
    const fileContents = readFileSync(fullPath, 'utf8')

    const { content, data: meta } = parseYaml(fileContents)
    const contentHtml = await markdownToHtml(content)

    // Grab the article leadIn, if there is one
    let leadIn = null
    const matches = contentHtml.match(LEADIN_TEST)
    if (matches) {
        const leadInLinkWords = matches[1] ? matches[1].trim() : 'Keep reading'
        const leadInLink = `<a href="/blog/${slug}" title="${meta.title}" class="more">${leadInLinkWords}</a>`
        leadIn = contentHtml.substr(0, matches.index).trim() + leadInLink
    }

    // Check for custom stylesheet
    // cssFile = 'public/css/article--' + key + '.css';
    // fs.exists(cssFile, function (exists) {
    //     debug("check custom css (%s): %s", cssFile, exists);
    //     debug("...Fin~", key);

    //     if (exists) article.hasStylesheet = true;

    //     return fn(null, article);
    // });

    return {
        slug,
        contentHtml,
        leadIn,
        ...meta,
    }
}

export async function getSortedPosts() {
    const fileNames = readdirSync(POSTS_DIR)
    const allPostsData = fileNames.splice(0, 2).map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        return getPost(slug)
    });
    await Promise.all(allPostsData);

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
