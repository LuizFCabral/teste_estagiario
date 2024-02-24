//para este código foi utilizado operador ternário
let alimento = {
	nome_generico:
		document.getElementById("field_generic_name_value") == null
			? "Nome do alimento indisponível"
			: document.getElementById("field_generic_name_value").textContent,
	marca:
		document.getElementById("field_brands_value") == null
			? "Marca do alimento indisponível"
			: document.getElementById("field_brands_value").textContent,
	ingredientes:
		document
			.getElementById("panel_ingredients_content")
			.getElementsByClassName("panel_text")[0] == null
			? "Ingredientes do alimento indisponíveis"
			: document
					.getElementById("panel_ingredients_content")
					.getElementsByClassName("panel_text")[0]
					.textContent.trim(),
	nutri_score: document
		.getElementById("attributes_grid")
		.getElementsByTagName("h4")[0]
		.textContent.split(" ")
		.slice(1)
		.join(" "),
	nova: document
		.getElementById("attributes_grid")
		.getElementsByTagName("h4")[1]
		.textContent.split(" ")
		.slice(1)
		.join(" "),
	eco_score: document
		.getElementById("attributes_grid")
		.getElementsByTagName("h4")[2]
		.textContent.split(" ")
		.slice(1)
		.join(" "),
};

console.log(alimento);
