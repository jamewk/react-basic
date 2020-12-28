const Footer = (props) =>{
    const { company, email } = props;
    return (
        <div>
            <hr />
            <div className="text-center title">
                <small>
                    <span className="text-muted">
                        Powered by {company} |
                    </span>&nbsp;
                    <span className="text-muted">
                        Contact By Email: 
                    </span>
                    &nbsp;
                    <span className="text-info">
                        {email}
                    </span>
                </small>
            </div>
            <br />
        </div>
    )
}

export default Footer;