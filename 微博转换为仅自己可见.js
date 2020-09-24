var s = document.createElement("script");
s.setAttribute("src", "https://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min.js");
s.onload = function () {
    for (var i = 0; i < 1000; i++) {
        setTimeout(function () {
            var b = $('a[title="转换为仅自己可见"]')[0]
            if (b == undefined) {
                // 下一页
                var n = $('a[class="page next S_txt1 S_line1"]')[0]
                // 查看更早微博
                n = n == undefined ? $('a[action-type="fl_nextTimeBase"]')[0] : n
                if (n == undefined) {
                    $(document).scrollTop($(document).height());
                } else {
                    n.click();
                }
            } else {
                b.click();
                $('a[action-type="ok"]')[0].click();
            }
        }, 2000 * i);
    }
}; document.head.appendChild(s);
