import React, {useState} from "react";

type AccordionPropsType = {
	titleValue: string
	// collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
	// console.log('Accordion rendering')

	const [collapsed, setCollapsed] = useState<boolean>(false)

	// const onclickHandler = () => {
	// 	setCollapsed(!collapsed)
	// }

	return (
		<div>
			{/*<AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>*/}

			<AccordionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}}/>
			{/*<button*/}
			{/*	onClick={()=> {setCollapsed(!collapsed)}}>*/}
			{/*	TOGGLE*/}
			{/*</button>*/}
			{collapsed && <AccordionBody/>}
		</div>
	)
}

export default UncontrolledAccordion


type AccordionTitlePropsType = {
	title: string
	onClick: () => void
	// setCollapsed: (value: boolean) => void
	// collapsed: boolean
}


function AccordionTitle(props: AccordionTitlePropsType) {
	console.log('AccordionTitle rendering')


	// const onClickHandler = (value: boolean) => {
	// 	props.setCollapsed(value)
	// }

	return (
		<div>
			{/*/!*<h3 onClick={() => props.setCollapsed(!props.collapsed)}>--{props.title}--</h3>*!/*/}
			{/*<h3 onClick={() => onClickHandler(!props.collapsed)}>--{props.title}--</h3>*/}
			<h3 onClick = {()=> { props.onClick()}} >  -- {props.title} --</h3>

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
