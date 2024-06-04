document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        { question: "음식물 쓰레기인 것을 고르시오.", choices: ["1. 왕겨", "2. 고추씨", "3. 내장", "4. 한약 찌꺼기"], correct: 2 },
        { question: "닌텐도OLED가 아닌 것을 고르시오.", choices: ["1. 스플래툰3 에디션", "2. 스칼렛 바이올렛 에디션", "3. 동물의 숲 에디션", "4. 젤다 전설 티어스 오브 더 킹덤 에디션"], correct: 2 },
        { question: "화장품의 이름이 틀린 것을 고르시오.", choices: ["1. 쿨톤이셔서 그런데 DM 확인 부탁드려요", "2. 쇼핑하는 치즈냥", "3. 쿨대평가", "4. 톡쏘는 포도 풍선껌인 척"], correct: 2 },
        { question: "유사과학 중 '음모론'류로 분류되는 것이 아닌 것을 고르시오.", choices: ["1. 지구공동설", "2. 금발멸종설", "3. 비만 세균", "4. 백신 반대 운동"], correct: 2 },
        { question: "불꽃반응색이 황록색인 것을 고르시오.", choices: ["1. Na", "2. Cu", "3. Br", "4. Cs"], correct: 2 },
        { question: "보색(대비색)이 맞게 짝지어진 것을 고르시오.", choices: ["1. 청록 - 빨강", "2. 남보라 - 연두", "3. 파랑 - 다홍", "4. 연지 - 녹색"], correct: 0 },
        { question: "항문에 발생하는 근육통의 이름을 고르시오.", choices: ["1. 항문거근증후군", "2. 치질", "3. 변실금", "4. 항문 외치핵"], correct: 0 },
        { question: "세베루스 스네이프와 같은 기숙사가 아닌 사람을 고르시오.", choices: ["1. 시리우스 블랙", "2. 톰 마볼로 리들", "3. 발부르가 블랙", "4. 드레이코 말포이"], correct: 0 },
        { question: "'핀과 제이크의 어드벤처 타임' 등장인물 중 공주인 인물을 고르시오.", choices: ["1. 베티(현 얼음대왕의 약혼자)", "2. 울룩불룩", "3. 마르셀린", "4. 레몬 백작"], correct: 1 },
        { question: "'젤다의 전설 티어스 오브 더 킹덤'의 곡옥(비석)의 이름과 능력 짝이 틀린 것을 고르시오.", choices: ["1. 젤다 - 시간", "2. 미넬 - 물", "3. 라울 - 빛", "4. 윤돌 - 화염"], correct: 1 },
        { question: "'파이널판타지XIV' 종족 중 야만족인 종족을 고르시오.", choices: ["1. 미코테", "2. 이크샬", "3. 루가딘", "4. 라라펠"], correct: 1 },
        { question: "'나의 마녀' 등장인물 중 남자 히로인이 아닌 인물을 고르시오.", choices: ["1. 시즌1 2부 마녀의 첫사랑 마을 소년", "2. 시즌2 1부 마녀 단골 제빵사", "3. 시즌2 1부 작가 지망 특이 체질", "4. 시즌2 2부 前용사 휴맨"], correct: 1 },
        { question: "'던전밥'의 등장인물 '파린'의 능력 중 수치가 5가 아닌 것을 고르시오.", choices: ["1. 지력", "2. 사차원", "3. 체력", "4. 마력"], correct: 0 },
        { question: "'던전밥'의 등장 몬스터 중 5계층에서 출현하는 몬스터를 고르시오.", choices: ["1. 바로메츠", "2. 셰이프시스터", "3. 체인질링", "4. 바르그"], correct: 0 },
        { question: "'빨간 머리 앤'의 등장인물 중 에이번리 마을 사람이 아닌 인물을 고르시오.", choices: ["1. 루비 길리스", "2. 찰리 슬론", "3. 레이첼 린드", "4. 조지핀 배리"], correct: 3 },
        { question: "'루시'의 앨범 '열'에 수록된 곡이 아닌 것을 고르시오.", choices: ["1. 뜨거", "2. 아지랑이", "3. 내버려", "4. 무색"], correct: 3 },
        { question: "이 퀴즈의 배경화면에서 쓰인 폰트로 옳은 것을 고르시오.", choices: ["1. 온글잎 누카", "2. HS여름물빛체2.0", "3. 기상청달콤기후체", "4. 학교안심 물결"], correct: 3 },
        { question: "특정 칵테일에 사용되어 남성들에게 오랜 인기로 글라스 이름이 생겨난 글라스의 이름으로 옳은 것을 고르시오.", choices: ["1. 소서 글라스", "2. 필스너 글라스", "3. 톰 콜린스 글라스", "4. 올드패션드 글라스"], correct: 3 }
    ];
    const lastQuestionFix = {question: "본 퀴즈 제작자가 오랫동안 애정한 작품이 아닌 것을 고르시오.", choices: ["1. 나의 마녀", "2. 사카모토 데이즈", "3. 하이큐", "4. 빅토리어스"], correct: 1}; // 고정 문제 설정
    const bonusQuestion = {question: "???", choices: [""], correct: 0};
    // const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
    // 0.5는 0(변함x)과 1(첫 번쨰가 두 번째 앞)사이의 무작위 수
    // 0에 가까울 때 0.5에 가까운 양수
    // 0.5에 가까울 때 0에 가까운 수
    // 1에 가까울 때 -0.5에 가까운 음수
    // 무작위로 섞을 때 자주 사용하는 방법 / arr.sort(() => 0.5 - Math.random());

    let selectedQuestions = [];
    let currentSlide = 0;
    let answers = Array(19).fill(null); // 길이가 20인 배열, 값을 0으로 초기화
    // let answers = [];

    var modal = document.getElementById("bonusModal");
    var link = document.getElementById("bonus");
    var span = document.getElementsByClassName("close")[0];

    // document.getElementById('bonus').addEventListener('click', function(){
    //     alert('🎁');
    // });
    link.onclick = function(event){
        event.preventDefault(); // 링크 기본 동작 억제
        modal.style.display = "flex";
    }; // 수상쩍은 퀴이즈 이벤트
    span.onclick = function(){
        modal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
    } // 모달 외부 클릭 시 닫기
    let bonusClick = false; // 클릭 여부
    let bonusScore = 0;
    const bonusButton = document.getElementById('bonus');
    bonusButton.addEventListener('click', function(){
        if(!bonusClick){
            bonusClick = true;
            bonusScore += 1;

            document.getElementById('hidden').innerHTML = "✨최고점: 21점!🙉✨";
        }
    });

    const quizContainer = document.getElementById('quiz-container');
    const scoreList = document.getElementById('score-list');

    // 퀴즈 초기화
    function initializeQuiz() {
        selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 18);
        selectedQuestions.push(lastQuestionFix); // 2점 문제 추가
        selectedQuestions.push(bonusQuestion); // bonus
        answers.fill(null);
        currentSlide = 0;
        document.getElementById('quiz-container').innerHTML = '';
        // answers = Array(19).fill(null);
        selectedQuestions.forEach((question, index) => {
            createSlide(question, index);
        });
        showSlide(currentSlide);
    }
    

    // 슬라이드 생성 함수
    function createSlide(question, index) {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        if (index === 0) slide.classList.add('active');

        const questionElement = document.createElement('h1');
        questionElement.innerText = `${index + 1}. ${question.question}`; // 문제 숫자 + 문제
        slide.appendChild(questionElement);
        slide.appendChild(document.createElement('br'));

        if(question.choices.length > 2){
            question.choices.forEach((choice, choiceIndex) => {
                const label = document.createElement('label');
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `question${index}`;
                radio.value = choiceIndex;
                if (answers[index] === choiceIndex) {
                    radio.checked = true;
                }

                radio.addEventListener('change', () => {
                    answers[index] = choiceIndex;
                    questionElement.style.color = ''; // 선택 시 색상 초기화
                    const warning = slide.querySelector('.warning');
                    if (warning) {
                        warning.remove(); // 경고 메세지 제거
                    }
                });

                label.appendChild(radio);
                label.appendChild(document.createTextNode(choice));
                slide.appendChild(label);
                slide.appendChild(document.createElement('br'));
                slide.appendChild(document.createElement('br'));
            });
        } 
        else{
            const bonusText = document.createElement('h5');
            bonusText.innerText = '어라? 퀴즈가 찢겨져 있다.';
            slide.appendChild(bonusText);
        }

        if (index > 0) {
            const prevButton = document.createElement('button');
            prevButton.innerText = '이전문제';
            prevButton.classList.add('prev-button'); // 클래스 추가 - css
            prevButton.addEventListener('click', () => {
                currentSlide--;
                showSlide(currentSlide);
            });
            slide.appendChild(prevButton);
        }

        if (index < selectedQuestions.length - 1) {
            const nextButton = document.createElement('button');
            nextButton.innerText = '다음문제';
            nextButton.classList.add('next-button');
            nextButton.addEventListener('click', () => {
                const selectedOption = slide.querySelector(`input[name="question${index}"]:checked`);
                if (!selectedOption) {
                    // ai제안
                    // setTimeout(() => {
                    currentSlide++;
                    showSlide(currentSlide); // 화면 넘어가게 수동 코드
                    const nextSlide = document.querySelector(`.slide:nth-child(${index + 2})`);

                    const warning = document.createElement('h5');
                    warning.classList.add('warning');
                    warning.style.color = 'red';
                    warning.innerText = '이전 문제의 답을 선택하지 않았습니다.';
                    nextSlide.appendChild(warning);

                    setTimeout(() => {
                        warning.classList.add('fade-out');
                        warning.addEventListener('animationend', () => {
                            warning.remove();
                        });
                    }, 500);
                // }, 100); 100ms 딜레이로 슬라이드 먼저 렌더링
                } else{
                    currentSlide++;
                    showSlide(currentSlide);
                }
            });
            slide.appendChild(nextButton);

        } else {
            const submitButton = document.createElement('button');
            submitButton.innerText = '다음문제';
            submitButton.classList.add('submit-button');
            submitButton.addEventListener('click', () => {
                const selectedOption = slide.querySelector(`input[name="question${index}"]:checked`);
                    if (currentSlide < selectedQuestions.length - 1) {
                        currentSlide++; // 다음 문제로 이동
                        showSlide(currentSlide);
                    } else {
                        showResults(); // 결과 표시
                    }
            });
            slide.appendChild(submitButton);
        }

        quizContainer.appendChild(slide);
    }

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('active', slideIndex === index);
        });

        const prevSlide = slides[index - 1];
        if(prevSlide){
            const selectedOption = prevSlide.querySelector(`input[name="question${index - 1}"]:checked`);
            if(!selectedOption){
                const warning = document.createElement('h5');
                warning.classList.add('warning');
                warning.style.color ='red';
                warning.innnerText = '이전 문제의 답을 선택하지 않았습니다.';
                prevSlide.appendChild(warning);

                setTimeout(() => {
                    warning.classList.add('fade-out');
                    warning.addEventListener('animationend', () => {
                        warning.remove();
                    });
                }, 500);
            }
        }
    }

    function showResults() {
        const resultsSlide = document.createElement('div');
        resultsSlide.classList.add('result-container');
        resultsSlide.innerHTML = '<h1>결과</h1><a>이상 적폐 전격 공개 퀴즈였습니다.</a>';
    
        let score = 0;
    
        // 각 10개의 항목으로 나누는 함수
        const chunkArray = (arr, chunkSize) => {
            const result = [];
            for (let i = 0; i < arr.length; i += chunkSize) {
                result.push(arr.slice(i, i + chunkSize));
            }
            return result;
        };
    
        const chunks = chunkArray(selectedQuestions, 10);
        const [questionsPart1, questionsPart2] = chunks;
    
        const createResultList = (questions, startIndex) => {
            const resultList = document.createElement('div');
            resultList.classList.add('result-list');
    
            questions.forEach((question, index) => {
                const questionResult = document.createElement('div');
                questionResult.classList.add('result-item');
                if (question.choices.length > 1) {
                    const answerIndex = answers[startIndex + index];
                    const correctAnswer = question.choices[question.correct];
                    const userAnswer = answerIndex !== null ? question.choices[answerIndex] : 'X';
    
                    questionResult.innerText = `${startIndex + index + 1}. ${question.question} - (선택 : ${question.choices[answers[startIndex + index]] !== undefined ? question.choices[answers[startIndex + index]] : 'X'}) - (정답 : ${question.choices[question.correct]})`;
    
                    if (answers[startIndex + index] === question.correct) {
                        score += startIndex + index === selectedQuestions.length - 2 ? 2 : 1; // 마지막 문제 2점 설정
                        questionResult.style.color = 'green';
                    } else if (answers[startIndex + index] === null) {
                        questionResult.style.color = 'orange';
                    } else {
                        questionResult.style.color = 'red';
                    }
                } else {
                    if (bonusClick === true) {
                        questionResult.style.color = 'green';
                        questionResult.innerText = `20. ${question.question} - Success`;
                    } else {
                        questionResult.style.color = 'red';
                        questionResult.innerText = `20. ${question.question} - Fail`;
                    }
                }
                resultList.appendChild(questionResult);
            });
    
            return resultList;
        };
    
        // 첫 번째 10개의 결과를 묶은 div
        const resultList1 = document.createElement('div');
        resultList1.classList.add('result-list-container1');
        resultList1.appendChild(createResultList(questionsPart1, 0));
    
        // 두 번째 10개의 결과를 묶은 div
        const resultList2 = document.createElement('div');
        resultList2.classList.add('result-list-container2');
        resultList2.appendChild(createResultList(questionsPart2, 10));
    
        resultsSlide.appendChild(document.createElement('br'));
        resultsSlide.appendChild(resultList1);
        resultsSlide.appendChild(resultList2);
        for(let i = 0; i <12; i++){
            resultsSlide.appendChild(document.createElement('br'));
        }
    
        // 총점과 정답률 계산
        const totalScore = score + bonusScore;
        const correctPercentage = ((score + bonusScore) / 20) * 100; // 정답률 계산
    
        const totalScoreElement = document.createElement('h3');
        totalScoreElement.classList.add('result-score');
        totalScoreElement.innerText = `총점: ${totalScore}점 / 정답률: ${correctPercentage.toFixed(2)}%`;
        resultsSlide.appendChild(totalScoreElement);
    
        saveScore(totalScore);
    
        const returnButton = document.createElement('button');
        returnButton.innerText = '메인화면';
        returnButton.classList.add('return-button');
        returnButton.addEventListener('click', () => {
            location.reload(); // 새로고침
        });
        resultsSlide.appendChild(returnButton);
    
        quizContainer.innerHTML = ''; // 이전 슬라이드들 삭제
        quizContainer.appendChild(resultsSlide); // 새 결과 슬라이드 추가
    }
    
    

    function saveScore(score) {
        const now = new Date();
        const option = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
        const timestamp = `${now.toLocaleTimeString([], option)}`;

        let scores = JSON.parse(localStorage.getItem('quizScores')) || [];
        scores.push({ score: score, date: timestamp });
        localStorage.setItem('quizScores', JSON.stringify(scores));

        setTimeout(displayScore, 0); // 점수 리스트 업데이트
    }

    function displayScore() {
        const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
        const scoresTotal = scores.slice().sort((a, b) => b.date.localeCompare(a.date));
        
        scoreList.innerHTML = '';

        scoresTotal.slice(0, 12).forEach((scoreObj, index) => {
            const listItem = document.createElement('li'); 
            listItem.classList.add('score-list')
            listItem.innerText = `${scoreObj.score}점 (${scoreObj.date})`;
            scoreList.appendChild(listItem);
        });
    }

    document.getElementById('start-quiz').addEventListener('click', () => {
        initializeQuiz();
    });

    displayScore();
});
