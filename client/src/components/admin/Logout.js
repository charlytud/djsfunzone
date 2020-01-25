import React from 'react';

const Logout = (props) => {

    const goodBye = setTimeout(() => {
        props.history.push('/');
    }, 5000);
    
    return (
        <div className="app-wrapper--full">
            <div className="app-logout">
                <h2>Good Bye !</h2>
                <p>Please do send me your review/critics</p>
                <div className="app-logout__regards">
                    <ul>
                        <li>Kind regards,</li>
                        <li>Georges C. Takoudjou</li>
                        <li>C. 071 618 1209</li>
                        <li>E. georges.it@outlook.com</li>
                    </ul>
                </div> 
            </div>           
        </div>
    )
}

export default Logout;