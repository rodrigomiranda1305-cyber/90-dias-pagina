/* DADOS EDITÁVEIS DA PÁGINA (90 Dias de Liberdade)
   Enquanto uma lista estiver vazia, a seção dela fica escondida para o comprador.
   Para ver os espaços reservados, abra a página com ?revisao=1 no fim do endereço.
   Preço, checkout, garantia e e-mail de suporte ficam em fonte/oferta.json (depois rodar fonte/montar.py). */
window.OFERTA = {
  id: 'cristao',

  // Contador regressivo: só com prazo verdadeiro. Exemplo: prazo: '2026-11-20T23:59:00-03:00'
  prazo: null,
  prazoTexto: '',

  // Depoimentos reais, só com autorização (podem ser anônimos neste nicho).
  depoimentos: [
    // { tipo: 'texto', nome: 'R., 34 anos, Goiânia', texto: 'O que a pessoa disse, sem mudar o sentido.', autorizado: true },
    // { tipo: 'print', imagem: 'img/dep/print1.webp', legenda: 'Mensagem recebida em 12/11', autorizado: true },
  ],

  // Antes e depois reais (por exemplo, print do contador), só com autorização.
  antesDepois: [],

  // Os 3 bônus já existem (Botão de Socorro, Mapa dos Gatilhos e Contador), então fica vazio.
  bonusExtras: [],

  rastreio: {
    clarity: null,       // O Rodrigo decidiu ficar sem Clarity no Cristão (09/11).
    utmifyPixel: null,   // Ainda não há vaga de pixel na Utmify para o Cristão (plano com 3 pixels).
    endpoint: null,
    mascarar: false
  }
};
