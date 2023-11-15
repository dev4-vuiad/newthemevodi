$(document).ready(function() {
    let expanded = false
    $('.maxlist-more').on('click', function(event) {
        event.preventDefault()
        expanded = !expanded
        let ele = $(event.target), h
        if (expanded) {
            let div = ele.parent().clone()
            div.children('div').css('max-height', 'fit-content')
            div.css('display', 'none').appendTo(ele.parent().parent())
            h = div.height()
            div.remove()
        } else {
            h = 50
        }
        ele.prev().css('max-height', h + 'px')
        ele.html(expanded ? 'Show Less' : 'Read More')
    })
})