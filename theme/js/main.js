// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var i18nResource = {
    zh: {
        translation: {
            'programming': '编程',
            'english': '英文',
            'opensource': '开源',
            'config': '配置',
            'compiler': '编译器',
            'concurrent': '并发',
            'Tao can Talk': '道可叨',
            'Qiang': '强',
            'misc': '其它',
            'database': '数据库',
            'security': '安全',
            'poem': '诗',
            'performance': '性能',
            'design':'设计',
            'blog':'博客',
            'political':'政治',
            'review':'品评',
            'essay':'随笔',
            'life':'生活',
            'mobile':'移动'
        }
    }
};

$(document).ready(function() {
    i18n.init({
        detectLngQS: 'lang',
        fallbackLng: 'en',
        lowerCaseLng: true,
        resStore: i18nResource,
        debug: true,
        useCookie: false,
        fallbackLng: false
    }).done(function() {
        $('[i18n]').each(function() {
            var e = $(this);
            e.html($.t(e.html()));
        });
    });
    
    var lang = i18n.lng();
    if (moment.langData(lang)) {
        moment.lang(lang);        
    }
    else {
        lang = lang.split('-')[0]
        moment.lang(lang);
    }
    
    $('time[pubdate]').each(function() {
        var t = $(this);
        var time = t.attr('datetime');
        t.html(moment(time).fromNow());
    });

    $('.kbd').each(function() {
        var t = $(this);
        var key = t.html();
        key = $.trim(key)
        // key = key.toUpperCase();
        key = key.replace(/ +/g, '-');
        t.html(key);
    });

})
