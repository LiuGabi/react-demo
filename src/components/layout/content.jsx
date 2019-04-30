import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@/components/button/button.jsx';

class Content extends React.Component {
	render() {
		return <div className='content'>
				<Button text='我是按钮'></Button>
		</div>;
	}
}

export default Content;