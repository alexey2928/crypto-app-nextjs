"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Coin from "./components/Coin";

export default function Home() {
	const [listOfCoins, setListOfCoins] = useState([]);
	const [searchWord, setSearchWord] = useState("");
	const url = "https://api.coinstats.app/public/v1/coins?skip=0";
	useEffect(() => {
		const fetchCrypto = async (e) => {
			try {
				const { data } = await axios.get(url);
				setListOfCoins(data.coins);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCrypto();
	}, []);

	const filteredCrypto = listOfCoins.filter((coin) => {
		return coin.name.toLowerCase().includes(searchWord.toLowerCase());
	});
	return (
		<div className="text-center">
			<div className="text-3xl  underline text-center">Hello world!</div>
			<input
				type="text"
				placeholder="type crypto here"
				onChange={(e) => setSearchWord(e.target.value)}
			></input>
			<div>
				{filteredCrypto.map((coin) => {
					return (
						<Coin
							key={coin.id}
							coin={coin}
						/>
					);
				})}
			</div>
		</div>
	);
}
