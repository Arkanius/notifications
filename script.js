window.onload = (function(){

	notificacoes_request_permission();

	document.querySelector('#notificacao1').addEventListener('click', function() {
		var opt = {
			body: "Notificações teste1",
			icon: "alerta.png"
		}
		notificacoes("Nova mensagem", opt)
	}, false);

	document.querySelector('#notificacao2').addEventListener('click', function() {
		var opt = {
			body: "Notificações teste2",
			icon: "sorriso.png"
		}
		notificacoes("MSg", opt)
	}, false);
});