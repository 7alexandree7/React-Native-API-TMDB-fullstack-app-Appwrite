Readme · MD
Copy

# 🎬 React Native TMDB
 
Um aplicativo mobile de filmes construído com **React Native**, **Expo** e **TypeScript**, consumindo a API do The Movie Database (TMDB) e utilizando **Appwrite** como backend para rastreamento de buscas e métricas.
 
---
 
## 📱 Visão Geral
 
O app permite que o usuário explore filmes populares, busque títulos específicos, visualize detalhes completos de cada filme e acompanhe os filmes mais pesquisados — tudo em uma interface moderna e fluida para Android e iOS.
 
---
 
## ✨ Funcionalidades
 
- 🔥 Listagem de filmes populares via TMDB
- 🔍 Busca de filmes por título
- 🎥 Tela de detalhes do filme com pôster, avaliação, sinopse e gêneros
- 📊 Rastreamento de buscas com contagem via Appwrite
- 🏆 Ranking de filmes mais pesquisados (Trending)
- 💾 Tela de filmes salvos
- 👤 Perfil do usuário
- 🎨 Interface dark mode com NativeWind (Tailwind para React Native)
- 📱 Navegação por tabs com ícones customizados
 
---
 
## 🛠️ Stack
 
| Tecnologia | Uso |
|---|---|
| React Native | Framework mobile |
| Expo | Plataforma e ferramentas |
| Expo Router | Navegação file-based |
| TypeScript | Tipagem estática |
| NativeWind | Estilização com Tailwind |
| TMDB API | Dados de filmes |
| Appwrite | Backend (métricas de busca) |
 
---
 
## 📁 Estrutura do Projeto
 
```
app/
├── (tabs)/
│   ├── _layout.tsx       # Layout da navegação por tabs
│   ├── index.tsx         # Tela Home
│   ├── search.tsx        # Tela de Busca
│   ├── saved.tsx         # Tela de Salvos
│   └── profile.tsx       # Tela de Perfil
├── movie/
│   ├── _layout.tsx       # Layout das telas de filme
│   └── [id].tsx          # Tela de Detalhes do Filme
components/
├── MovieCard.tsx         # Card de filme
├── SearchBar.tsx         # Barra de busca
└── TabIcon.tsx           # Ícone customizado da tab bar
config/
└── env.ts                # Centralização das variáveis de ambiente
constants/
├── icons.ts              # Ícones do app
└── images.ts             # Imagens do app
hooks/
└── useFetch.ts           # Hook genérico para chamadas à API
interfaces/
└── interfaces.ts         # Tipagens TypeScript
services/
├── api.ts                # Integração com a TMDB API
└── appwrite.ts           # Integração com Appwrite
```
 
---
 
## 🔌 Integrações
 
### TMDB API
- `GET /discover/movie` — filmes populares
- `GET /search/movie` — busca por título
- `GET /movie/:id` — detalhes do filme
 
### Appwrite
- Banco: `movies`
- Collection: `metrics`
- Campos: `searchTerm`, `count`, `movie_id`, `title`, `poster_url`
- Lógica: a cada busca, incrementa o contador do termo ou cria um novo documento
 
---
 
## ⚙️ Configuração
 
### Pré-requisitos
- Node.js
- Expo CLI
- Conta na [TMDB](https://www.themoviedb.org/)
- Conta no [Appwrite](https://appwrite.io/)
 
### Instalação
 
```bash
git clone https://github.com/seu-usuario/react-native-tmdb
cd react-native-tmdb
npm install
```
 
### Variáveis de Ambiente
 
Crie um arquivo `.env` na raiz do projeto:
 
```env
EXPO_PUBLIC_MOVIE_API_KEY=seu_token_tmdb
EXPO_PUBLIC_APPWRITE_PROJECT_ID=seu_project_id
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://sfo.cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_DATABASE_ID=seu_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=seu_collection_id
```
 
> ⚠️ Todas as variáveis precisam do prefixo `EXPO_PUBLIC_` para serem acessíveis no cliente Expo.
 
### Rodando o projeto
 
```bash
npx expo start --clear
```
 
---
 
## 🧠 Decisões Técnicas
 
### Hook genérico `useFetch`
Foi criado um hook reutilizável que recebe qualquer função assíncrona como parâmetro, gerenciando automaticamente os estados de `loading`, `error` e `data`. Isso evita repetição de código em todas as telas que consomem a API.
 
### Variáveis de ambiente centralizadas
Em vez de chamar `process.env` diretamente nos arquivos, foi criado um `config/env.ts` que centraliza e tipa todas as variáveis, facilitando manutenção e evitando erros de digitação.
 
### Navegação com Expo Router
Utilizamos file-based routing do Expo Router, onde a estrutura de pastas define automaticamente as rotas. Rotas dinâmicas como `/movie/[id]` usam o formato de objeto `{ pathname, params }` para compatibilidade com a tipagem estrita do Expo Router.
 
### Tab Bar customizada
A tab bar padrão do React Navigation foi completamente customizada com `ImageBackground` e ícones próprios, usando `tabBarShowLabel: false` e estilos inline para contornar limitações do NativeWind em componentes nativos.
 
---
 
## 📄 Licença
 
MIT
