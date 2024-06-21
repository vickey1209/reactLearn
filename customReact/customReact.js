function customRender(reactElement,Container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.target)
    domElement.setAttribute('target', reactElement.props.target)

    Container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'click me to viSit google'
}

const Container = document.querySelector('#root')

customRender(reactElement, Container)