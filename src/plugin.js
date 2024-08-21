/* global kiwi:true */

import * as config from './config.js';

kiwi.plugin('template', (kiwi, logger) => {
    config.setDefaults(kiwi);

    /* Your plugin initialisation code */
});
