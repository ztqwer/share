/**
 * Admui-iframe v2.1.0 (http://www.admui.com/)
 * Copyright 2015-2019 Admui Team
 * Licensed under the Admui License 1.1 (http://www.admui.com/about/license)
 */
(function($) {
  $(function() {
    // 切换card | table视图
    $('#button').click(function() {
      $('#table').bootstrapTable('toggleView');
    });
  });
})(jQuery);
