# -*- coding: utf-8 -*-
{
    'name': "Attendance numeric keypad",
    'icon': 'ns_attendance_numeric_keypad/static/description/icon.png',
    'summary': """
        Module for odoo v12 inherit hr_attendance
    """,
    'description': """
        Module to use numpad in kiosk mode in attendance odoo v12
    """,
    'author': "Noarison Léonce RAZAFIMIANDRISOA",
    'website': "Noasource(lrazafimiandrisoa@gmail.com)",
    'category': 'Tools',
    'version': '12.1.0.0',
    'depends': [
        'base',
        'hr_attendance'
    ],
    'data': [
        'views/templates.xml',
    ],
}
