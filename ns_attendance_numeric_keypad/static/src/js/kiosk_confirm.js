odoo.define('ns_attendance_numeric_keypad.kiosk_confirm', function (require) {
    "use strict";

    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');
    var QWeb = core.qweb;

    var KioskConfirm = require('hr_attendance.kiosk_confirm');

    var NoasourceKioskConfirm = KioskConfirm.include({
        init: function (parent, action) {
            var self = this;
            this._super.apply(this, arguments);

            $(document).keyup(function (event) {
                if (event.key === 'Backspace' || event.key === 'Delete') {
                    self.$('.o_hr_attendance_pin_pad_button_C').click();
                }
                if (event.key >= 0 || event.key <= 9) {
                    self.$('.o_hr_attendance_pin_pad_button_' + event.key).click();
                }
                if (event.key === 'Enter') {
                    self.$('.o_hr_attendance_pin_pad_button_ok').click();
                }
            });
        },
    });

    return {
        KioskConfirm: NoasourceKioskConfirm,
    };

});
