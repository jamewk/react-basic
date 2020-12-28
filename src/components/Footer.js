const Footer = (props) =>{
    const { company, email } = props;
    return (
        <div>
            <hr />
            <div className="text-center title text-uppercase">
                <small>
                    <span className="text-danger">
                        Powered by {company} 
                    </span> | 	&nbsp;
                    <span className="text-muted">
                        Contact By Email : {email}
                    </span>
                </small>
            </div>
            <br />
        </div>
    )
}

export default Footer;