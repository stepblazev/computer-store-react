import { FC } from 'react';
import Select from 'react-select';
import './selector.scss';

export interface ISelectorOption<T> {
	value: T;
	label: string;
}

type SelectorProps = {
	value?: any;
	defaultValue?: any;
	options: ISelectorOption<any>[];
	placeholder: string;
	onChange: (value: any) => void;
};

const Selector: FC<SelectorProps> = ({ value, defaultValue, options, placeholder, onChange }) => {
	return (
		<Select
			className='selector'
			classNamePrefix='selector'
			options={options}
			defaultValue={defaultValue}
			value={value}
			placeholder={placeholder}
			isSearchable={false}
			onChange={onChange}
		/>
	);
};

export default Selector;
