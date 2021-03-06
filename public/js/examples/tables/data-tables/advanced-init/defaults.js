/**
 * Admui-iframe v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function (window, document, $) {
    "use strict";

    $.extend(true, $.fn.dataTable.defaults, $.concatCpt('dataTable'), {
        "searching": false,
        "ordering": false
    });

    $('#dataTableExample').DataTable();

})(window, document, jQuery);

