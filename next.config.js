module.exports = {
    trailingSlash: true,
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US',
    },
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|png)',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=9999999999, must-revalidate',
                    },
                ],
            },
        ]
    },
}
