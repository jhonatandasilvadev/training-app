# 📝 Instruções de Uso - Training Day App

## ✅ Correções Implementadas

### 1. **Pesos Padrão Definidos**
Todos os exercícios agora têm pesos realistas pré-configurados:

#### Treino A - Pernas
- Agachamento livre: **60kg** (4 séries x 12 reps)
- Stiff: **50kg** (3 séries x 12 reps)
- Cadeira extensora: **45kg** (3 séries x 12 reps)
- Mesa flexora: **40kg** (3 séries x 12 reps)
- Cadeira abdutora: **50kg** (3 séries x 15 reps)
- Cadeira adutora: **50kg** (3 séries x 15 reps)
- Panturrilha sentado: **30kg** (4 séries x 15 reps)
- Panturrilha em pé: **60kg** (4 séries x 15 reps)

#### Treino B - Peito/Ombro/Tríceps
- Supino reto: **50kg** (4 séries x 12 reps)
- Crossover: **20kg** (3 séries x 12 reps)
- Supino inclinado: **40kg** (3 séries x 12 reps)
- Elevação lateral: **10kg** (3 séries x 12 reps)
- Desenvolvimento sentado: **30kg** (3 séries x 12 reps)
- Elevação frontal: **10kg** (3 séries x 12 reps)
- Tríceps cordas: **25kg** (3 séries x 12 reps)
- Tríceps invertido: **30kg** (3 séries x 12 reps)
- Tríceps press: **20kg** (3 séries x 12 reps)
- Abdominal: **Corpo** (3 séries x 20 reps)

#### Treino C - Costas/Bíceps
- Terra: **70kg** (4 séries x 10 reps)
- Pulldown: **50kg** (3 séries x 12 reps)
- Puxada frontal: **45kg** (3 séries x 12 reps)
- Remada baixa: **50kg** (3 séries x 12 reps)
- Fly invertido: **15kg** (3 séries x 12 reps)
- Encolhimento de trapézio: **40kg** (3 séries x 15 reps)
- Rosca direta: **25kg** (3 séries x 12 reps)
- Rosca Scott: **20kg** (3 séries x 12 reps)
- Rosca concentrada: **12kg** (3 séries x 12 reps)
- Antebraço: **15kg** (3 séries x 15 reps)
- Lombar banco: **Corpo** (3 séries x 15 reps)

### 2. **Botão "Iniciar Treino" Corrigido**
- O bug que impedia o modo treino de iniciar foi resolvido
- O `currentTrainingId` agora é preservado corretamente
- O timer funciona perfeitamente entre séries e exercícios

### 3. **Sistema de Séries Individuais** ⭐ NOVO!
- Agora você completa **cada série individualmente**!
- Botão mostra "Concluir Série 1", "Concluir Série 2", etc.
- Só na última série aparece "Concluir Exercício"
- Indicador visual mostra qual série você está (bolinhas coloridas)
- Timer de **60 segundos entre séries** do mesmo exercício
- Timer de **90 segundos entre exercícios diferentes**
- XP calculado por séries completadas: **5 XP por série + 20 XP de bônus** ao concluir o treino!

---

## 🔄 Como Resetar os Dados (Se Necessário)

Se você já tinha usado o app antes e quer aplicar os novos pesos padrão:

### Método 1: Console do Navegador (Recomendado)
1. Abra o `index.html` no navegador
2. Pressione `F12` para abrir o DevTools
3. Vá na aba **Console**
4. Cole este comando e pressione Enter:

```javascript
localStorage.clear();
location.reload();
```

### Método 2: Manualmente
1. Abra o DevTools (`F12`)
2. Vá em **Application** (Chrome) ou **Storage** (Firefox)
3. Expanda **Local Storage**
4. Clique no domínio do seu app
5. Clique com botão direito e selecione **Clear**
6. Recarregue a página (`F5`)

---

## 🎯 Como Usar o App

### 1. **Configurar Perfil**
- Clique na foto para fazer upload da sua imagem
- Digite seu nome no campo
- Ganhe XP e suba de nível conforme treina!

### 2. **Ver e Editar Treinos**
- Clique em **"Ver Treino"** em qualquer card
- Edite pesos, repetições e séries diretamente
- Adicione notas para cada exercício
- Clique em **"Adicionar Exercício"** para novos exercícios

### 3. **Iniciar Modo Treino** 💪
- Abra um treino
- Clique em **"Iniciar Treino"**
- O app mostrará **uma série por vez**!
- Execute as repetições indicadas
- Clique em **"Concluir Série X"** após cada série
- O app inicia um timer automático:
  - **60 segundos** entre séries do mesmo exercício
  - **90 segundos** entre exercícios diferentes
- Pode pular o descanso clicando em **"Pular descanso →"**
- Complete todas as séries de todos os exercícios
- No final, ganha XP baseado nas séries completadas!

### 4. **Duplicar Treino**
- Clique no ícone de **duplicar** (📋) no card
- Cria uma cópia do treino para personalizar

### 5. **Adicionar Novo Treino**
- Clique em **"Adicionar Novo Treino"**
- Crie seu próprio treino do zero!

---

## 💡 Dicas

✅ **Personalize os Pesos**: Os pesos padrão são apenas referência - ajuste conforme seu nível!

✅ **Use as Notas**: Adicione observações importantes nos exercícios (ex: "aumentar peso na próxima")

✅ **Acompanhe Seu Progresso**: O sistema de XP e níveis motiva a consistência!

✅ **Modo Offline**: Tudo funciona 100% offline - seus dados ficam salvos no navegador

✅ **Backup Manual**: Ainda não há exportação automática, mas em breve terá!

---

## 🐛 Problemas Conhecidos (Resolvidos)

✅ ~~Botão "Iniciar Treino" não funcionava~~ → **CORRIGIDO**

✅ ~~Pesos padrão eram 0kg~~ → **CORRIGIDO**

✅ ~~Não tinha controle de séries individuais~~ → **CORRIGIDO** - Agora cada série é completada individualmente!

---

## 📱 Compatibilidade

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Mobile (iOS/Android)

---

**Bons treinos! 💪🏋️‍♂️**

