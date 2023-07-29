import React from "react";
// import {RatingPropsType} from "../../App";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
	value: RatingValueType
	setRatingValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
	console.log('Rating rendering')

	return (
		<div>
			<Star selected={props.value > 0} onClick={props.setRatingValue} value={1}/>
			<Star selected={props.value > 1} onClick={props.setRatingValue} value={2}/>
			<Star selected={props.value > 2} onClick={props.setRatingValue} value={3}/>
			<Star selected={props.value > 3} onClick={props.setRatingValue} value={4}/>
			<Star selected={props.value > 4} onClick={props.setRatingValue} value={5}/>
			{/*<Star selected={props.value > 0} onClick={()=> props.setRatingValue(1)}/>*/}
			{/*<Star selected={props.value > 1} onClick={()=> props.setRatingValue(2)}/>*/}
			{/*<Star selected={props.value > 2} onClick={()=> props.setRatingValue(3)}/>*/}
			{/*<Star selected={props.value > 3} onClick={()=> props.setRatingValue(4)}/>*/}
			{/*<Star selected={props.value > 4} onClick={()=> props.setRatingValue(5)}/>*/}
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
	onClick: (value: RatingValueType) => void
	value: RatingValueType
}

function Star(props: StarPropsType) {
	console.log('Star rendering')

 return(

	 <span onClick={()=> props.onClick(props.value )}>
		 {props.selected ? <b>star </b> : "star "}
	 </span>

	 // <span onClick={()=> props.onClick(0 )}>
		//  {props.selected ? <b>star </b> : "star "}
	 // </span>
 )

	// if (props.selected) {
	// 	return <span><b>star</b> </span>
	// } else {
	// 	return (
	// 		<span>star </span>
	// 	)
	// }

}