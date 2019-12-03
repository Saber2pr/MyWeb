// 复制以下代码


(function() {
    'use strict';
    // 就按自己需要改下面就好了
    const onPageChange = index => transform(p => {
        // 操作商品简介元素
        p.after("XXX")
    })

    document.addEventListener('keydown', e => {
        switch(e.key){
            case 'f':{
                const currentPageIndex = getPageIndex()
                forward.click() // 后一页
                addPageLoadedListenerOnce(currentPageIndex+1, onPageChange)
            }
            break;
            case 'b':{
                const currentPageIndex = getPageIndex()
                back.click() // 前一页
                addPageLoadedListenerOnce(currentPageIndex-1, onPageChange)
            }
            break;
        }
    })

    // css选择器
    const selectors = {
      nav:'div[data-reactid=".0.5.1.0"]',
      pageList: 'ul[data-reactid=".0.8.1.0"]',
      pageIndexActive: 'pagination-item-active',
      shopInfo: 'ml-mod__container___2DOxT production-mod__production___1MKah suborder-mod__production___3WebF'
    }
    // 下面的可以不管
    const $ = selector => document.querySelector(selector)
    // nav
    const nav = $(selectors.nav)
    const forward = nav.children[1]
    const back = nav.children[0]
    // pageList
    const pageList = $(selectors.pageList)
    const getPageIndex = () => Number(pageList.getElementsByClassName(selectors.pageIndexActive)[0].textContent)
    // transformer
    const transform = op => Array.from(document.getElementsByClassName(selectors.shopInfo)).forEach(ch => op(ch.querySelector('p')))

    // addPageLoadedListenerOnce
    const addPageLoadedListenerOnce = (pageIndex, callback, timeout = 10000) => {
        let isPending = true
        const handle = setInterval(() => {
            if(isPending){
                const currentPageIndex = getPageIndex()
                if(currentPageIndex === pageIndex) {
                    isPending = false
                    callback(pageIndex)
                }
            }else{
                clearInterval(handle)
                clearTimeout(timeoutHandle)
            }
        }, 100)
        // timeout
        const timeoutHandle = setTimeout(() => {
            clearInterval(handle)
            alert('请求超时')
        }, timeout)
    }
})();
