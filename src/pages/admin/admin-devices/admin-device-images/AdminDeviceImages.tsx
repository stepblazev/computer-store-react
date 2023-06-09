import { FC, useState, ChangeEvent, DragEvent } from 'react';
import { IImage } from '../../../../models/deviceModels';
import { API_URL } from '../../../../_config';
import Button from '../../../../components/_UI/button/Button';
import styles from './admin-device-images.module.scss';
import Modal from '../../../../components/_UI/modal/Modal';
import Group from '../../../../components/_UI/group/Group';
import { BsImage as ImageSVG } from 'react-icons/bs';

type AdminDeviceImagesProps = {
	images: IImage[];
	deleteHandler: (full: string, preview: string) => any;
	addHandler: (data: string) => any;
};

const AdminDeviceImages: FC<AdminDeviceImagesProps> = ({ images, deleteHandler, addHandler }) => {
	const [addModal, setAddModal] = useState<boolean>(false);
	const [image, setImage] = useState<string | null>(null);

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				const imageData = reader.result as string;
				setImage(imageData);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				const imageData = reader.result as string;
				setImage(imageData);
			};
			reader.readAsDataURL(file);
		}
	};

	const saveHandler = () => {
		if (!image) return;
		addHandler(image);
		setAddModal(false);
		setImage(null);
	};

	return (
		<Group label={`Изображения [${images.length} шт.]`}>
			<div className={styles.images}>
				<div className={styles.images__content}>
					{images.map((image, index) => (
						<div key={index} className={styles.images__item}>
							<img src={`${API_URL}/${image.url_full}`} alt='IMAGE' />
							<button
								onClick={() => deleteHandler(image.url_full, image.url_preview)}
							>
								Удалить
							</button>
						</div>
					))}
					<Button label='Добавить' onClick={() => setAddModal(true)} />
				</div>
				<Modal
					state={addModal}
					hide={() => {
						setImage(null);
						setAddModal(false);
					}}
				>
					<div className={styles.add}>
						<div className={styles.add__content}>
							<label
								htmlFor='image-input'
								onDrop={handleDrop}
								onDragOver={(e) => e.preventDefault()}
							>
								{image ? (
									<img src={image} alt='Uploaded' />
								) : (
									<div className={styles.drop}>
										<ImageSVG />
										<span>
											Перетащите изображение сюда или кликните, чтобы выбрать
											файл.
										</span>
									</div>
								)}
							</label>
							<input
								id='image-input'
								type='file'
								accept='image/*'
								onChange={handleImageChange}
								style={{ display: 'none' }}
							/>
						</div>
						<Button onClick={saveHandler} label='Сохранить' />
					</div>
				</Modal>
			</div>
		</Group>
	);
};

export default AdminDeviceImages;
