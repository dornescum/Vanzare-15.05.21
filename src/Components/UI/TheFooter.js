import './Footer.css';
import phone from '../../assets/img/phone.png'

const TheFooter =()=>{
    return <div className="footer">
        {/*<ul className="footer-list">*/}
        {/*    <li className="footer-link">090909</li>*/}
        {/*    <li className="footer-link">090909</li>*/}
        {/*</ul>*/}
        <button className='footer-btn'>
            <img src={phone} className='footer-img'></img>

             0756 058 966</button>
    </div>
}
export default TheFooter;

