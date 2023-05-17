import { FC, ReactNode, MouseEvent } from 'react';
import { RiCloseCircleFill as CloseSVG } from 'react-icons/ri';
import styles from './modal.module.scss';
import SlideIn, { SlideInDirections } from '../../../animations/SlideIn';

type ModalProps = {
	state: boolean;
	hide: () => any;
	children: ReactNode;
};

const Modal: FC<ModalProps> = ({ children, state, hide }) => {
	if (!state) return null;

	const hideHandle = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
		hide();
	};

	const insideHandle = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	return (
		<div className={styles.modal} onClick={hideHandle}>
			<SlideIn direction={SlideInDirections.TOP}>
				<div className={styles.modal__content} onClick={insideHandle}>
					{children}
					<button className={styles.modal__close} onClick={hideHandle}>
						<CloseSVG />
					</button>
				</div>
			</SlideIn>
		</div>
	);
};

export default Modal;
