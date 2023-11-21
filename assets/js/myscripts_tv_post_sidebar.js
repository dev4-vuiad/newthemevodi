$(document).ready(function() {
    const nTab = $('.custom-sidebar-ep .nav-item').length
    const customSidebarEp = {
        currentIdx: 0,
        showIdxs: Array(...Array(nTab)).map((_, i) => 10)
    }

    $('.custom-sidebar-ep .nav-item a').on('click', function(event) {
        event.preventDefault()
        customSidebarEp.currentIdx = $(this).parent().index()
        $(this).addClass('active show')
        $(this).parent().siblings().find('a').removeClass('active show')
        $('.custom-sidebar-ep').find('.tab-pane:eq(' + customSidebarEp.currentIdx + ')').addClass('active show')
        $('.custom-sidebar-ep').find('.tab-pane:eq(' + customSidebarEp.currentIdx + ')').siblings().removeClass('active show')
    })

    $('.list-episode-show-more').on('click', function(event) {
        event.preventDefault()
        customSidebarEp.showIdxs[customSidebarEp.currentIdx] += 10
        $('.custom-sidebar-ep').find('.tab-pane:eq(' + customSidebarEp.currentIdx + ') .status-publish:lt(' + customSidebarEp.showIdxs[customSidebarEp.currentIdx] + ')').show()
    })
})