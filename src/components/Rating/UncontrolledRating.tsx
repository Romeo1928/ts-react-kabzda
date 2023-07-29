import React, {useState} from "react";

type RatingPropsType = 1 | 2 | 3 | 4 | 5;

export function UncontrolledRating() {
	console.log('Rating rendering')

	let [value, setValue] = useState<number>(0)

	// const onclickHandler0 = () => {
	// 	setValue(1)
	// }
	// const onclickHandler1 = () => {
	// 	setValue(2)
	// }
	// const onclickHandler2 = () => {
	// 	setValue(3)
	// }
	// const onclickHandler3 = () => {
	// 	setValue(4)
	// }
	// const onclickHandler4 = () => {
	// 	setValue(5)
	// }


	return (
		<div>
			{/*<Star selected={value > 0} onClick={()=> setRatingValue(1)}/>*/}
			{/*<Star selected={value > 1} onClick={()=> setRatingValue(2)}/>*/}
			{/*<Star selected={value > 2} onClick={()=> setRatingValue(3)}/>*/}
			{/*<Star selected={value > 3} onClick={()=> setRatingValue(4)}/>*/}
			{/*<Star selected={value > 4} onClick={()=> setRatingValue(5)}/>*/}
			<Star selected={value > 0} setValue={setValue} value={1}/>
			{/*<button onClick={onclickHandler0}>1</button>*/}
			<Star selected={value > 1} setValue={setValue} value={2}/>
			{/*<button onClick={onclickHandler1}>2</button>*/}
			<Star selected={value > 2} setValue={setValue} value={3}/>
			{/*<button onClick={onclickHandler2}>3</button>*/}
			<Star selected={value > 3} setValue={setValue} value={4}/>
			{/*<button onClick={onclickHandler3}>4</button>*/}
			<Star selected={value > 4} setValue={setValue} value={5}/>
			{/*<button onClick={onclickHandler4}>5</button>*/}
		</div>
	)

	// if (props.value === 1) {
	// 	return (
	// 		<div>
	// 			<Star selected={true}/>
	// 			<Star selected={false}/>
	// 			<Star selected={false}/>
	// 			<Star selected={false}/>
	// 			<Star selected={false}/>
	// 		</div>
	// 	)
	// }
	// if (props.value === 2) {
	// 	return (
	// 		<div>
	// 			<Star selected={true}/>
	// 			<Star selected={true}/>
	// 			<Star selected={false}/>
	// 			<Star selected={false}/>
	// 			<Star selected={false}/>
	// 		</div>
	// 	)
	// }
	// if (props.value === 3) {
	// 	return (
	// 		<div>
	// 			<Star selected={true}/>
	// 			<Star selected={true}/>
	// 			<Star selected={true}/>
	// 			<Star selected={false}/>
	// 			<Star selected={false}/>
	// 		</div>
	// 	)
	// }
	// if (props.value === 4) {
	// 	return (
	// 		<div>
	// 			<Star selected={true}/>
	// 			<Star selected={true}/>
	// 			<Star selected={true}/>
	// 			<Star selected={true}/>
	// 			<Star selected={false}/>
	// 		</div>
	// 	)
	// }
	// if (props.value === 5) {
	// 	return (
	// 		<div>
	// 			<Star selected={true}/>
	// 			<Star selected={true}/>
	// 			<Star selected={true}/>
	// 			<Star selected={true}/>
	// 			<Star selected={true}/>
	// 		</div>
	// 	)
	// }
	//
	// return (
	// 	<div>
	// 		<Star selected={false}/>
	// 		<Star selected={false}/>
	// 		<Star selected={false}/>
	// 		<Star selected={false}/>
	// 		<Star selected={false}/>
	// 	</div>
	// )
}

type StarPropsType = {
	selected: boolean
	setValue: (rating: RatingPropsType) => void
	value: 1 | 2 | 3 | 4 | 5
}


function Star(props: StarPropsType) {

	const onClickSpan = (rating: RatingPropsType) => {
		props.setValue(rating)
	}


	console.log('Star rendering')
	return (
		<span onClick={() => onClickSpan(props.value)}>
			 {props.selected ? <b>star </b> : 'star '}
		</span>
	)
}


{/*if (props.selected) {*/
}
{/*	return <span><b>star</b> </span>*/
}
{/*} else {*/
}
{/*	return (*/
}
{/*		<span>star </span>*/
}
{/*	)*/
}
{/*}*/
}

