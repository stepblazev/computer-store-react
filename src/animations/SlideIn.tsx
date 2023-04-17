import { FC } from 'react';
import { useSpring, animated, easings } from '@react-spring/web';

export enum SlideInDirections {
	TOP = 'translateY(50px)',
	BOTTOM = 'translateY(-50px)',
	RIGHT = 'translateX(150px)',
	LEFT = 'translateX(-150px)',
}

type SlideInProps = {
	delay?: number;
	direction?: SlideInDirections;
	children: React.ReactNode;
};

const SlideIn: FC<SlideInProps> = ({
	delay = 0,
	direction = SlideInDirections.LEFT,
	children,
}) => {
	const props = useSpring({
		from: { opacity: 0, transform: direction },
		to: { opacity: 1, transform: 'translate(0, 0)' },
		config: { duration: 600, easing: easings.easeOutQuart },
		delay,
	});

	return <animated.div style={props}>{children}</animated.div>;
};

export default SlideIn;
