export default {
    "$schema": "https://schemas.wp.org/trunk/theme.json",
    "version": 3,
    "customTemplates": [
        {
            "title": "canvas",
            "name": "single-canvas",
            "postTypes": ["canvas", "post"]
        },
        {
            "title": "event",
            "name": "single-event",
            "postTypes": ["event", "post"]
        },
        {
            "title": "gallery",
            "name": "single-gallery",
            "postTypes": ["gallery", "post"]
        },
        {
            "title": "modal",
            "name": "single-modal",
            "postTypes": ["popup", "post"]
        },
        {
            "title": "product",
            "name": "single-product",
            "postTypes": ["product", "post"]
        },
        {
            "title": "quote",
            "name": "single-quote",
            "postTypes": ["quote", "post"]
        },
        {
            "title": "review",
            "name": "single-review",
            "postTypes": ["review", "post"]
        },
        {
            "title": "testimonial",
            "name": "single-testimonial",
            "postTypes": ["testimonial", "post"]
        }
    ],
    "patterns": [
        "carousel",
        "cheatsheet",
        "contact-section",
        "cover",
        "features",
        "footers",
        "grids",
        "headers",
        "heroes",
        "jumbotron",
        "jumbotrons",
        "mixed-cols-mobile-tablet-and-desktop",
        "mixed-cols-mobile-and-desktop",
        "offcanvas-navbar",
        "pricing",
        "query-loop-grid",
        "query-loop-list",
        "sidebars",
        "sign-in",
        "sticky-footer-navbar",
        "three-equal-columns-alt",
        "three-unequal-columns",
        "three-equal-columns"
    ],
    "templateParts": [
        {
            "name": "header",
            "title": "Header",
            "area": "header"
        },
        {
            "name": "footer",
            "title": "Footer",
            "area": "footer"
        },
        {
            "name": "sidebar",
            "title": "Sidebar",
            "area": "sidebar"
        }
    ]
}