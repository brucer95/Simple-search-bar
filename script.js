document.addEventListener("keyup", (e) => {
	if (e.target.matches("#buscador")) {
		if (e.key === "Escape") e.target.value = "";

		const searchText = e.target.value.toLowerCase();
		const articulos = document.querySelectorAll(".articulo");
		let resultadosEncontrados = false;

		articulos.forEach((articulo) => {
			const contenido = articulo.textContent.toLowerCase();
			if (contenido.includes(searchText)) {
				articulo.style.display = "block";
				resultadosEncontrados = true;
			} else {
				articulo.style.display = "none";
			}
		});

		const mensajeNoEncontrado = document.getElementById("search-not-found");
		mensajeNoEncontrado.style.display = resultadosEncontrados
			? "none"
			: "block";
	}
});
