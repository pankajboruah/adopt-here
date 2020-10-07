import React, { useState } from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
	return (
		<div className="search">
			{pets.length === 0 ? (
				<h1>No Pets found</h1>
			) : (
				pets.map((pet) => (
					<Pet
						animal={pet.type}
						name={pet.name}
						breed={pet.breeds.primary}
						id={pet.id}
						key={pet.id}
						media={pet.photos}
						location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
					/>
				))
			)}
		</div>
	);
};

export default Results;
