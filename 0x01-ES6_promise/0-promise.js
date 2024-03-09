export default function getResponseFromAPI(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Test Promises");
		}, 200);
	});
}
