//para este código foi utilizado operador ternário
let alimento = {
	nome_generico:
		document.querySelector("#field_generic_name_value") == undefined
			? "Nome do alimento indisponível"
			: document.querySelector("#field_generic_name_value").textContent,
	marca:
		document.querySelector("#field_brands_value") == null
			? "Marca do alimento indisponível"
			: document.querySelector("#field_brands_value").textContent,
	ingredientes:
		document
			.querySelector("#panel_ingredients_content")
			.querySelector(".panel_text") == null
			? "Ingredientes do alimento indisponíveis"
			: document
					.querySelector("#panel_ingredients_content")
					.querySelector(".panel_text")
					.textContent.trim(),
	nutri_score: document
		.querySelectorAll(".attr_text")[0]
		.querySelector("h4")
		.textContent.split(" ")
		.slice(1)
		.join(" "),
	nova: document
		.querySelectorAll(".attr_text")[1]
		.querySelector("h4")
		.textContent.split(" ")
		.slice(1)
		.join(" "),
	eco_score: document
		.querySelectorAll(".attr_text")[2]
		.querySelector("h4")
		.textContent.split(" ")
		.slice(1)
		.join(" "),
};

console.log(alimento);
