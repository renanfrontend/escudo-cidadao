# 🛡️ Escudo Cidadão

Um aplicativo B2C focado em democratizar a cibersegurança e proteger o cidadão comum contra fraudes digitais diárias (phishing, vazamentos de dados e links maliciosos).

## 🚀 O Projeto

O **Escudo Cidadão** atua como um assistente de segurança pessoal. O objetivo principal do MVP (Minimum Viable Product) é permitir que usuários leigos verifiquem links suspeitos recebidos por WhatsApp/SMS e monitorem a integridade de seus dados pessoais.

### 🛠️ Tech Stack
Este projeto foi inicializado com [Vite](https://vitejs.dev/) para garantir um ambiente de desenvolvimento rápido e otimizado.

- **Core:** React 18 + TypeScript
- **Build Tool:** Vite
- **UI & Estilização:** Material UI (MUI) v5
- **Roteamento:** React Router DOM
- **Ícones:** Material Icons

## 📂 Arquitetura do Projeto

A estrutura de pastas foi pensada para escalar conforme novas funcionalidades (Jornadas) são adicionadas:

```text
src/
 ┣ assets/         # Imagens estáticas e SVGs
 ┣ components/     # Componentes de UI reutilizáveis (ex: botões, inputs, cards)
 ┣ hooks/          # Custom hooks do React
 ┣ layouts/        # Estruturas globais de página (ex: Layout com Navbar)
 ┣ pages/          # Páginas correspondentes às Jornadas do usuário
 ┣ services/       # Integrações com APIs externas e lógica de backend
 ┣ theme/          # Configuração global de tema do Material UI
 ┣ utils/          # Funções utilitárias e formatadores
 ┣ App.tsx         # Configuração de rotas e providers globais
 ┗ main.tsx        # Ponto de entrada da aplicação