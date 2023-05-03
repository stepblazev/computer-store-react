import { FC } from 'react';
import { IType } from '../../../../../models/deviceModels';
import { BiCategory as TypeSVG } from 'react-icons/bi';
import styles from './type-list.module.scss';

type TypeListProps = {
	types: IType[];
};

// FIXME вставить ссылку
const TypeList: FC<TypeListProps> = ({ types }) => {
	if (!types.length) return null;

	return (
		<ul className={styles.list}>
			<li className={styles.list__header}>
				<TypeSVG />
				Категории:
			</li>
			{types.map((type) => (
				<li key={type.id} className={styles.type}>
					{type.name}
				</li>
			))}
		</ul>
	);
};

export default TypeList;
