$(function(){
	if($(".qa-q-list").length && $(".qa-page-links-list").length) {
		var ias = $.ias({
			container: ".qa-q-list"
			,item: ".qa-q-list-item"
			,pagination: ".qa-page-links-list"
			,next: ".qa-page-next"
			,noneleft: '<div class="ias_noneleft">No more items.</div>'
			,delay: 600
			,scrollContainer: $(window)
		});
    ias.extension(new IASSpinnerExtension());
    ias.extension(new IASTriggerExtension({
        text: "続きを読む",
        offset: 100,
    }));ias.extension(new IASNoneLeftExtension({
      html: '<div class="ias_noneleft">最後の記事です</div>', // optionally
    }));
    ias.extension(new IASPagingExtension());
    ias.extension(new IASHistoryExtension({
        prev: '.qa-page-prev',
    }));
	}
});
