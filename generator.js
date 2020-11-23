
function createAnimal(){
	
	let classification = ['cat', 'dog', 'bird', 'rat'];
	let color = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'tan', 'black', 'white'];
	let feature = ['a tail', 'a fin', 'spines', 'fangs', 'gills'];
	let pattern = ['striped', 'solid', 'speckled', 'polka-dot', 'zigzag', 'patchy', 'checked'];
	
	let animal = {
		classification: classification[Math.floor(Math.random() * classification.length)],
		color: color[Math.floor(Math.random() * color.length)],
		feature: feature[Math.floor(Math.random() * feature.length)],
		pattern: pattern[Math.floor(Math.random() * pattern.length)]
	};
	
	return animal;
}


module.exports = createAnimal;