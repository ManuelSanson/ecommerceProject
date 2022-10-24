import './Footer.css';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <h6>Developed by Manuel Sanson</h6>
            <div className='footerLogos'>
                <a href="https://www.linkedin.com/in/manuel-sanson-trans-dev/?locale=en_US" target="blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png" alt="Linkedin logo"/> 
                </a>
                <a href="https://github.com/ManuelSanson" target="blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub logo"/> 
                </a>
            </div>
        </div>
    )
}

export default Footer;