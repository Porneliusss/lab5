import './../styles/footer.css'

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer_contact-info">
                <h3>Контакты</h3>
                <p>Телефон: +375(11)111-11-11</p>
                <p>Email: email@example.com</p>
                <p>Адрес: Минск, ул. Ленина, 1</p>
            </div>
            <div className="footer_about-us">
                <h3><a className='footer-a' href="#about-us">«О нас»</a></h3>
            </div>
            <div className="footer_social-links">
                <h3>Cоциальные сети</h3>
                    <ul>
                        <li><a className='footer-a' href="https://www.instagram.com/example">Instagram</a></li>
                        <li><a className='footer-a' href="https://www.facebook.com/example">Facebook</a></li>
                        <li><a className='footer-a' href="https://www.twitter.com/example">Twitter</a></li>
                    </ul>
            </div>
    </footer>
     );
}
 
export default Footer;