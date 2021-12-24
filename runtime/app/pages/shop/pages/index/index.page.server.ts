export {onBeforeRender};

function onBeforeRender() {
    return {
        pageContext: {
            documentProps: {
                title: '首页',
            }
        }
    }
}