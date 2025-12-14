// 游戏状态
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let correctCount = 0;
let wrongCount = 0;
let selectedDifficulty = null; // 选择的难度：'normal' 或 'hell'

// DOM元素（延迟获取，确保DOM已加载）
let startScreen, quizScreen, resultScreen, startBtn, nextBtn, restartBtn, normalBtn, hellBtn;

function initDOM() {
    startScreen = document.getElementById('start-screen');
    quizScreen = document.getElementById('quiz-screen');
    resultScreen = document.getElementById('result-screen');
    startBtn = document.getElementById('start-btn');
    nextBtn = document.getElementById('next-btn');
    restartBtn = document.getElementById('restart-btn');
    normalBtn = document.getElementById('normal-btn');
    hellBtn = document.getElementById('hell-btn');
    
    // 检查所有元素是否加载成功
    if (!startScreen || !quizScreen || !resultScreen || !startBtn || !nextBtn || !restartBtn || !normalBtn || !hellBtn) {
        console.error('DOM元素加载失败，请检查HTML结构');
        return false;
    }
    return true;
}

// 等级配置（从答应到皇后）
const levels = [
    { min: 0, max: 40, name: '答应', icon: '🌸', message: '还需努力，多看看《甄嬛传》吧！' },
    { min: 45, max: 55, name: '常在', icon: '🌺', message: '初入宫门，还需多加学习！' },
    { min: 60, max: 70, name: '贵人', icon: '🌷', message: '不错，已经有一定了解了！' },
    { min: 75, max: 85, name: '嫔', icon: '🌹', message: '很好，你对《甄嬛传》很熟悉！' },
    { min: 90, max: 95, name: '妃', icon: '👑', message: '优秀！你已经是《甄嬛传》的资深观众了！' },
    { min: 100, max: 100, name: '皇后', icon: '👑', message: '完美！你是真正的《甄嬛传》十级学者！' }
];

// 获取等级（处理41-44分的情况，归入答应）
function getLevel(score) {
    if (score >= 100) {
        return levels[5]; // 皇后
    } else if (score >= 90) {
        return levels[4]; // 妃
    } else if (score >= 75) {
        return levels[3]; // 嫔
    } else if (score >= 60) {
        return levels[2]; // 贵人
    } else if (score >= 45) {
        return levels[1]; // 常在
    } else {
        return levels[0]; // 答应
    }
}

// 选择难度
function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    
    // 更新按钮样式
    normalBtn.classList.remove('selected');
    hellBtn.classList.remove('selected');
    
    if (difficulty === 'normal') {
        normalBtn.classList.add('selected');
    } else if (difficulty === 'hell') {
        hellBtn.classList.add('selected');
    }
    
    // 启用开始按钮
    startBtn.disabled = false;
}

// 开始游戏
function startGame() {
    if (!selectedDifficulty) {
        alert('请先选择难度！');
        return;
    }
    
    // 重置状态
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    correctCount = 0;
    wrongCount = 0;
    
    // 随机抽取20道题
    currentQuiz = getRandomQuestions(20);
    
    // 切换到答题页面
    showScreen('quiz');
    
    // 显示第一题
    displayQuestion();
}

// 从题库中随机抽取指定数量的题目
function getRandomQuestions(count) {
    let sourceBank;
    if (selectedDifficulty === 'normal') {
        sourceBank = normalQuestionBank;
    } else if (selectedDifficulty === 'hell') {
        sourceBank = hellQuestionBank;
    } else {
        // 默认使用普通难度
        sourceBank = normalQuestionBank;
    }
    
    const shuffled = [...sourceBank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 显示题目
function displayQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    const questionNum = currentQuestionIndex + 1;
    
    // 更新进度
    const progress = (questionNum / currentQuiz.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-question').textContent = questionNum;
    document.getElementById('q-num').textContent = questionNum;
    document.getElementById('current-score').textContent = score;
    
    // 显示题目
    document.getElementById('question-text').textContent = question.question;
    
    // 显示选项
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // 重置状态
    selectedAnswer = null;
    nextBtn.disabled = true;
}

// 选择答案
function selectAnswer(index) {
    if (selectedAnswer !== null) return; // 已经选择过了
    
    selectedAnswer = index;
    const question = currentQuiz[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    // 标记选中的选项
    options[index].classList.add('selected');
    
    // 禁用所有选项
    options.forEach(opt => {
        opt.classList.add('disabled');
        opt.disabled = true;
    });
    
    // 显示正确答案
    const correctIndex = question.correct;
    options[correctIndex].classList.add('correct');
    
    // 如果选错了，标记错误选项
    if (index !== correctIndex) {
        options[index].classList.add('wrong');
        wrongCount++;
    } else {
        score += 5;
        correctCount++;
        document.getElementById('current-score').textContent = score;
    }
    
    // 启用下一题按钮
    nextBtn.disabled = false;
}

// 下一题
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuiz.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

// 显示结果
function showResult() {
    showScreen('result');
    
    // 获取等级
    const level = getLevel(score);
    
    // 更新结果页面
    document.getElementById('result-icon').textContent = level.icon;
    document.getElementById('result-level').textContent = level.name;
    document.getElementById('final-score').textContent = score;
    document.getElementById('result-message').textContent = level.message;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;
    
    // 根据分数调整标题
    if (score >= 90) {
        document.getElementById('result-title').textContent = '恭喜！';
    } else if (score >= 75) {
        document.getElementById('result-title').textContent = '不错！';
    } else if (score >= 60) {
        document.getElementById('result-title').textContent = '继续努力！';
    } else {
        document.getElementById('result-title').textContent = '加油！';
    }
}


// 切换屏幕
function showScreen(screen) {
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    
    switch(screen) {
        case 'start':
            startScreen.classList.add('active');
            break;
        case 'quiz':
            quizScreen.classList.add('active');
            break;
        case 'result':
            resultScreen.classList.add('active');
            break;
    }
}

// 初始化事件监听
function initEventListeners() {
    if (!initDOM()) {
        return;
    }
    
    startBtn.addEventListener('click', startGame);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', () => {
        selectedDifficulty = null;
        normalBtn.classList.remove('selected');
        hellBtn.classList.remove('selected');
        startBtn.disabled = true;
        showScreen('start');
    });

    // 难度选择事件
    normalBtn.addEventListener('click', () => selectDifficulty('normal'));
    hellBtn.addEventListener('click', () => selectDifficulty('hell'));
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEventListeners);
} else {
    // DOM已经加载完成
    initEventListeners();
}

