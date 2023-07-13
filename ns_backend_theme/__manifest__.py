# -*- coding: utf-8 -*-
{
    'name': "Noasource backend theme",
    'sequence': -4,
    'summary': """
        Inherit web_responsive module
    """,
    'description': """
        Backend theme for odoo v12 community
    """,
    'author': "Noarison Léonce RAZAFIMIANDRISOA",
    "maintainers": ["Noarison Léonce RAZAFIMIANDRISOA (lrazafimaindrisoa@gmail.com)"],
    'category': 'Themes/Backend',
    'version': '12.1.0.0',
    'depends': ['base', 'web_responsive', 'web'],
    "excludes": ["web_enterprise"],
    'data': [
        'views/templates.xml',
    ],

    'qweb': [
        'static/src/xml/top_bar.xml',
    ],

}
