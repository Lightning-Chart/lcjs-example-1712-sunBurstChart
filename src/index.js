window.lcjsSmallView = window.devicePixelRatio >= 2
const lcjs = require('@lightningchart/lcjs')
const { lightningChart, Themes, } = lcjs

// Initialize LightningChart JS
const lc = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })

const chart = lc.
    SunBurstChart({
        theme: (() => {
    const t = Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
    return t && window.lcjsSmallView ? lcjs.scaleTheme(t, 0.5) : t
})(),
textRenderer: window.lcjsSmallView ? lcjs.htmlTextRenderer : undefined,
    })
    .setTitle('Inventory by Category')
chart.nodes.addEventListener('click', (event, node) => {
    console.log(node)
})
const data = [
    {
        name: 'Clothing',
        children: [
            {
                name: 'Men',
                children: [
                    { name: 'Tops', value: 280 },
                    { name: 'Bottoms', value: 265 },
                    { name: 'Shoes', value: 188 },
                    { name: 'Accessories', value: 120 },
                ],
            },
            {
                name: 'Women',
                children: [
                    { name: 'Tops', value: 380 },
                    { name: 'Bottoms', value: 340 },
                    { name: 'Dresses', value: 220 },
                    { name: 'Shoes', value: 242 },
                    { name: 'Accessories', value: 180 },
                ],
            },
            {
                name: 'Children',
                children: [
                    { name: 'Clothing', value: 220 },
                    { name: 'Shoes', value: 130 },
                    { name: 'Accessories', value: 80 },
                ],
            },
        ],
    },
    {
        name: 'Electronics',
        children: [
            {
                name: 'Mobile Phones',
                children: [
                    { 
                        name: 'Smartphones', 
                        children: [ 
                            { name: 'Android', value: 689 }, 
                            { name: 'iOS', value: 388 }, 
                        ], 
                    },
                    { name: 'Accessories', value: 467 },
                ],
            },
            {
                name: 'Laptops',
                children: [
                    { name: 'Ultrabooks', value: 219 },
                    { name: 'Gaming Laptops', value: 170 },
                    { name: 'Business Laptops', value: 232 },
                ],
            },
            {
                name: 'Audio & Video',
                children: [
                    { name: 'Headphones', value: 551 },
                    { name: 'Speakers', value: 205 },
                    { name: 'Smart TVs', value: 190 },
                ],
            },
        ],
    },
    {
        name: 'Home & Kitchen',
        children: [
            {
                name: 'Kitchen',
                children: [
                    { name: 'Cookware', value: 223 },
                    { name: 'Utensils', value: 175 },
                    { name: 'Appliances', value: 112 },
                ],
            },
            {
                name: 'Decor',
                children: [
                    { name: 'Lighting', value: 181 },
                    { name: 'Wall Art', value: 118 },
                ],
            },
        ],
    },
    {
            name: 'Health & Beauty',
            children: [
                {
                    name: 'Personal Care',
                    children: [
                        { name: 'Skincare', value: 574 }, 
                        { name: 'Haircare', value: 399 },
                        { name: 'Bodycare', value: 331 }, 
                        { name: 'Oral Care', value: 249 }, 
                    ],
                },
                {
                    name: 'Makeup',
                    children: [
                        { name: 'Face', value: 270 },                        
                        { name: 'Eyes', value: 210 },
                        { name: 'Lips', value: 182 },
                    ],
                },
                {
                name: 'Healthcare',
                children: [
                    { name: 'Supplements', value: 330 },
                    { name: 'Equipment', value: 93 },
                ],
                },
            ],
        },
    {
        name: 'Sports', 
        children: [
            { name: 'Fitness', value: 472 },
            {name: 'Hiking', value: 391 }, 
            { name: 'Team Sports', value: 310 },
        ],
    },
]

chart.setData(data)