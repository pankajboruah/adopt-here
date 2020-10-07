import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

export default function SearchParams() {
	const [location, setLocation] = useState("Seattle, WA");
	const [breeds, setBreeds] = useState([]);
	const [animal, AnimalDropdown] = useDropdown("animal", "dog", ANIMALS);
	const [breed, BreedDropdown, setBreed] = useDropdown("breed", "", breeds);
	const [pets, setPets] = useState([]);

	async function requestPets() {
		const { animals } = await pet.animals({
			location,
			breed,
			type: animal,
		});
		setPets(animals || []);
	}

	useEffect(() => {
		setBreeds([]);
		setBreed("");
		pet.breeds(animal).then(({ breeds }) => {
			const breedStrings = breeds.map(({ name }) => name);
			setBreeds(breedStrings);
		}, console.error);
	}, [animal, setBreeds, setBreed]);

	return (
		<div className="search-params">
			<form
				action=""
				onSubmit={(e) => {
					e.preventDefault();
					requestPets();
				}}
			>
				<h1>{location}</h1>
				<label htmlFor="location">
					Location
					<input
						type="text"
						value={location}
						placeholder="Location"
						onChange={(e) => {
							setLocation(e.target.value);
						}}
					/>
				</label>
				<AnimalDropdown />
				<BreedDropdown />
				<button>Submit</button>
			</form>
			<Results pets={pets} />
		</div>
	);
}
