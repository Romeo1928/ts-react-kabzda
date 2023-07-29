import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffControlType = {
	value: boolean
	setSwitchOn: (value: boolean) => void
}

export const OnOffControl = (props: OnOffControlType) => {

	// const [on, setOn] = useState<boolean>(false)

	// if (props.value) {
	// 	return (
	// 		<div className={s.body}>
	// 			<div className={s.on}> On</div>
	// 			<div className={s.off}> Off</div>
	// 			<div className={s.round}></div>
	// 		</div>
	// 	);
	// }

	const onclickOnHandler = () => {
		props.setSwitchOn(true)
	}

	const onclickOffHandler = () => {
		props.setSwitchOn(false)
	}

	return (
		<div className={s.body}>
			<div className={props.value ? s.on : ''} onClick={onclickOnHandler}> On</div>
			<div className={!props.value ? s.off : ''} onClick={onclickOffHandler}> Off</div>
			<div className={props.value ? s.roundOn : ''}></div>
			<div className={!props.value ? s.roundOff : ''}></div>
		</div>
	)
};

