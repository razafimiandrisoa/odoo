# -*- coding: utf-8 -*-
#############################################################################
#
#   Noasource (lrazafimiandrisoa@gmail.com)
#
#############################################################################

{
    "name": "Noasource Backend Theme V15",
    "description": """Backend theme for Odoo 15""",
    "summary": "Noasource Backend Theme V15 is an attractive theme for backend",
    "category": "Theme/Backend",
    "version": "15.1.0.0",
    'author': 'Noasource (lrazafimiandrisoa@gmail.com)',
    'company': 'Noasource (lrazafimiandrisoa@gmail.com)',
    'maintainer': 'Noasource (lrazafimiandrisoa@gmail.com)',
    'website': "",
    "depends": ['base', 'web', 'mail'],
    "data": [
        'views/layout.xml',
    ],
    'assets': {
        'web.assets_backend': {
            '/noasource_backend_theme/static/src/scss/theme.scss',
            '/noasource_backend_theme/static/src/js/chrome/sidebar_menu.js',
        },
        'web.assets_frontend': {
            '/noasource_backend_theme/static/src/scss/login.scss',
            '/noasource_backend_theme/static/src/scss/login.scss',
        },
        'web.assets_qweb': {
            '/noasource_backend_theme/static/src/xml/top_bar.xml',
        },
    },
    'images': [
        'static/description/theme_screenshot.png',
    ],
    'license': 'LGPL-3',
    'installable': True,
    'application': False,
    'auto_install': False,
}
