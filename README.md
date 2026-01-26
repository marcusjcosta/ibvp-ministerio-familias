Ministério de Famílias – IBVP

Sistema de Cadastro e Administração de Famílias
ibvp-ministerio-familias.netlify.app

📌 Sobre o projeto

Este projeto é uma aplicação web desenvolvida para o Ministério de Famílias da Igreja Batista de Vargem Pequena (IBVP).
O objetivo é facilitar:

o cadastro de famílias, com dados individuais de cada membro;

o acompanhamento pastoral, incluindo aniversários, situação de membresia e informações de contato;

o acesso rápido por meio de QR Code para preenchimento no culto;

a consulta organizada das informações em um painel administrativo visual.

A aplicação é totalmente serverless, rápida, leve e acessível de qualquer dispositivo — inclusive como PWA, podendo ser instalada no celular da liderança do ministério (Android e iPhone).

🧩 Arquitetura da solução

A aplicação utiliza:

Frontend

HTML + CSS (TailwindCSS) — rápido, responsivo e sem frameworks pesados

JavaScript Vanilla — para validações, manipulação do DOM e chamadas à API

PWA — permite instalação no celular

Hospedado gratuitamente no Netlify

Backend

Netlify Functions (Serverless)

Função principal: /createCouple

Faz a ponte entre o formulário e o banco de dados

Banco de dados

Supabase (Postgres)

Acesso via API REST com chave pública (publishable key)

RLS desativado, pois:

não há contas de usuário nesta versão

somente a função serverless realiza operações de escrita

o conteúdo é público de forma controlada apenas para leitura no painel admin

Segurança

Mesmo com RLS desativado:

A chave utilizada é publica e com permissões limitadas

A escrita no banco só pode ser feita por meio da function serverless, nunca pelo frontend diretamente

Não há dados sensíveis críticos (como RG, CPF, renda etc.)

A LGPD é respeitada com transparência, finalidade específica e consentimento no formulário

📄 Funcionalidades
1. Formulário de cadastro

Disponível em:
➡️ https://ibvp-ministerio-familias.netlify.app

Campos incluídos:

Dados do casal

Nome do homem

Nome da mulher

Nome do casal (gerado automaticamente se vazio)

Datas importantes

Data de nascimento dele

Data de nascimento dela

Aniversário de casamento

Contatos e endereço

Telefone dele / e-mail dele

Telefone dela / e-mail dela

Endereço da família

Filhos

Quantos filhos

Nome e data de nascimento de cada filho

Situação na igreja

Para cada pessoa:

Membro da IBVP

Membro de outra igreja (com nome)

Não é membro

Consentimento LGPD

O formulário inclui um checkbox obrigatório com texto de consentimento claro.

2. Painel Administrativo

Disponível em:
➡️ https://ibvp-ministerio-familias.netlify.app/admin.html

Funcionalidades:

Busca por nome do casal, do homem, da mulher ou do filho

Listagem leve em tabela, com:

Nome do casal

Contato principal

Situação de membresia do casal

Filtros rápidos:

Apenas membros da IBVP

Apenas famílias com filhos

Exportação para Excel (.xlsx) – mais amigável do que CSV

Painel de aniversariantes, que exibe:

Homem, mulher, filhos

Idade atual ou “faz X anos hoje / em dd/mm”

QR Code automático apontando para a URL atual do formulário

📲 Instalação como PWA

O sistema é um PWA completo:

No iPhone (Safari):

Abra o link do painel

Toque em Compartilhar

Toque em Adicionar à Tela de Início

No Android (Chrome):

Abra o link

Toque nos três pontinhos

Instalar Aplicativo

📂 Estrutura do projeto
/
├── netlify/
│   └── functions/
│       ├── createCouple.js
│       └── hello.js
├── public/
│   ├── index.html
│   ├── admin.html
│   ├── manifest.json
│   ├── logo-ibvp.png
│   └── icon-*.png (PWA icons)
└── README.md

🚀 Como rodar localmente

Requer:

Node.js (LTS)

Conta no GitHub

Conta no Netlify

Conta no Supabase

1. Clone o repositório
git clone https://github.com/marcusjcosta/ibvp-ministerio-familias.git
cd ibvp-ministerio-familias

2. Instale o Netlify CLI (opcional, para testar localmente)
npm install -g netlify-cli

3. Rode localmente
netlify dev

🔐 Variáveis de ambiente

No Netlify → Site → Environment Variables:

SUPABASE_URL=SEU_PROJETO_URL
SUPABASE_PUBLISHABLE_KEY=sua_chave_publica


Nenhuma variável secreta é exposta no frontend.

🛠️ Deploy

O deploy é automático via Git:

git add .
git commit -m "Atualiza projeto"
git push


O Netlify detecta e publica automaticamente.

📞 Suporte e evolução

Este projeto foi desenvolvido de forma incremental e simples, com foco em:

rapidez de uso

facilidade para voluntários

segurança adequada

baixo custo (tudo gratuito)

Futuras melhorias planejadas:

Upload de fotos das famílias

Painel com gráficos mensais

Notificações de aniversariantes

Autenticação (Admin login)

✨ Autor

Marcus Costa
Desenvolvido para o Ministério de Famílias – IBVP
2026