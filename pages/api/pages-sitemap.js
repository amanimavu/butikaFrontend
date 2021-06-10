import { SitemapStream, streamToPromise } from 'sitemap';

const fs = require('fs')
export default async (req, res) => {
    try{
        const smStream = new SitemapStream({
            hostname: `https://${req.headers.host}`,
            cacheTime: 600000,
        });

        //list of pages
        const pages = fs.readdirSync('')
        console.log(pages)

        //Create each URL row
        pages.forEach(page => {
            smStream.write({
                url: `/shoes/${page.slug}`,
                changefreq: 'daily',
                priority: 0.9
            })
        })

        //End sitemap stream
        smStream.end();

        //XML sitemap string
        const sitemapOutput = (await streamToPromise(smStream)).toString();

        //change headers
        res.writeHead(200, {
            'Content-Type': 'application/xml'
        });

        //Display output to user
        res.end(sitemapOutput)
    }catch(e){
        console.log(e)
        res.send(JSON.stringify(e))
    }
}