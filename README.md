Ministério de Famílias – IBVP
Sistema de Cadastro e Administração de Famílias
PWA • HTML • CSS • JavaScript • Supabase
Sobre o Projeto

Este projeto é uma aplicação web leve, simples e instalável (PWA), criada para apoiar o Ministério de Famílias da Igreja Batista de Vargem Pequena (IBVP) no cadastro, acompanhamento e organização das famílias da igreja.

A solução foi desenvolvida para:

facilitar o cadastro de famílias durante os cultos;

apoiar o acompanhamento pastoral, incluindo aniversários, situação de membresia e tempo de frequência;

permitir busca rápida no painel administrativo;

funcionar em qualquer dispositivo, inclusive como aplicativo instalado no celular.

O sistema é estático e utiliza exclusivamente HTML, CSS, JavaScript e Supabase.

Arquitetura da Solução
Frontend

HTML5

CSS e TailwindCSS

JavaScript (Vanilla)

PWA (manifest, instalação e ícones)

Banco de Dados

Supabase (PostgreSQL em nuvem)

Comunicação direta via REST API

Chave pública (anon key) com permissões limitadas

RLS desativado, pois o fluxo atual não utiliza autenticação

Não armazena dados sensíveis (como CPF ou RG)

Segurança

A chave pública utilizada possui permissões restritas

O sistema inclui termo de consentimento conforme LGPD

Uso limitado e transparente, destinado exclusivamente ao Ministério de Famílias

Funcionalidades
1. Formulário Público de Cadastro

Campos incluídos:

Dados do casal:

Nome do homem

Nome da mulher

Nome da família (gerado automaticamente)

Datas importantes:

Aniversário dele

Aniversário dela

Aniversário de casamento

Contatos e endereço:

Telefones individuais

E-mails individuais

Endereço da família

Filhos:

Quantidade dinâmica

Nome e data de nascimento de cada filho

Situação na igreja e histórico:

Membro da IBVP

Membro de outra igreja (com nome)

Não é membro

Tempo de frequência na IBVP (quando aplicável)

LGPD:

Checkbox obrigatório de consentimento

2. Painel Administrativo

Busca por nome do casal, homem, mulher ou filhos

Listagem leve com informações principais

Cálculo automático de idades

Exibição de aniversariantes do dia, da semana e do mês

Visualização completa dos dados da família

Tempo de frequência exibido no perfil

Exportação de registros em formato Excel (.xlsx)

QR Code estável gerado automaticamente para acesso ao formulário

Instalação como PWA
iPhone (Safari)

Abrir o link

Tocar em "Compartilhar"

Selecionar "Adicionar à Tela de Início"

Android (Chrome)

Abrir o link

Tocar nos três pontos

Selecionar "Instalar Aplicativo"

Estrutura do Projeto
/
├── index.html
├── admin.html
├── manifest.json
├── style.css
├── app.js
├── admin.js
├── logo-ibvp.png
└── icons/

Como Rodar Localmente

Clone o repositório:

git clone https://github.com/marcusjcosta/ibvp-ministerio-familias.git
cd ibvp-ministerio-familias


Abra o arquivo index.html no navegador
(ou utilize uma ferramenta como "Live Server" no VS Code).

Configure as chaves do Supabase diretamente nos arquivos JavaScript.

Configuração do Supabase

No Supabase, crie a tabela conforme o schema usado pelo projeto.

Configure no frontend:

SUPABASE_URL=<sua-url>
SUPABASE_ANON_KEY=<sua-chave-publica>


Essas chaves são utilizadas pelos arquivos JavaScript.

Deploy

A aplicação pode ser hospedada em qualquer serviço de páginas estáticas, como:

GitHub Pages

Vercel

Firebase Hosting

Supabase Storage

Hospedagens estáticas em geral

Basta enviar os arquivos do diretório raiz.

Suporte e Evolução

O sistema foi desenvolvido com foco em:

praticidade

baixo custo

facilidade de manutenção

acessibilidade para voluntários

Possíveis evoluções futuras incluem:

upload de fotos das famílias

painel analítico

notificações automáticas de aniversariantes

autenticação para administradores

histórico de visitas e interações pastorais

Autor

Marcus Costa
marcus.costa@resultaat.com.br
Desenvolvido para o Ministério de Famílias – IBVP
2026