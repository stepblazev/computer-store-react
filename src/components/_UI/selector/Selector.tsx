import { FC } from 'react';
import Select from 'react-select';
import './selector.scss';

export interface ISelectorOption {
	value: any;
	label: string;
}

type SelectorProps = {
	defaultValue?: any;
	options: ISelectorOption[];
	placeholder: string;
	onChange: (value: any) => void;
};

const Selector: FC<SelectorProps> = ({ defaultValue, options, placeholder, onChange }) => {
	return (
		<Select
			className='selector'
			classNamePrefix='selector'
			options={options}
			defaultValue={defaultValue}
			placeholder={placeholder}
			isSearchable={false}
			onChange={onChange}
		/>
	);
};

export default Selector;
