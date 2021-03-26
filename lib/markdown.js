import remark from 'remark'
import remarkHtml from 'remark-html'
import remarkDeflist from 'remark-deflist'
import remarkFootnote from 'remark-footnotes'
import unified from 'unified'
import parse from 'remark-parse'
import remarkReact from 'remark-react'

import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

const markdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    highlight(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) { }
        }
        try {
            return hljs.highlightAuto(str).value;
        } catch (__) { }

        return ''; // use external default escaping
    },
})
    .use(require('markdown-it-deflist'))
    .use(require('markdown-it-footnote'));

export function markdownToJsx(md) {
    return unified()
        .use(parse)
        .use(remarkReact)
        .processSync(md)
        .result
}

export function markdownToHtml(md) {
    return markdownIt.render(md)
}

// export async function markdownToHtml(md) {
//     const processedContent = await remark()
//         // .use(remarkFootnote, { inlineNotes: true })
//         .use(remarkDeflist)
//         .use(remarkHtml)
//         .process(md)

//     return processedContent.toString()
// }
