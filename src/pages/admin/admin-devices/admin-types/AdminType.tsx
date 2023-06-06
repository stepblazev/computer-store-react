import { FC, useState, useEffect } from 'react';
import styles from './admin-types.module.scss';
import useFetching from '../../../../hooks/useFetching';
import Loader from '../../../../components/_UI/loader/Loader';
import { IType } from '../../../../models/deviceModels';
import Button from '../../../../components/_UI/button/Button';
import AdminService from '../../../../http/services/AdminService';
import { MdDelete } from 'react-icons/md';

type AdminTypesProps = {
	type: string;
	setType: (type: string) => any;
};

const AdminTypes: FC<AdminTypesProps> = ({ type, setType }) => {
	const [types, setTypes] = useState<IType[]>([]);
	const [fetchTypes, isLoading, error] = useFetching(async () => {
		const response = await AdminService.getTypes();
		setTypes(response.data);
	});

	useEffect(() => {
		fetchTypes();
	}, []);

	const addHandler = async () => {
		const value = prompt('Введите новый тип:', 'Название типа');
		if (!value) return;

		if (value.length > 2) {
			const response = await AdminService.postType(value);
			setTypes(response.data);
		} else {
			alert('Некорректное значение!');
		}
	};

	const deleteHandler = async (type: string) => {
		if (confirm('Удалить данный тип? Все товары данного типа будут удалены.')) {
			await AdminService.deleteType(type);
			fetchTypes();
			setType('');
		}
	};

	return (
		<div className={styles.types}>
			<div className={styles.types__add}>
				<Button label='Добавить' onClick={addHandler} />
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<ul className={styles.types__list}>
					<li
						onClick={() => setType('')}
						className={type === '' ? styles.types__listActive : ''}
					>
						выбрать все
					</li>
					{types.map((t) => (
						<li
							key={t.id}
							onMouseDown={() => setType(t.name)}
							className={type === t.name ? styles.types__listActive : ''}
						>
							<span className={styles.types__listName}>{t.name}</span>
							<button
								className={styles.types__listDelete}
								onClick={() => deleteHandler(t.name)}
							>
								<MdDelete />
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AdminTypes;
