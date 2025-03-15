document.getElementById('info-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  
  // Coleta os dados do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const segmento = document.getElementById('segmento').value;

  // Simula o envio dos dados (substitua por sua lógica de envio)
  console.log('Dados do formulário:', { nome, email, telefone, segmento });
  alert('Formulário enviado com sucesso!'); // Feedback simples
});