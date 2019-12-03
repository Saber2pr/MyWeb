// 复制以下代码

(function() {
    'use strict';
    // 就按自己需要改下面就好了
    document.addEventListener('keydown', e => {
        switch(e.key){
            case 'f':{
                const currentPageIndex = getPageIndex()
                forward.click() // 后一页
                addPageLoadedListenerOnce(currentPageIndex+1, index => alert(`第${index}页到了，可以操作`))
            }
            break;
            case 'b':{
                const currentPageIndex = getPageIndex()
                back.click() // 前一页
                addPageLoadedListenerOnce(currentPageIndex-1, index => alert(`第${index}页到了，可以操作`))
            }
            break;
        }
    })

    // 下面的可以不管
    const $ = selector => document.querySelector(selector)
    // nav
    const nav = $('div[data-reactid=".0.5.1.0"]')
    const forward = nav.children[1]
    const back = nav.children[0]
    // pageList
    const pageList = $('ul[data-reactid=".0.8.1.0"]')
    const getPageIndex = () => Number(pageList.getElementsByClassName('pagination-item-active')[0].textContent)

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
