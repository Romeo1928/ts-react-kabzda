import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import {OnOffControl} from "./components/OnOff/OnOffControl";

// import {Rating as R} from "./components/Rating/Rating";


function App() {
	console.log('APP rendering')

	const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
	const [accordion, setAccordion] = useState(true)
	const [switchOn, setSwitchOn] = useState<boolean>(true)

	return (
		<div className={"App"}>
			{/*<PageTitle title={"This is APP component"}/>*/}
			{/*<PageTitle title={"My friends"}/>*/}
			{/*Article 1*/}
			{/*<Rating value={3}/>*/}
			{/*<Accordion titleValue={"Меню"} collapsed={true}/>*/}
			{/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
			{/*Article 2*/}
			{/*<Rating value={0}/>*/}
			{/*<Rating value={1}/>*/}
			{/*<Rating value={2}/>*/}
			{/*<Rating value={3}/>*/}
			{/*<Rating value={4}/>*/}
			{/*<Rating value={5}/>*/}


			HW-2
			<div>
				<UncontrolledOnOff onChange = {setSwitchOn}/>
				{switchOn.toString()}
				{/*<UncontrolledOnOff/>*/}
				<OnOffControl value={switchOn} setSwitchOn={setSwitchOn}/>
				<Accordion titleValue={"Меню"} accordion={accordion} setAccordion={setAccordion}/>
				<UncontrolledAccordion titleValue={"Меню"}/>
				<UncontrolledAccordion titleValue={"Users"}/>
				{/*<UncontrolledRating/>*/}
				<Rating value={ratingValue} setRatingValue={setRatingValue}/>
			</div>
		</div>
	);
}

export default App;


type PageTitleProps = {
	title: string
}

function PageTitle(props: PageTitleProps) {
	console.log('PageTitle rendering')
	return (
		<h1>
			{props.title}
		</h1>
	)
}




