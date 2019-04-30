import React from 'react';

import Header from './header.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';

class Index extends React.Component {
	render() {
		return (
			<div className='layout'>
				<Header></Header>
				<Content></Content>
				<Footer></Footer>
			</div>
		);
	}
}

export default Index;