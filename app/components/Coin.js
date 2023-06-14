function Coin({ coin }) {
	return (
		<div>
			<img
				src={coin.icon}
				className=""
			></img>
			<a href={coin.websiteUrl}>
				<h1>{coin.name}</h1>
			</a>
			<h3>${coin.price.toFixed(2)}</h3>
		</div>
	);
}
export default Coin;
