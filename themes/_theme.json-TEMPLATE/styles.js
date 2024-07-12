export default {
    "styles": {
        "border": {
          "color": "var(--wp--custom--border--color)",
    
          "style": "var(--wp--custom--border--style)",
          "width": "var(--wp--custom--border--width)",
          "radius": "var(--wp--custom--border--radius)"
        },
        "background": {
          "backgroundImage": "",
          "backgroundPosition": "",
          "backgroundRepeat": "",
          "backgroundSize": ""
        },
        "color": {
          "background": "var(--wp--preset--color--bg)",
          "text": "var(--wp--preset--color--text)"
        },
        "typography": {
          "fontFamily": "var(--wp--preset--font-family--body)",
          "fontSize": "var(--wp--preset--font-size--body)",
          "fontWeight": "var(--wp--custom--font-weight--light)",
          "lineHeight": "var(--wp--custom--line-height--body)"
        },
        "spacing": {
          "blockGap": "var(--wp--preset--spacing--base)",
          "padding": {
            "top": "0",
            "right": "var(--wp--preset--spacing--base)",
            "bottom": "var(--wp--preset--spacing--base)",
            "left": "var(--wp--preset--spacing--base)"
          },
          "margin": {
            "top": "0",
            "right": "0",
            "bottom": "0",
            "left": "0"
          }
        },
        "css": "body{font-family:'antipol-variable',sans-serif;font-variation-settings:var(--wp--custom--font-var-set--body)}",
        "blocks": {
          "core/buttons": {},
          "core/button": {},
          "core/content": {},
          "core/form": {},
          "core/paragraph": {},
          "core/heading": {},
          "core/group": {},
          "core/columns": {},
          "core/form-submission-notification": {},
          "core/form-submit-button": {},
          "core/form-input": {},
          "core/image": {},
          "core/post-featured-image": {},
          "core/gallery": {},
    
          "core/post-excerpt": {},
          "core/list": {
            "spacing": {
              "margin": {},
              "padding": {}
            },
            "typography": {
              "fontSize": {},
              "lineHeight": {}
            }
          },
          "core/list-item": {
            "spacing": {
              "margin": {},
              "padding": {}
            },
            "typography": {
              "fontSize": {},
              "lineHeight": {}
            }
          },
          "core/post-title": {},
          "core/navigation": {},
          "core/home-link": {},
          "core/navigation-submenu": {},
          "core/page-list": {},
          "core/page-list-item": {},
          "core/pullquote": {},
          "core/quote": {},
          "core/rss": {},
          "core/search": {},
          "core/separator": {},
          "core/site-logo": {},
          "core/site-tagline": {},
          "core/site-title": {},
          "core/social-links": {},
          "core/social-link": {}
        },
        "elements": {
          "button": {
            "border": {
              "radius": "var(--wp--custom--border-radius)"
            },
            "color": {
              "background": "var(--wp--custom--btn-1--bg)",
              "text": "var(--wp--custom--btn-1--text)"
            },
            "spacing": {
              "padding": {
                "top": ".5rem",
                "right": "1rem",
                "bottom": ".5rem",
                "left": "1rem"
              }
            },
            "typography": {
              "fontSize": "var(--wp--preset--font-size--body)",
              "fontWeight": "var(--wp--custom--font-weight--body)",
              "textDecoration": "underline"
            },
            ":hover": {
              "color": {
                "background": "var(--wp--custom--btn-1--bg-hov)",
                "text": "var(--wp--custom--btn-1--text-hov)"
              },
              "typography": {
                "textDecoration": "none"
              }
            }
          },
          "caption": {},
          "cite": {},
          "heading": {
            "typography": {
              "fontFamily": "var(--wp--preset--font-family--heading)",
              "lineHeight": "var(--wp--custom--line-height--heading)"
            }
          },
          "h1": {
            "typography": {
              "fontFamily": {},
              "fontStyle": {},
              "letterSpacing": {},
              "lineHeight": {},
              "textDecoration": {},
              "textAlign": "",
              "textColumns": "",
              "textTransform": "",
              "writingMode": {},
              "fontSize": "var(--wp--preset--font-size--h-1)",
              "fontWeight": "var(--wp--custom--font-weight--h-1)"
            },
            "css": "var(--wp--custom--font-var-set--h-1)"
          },
          "h2": {
            "typography": {
              "fontSize": "var(--wp--preset--font-size--h-2)",
              "fontWeight": "var(--wp--custom--font-weight--h-2)"
            },
            "css": "var(--wp--custom--font-var-set--h-2)"
          },
          "h3": {
            "typography": {
              "fontSize": "var(--wp--preset--font-size--h-3)",
              "fontWeight": "var(--wp--custom--font-weight--h-3)"
            },
            "css": "var(--wp--custom--font-var-set--h-3)"
          },
          "h4": {
            "typography": {
              "fontSize": "var(--wp--preset--font-size--h-4)",
              "fontWeight": "var(--wp--custom--font-weight--h-4)"
            },
            "css": "var(--wp--custom--font-var-set--h-4)"
          },
          "h5": {
            "typography": {
              "fontSize": "var(--wp--preset--font-size--h-5)",
              "fontWeight": "var(--wp--custom--font-weight--h-5)"
            },
            "css": "var(--wp--custom--font-var-set--h-5)"
          },
          "h6": {
            "typography": {
              "fontSize": "var(--wp--preset--font-size--h-6)",
              "fontWeight": "var(--wp--custom--font-weight--h-6)"
            },
            "css": "var(--wp--custom--font-var-set--h-6)"
          },
          "link": {
            "color": {
              "text": "var(--wp--preset--color--link)"
            },
            "typography": {
              "textDecoration": "underline"
            },
            ":hover": {
              "typography": {
                "textDecoration": "underline"
              }
            }
          }
        }
      },
}