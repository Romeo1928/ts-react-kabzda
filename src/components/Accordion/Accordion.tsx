import React, {useCallback, useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type AccordionPropsType = {
	titleValue: string
	accordion: boolean
	setAccordion: (value: boolean) => void
}

function Accordion(props: AccordionPropsType) {
	console.log('Accordion rendering')

	// let [collapsed, setCollapsed] = useState<boolean>(false)

	return (
		<div>
			<AccordionTitle title={props.titleValue} setAccordion={props.setAccordion} accordion={props.accordion}/>
			{!props.accordion && <AccordionBody/>}
		</div>
	)
}

export default Accordion

// function Accordion2(props: AccordionPropsType) {
// 	console.log('Accordion rendering')
//
//
// 	if (props.collapsed) {
// 		return (
//
// 			<div>
// 				<AccordionTitle title={props.titleValue}/>
// 				<AccordionBody/>
// 			</div>
// 		)
// 	}
// 	return (
// 		<div>
// 			<AccordionTitle title={props.titleValue}/>
// 		</div>
// 	)
// }
// export default Accordion2


type AccordionTitlePropsType = {
	title: string
	setAccordion: (value: boolean) => void
	accordion: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
	console.log('AccordionTitle rendering')

	const onclickHandler = (value: boolean) => {
		props.setAccordion(value)
	}

	return (
		<div>
			{/*<h3>Меню</h3>*/}
			<h3 onClick={() => onclickHandler(!props.accordion)}>--{props.title}--</h3>
		</div>
	)
}

function AccordionBody() {
	console.log('AccordionBody rendering')
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	)
}
