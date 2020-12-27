const Footer = (props) =>{
    const { company, email } = props;
    return <p>Powered by {company} | Contact By Email : {email}</p>
}

export default Footer;