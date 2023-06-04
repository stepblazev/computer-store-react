import { FC, useState } from 'react';
import styles from './tabs.module.scss';

export interface ITab {
	label: string;
	Component: React.ReactElement;
}

export enum TabsType {
	HORIZONTAL = 'row',
	VERTICAL = 'column',
}

type TabsProps = {
	tabs: ITab[];
	direction?: TabsType;
};

const Tabs: FC<TabsProps> = ({ tabs, direction = TabsType.HORIZONTAL }) => {
	const [current, setCurrent] = useState<number>(0);

	return (
		<div
			className={styles.tabs}
			style={{ flexDirection: direction === TabsType.HORIZONTAL ? 'column' : 'row' }}
		>
			<ul className={styles.links} style={{ flexDirection: direction }}>
				{tabs.map((tab, index) => (
					<li
						key={tab.label}
						className={[
							styles.links__item,
							index === current ? styles.links__itemActive : '',
						].join(' ')}
						onClick={() => setCurrent(index)}
					>
						{tab.label}
					</li>
				))}
			</ul>
			<div className={styles.tabs__component}>{tabs[current].Component}</div>
		</div>
	);
};

export default Tabs;
