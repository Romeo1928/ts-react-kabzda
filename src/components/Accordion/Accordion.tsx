import React from "react";

type AccordionPropsType = {
	titleValue: string
	collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
	console.log('Accordion rendering')

	if (props.collapsed) {
		return (
			<div>
				<AccordionTitle title={props.titleValue}/>
				<AccordionBody/>
			</div>
		)
	}
	return (
		<div>
			<AccordionTitle title={props.titleValue}/>
		</div>
	)
}

export default Accordion


type AccordionTitlePropsType = {
	title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
	console.log('AccordionTitle rendering')
	return (
		<div>
			{/*<h3>Меню</h3>*/}
			<h3>--{props.title}--</h3>
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
