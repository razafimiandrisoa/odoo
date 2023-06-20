# -*- coding: utf-8 -*-
{
    'name': "Noasource backend theme",
    'sequence': -4,
    'summary': """
        Inherit web_responsive module
    """,
    'description': """
        Backend theme for odoo v15 community
    """,
    'author': "Noarison Léonce RAZAFIMIANDRISOA",
    "maintainers": ["Noarison Léonce RAZAFIMIANDRISOA (lrazafimaindrisoa@gmail.com)"],
    'category': 'Website',
    'version': '15.1.0.0',
    'depends': ['base', 'web_responsive'],
    "excludes": ["web_enterprise"],
    'data': [
    ],
    'assets': {
        "web.assets_backend": [
            "/ns_backend_theme/static/src/extra/js/topbar.js",
            "/ns_backend_theme/static/src/js/sidebar_menu.js",
            "/ns_backend_theme/static/src/js/loading_indicator.js",
            "/ns_backend_theme/static/src/scss/loading.scss",
            "/ns_backend_theme/static/src/scss/sidebar.scss",
            "/ns_backend_theme/static/src/scss/navbar.scss",
        ],
        "web.assets_qweb": [
            "/ns_backend_theme/static/src/xml/top_bar.xml",
        ],
    },

}
