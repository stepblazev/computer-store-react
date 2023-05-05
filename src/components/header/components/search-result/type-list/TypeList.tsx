import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BiCategory as TypeSVG } from 'react-icons/bi';
import styles from './type-list.module.scss';

type TypeListProps = {
	types: string[];
};

const TypeList: FC<TypeListProps> = ({ types }) => {
	if (!types.length) return null;

	return (
		<ul className={styles.list}>
			<li className={styles.list__header}>
				<TypeSVG />
				Категории:
			</li>
			{types.map((type) => (
				<li key={type} className={styles.type}>
					<Link to={`/device?type=${type}`}>{type}</Link>
				</li>
			))}
		</ul>
	);
};

export default TypeList;
