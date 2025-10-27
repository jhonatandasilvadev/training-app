// ========================================
// 🏋️‍♂️ MEU TREINO APP - SCRIPT PRINCIPAL
// ========================================

// ===== DADOS INICIAIS E CONFIGURAÇÃO =====

const DEFAULT_TRAININGS = [
    {
        id: 'treino-a',
        name: 'Treino A - Pernas',
        exercises: [
            { name: 'Agachamento livre', weight: '60kg', reps: '12', sets: '4', notes: '' },
            { name: 'Stiff', weight: '50kg', reps: '12', sets: '3', notes: '' },
            { name: 'Cadeira extensora', weight: '45kg', reps: '12', sets: '3', notes: '' },
            { name: 'Mesa flexora', weight: '40kg', reps: '12', sets: '3', notes: '' },
            { name: 'Cadeira abdutora', weight: '50kg', reps: '15', sets: '3', notes: '' },
            { name: 'Cadeira adutora', weight: '50kg', reps: '15', sets: '3', notes: '' },
            { name: 'Panturrilha sentado', weight: '30kg', reps: '15', sets: '4', notes: '' },
            { name: 'Panturrilha em pé', weight: '60kg', reps: '15', sets: '4', notes: '' }
        ]
    },
    {
        id: 'treino-b',
        name: 'Treino B - Peito/Ombro/Tríceps',
        exercises: [
            { name: 'Supino reto', weight: '50kg', reps: '12', sets: '4', notes: '' },
            { name: 'Crossover', weight: '20kg', reps: '12', sets: '3', notes: '' },
            { name: 'Supino inclinado', weight: '40kg', reps: '12', sets: '3', notes: '' },
            { name: 'Elevação lateral', weight: '10kg', reps: '12', sets: '3', notes: '' },
            { name: 'Desenvolvimento sentado', weight: '30kg', reps: '12', sets: '3', notes: '' },
            { name: 'Elevação frontal', weight: '10kg', reps: '12', sets: '3', notes: '' },
            { name: 'Tríceps cordas', weight: '25kg', reps: '12', sets: '3', notes: '' },
            { name: 'Tríceps invertido', weight: '30kg', reps: '12', sets: '3', notes: '' },
            { name: 'Tríceps press', weight: '20kg', reps: '12', sets: '3', notes: '' },
            { name: 'Abdominal', weight: 'Corpo', reps: '20', sets: '3', notes: '' }
        ]
    },
    {
        id: 'treino-c',
        name: 'Treino C - Costas/Bíceps',
        exercises: [
            { name: 'Terra', weight: '70kg', reps: '10', sets: '4', notes: '' },
            { name: 'Pulldown', weight: '50kg', reps: '12', sets: '3', notes: '' },
            { name: 'Puxada frontal', weight: '45kg', reps: '12', sets: '3', notes: '' },
            { name: 'Remada baixa', weight: '50kg', reps: '12', sets: '3', notes: '' },
            { name: 'Fly invertido', weight: '15kg', reps: '12', sets: '3', notes: '' },
            { name: 'Encolhimento de trapézio', weight: '40kg', reps: '15', sets: '3', notes: '' },
            { name: 'Rosca direta', weight: '25kg', reps: '12', sets: '3', notes: '' },
            { name: 'Rosca Scott', weight: '20kg', reps: '12', sets: '3', notes: '' },
            { name: 'Rosca concentrada', weight: '12kg', reps: '12', sets: '3', notes: '' },
            { name: 'Antebraço', weight: '15kg', reps: '15', sets: '3', notes: '' },
            { name: 'Lombar banco', weight: 'Corpo', reps: '15', sets: '3', notes: '' }
        ]
    }
];

// ===== ESTADO DA APLICAÇÃO =====
let trainings = [];
let currentTrainingId = null;
let currentExerciseIndex = 0;
let currentSetNumber = 1; // Contador de séries atual
let timerInterval = null;
let userData = {
    name: 'Atleta',
    photo: 'https://via.placeholder.com/80',
    xp: 0,
    level: 1
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    loadTrainings();
    renderTrainings();
    updateProfile();
    setupEventListeners();
});

// ===== FUNÇÕES DE LOCALSTORAGE =====

function loadUserData() {
    const saved = localStorage.getItem('userData');
    if (saved) {
        userData = JSON.parse(saved);
    }
}

function saveUserData() {
    localStorage.setItem('userData', JSON.stringify(userData));
}

function loadTrainings() {
    const saved = localStorage.getItem('trainings');
    if (saved) {
        trainings = JSON.parse(saved);
    } else {
        trainings = DEFAULT_TRAININGS;
        saveTrainings();
    }
}

function saveTrainings() {
    localStorage.setItem('trainings', JSON.stringify(trainings));
}

// ===== FUNÇÕES DE PERFIL =====

function updateProfile() {
    document.getElementById('userName').value = userData.name;
    document.getElementById('profilePhoto').src = userData.photo;
    document.getElementById('userLevel').textContent = userData.level;
    document.getElementById('userXP').textContent = userData.xp;
    
    // Calcular progresso para próximo nível
    const xpForNextLevel = userData.level * 100;
    const progress = (userData.xp / xpForNextLevel) * 100;
    document.getElementById('xpBar').style.width = progress + '%';
}

function addXP(amount) {
    userData.xp += amount;
    const xpForNextLevel = userData.level * 100;
    
    // Verificar level up
    while (userData.xp >= xpForNextLevel) {
        userData.xp -= xpForNextLevel;
        userData.level++;
    }
    
    saveUserData();
    updateProfile();
}

// ===== FUNÇÕES DE RENDERIZAÇÃO =====

function renderTrainings() {
    const container = document.getElementById('trainingCards');
    container.innerHTML = '';
    
    trainings.forEach(training => {
        const card = createTrainingCard(training);
        container.appendChild(card);
    });
}

function createTrainingCard(training) {
    const card = document.createElement('div');
    card.className = 'training-card bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow-lg border border-white/20 cursor-pointer hover:shadow-2xl transition fade-in';
    
    card.innerHTML = `
        <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold">${training.name}</h3>
            <span class="text-purple-400 text-sm">${training.exercises.length} exercícios</span>
        </div>
        <div class="text-gray-300 text-sm mb-4">
            ${training.exercises.slice(0, 3).map(ex => `• ${ex.name}`).join('<br>')}
            ${training.exercises.length > 3 ? `<br>• E mais ${training.exercises.length - 3}...` : ''}
        </div>
        <div class="flex gap-2">
            <button class="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition" onclick="openTraining('${training.id}')">
                Ver Treino
            </button>
            <button class="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition" onclick="duplicateTraining('${training.id}', event)">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
            </button>
        </div>
    `;
    
    return card;
}

function renderExercises(trainingId) {
    const training = trainings.find(t => t.id === trainingId);
    if (!training) return;
    
    const container = document.getElementById('exercisesList');
    container.innerHTML = '';
    
    training.exercises.forEach((exercise, index) => {
        const card = createExerciseCard(exercise, index, trainingId);
        container.appendChild(card);
    });
}

function createExerciseCard(exercise, index, trainingId) {
    const card = document.createElement('div');
    card.className = 'exercise-card bg-white/5 border border-white/10 rounded-lg p-4 fade-in';
    
    card.innerHTML = `
        <div class="flex items-start gap-3">
            <div class="flex-1">
                <input type="text" 
                       value="${exercise.name}" 
                       onchange="updateExercise('${trainingId}', ${index}, 'name', this.value)"
                       class="bg-transparent text-lg font-semibold mb-2 border-none outline-none focus:text-purple-300 transition w-full"
                       placeholder="Nome do exercício">
                <div class="grid grid-cols-3 gap-2 mb-2">
                    <div>
                        <label class="text-xs text-gray-400">Peso</label>
                        <input type="text" 
                               value="${exercise.weight}" 
                               onchange="updateExercise('${trainingId}', ${index}, 'weight', this.value)"
                               class="bg-white/10 text-white text-sm py-1 px-2 rounded w-full border border-white/20 focus:border-purple-500 outline-none"
                               placeholder="0kg">
                    </div>
                    <div>
                        <label class="text-xs text-gray-400">Reps</label>
                        <input type="text" 
                               value="${exercise.reps}" 
                               onchange="updateExercise('${trainingId}', ${index}, 'reps', this.value)"
                               class="bg-white/10 text-white text-sm py-1 px-2 rounded w-full border border-white/20 focus:border-purple-500 outline-none"
                               placeholder="12">
                    </div>
                    <div>
                        <label class="text-xs text-gray-400">Séries</label>
                        <input type="text" 
                               value="${exercise.sets}" 
                               onchange="updateExercise('${trainingId}', ${index}, 'sets', this.value)"
                               class="bg-white/10 text-white text-sm py-1 px-2 rounded w-full border border-white/20 focus:border-purple-500 outline-none"
                               placeholder="3">
                    </div>
                </div>
                <textarea 
                    onchange="updateExercise('${trainingId}', ${index}, 'notes', this.value)"
                    class="bg-white/10 text-white text-sm py-1 px-2 rounded w-full border border-white/20 focus:border-purple-500 outline-none resize-none"
                    placeholder="Notas..."
                    rows="2">${exercise.notes}</textarea>
            </div>
            <button onclick="deleteExercise('${trainingId}', ${index})" 
                    class="text-red-400 hover:text-red-300 transition p-2 hover:bg-red-500/20 rounded">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
            </button>
        </div>
    `;
    
    return card;
}

// ===== FUNÇÕES DE TREINO =====

function openTraining(trainingId) {
    currentTrainingId = trainingId;
    const training = trainings.find(t => t.id === trainingId);
    
    if (!training) return;
    
    document.getElementById('modalTrainingName').value = training.name;
    renderExercises(trainingId);
    
    const modal = document.getElementById('trainingModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex', 'show');
}

function closeModal(resetTrainingId = true) {
    const modal = document.getElementById('trainingModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex', 'show');
    
    // Só resetar o currentTrainingId se não estiver iniciando um treino
    if (resetTrainingId) {
        currentTrainingId = null;
    }
}

function updateTrainingName(name) {
    if (!currentTrainingId) return;
    
    const training = trainings.find(t => t.id === currentTrainingId);
    if (training) {
        training.name = name;
        saveTrainings();
        renderTrainings();
    }
}

function addNewTraining() {
    const newId = 'treino-' + Date.now();
    const newTraining = {
        id: newId,
        name: 'Novo Treino',
        exercises: []
    };
    
    trainings.push(newTraining);
    saveTrainings();
    renderTrainings();
    openTraining(newId);
}

function duplicateTraining(trainingId, event) {
    event.stopPropagation();
    
    const training = trainings.find(t => t.id === trainingId);
    if (!training) return;
    
    const newId = 'treino-' + Date.now();
    const duplicate = {
        id: newId,
        name: training.name + ' (Cópia)',
        exercises: JSON.parse(JSON.stringify(training.exercises))
    };
    
    trainings.push(duplicate);
    saveTrainings();
    renderTrainings();
}

function deleteTraining() {
    if (!currentTrainingId) return;
    
    if (confirm('Tem certeza que deseja excluir este treino?')) {
        trainings = trainings.filter(t => t.id !== currentTrainingId);
        saveTrainings();
        renderTrainings();
        closeModal();
    }
}

// ===== FUNÇÕES DE EXERCÍCIOS =====

function addExercise() {
    if (!currentTrainingId) return;
    
    const training = trainings.find(t => t.id === currentTrainingId);
    if (!training) return;
    
    const newExercise = {
        name: 'Novo Exercício',
        weight: '0kg',
        reps: '12',
        sets: '3',
        notes: ''
    };
    
    training.exercises.push(newExercise);
    saveTrainings();
    renderExercises(currentTrainingId);
}

function updateExercise(trainingId, index, field, value) {
    const training = trainings.find(t => t.id === trainingId);
    if (!training || !training.exercises[index]) return;
    
    training.exercises[index][field] = value;
    saveTrainings();
}

function deleteExercise(trainingId, index) {
    const training = trainings.find(t => t.id === trainingId);
    if (!training) return;
    
    if (confirm('Excluir este exercício?')) {
        training.exercises.splice(index, 1);
        saveTrainings();
        renderExercises(trainingId);
    }
}

// ===== MODO DE TREINO =====

function startTrainingMode() {
    if (!currentTrainingId) {
        alert('Erro: Nenhum treino selecionado!');
        return;
    }
    
    const training = trainings.find(t => t.id === currentTrainingId);
    
    if (!training) {
        alert('Erro: Treino não encontrado!');
        return;
    }
    
    if (training.exercises.length === 0) {
        alert('Adicione exercícios antes de iniciar o treino!');
        return;
    }
    
    currentExerciseIndex = 0;
    currentSetNumber = 1; // Resetar contador de séries
    
    // Esconder tela principal
    document.getElementById('mainScreen').style.display = 'none';
    
    // Fechar modal SEM resetar o currentTrainingId
    const modal = document.getElementById('trainingModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex', 'show');
    
    // Mostrar tela de treino
    const trainingScreen = document.getElementById('trainingModeScreen');
    trainingScreen.classList.remove('hidden');
    trainingScreen.classList.add('flex');
    
    showCurrentExercise();
}

function showCurrentExercise() {
    const training = trainings.find(t => t.id === currentTrainingId);
    if (!training) return;
    
    const exercise = training.exercises[currentExerciseIndex];
    const total = training.exercises.length;
    const totalSets = parseInt(exercise.sets) || 3;
    const isLastSet = currentSetNumber >= totalSets;
    
    document.getElementById('currentExerciseNum').textContent = currentExerciseIndex + 1;
    document.getElementById('totalExercises').textContent = total;
    
    const display = document.getElementById('exerciseDisplay');
    display.innerHTML = `
        <div class="exercise-transition bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold mb-4">${exercise.name}</h2>
                
                <!-- Indicador de Série Atual -->
                <div class="bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-xl p-4 mb-6 border border-purple-500/50">
                    <div class="text-4xl font-bold text-purple-200 mb-1">Série ${currentSetNumber} de ${totalSets}</div>
                    <div class="flex justify-center gap-2 mt-3">
                        ${Array.from({length: totalSets}, (_, i) => 
                            `<div class="w-3 h-3 rounded-full ${i < currentSetNumber ? 'bg-green-500' : i === currentSetNumber - 1 ? 'bg-purple-400 animate-pulse' : 'bg-gray-600'}"></div>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
                    <div class="bg-purple-600/30 rounded-lg p-4 border border-purple-500/30">
                        <div class="text-2xl font-bold">${exercise.weight}</div>
                        <div class="text-sm text-gray-300 mt-1">Peso</div>
                    </div>
                    <div class="bg-purple-600/30 rounded-lg p-4 border border-purple-500/30">
                        <div class="text-2xl font-bold">${exercise.reps}</div>
                        <div class="text-sm text-gray-300 mt-1">Reps</div>
                    </div>
                    <div class="bg-purple-600/30 rounded-lg p-4 border border-purple-500/30">
                        <div class="text-2xl font-bold">${exercise.sets}</div>
                        <div class="text-sm text-gray-300 mt-1">Total Séries</div>
                    </div>
                </div>
                ${exercise.notes ? `<div class="bg-white/5 rounded-lg p-4 text-gray-300 text-left mb-6"><strong>Notas:</strong><br>${exercise.notes}</div>` : ''}
            </div>
            <button onclick="completeSet()" class="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl shadow-lg transition transform hover:scale-105">
                ${isLastSet ? '✓ Concluir Exercício' : '✓ Concluir Série ' + currentSetNumber}
            </button>
        </div>
    `;
    
    document.getElementById('timerSection').classList.add('hidden');
}

function completeSet() {
    const training = trainings.find(t => t.id === currentTrainingId);
    if (!training) return;
    
    const exercise = training.exercises[currentExerciseIndex];
    const totalSets = parseInt(exercise.sets) || 3;
    
    // Verificar se completou todas as séries do exercício
    if (currentSetNumber >= totalSets) {
        // Passou para o próximo exercício
        currentExerciseIndex++;
        currentSetNumber = 1; // Resetar contador de séries
        
        // Verificar se terminou o treino
        if (currentExerciseIndex >= training.exercises.length) {
            finishTraining();
            return;
        }
        
        // Iniciar timer de descanso entre exercícios (mais longo)
        startRestTimer(90); // 90 segundos entre exercícios
    } else {
        // Ainda há séries restantes neste exercício
        currentSetNumber++;
        
        // Iniciar timer de descanso entre séries (mais curto)
        startRestTimer(60); // 60 segundos entre séries
    }
}

function startRestTimer(seconds = 60) {
    let timeLeft = seconds;
    const totalTime = seconds;
    
    document.getElementById('exerciseDisplay').innerHTML = '';
    document.getElementById('timerSection').classList.remove('hidden');
    document.getElementById('timerDisplay').textContent = timeLeft;
    document.getElementById('timerBar').style.width = '100%';
    
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timerDisplay').textContent = timeLeft;
        
        const progress = (timeLeft / totalTime) * 100;
        document.getElementById('timerBar').style.width = progress + '%';
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showCurrentExercise();
        }
    }, 1000);
}

function skipTimer() {
    if (timerInterval) clearInterval(timerInterval);
    showCurrentExercise();
}

function exitTrainingMode() {
    if (timerInterval) clearInterval(timerInterval);
    
    if (confirm('Tem certeza que deseja sair do modo treino?')) {
        document.getElementById('trainingModeScreen').classList.add('hidden');
        document.getElementById('trainingModeScreen').classList.remove('flex');
        document.getElementById('mainScreen').style.display = 'block';
        currentTrainingId = null;
        currentExerciseIndex = 0;
        currentSetNumber = 1;
    }
}

function finishTraining() {
    if (timerInterval) clearInterval(timerInterval);
    
    // Calcular XP baseado no número total de séries completadas
    const training = trainings.find(t => t.id === currentTrainingId);
    let totalSets = 0;
    
    if (training) {
        training.exercises.forEach(exercise => {
            totalSets += parseInt(exercise.sets) || 3;
        });
    }
    
    // XP = 5 por série completada + bônus de 20 por completar o treino
    const xpGained = (totalSets * 5) + 20;
    
    document.getElementById('xpGained').textContent = xpGained;
    
    // Esconder tela de treino
    document.getElementById('trainingModeScreen').classList.add('hidden');
    document.getElementById('trainingModeScreen').classList.remove('flex');
    
    // Mostrar tela de conclusão
    const completionScreen = document.getElementById('completionScreen');
    completionScreen.classList.remove('hidden');
    completionScreen.classList.add('flex', 'show');
    
    // Adicionar XP
    addXP(xpGained);
}

function backToHome() {
    document.getElementById('completionScreen').classList.add('hidden');
    document.getElementById('completionScreen').classList.remove('flex', 'show');
    document.getElementById('mainScreen').style.display = 'block';
    currentTrainingId = null;
    currentExerciseIndex = 0;
    currentSetNumber = 1;
}

// ===== EVENT LISTENERS =====

function setupEventListeners() {
    // Profile
    document.getElementById('userName').addEventListener('change', (e) => {
        userData.name = e.target.value;
        saveUserData();
    });
    
    document.getElementById('photoUpload').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                userData.photo = event.target.result;
                document.getElementById('profilePhoto').src = userData.photo;
                saveUserData();
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('addTrainingBtn').addEventListener('click', addNewTraining);
    document.getElementById('addExerciseBtn').addEventListener('click', addExercise);
    document.getElementById('startTrainingBtn').addEventListener('click', startTrainingMode);
    document.getElementById('deleteTrainingBtn').addEventListener('click', deleteTraining);
    
    document.getElementById('modalTrainingName').addEventListener('change', (e) => {
        updateTrainingName(e.target.value);
    });
    
    // Training Mode
    document.getElementById('exitTrainingBtn').addEventListener('click', exitTrainingMode);
    document.getElementById('skipTimerBtn').addEventListener('click', skipTimer);
    
    // Completion
    document.getElementById('backToHomeBtn').addEventListener('click', backToHome);
    
    // Close modal on backdrop click
    document.getElementById('trainingModal').addEventListener('click', (e) => {
        if (e.target.id === 'trainingModal') {
            closeModal();
        }
    });
}

// ===== FUNÇÕES GLOBAIS (chamadas pelo HTML) =====
window.openTraining = openTraining;
window.duplicateTraining = duplicateTraining;
window.updateExercise = updateExercise;
window.deleteExercise = deleteExercise;
window.completeSet = completeSet;

