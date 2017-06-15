/* ###################################################
              ハンバーガーメニューの切り替え処理
#####################################################*/
$(function() {
    $(".navmenu").click(function() {
        $(".navmenu").toggleClass("icon-menu");
        $(".navmenu").toggleClass("icon-cross");
        $("nav").toggleClass("nav-open");
        $(".navmenu_list").slideToggle("fast");
    });
});

/* ###################################################
              メニューのscroll処理
#####################################################*/
$(function() {
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function() {
        // スクロールの速度
        var speed = 700; // ミリ秒
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});