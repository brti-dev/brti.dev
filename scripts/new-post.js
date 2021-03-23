/**
 * This script can be used to create a new blog post starter.
 *
 * @use npm run newpost
 */

/* eslint-disable no-restricted-syntax */
const { accessSync, constants, writeFile } = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
const { format } = require('date-fns')
const path = require('path')
const matter = require('gray-matter')
const open = require('open')

const POSTS_DIR = path.join(__dirname, '../posts')

function fileExists(file) {
    try {
        accessSync(file, constants.W_OK)
        return true
    } catch (err) {
        return false
    }
}

function toSlug(name) {
    return name.replace(/\s+/g, '-').replace(/[^a-z0-9-]/ig, '').toLowerCase()
}

if (!fileExists(POSTS_DIR)) {
    console.error(`Posts dir (${POSTS_DIR}) does not exist or isn't writable. Exiting program...`)
    process.exit(0)
}

const meta = {
    title: '',
    slug: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    tags: [],
}
const prompts = Object.keys(meta)
let i = 0

function commandPrompt() {
    const currentPrompt = prompts[i]
    readline.setPrompt(`${currentPrompt}: `)
    readline.prompt()
    readline.write(typeof meta[currentPrompt] === 'string' || meta[currentPrompt] instanceof String ? meta[currentPrompt] : '')
}

commandPrompt()

readline.on('line', naturalLine => {
    const line = naturalLine.trim()

    if (!line) {
        return commandPrompt()
    }

    switch (i) {
        case 0:
            meta.title = line
            meta.slug = toSlug(line)
            i += 1

            break

        case 1:
            meta.slug = line

            if (fileExists(path.join(POSTS_DIR, `${meta.slug}.md`))) {
                console.error(`Error: There's already an article with the slug ${meta.slug}`)
            } else {
                i += 1
            }

            break

        case 2:
            meta.date = line
            i += 1

            break

        default:
            meta.tags.push(line)
            readline.write(null, { name: 'c' })
    }

    return commandPrompt()
}).on('close', () => {
    if (i < 3) {
        console.log('Exiting without creating article')
        process.exit(0)
    }

    const newFile = path.join(POSTS_DIR, `${meta.slug}.md`)
    const { slug, ...metaYaml } = meta
    const newFileContents = matter.stringify(
        'Your article here <!-- more -->\n\n## Headline level twos are OK',
        metaYaml,
    )
    console.log('making new file...', newFile)

    writeFile(newFile, newFileContents, err => {
        if (err) {
            console.error('Error making file', err)
        } else {
            console.log('Success!')
            open(newFile, { wait: true }).then(() => {
                process.exit(0)
            })
        }
    })
})
