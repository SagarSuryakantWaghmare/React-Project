function customRender(reactElement,container){
    /*
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
domElement.setAttribute('href',reactElement.props.href)
domElement.setAttribute('target',reactElement.props.target)
container.appendChild(domElement)
*/

    // Create the DOM element based on the type in reactElement
    const domElement = document.createElement(reactElement.type);
    
    // If reactElement has children and it's a string, set it as innerHTML
    if (typeof reactElement.children === 'string') {
        domElement.innerHTML = reactElement.children;
    }

    // Loop through the props object to set attributes
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;  // Skip the children prop
        domElement.setAttribute(prop, reactElement.props[prop]);  // Set attribute for other props
    }

    // Append the created DOM element to the container
    container.appendChild(domElement);
}

// Define the reactElement object with type, props, and children
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

// Get the main container where the DOM element should be rendered
const mainContainer = document.querySelector('#root');

// Call customRender to render the reactElement into the main container
customRender(reactElement, mainContainer);
