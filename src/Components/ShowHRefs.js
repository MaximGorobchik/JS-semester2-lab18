import React from 'react'

class ShowRefs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hrefs: [{ href: '1.html', text: 'link 1' }, { href: '2.html', text: 'link2' }, {href:'3.html', text:'link 3'}]};
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.hrefs.map((href) => (<li key={href}><a href={href.href}>{href.text}</a></li>))}
                </ul>
            </div>
        );
    }
}
export default ShowRefs;