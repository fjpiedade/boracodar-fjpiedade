IMask(document.querySelector('#cc-cvv'), {
    mask: '000'
})

IMask(document.querySelector('#cc-number'), {
    mask: '0000 0000 0000 0000'
})

IMask(document.querySelector('#cc-validity'), {
    mask: 'MM{/}YY',
    block:{
        MM:{
            mask: IMask.MaskRange,
            from: 1,
            to: 12
        },
        YY:{
            mask: IMask.MaskRange,
            from: String(new Date().getFullYear()).slice(2),
            to: String(new Date().getFullYear()+10).slice(2)
        }
    }
})