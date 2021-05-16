const Header = () => {
    const header = document.createElement('h1');
    const headerText = document.createTextNode('Hello world');
    header.appendChild(headerText);

    return header;
};

export default Header;