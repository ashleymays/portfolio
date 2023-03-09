import imageFiles from "./imageFiles";

const projects = [
  {
    endpoint: `piano-keyboard-simulator`,
    title: `Piano Keyboard Simulator`,
    techStack: `React, Node, Express, Web Audio API, MediaStream Recording API`,
    links: [
      {
        href: `https://github.com/ashleymays/piano-sim`,
        title: `github.com/ashleymays/piano-sim`,
      },
    ],
    copy: {
      overview: <>Play with four instrument options, audio effects, and recording functionality.</>,
      problem: (
        <>
          Some years ago, I searched for online piano keyboards to learn how to play piano. There were only a few
          options which hadn't been maintained in a decade. It inspired me to build one with better functionality as a
          fun and educational online resource.
        </>
      ),
      solution: (
        <>
          I modified and implemented a Figma mockup by a designer to enhance the user's experience and add a layer of
          professionalism to the wensite. I also retrieved the instruments' audio files through the file system to
          optimize the website speed.
        </>
      ),
    },
    images: imageFiles.pianoKeyBoardSimulator,
  },
  {
    endpoint: `recipe-finder`,
    title: `Recipe Finder`,
    techStack: `EJS, Node, Express, MongoDB, AWS, Heroku, REST API`,
    links: [
      {
        href: `https://github.com/ashleymays/goodybee`,
        title: `github.com/ashleymays/goodybee`,
      },
    ],
    copy: {
      overview: <>Find and save recipes from across the web in one place.</>,
      problem: (
        <>
          There are many recipe and food websites; consequently, there are different recipes spread across different
          websites, which isn't ideal for the average consumer.
        </>
      ),
      solution: (
        <>
          I added a login and registration system so users could easily store their favorite recipes. Additionally, I
          structured the website and code blocks with the MVC and object-oriented design patterns respectively for
          easier maintenance. Lastly, I used an AWS S3 bucket to store profile pictures to avoid bloat in the database
          and preserve scalability.
        </>
      ),
    },
    images: imageFiles.recipeFinder,
  },
  // {
  //   endpoint: `other-project`,
  //   title: `Other Project`,
  //   year: 2023,
  //   techStack: null,
  //   links: null,
  //   copy: {
  //     overview: null,
  //     problem: null,
  //     solution: null,
  //   },
  //   images: [{}],
  // },
];

export default projects;

// import scrapy
// from scrapy_playwright.page import PageMethod
// import urllib.parse
// import re

// class CategorySpider(scrapy.Spider):
//     name = 'category_spider'

//     def start_requests(self):
//         url = 'https://bananarepublic.gap.com/browse/category.do?cid=67595'
//         yield scrapy.Request(url, meta=dict(
//                                     playwright=True,
//                                     playwright_include_page=True,
//                                     playwright_page_methods=[
//                                         PageMethod('wait_for_selector', '.product-card'),
//                                         PageMethod("evaluate", "window.scrollBy(0, document.body.scrollHeight)"),
//                                         PageMethod('wait_for_selector', '.category-page-11ltxe6:nth-child(7)'),
//                                         PageMethod('wait_for_timeout', 1000)
//                                        ]
//                                     )
//                                     )

//     async def parse(self, response):
//         page = response.meta["playwright_page"]
//         await page.close()
//         product_urls = response.css('.product-card > div > a::attr("href")').getall()
//         for url in product_urls:
//             yield scrapy.Request(url, meta=dict(
//                 playwright = True,
//                 playwright_include_page = True,
//                 playwright_page_methods = [
//                     PageMethod('wait_for_selector', '#product-page'),
//                     PageMethod('click', selector=".pdp-drawer-trigger:last-child"),
//                     PageMethod('wait_for_timeout', 750),
//                     PageMethod('click', selector='#product-info-tabs-button--2')
//                 ],
//                 errback=self.errback,
//             ), callback=self.parseProductPages)
//     async def parseProductPages(self, response):
//         inseams_string = response.css('.tab-panel--active li:nth-child(3)::text').get()
//         inseams = [int(inseam) for inseam in re.findall('\d+', inseams_string)]
//         desired_inseams = list(filter(lambda inseam : inseam >= 35, inseams))

//         if len(desired_inseams) > 0:
//             scraped_info = {
//                 'url': response.url,
//                 'name': response.css('#buy-box h1::text').get(),
//                 'price': response.css('.pdp-pricing__selected::text').get(),
//                 'image': urllib.parse.urljoin(response.url, response.css('#product img::attr("src")').get()),
//                 'inseams': desired_inseams,
//                 'size-categories': response.css('.pdp-variant__label::text').getall()
//             }

//             yield scraped_info

//     async def errback(self, failure):
//         page = failure.request.meta["playwright_page"]
//         await page.close()
