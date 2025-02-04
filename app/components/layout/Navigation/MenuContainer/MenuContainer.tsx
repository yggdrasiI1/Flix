import { FC } from 'react';
import Menu from './Menu';
import { firstMenu, secondMenu } from './menu.data';
import { userMenu } from './menu.data';

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<Menu menu={secondMenu} />
			<Menu menu={userMenu} />
		</div>
	);
};

export default MenuContainer;
