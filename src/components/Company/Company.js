import './Company.css';

export const Company = ({company: {name, catchPhrase, bs}}) => {
    return (
        <div className="user_company">
            <h3 className="subtitle">company data</h3>
            <div className="company_data">
                <ul className="hint">
                    <li>name:</li>
                    <li>catch phrase:</li>
                    <li>bs:</li>
                </ul>
                <ul className="data">
                    <li>{name}</li>
                    <li>{catchPhrase}</li>
                    <li>{bs}</li>
                </ul>
            </div>
        </div>
    );
};