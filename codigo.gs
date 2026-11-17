
function criarFormularioMarketing() {
  const form = FormApp.create("Diagnóstico Empresarial – Plano de Marketing");

  form.setDescription(
    "Questionário acadêmico para conhecer a empresa e identificar oportunidades de melhoria. " +
    "Tempo estimado: 15 a 25 minutos. Informações utilizadas apenas para fins acadêmicos."
  );
  form.setConfirmationMessage("Obrigado pela participação!");

  function secao(titulo) {
    form.addPageBreakItem().setTitle(titulo);
  }
  function texto(pergunta, obrigatoria = false) {
    form.addTextItem().setTitle(pergunta).setRequired(obrigatoria);
  }
  function paragrafo(pergunta, obrigatoria = false) {
    form.addParagraphTextItem().setTitle(pergunta).setRequired(obrigatoria);
  }
  function escolha(pergunta, opcoes, obrigatoria = false) {
    form.addMultipleChoiceItem()
      .setTitle(pergunta)
      .setChoiceValues(opcoes)
      .setRequired(obrigatoria);
  }
  function varias(pergunta, opcoes) {
    form.addCheckboxItem()
      .setTitle(pergunta)
      .setChoiceValues(opcoes);
  }

  texto("Nome da empresa", true);
  texto("Nome e cargo do responsável", true);
  texto("Segmento de atuação", true);

  secao("1. Empresa e gestão");
  texto("1. Há quanto tempo a empresa existe e quantas pessoas trabalham nela?");
  paragrafo("2. Quais são os principais produtos ou serviços?", true);
  escolha("3. Quem toma as principais decisões?", ["Proprietário", "Gerente", "Equipe de gestão", "Outros"]);
  varias("4. Quais canais de venda a empresa utiliza?", ["Loja física", "Loja virtual", "WhatsApp", "Aplicativos/marketplaces", "Outros"]);

  secao("2. Objetivos estratégicos");
  escolha("5. Qual é o principal objetivo para os próximos 12 meses?", ["Aumentar vendas", "Atrair novos clientes", "Fidelizar clientes", "Expandir a empresa", "Fortalecer a marca", "Outros"], true);
  paragrafo("6. Como a empresa avaliará se alcançou esse objetivo?");
  escolha("7. Qual é o orçamento mensal disponível para marketing?", ["Não há orçamento definido", "Até R$ 500", "R$ 501 a R$ 1.000", "R$ 1.001 a R$ 3.000", "Acima de R$ 3.000", "Prefiro não informar"]);
  escolha("8. Quanto tempo semanal pode ser dedicado ao marketing?", ["Menos de 2 horas", "2 a 5 horas", "Mais de 5 horas", "Não definido"]);
  paragrafo("9. Existe alguma restrição para as ações de marketing?");

  secao("3. Clientes e público-alvo");
  paragrafo("10. Qual é o perfil dos principais clientes?", true);
  paragrafo("11. Por que os clientes escolhem a empresa? Quais são as reclamações mais comuns?");
  texto("12. Quantos clientes são atendidos por mês e qual é o ticket médio? (Se souber)");
  escolha("13. A empresa possui cadastro de clientes e acompanha a frequência de compra?", ["Sim, ambos", "Apenas cadastro", "Apenas frequência", "Não"]);
  varias("14. Como novos clientes conhecem a empresa?", ["Indicação", "Instagram", "Google", "WhatsApp", "Passando em frente", "Outros"]);

  secao("4. Posicionamento e diferenciais");
  paragrafo("15. Como você descreveria a empresa em uma frase?", true);
  paragrafo("16. Qual é o principal diferencial em relação à concorrência?", true);
  escolha("17. Os clientes reconhecem esse diferencial?", ["Sim", "Parcialmente", "Não", "Não sei"]);

  secao("5. Concorrência");
  paragrafo("18. Quais são os três principais concorrentes?");
  paragrafo("19. O que os concorrentes fazem melhor? Como são os preços deles?");
  escolha("20. A empresa já perdeu clientes para concorrentes?", ["Sim", "Não", "Não sei"]);
  paragrafo("Se sim, qual foi o motivo?");

  secao("6. Mix de marketing – 4Ps");
  paragrafo("21. Quais produtos ou serviços os clientes pedem e a empresa ainda não oferece?");
  varias("22. Como os preços são definidos?", ["Custos", "Concorrência", "Valor percebido", "Margem de lucro", "Outros"]);
  escolha("A empresa realiza promoções?", ["Frequentemente", "Às vezes", "Raramente", "Nunca"]);
  paragrafo("23. Quais canais de venda apresentam maior crescimento?");
  varias("24. Onde a empresa divulga seus produtos ou serviços?", ["Instagram", "Facebook", "Google", "WhatsApp", "Panfletos", "Não realiza divulgação", "Outros"]);
  escolha("Com que frequência publica nas redes sociais?", ["Diariamente", "Semanalmente", "Mensalmente", "Raramente", "Nunca"]);

  secao("7. Processos, qualidade e resultados");
  escolha("25. Existe um padrão de atendimento definido?", ["Sim, documentado", "Sim, informal", "Não"]);
  varias("26. Quais indicadores são acompanhados?", ["Vendas", "Reclamações", "Avaliações online", "Número de clientes", "Ticket médio", "Nenhum"]);
  paragrafo("27. Quais períodos apresentam menor movimento? Como foi o desempenho do último ano?");

  secao("8. Principal problema da empresa");
  paragrafo("28. Qual problema de vendas ou relacionamento com clientes a empresa mais deseja resolver?", true);
  paragrafo("29. Há quanto tempo esse problema existe e o que já foi feito para resolvê-lo?", true);
  paragrafo("30. Existe algum número ou indicador que demonstre esse problema? Ex.: queda de vendas, reclamações, avaliações ou clientes perdidos.", true);

  Logger.log("Link para edição: " + form.getEditUrl());
  Logger.log("Link para enviar à empresa: " + form.getPublishedUrl());
}
