export default function markdownParseDefList(unparsed) {
    if (!unparsed) return ''

    const parsed = unparsed.replace(/^[^:\s]+.*[\r\n](?::\s?.*[\s\S])+/mg,
        match => {
            let ret
            return match.trim().split(/\r?\n/).reduce((dl, line, i, lines) => {
                if (i === 1) ret = `<dl>\n  <dt>${dl.trim()}</dt>\n`
                ret += `  <dd>${line.trim().replace(/^:\s*/, '')}</dd>\n`
                if (i + 1 === lines.length) ret += '</dl>'

                return ret
            });
        });

    return parsed;
}
