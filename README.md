# Automação de Formulário Empresarial com Google Apps Script

## Sobre o projeto

Este projeto foi desenvolvido como parte de uma atividade acadêmica de elaboração de um Plano de Marketing para uma empresa real.

O objetivo foi automatizar a criação de um questionário de diagnóstico empresarial utilizando **Google Apps Script**, facilitando a coleta e a organização das informações necessárias para o trabalho.

O formulário contém 30 perguntas principais, distribuídas em 8 blocos temáticos, e foi integrado ao Google Sheets para registrar as respostas automaticamente.

## Tecnologias utilizadas

- **Google Apps Script (JavaScript):** automação da criação do formulário.
- **Google Forms:** aplicação do questionário empresarial.
- **Google Sheets:** armazenamento e organização das respostas.
- **GitHub:** documentação e compartilhamento do projeto.
- **Inteligência Artificial:** apoio na estruturação e geração do código.

## Etapas do desenvolvimento

### 1. Organização do questionário

Inicialmente, foram organizadas 30 perguntas em 8 blocos:

1. Empresa e gestão
2. Objetivos estratégicos
3. Clientes e público-alvo
4. Posicionamento e diferenciais
5. Concorrência
6. Mix de Marketing (4Ps)
7. Processos, qualidade e resultados
8. Principal problema da empresa

As perguntas foram adaptadas para respostas curtas, parágrafos, múltipla escolha e caixas de seleção.

### 2. Criação do formulário com Google Apps Script

Foi utilizado o Google Apps Script para automatizar a criação do formulário.

**Procedimento:**

1. Acessar https://script.google.com.
2. Criar um novo projeto.
3. Inserir o código JavaScript no arquivo `Código.gs`.
4. Salvar o projeto.
5. Selecionar a função `criarFormularioMarketing`.
6. Clicar em **Executar**.
7. Autorizar o acesso solicitado pelo Google.
8. Consultar o registro de execução para obter os links do formulário.

O código cria automaticamente o formulário, suas seções e perguntas.

### 3. Configuração do Google Forms

Após a execução do código, o formulário foi aberto para configuração manual.

Foram verificadas as seguintes opções:

- Coleta de e-mails desativada.
- Limitação de respostas desativada.
- Permissões de acesso ao formulário.
- Mensagem de confirmação após o envio.

### 4. Integração com Google Sheets

Para organizar os dados recebidos, o formulário foi vinculado a uma planilha.

**Procedimento:**

1. Abrir o Google Forms.
2. Selecionar a aba **Respostas**.
3. Clicar no ícone do Google Sheets.
4. Selecionar **Criar uma nova planilha**.
5. Confirmar a criação.

Cada resposta enviada ao formulário é registrada automaticamente em uma nova linha da planilha.

### 5. Teste de funcionamento

Antes de enviar o formulário à empresa, foi realizado um teste utilizando outra conta Google.

O procedimento consistiu em:

1. Abrir o link público do formulário.
2. Preencher as perguntas.
3. Enviar as respostas.
4. Verificar o recebimento no Google Forms.
5. Conferir o registro no Google Sheets.

O teste permitiu verificar o funcionamento da coleta de respostas e da integração entre as ferramentas.

## Resultado

A automação permitiu criar um formulário estruturado sem a necessidade de cadastrar manualmente todas as perguntas.

O projeto também possibilitou centralizar as respostas em uma planilha, facilitando a consulta e a análise dos dados para o desenvolvimento do Plano de Marketing.

## Aprendizados

Durante o desenvolvimento, foram aplicados conhecimentos de:

- Automação de tarefas com JavaScript.
- Utilização do Google Apps Script.
- Criação de formulários digitais.
- Integração entre Google Forms e Google Sheets.
- Organização e coleta de dados.
- Testes e validação de funcionalidades.

## Observações

O repositório contém a estrutura e o código de automação do formulário.

As respostas reais da empresa, dados pessoais dos participantes e informações comerciais confidenciais não serão disponibilizados publicamente.

## Autoria

Projeto acadêmico desenvolvido com apoio de Inteligência Artificial na elaboração do código e na organização das etapas de implementação. 
