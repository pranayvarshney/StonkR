import {
	VStack,
	Text,
	Button,
	Input,
	FormControl,
	Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const Quote = () => {
	const [quote, setQuote] = useState({});
	const [symbol, setSymbol] = useState(null);

	const handleInputChange = event => {
		const target = event.target;
		const { value } = target;

		setSymbol(value);
	};

	const getQuote = async () => {
		const symbol = "aapl";
		const api_key = "pk_eae71671468a4161b60df617d889adad";
		const res = await axios.get(
			`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${api_key}`
		);
		console.log(res.data);
		setQuote(res.data);
	};

	return (
		<VStack>
			<FormControl>
				<Input
					type="text"
					value={symbol || ""}
					name="symbol"
					onChange={handleInputChange}
				/>
				<Button colorScheme="teal" size="md" onClick={getQuote}>
					Get Quote!
				</Button>
			</FormControl>
			<Text>
				{Object.keys(quote).map(key => (
					<>
						<span>
							{key}: {quote[key]}{" "}
						</span>
						<br />
					</>
				))}
			</Text>
		</VStack>
	);
};

export default Quote;