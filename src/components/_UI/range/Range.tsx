import { FC } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './range.scss';

type RangeProps = {
	label: string;
	min: number;
	max: number;
	values: number[];
	onChange: (values: number[]) => void;
};

const Range: FC<RangeProps> = ({ label, min, max, values, onChange }) => {
	return (
		<div className='range'>
			<p className='text'>{label}</p>
			<Slider
				min={min}
				max={max}
				value={values}
				onChange={onChange as (value: number | number[]) => void}
				range
			/>
		</div>
	);
};

export default Range;
