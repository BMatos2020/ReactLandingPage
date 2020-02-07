import React from "react";
import { Navbar } from "./navbar";
import { Jumbo } from "./jumbotron";
import { Card } from "./card";

import DomRep from "../../img/dr.jpg";
import Montse from "../../img/montse.jpg";
import Antigua from "../../img/antigua.jpg";
import Jamaica from "../../img/jamaica.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbo />
			<div className="d-flex card-group card-deck justify-content-between">
				<Card
					cardLink="https://www.godominicanrepublic.com/?gclid=Cj0KCQiA7OnxBRCNARIsAIW53B-zGUqpKLWumKUP5vm8GJwwLyAhZnKBdYNG_7WejbDH7Y1eIpbkt9gaAvgHEALw_wcB"
					cardImage={DomRep}
					cardTitle="Dominican Republic"
					cardText="A Caribbean nation that shares the island of Hispaniola with Haiti to the west. It's known for its beaches, resorts and golfing."
				/>
				<Card
					cardLink="http://www.antigua-barbuda.org/index.htm"
					cardImage={Antigua}
					cardTitle="Antigua"
					cardText="One of the 2 major islands that make up the Caribbean nation of Antigua and Barbuda. Ringed with coral reefs, the island is known for its many sandy beaches."
				/>
				<Card
					cardLink="https://www.montserratvisita.com/en/index.html"
					cardImage={Montse}
					cardTitle="Montserrat"
					cardText="A mountainous Caribbean island, part of the Lesser Antilles chain and a British Overseas Territory."
				/>
				<Card
					cardLink="https://www.visitjamaica.com/"
					cardImage={Jamaica}
					cardTitle="Jamaica"
					cardText="A Caribbean island nation, has a lush topography of mountains, rainforests and reef-lined beaches."
				/>
			</div>
		</>
	);
}
