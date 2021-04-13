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
    .use(require('markdown-it-footnote'))

export function markdownToHtml(md) {
    return markdownIt.render(md)
}
