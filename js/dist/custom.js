/**
 * --------------------------------------------------------------------------
 * Themeblr (v1.0.0): custom.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Custom = (function ($) {

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'custom';
    var VERSION = '1.0.0';
    var DATA_KEY = 'bs.custom';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];

    var ClassName = {
        ACTIVE: 'active',
        CUSTOM: 'ctm',
        FOCUS: 'focus'
    };

    var Selector = {
        DATA_TOGGLE_CARROT: '[data-action^="custom"]',
        DATA_TOGGLE: '[data-action="customss"]',
        INPUT: 'input',
        ACTIVE: '.active',
        CUSTOM: '.ctm'
    };

    var Event = {
        CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
        FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Custom = (function () {
        function Custom(element) {
            _classCallCheck(this, Custom);

            this._element = element;
        }

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        // getters

        _createClass(Custom, [{
            key: 'action',

            // public

            value: function action() {
                /* called on click */
                var triggerChangeEvent = true;
                var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];
            }

            // static

        }], [{
            key: '_jQueryInterface',
            value: function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);

                    if (!data) {
                        data = new Custom(this);
                        $(this).data(DATA_KEY, data);
                    }

                    if (config === 'action') {
                        data[config]();
                    }
                });
            }
        }, {
            key: 'VERSION',
            get: function get() {
                return VERSION;
            }
        }]);

        return Custom;
    })();

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
        event.preventDefault();

        var custom = event.target;

        if (!$(custom).hasClass(ClassName.CUSTOM)) {
            custom = $(custom).closest(Selector.CUSTOM);
        }

        Custom._jQueryInterface.call($(custom), 'action');
    });

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Custom._jQueryInterface;
    $.fn[NAME].Constructor = Custom;
    $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Custom._jQueryInterface;
    };

    return Custom;
})(jQuery);
//# sourceMappingURL=custom.js.map
