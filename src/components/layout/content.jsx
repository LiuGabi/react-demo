import React from 'react';

import Button from '@/components/button/button.jsx';
import Clock from '@/components/clock/index.jsx';

class Content extends React.Component {
	render() {
		return <div className='content'>
				<Button text='我是按钮'/>
				<Clock/>
				<Clock/>
				<Clock/>
		</div>;
	}
}

export default Content;