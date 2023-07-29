import React, {useState} from 'react';
import s from './OnOff.module.css'

type PropsType = {
	onChange: ( on : boolean) => void
}

export const UncontrolledOnOff = (props: PropsType) => {

	const [on, setOn] = useState<boolean>(false)

	// if (props.value) {
	// 	return (
	// 		<div className={s.body}>
	// 			<div className={s.on}> On</div>
	// 			<div className={s.off}> Off</div>
	// 			<div className={s.round}></div>
	// 		</div>
	// 	);
	// }

	const onClickOnHandler = () => {
		setOn(true)
		props.onChange(true)
	}

	const onClickOffHandler = () => {
		setOn(false)
		props.onChange(false)
	}

	return (
		<div className={s.body}>
			<div className={on ? s.on : ''} onClick={onClickOnHandler}> On</div>
			<div className={!on ? s.off : ''} onClick={onClickOffHandler}> Off</div>
			<div className={on ? s.roundOn : ''}></div>
			<div className={!on ? s.roundOff : ''}></div>
			{/*<div className={s.round}></div>*/}
		</div>
	)
};

