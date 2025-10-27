# 🏋️‍♂️ Meu Treino App

Aplicativo leve e **mobile-first**, feito em **HTML + Tailwind CSS + JavaScript puro**, com **armazenamento local (localStorage)** para salvar progresso, treinos e perfil do usuário.

---

## ⚙️ Funcionalidades Principais

### 👤 Perfil
- Campo de nome e upload de foto (salvos em localStorage)
- Exibição de nível e XP acumulado

### 🏋️‍♀️ Treinos
- 3 cards padrão (Treino A, B e C)
- Cada card contém lista de exercícios editáveis:
  - Nome do exercício
  - Peso atual
  - Repetições
  - Séries
  - Campo de notas
- Botões para:
  - Adicionar novo exercício
  - Editar / excluir exercício
  - Duplicar treino
- Tudo salvo automaticamente no `localStorage`

### ▶️ Modo Treino
- Exibe **uma série por vez** com indicador visual de progresso
- Sistema de séries individuais: complete cada série antes de passar para a próxima
- Timer inteligente:
  - **60 segundos** entre séries do mesmo exercício
  - **90 segundos** entre exercícios diferentes
- Botão muda dinamicamente: "Concluir Série X" ou "Concluir Exercício"
- Opção de pular o descanso a qualquer momento
- Ao final, mostra tela de conclusão com XP ganho (5 XP por série + 20 bônus)

### 💾 Armazenamento
- Todos os dados são guardados localmente
- Função futura para exportar/importar dados (JSON)

---

## 💡 Tecnologias Usadas

- **HTML5**
- **Tailwind CSS**
- **JavaScript (ES6)**
- **LocalStorage API**

---

## 📱 Design & Interação

- Layout **Mobile First**
- Animações leves com **Tailwind transitions**
- Botões e cards com **efeitos de hover e focus**
- Timer com **barra de progresso animada**

---

## 📋 Estrutura de Arquivos

- **index.html** — Estrutura do app (cards, modal, timer)
- **style.css** — Estilo adicional (pode incluir customizações)
- **script.js** — Lógica principal (edição, timer, localStorage)
- **README.md** — Este documento de referência

---

## 🚀 Como Rodar

1. Baixe os arquivos.
2. Abra o `index.html` no navegador.
3. O app rodará 100% localmente (sem backend).

---

## 📦 Estrutura Inicial dos Treinos

### Treino A
- Agachamento livre  
- Stiff  
- Cadeira extensora  
- Mesa flexora  
- Cadeira abdutora  
- Cadeira adutora  
- Panturrilha sentado  
- Panturrilha em pé  

### Treino B
- Supino reto  
- Crossover  
- Supino inclinado  
- Elevação lateral  
- Desenvolvimento sentado  
- Elevação frontal  
- Tríceps cordas  
- Tríceps invertido  
- Tríceps press  
- Abdominal  

### Treino C
- Terra  
- Pulldown  
- Puxada frontal  
- Remada baixa  
- Fly invertido  
- Encolhimento de trapézio  
- Rosca direta  
- Rosca Scott  
- Rosca concentrada  
- Antebraço  
- Lombar banco  

---

## 🧭 Diretrizes de Desenvolvimento

1. Priorizar **simplicidade + fluidez**.
2. Usar **Tailwind** para responsividade e estilo moderno.
3. Centralizar toda lógica em `script.js`:
   - Funções de salvar e carregar treinos.
   - Timer animado entre exercícios.
   - Atualização de XP.
4. Modularizar funções JS com clareza.
5. Evitar dependências externas (rodar 100% offline).
6. Manter design limpo e intuitivo.

---

## ✨ Ideias Futuras

- Histórico de evolução com gráfico.
- Opção de metas semanais.
- Exportar/importar treinos (JSON).
- Sistema de níveis e conquistas.

---

## 📝 Observações

- Este é um projeto 100% offline e local.
- Todos os dados são salvos no **localStorage** do navegador.
- Não há servidor backend necessário.
- Ideal para uso pessoal ou como base para projetos maiores.

---

**Desenvolvido com 💪 para facilitar seu acompanhamento de treinos!**

