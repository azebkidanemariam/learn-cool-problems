
// Write a function that computes the running total of a list.
export const x = (xs) => {
	// Your code here...
	xs.reduce((accumulator,currentValue) => {
		return accumulator + currentValue
	}, 0)
	return -1
}
function totalList(xs){
	let sum = 0
	for(let x of xs){
		sum += +x
	}
	return sum
}
const tests = [
	[totalList, [[1, 2, 3, 4, 5]], 15],
	[totalList, [[1, 2, 3, 4, 5, 6]], 21],
	[totalList, [[1]], 1],
	[totalList, [[1, 3, 5, 123, 331, 391, 0]], 854],
]

export default tests

