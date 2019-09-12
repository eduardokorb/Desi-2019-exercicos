function lerNome() {
	let nome = prompt("Digite seu nome por obséquio", "")
	let p = document.getElementById("p_nome");
	p.innerHTML = nome;
	let gostou = confirm("Gostou da Página, " + nome + "?");
	if (gostou) {
		alert("Ótimo seu vagabundo!")
	}
	else{
		alert("Vai se catar então desgraçado!")							
	}
}

function exibirData() {
	let data = new Date();
	let p = document.getElementById("p_data");
	 p.innerHTML = data;
	//document.write(data);
}
