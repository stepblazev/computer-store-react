import { FC } from 'react';
import { useSpring, animated, easings } from '@react-spring/web';

type SlideInRightProps = {
	delay?: number;
	children: React.ReactNode;
};

const SlideInRight: FC<SlideInRightProps> = ({ delay = 0, children }) => {
	const props = useSpring({
		from: { opacity: 0, transform: 'translateX(150px)' },
		to: { opacity: 1, transform: 'translateY(0px)' },
		config: { duration: 600, easing: easings.easeOutQuart },
		delay,
	});

	return <animated.div style={props}>{children}</animated.div>;
};

export default SlideInRight;
