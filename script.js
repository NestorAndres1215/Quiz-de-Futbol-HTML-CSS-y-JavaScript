const questions = [
    {
        question: "¿En qué año se celebró la primera Copa Mundial de la FIFA?",
        options: ["1928", "1930", "1932", "1934"],
        answer: "1930"
      },
      {
        question: "¿Qué país ha ganado más Copas del Mundo?",
        options: ["Alemania", "Italia", "Brasil", "Argentina"],
        answer: "Brasil"
      },
      {
        question: "¿Quién es el máximo goleador en la historia de la UEFA Champions League?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Raúl González", "Robert Lewandowski"],
        answer: "Cristiano Ronaldo"
      },
      {
        question: "¿Cuál es el nombre del estadio del FC Barcelona?",
        options: ["Santiago Bernabéu", "Old Trafford", "Camp Nou", "Allianz Arena"],
        answer: "Camp Nou"
      },
      {
        question: "¿Qué selección ganó la Eurocopa en 2016?",
        options: ["Alemania", "Francia", "Portugal", "España"],
        answer: "Portugal"
      },
      {
        question: "¿Quién fue el entrenador que llevó a España a ganar el Mundial 2010?",
        options: ["Vicente del Bosque", "Luis Aragonés", "Julen Lopetegui", "Javier Clemente"],
        answer: "Vicente del Bosque"
      },
      {
        question: "¿Qué jugador es conocido como 'O Rei'?",
        options: ["Pelé", "Maradona", "Zico", "Ronaldinho"],
        answer: "Pelé"
      },
      {
        question: "¿Cuál es el club con más títulos de la Premier League?",
        options: ["Chelsea", "Manchester City", "Liverpool", "Manchester United"],
        answer: "Manchester United"
      },
      {
        question: "¿Qué país ganó la Copa América en 2021?",
        options: ["Brasil", "Argentina", "Chile", "Uruguay"],
        answer: "Argentina"
      },
      {
        question: "¿Quién es el jugador con más apariciones en la historia del Real Madrid?",
        options: ["Raúl", "Iker Casillas", "Sergio Ramos", "Manolo Sanchís"],
        answer: "Raúl"
      },
      {
        question: "¿Cuál es el equipo con más títulos de la Serie A italiana?",
        options: ["AC Milan", "Inter de Milán", "Juventus", "Roma"],
        answer: "Juventus"
      },
      {
        question: "¿Quién ganó el Balón de Oro en 2021?",
        options: ["Lionel Messi", "Robert Lewandowski", "Jorginho", "Karim Benzema"],
        answer: "Lionel Messi"
      },
      {
        question: "¿Qué selección ha ganado más veces la Copa Africana de Naciones?",
        options: ["Nigeria", "Camerún", "Egipto", "Ghana"],
        answer: "Egipto"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la selección inglesa?",
        options: ["Wayne Rooney", "Bobby Charlton", "Harry Kane", "Gary Lineker"],
        answer: "Wayne Rooney"
      },
      {
        question: "¿En qué año se fundó la FIFA?",
        options: ["1900", "1904", "1910", "1914"],
        answer: "1904"
      },
      {
        question: "¿Cuál es el club con más títulos de la Bundesliga alemana?",
        options: ["Borussia Dortmund", "Hamburgo", "Bayern Múnich", "Werder Bremen"],
        answer: "Bayern Múnich"
      },
      {
        question: "¿Qué jugador argentino es apodado 'La Pulga'?",
        options: ["Diego Maradona", "Sergio Agüero", "Lionel Messi", "Ángel Di María"],
        answer: "Lionel Messi"
      },
      {
        question: "¿Qué equipo ganó la UEFA Champions League en 2020?",
        options: ["Real Madrid", "Liverpool", "Bayern Múnich", "Paris Saint-Germain"],
        answer: "Bayern Múnich"
      },
      {
        question: "¿Quién es el entrenador con más títulos de la UEFA Champions League?",
        options: ["Pep Guardiola", "Carlo Ancelotti", "Zinedine Zidane", "Alex Ferguson"],
        answer: "Carlo Ancelotti"
      },
      {
        question: "¿Qué selección ganó la Copa Mundial Femenina de la FIFA en 2019?",
        options: ["Alemania", "Estados Unidos", "Países Bajos", "Suecia"],
        answer: "Estados Unidos"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la selección brasileña?",
        options: ["Ronaldo", "Romário", "Pelé", "Neymar"],
        answer: "Pelé"
      },
      {
        question: "¿Qué club ganó la primera edición de la Premier League en 1992-93?",
        options: ["Arsenal", "Chelsea", "Manchester United", "Blackburn Rovers"],
        answer: "Manchester United"
      },
      {
        question: "¿Cuál es el estadio con mayor capacidad en Europa?",
        options: ["Wembley", "Camp Nou", "San Siro", "Signal Iduna Park"],
        answer: "Camp Nou"
      },
      {
        question: "¿Qué selección ganó la Copa Oro de la CONCACAF en 2021?",
        options: ["México", "Estados Unidos", "Costa Rica", "Canadá"],
        answer: "Estados Unidos"
      },
      {
        question: "¿Quién es el jugador con más títulos de la Copa Libertadores?",
        options: ["Pelé", "Carlos Tevez", "Francisco Sá", "Juan Román Riquelme"],
        answer: "Francisco Sá"
      },
      {
        question: "¿Qué equipo ganó la Liga de España en la temporada 2020-21?",
        options: ["Real Madrid", "Barcelona", "Atlético de Madrid", "Sevilla"],
        answer: "Atlético de Madrid"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la selección argentina?",
        options: ["Gabriel Batistuta", "Hernán Crespo", "Lionel Messi", "Diego Maradona"],
        answer: "Lionel Messi"
      },
      {
        question: "¿Qué país ha sido anfitrión de la Copa Mundial de la FIFA en más ocasiones?",
        options: ["Italia", "Francia", "Alemania", "México"],
        answer: "México"
      },
      {
        question: "¿Qué equipo ganó la Copa Libertadores en 2019?",
        options: ["Boca Juniors", "River Plate", "Flamengo", "Gremio"],
        answer: "Flamengo"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la Bundesliga alemana?",
        options: ["Gerd Müller", "Robert Lewandowski", "Klaus Fischer", "Jupp Heynckes"],
        answer: "Gerd Müller"
      },
      {
        question: "¿Qué selección ganó la Eurocopa en 2004?",
        options: ["Portugal", "Grecia", "Francia", "Italia"],
        answer: "Grecia"
      },
      {
        question: "¿Quién es el jugador con más títulos en la historia de la UEFA Champions League?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Francisco Gento", "Paolo Maldini"],
        answer: "Francisco Gento"
      },
      {
        question: "¿Cuál es el club más antiguo del mundo?",
        options: ["Sheffield FC", "Notts County", "Stoke City", "Fulham"],
        answer: "Sheffield FC"
      },
      {
        question: "¿Qué selección ganó la Copa Mundial de la FIFA en 1998?",
        options: ["Brasil", "Francia", "Italia", "Alemania"],
        answer: "Francia"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la selección uruguaya?",
        options: ["Diego Forlán", "Edinson Cavani", "Luis Suárez", "Enzo Francescoli"],
        answer: "Luis Suárez"
      },
      {
        question: "¿En qué año se fundó el club inglés Manchester United?",
        options: ["1878", "1888", "1898", "1908"],
        answer: "1878"
      },
      {
        question: "¿Qué jugador es conocido como 'El Fenómeno'?",
        options: ["Ronaldo Nazário", "Ronaldinho", "Romário", "Rivaldo"],
        answer: "Ronaldo Nazário"
      },
      {
        question: "¿Cuál es el equipo con más títulos de la Ligue 1 francesa?",
        options: ["Olympique de Marsella", "AS Monaco", "París Saint-Germain", "Saint-Étienne"],
        answer: "Saint-Étienne"
      },
      {
        question: "¿Quién fue el primer ganador del Balón de Oro?",
        options: ["Alfredo Di Stéfano", "Stanley Matthews", "Raymond Kopa", "Luis Suárez"],
        answer: "Stanley Matthews"
      },
      {
        question: "¿Qué selección ganó la Copa Mundial de la FIFA en 1966?",
        options: ["Brasil", "Alemania", "Inglaterra", "Argentina"],
        answer: "Inglaterra"
      },
      {
        question: "¿Quién es el jugador con más apariciones en la historia de la selección italiana?",
        options: ["Paolo Maldini", "Gianluigi Buffon", "Fabio Cannavaro", "Andrea Pirlo"],
        answer: "Gianluigi Buffon"
      },
      {
        question: "¿Cuál es el estadio más grande de América del Sur?",
        options: ["Maracaná", "Monumental", "Morumbi", "Centenario"],
        answer: "Maracaná"
      },
      {
        question: "¿Qué equipo ganó la primera edición de la Copa de Europa (ahora UEFA Champions League) en 1956?",
        options: ["Real Madrid", "AC Milan", "Benfica", "Barcelona"],
        answer: "Real Madrid"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la selección mexicana?",
        options: ["Jared Borgetti", "Cuauhtémoc Blanco", "Hugo Sánchez", "Chicharito Hernández"],
        answer: "Chicharito Hernández"
      },
      {
        question: "¿En qué año se celebró la primera Copa América?",
        options: ["1910", "1916", "1920", "1924"],
        answer: "1916"
      },
      {
        question: "¿Qué selección ha ganado más veces la Copa Africana de Naciones?",
        options: ["Camerún", "Nigeria", "Egipto", "Ghana"],
        answer: "Egipto"
      },
      {
        question: "¿Quién es el entrenador con más títulos de la Premier League?",
        options: ["Arsène Wenger", "José Mourinho", "Pep Guardiola", "Alex Ferguson"],
        answer: "Alex Ferguson"
      },
      {
        question: "¿Qué jugador ostenta el récord de más goles en una sola temporada de la Premier League?",
        options: ["Thierry Henry", "Alan Shearer", "Mohamed Salah", "Cristiano Ronaldo"],
        answer: "Mohamed Salah"
      },
      {
        question: "¿Cuál es el equipo con más títulos de la Copa del Rey en España?",
        options: ["Real Madrid", "Barcelona", "Athletic Club", "Atlético de Madrid"],
        answer: "Barcelona"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la selección italiana?",
        options: ["Roberto Baggio", "Alessandro Del Piero", "Luigi Riva", "Francesco Totti"],
        answer: "Luigi Riva"
      },
      {
        question: "¿Qué selección ganó la Copa Mundial de la FIFA en 1978?",
        options: ["Brasil", "Alemania", "Argentina", "Países Bajos"],
        answer: "Argentina"
      },
      {
        question: "¿Quién es el jugador con más títulos de la Copa Libertadores?",
        options: ["Pelé", "Juan Román Riquelme", "Francisco Sá", "Daniel Onega"],
        answer: "Francisco Sá"
      },
      {
        question: "¿Cuál es el club con más títulos de la Major League Soccer (MLS)?",
        options: ["LA Galaxy", "DC United", "Seattle Sounders", "Toronto FC"],
        answer: "LA Galaxy"
      },
      {
        question: "¿Qué selección ganó la Copa Mundial de la FIFA en 1954?",
        options: ["Brasil", "Alemania", "Hungría", "Uruguay"],
        answer: "Alemania"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la selección española?",
        options: ["David Villa", "Fernando Torres", "Raúl González", "Fernando Hierro"],
        answer: "David Villa"
      },
      {
        question: "¿Qué selección nacional es conocida como 'La Naranja Mecánica'?",
        options: ["Países Bajos", "Brasil", "España", "Italia"],
        answer: "Países Bajos"
      },
      {
        question: "¿Quién fue el entrenador del FC Barcelona durante el período 2008-2012?",
        options: ["Frank Rijkaard", "Pep Guardiola", "Luis Enrique", "Ronald Koeman"],
        answer: "Pep Guardiola"
      },
      {
        question: "¿Qué club ganó la UEFA Champions League en la temporada 2019-2020?",
        options: ["Real Madrid", "Bayern Múnich", "Liverpool", "Paris Saint-Germain"],
        answer: "Bayern Múnich"
      },
      {
        question: "¿Quién es el jugador con más apariciones en la historia de la Premier League?",
        options: ["Ryan Giggs", "Gareth Barry", "Frank Lampard", "Steven Gerrard"],
        answer: "Gareth Barry"
      },
      {
        question: "¿Cuál es el estadio de fútbol con mayor capacidad en el mundo?",
        options: ["Camp Nou", "Maracaná", "Rungrado 1st of May Stadium", "Azteca"],
        answer: "Rungrado 1st of May Stadium"
      },
      {
        question: "¿Qué país ganó la Copa Mundial de la FIFA en 2014?",
        options: ["Brasil", "Alemania", "Argentina", "España"],
        answer: "Alemania"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la selección francesa?",
        options: ["Thierry Henry", "Olivier Giroud", "Zinedine Zidane", "Michel Platini"],
        answer: "Thierry Henry"
      },
      {
        question: "¿Qué club es conocido como 'Los Diablos Rojos'?",
        options: ["Manchester United", "Liverpool", "AC Milan", "Bayern Múnich"],
        answer: "Manchester United"
      },
      {
        question: "¿Quién ganó el premio FIFA World Player en 2001?",
        options: ["Luis Figo", "Zinedine Zidane", "Ronaldo Nazário", "David Beckham"],
        answer: "Luis Figo"
      },
      {
        question: "¿Qué selección nacional ha ganado la Copa América en más ocasiones?",
        options: ["Brasil", "Argentina", "Uruguay", "Chile"],
        answer: "Uruguay"
      },
      {
        question: "¿Quién es el entrenador con más títulos de la UEFA Champions League?",
        options: ["Zinedine Zidane", "Pep Guardiola", "Carlo Ancelotti", "Alex Ferguson"],
        answer: "Carlo Ancelotti"
      },
      {
        question: "¿Qué jugador es conocido por el apodo 'El Niño'?",
        options: ["Fernando Torres", "Sergio Agüero", "Andrés Iniesta", "David Villa"],
        answer: "Fernando Torres"
      },
      {
        question: "¿Cuál es el club con más títulos de la Ligue 1 francesa?",
        options: ["Paris Saint-Germain", "Olympique de Marsella", "AS Monaco", "Saint-Étienne"],
        answer: "Paris Saint-Germain"
      },
      {
        question: "¿Qué selección ganó la Eurocopa 2016?",
        options: ["Francia", "Portugal", "Alemania", "Italia"],
        answer: "Portugal"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la Serie A italiana?",
        options: ["Francesco Totti", "Gunnar Nordahl", "Silvio Piola", "Alessandro Del Piero"],
        answer: "Silvio Piola"
      },
      {
        question: "¿Qué club ganó la primera edición de la Premier League en 1992-93?",
        options: ["Manchester United", "Arsenal", "Chelsea", "Blackburn Rovers"],
        answer: "Manchester United"
      },
      {
        question: "¿Quién es el jugador con más títulos de la Copa Libertadores?",
        options: ["Juan Román Riquelme", "Pelé", "Francisco Sá", "Daniel Onega"],
        answer: "Francisco Sá"
      },
      {
        question: "¿Qué selección nacional ha ganado más veces la Copa Oro de la CONCACAF?",
        options: ["México", "Estados Unidos", "Costa Rica", "Honduras"],
        answer: "México"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la selección alemana?",
        options: ["Miroslav Klose", "Gerd Müller", "Jürgen Klinsmann", "Thomas Müller"],
        answer: "Miroslav Klose"
      },
      {
        question: "¿Qué club es conocido como 'La Vecchia Signora'?",
        options: ["AC Milan", "Inter de Milán", "Juventus", "Roma"],
        answer: "Juventus"
      },
      {
        question: "¿Quién ganó el Balón de Oro en 2018?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Luka Modrić", "Antoine Griezmann"],
        answer: "Luka Modrić"
      },
      {
        question: "¿Qué país fue el anfitrión de la Copa Mundial de la FIFA en 2002?",
        options: ["Japón y Corea del Sur", "Alemania", "Francia", "Sudáfrica"],
        answer: "Japón y Corea del Sur"
      },
      {
        question: "¿Quién es el jugador con más apariciones en la historia del FC Barcelona?",
        options: ["Xavi Hernández", "Lionel Messi", "Andrés Iniesta", "Carles Puyol"],
        answer: "Xavi Hernández"
      },
      {
        question: "¿Qué selección nacional ganó la Copa Mundial Femenina de la FIFA en 2019?",
        options: ["Estados Unidos", "Países Bajos", "Alemania", "Suecia"],
        answer: "Estados Unidos"
      },
      {
        question: "¿Quién es el máximo goleador histórico de la selección inglesa?",
        options: ["Wayne Rooney", "Bobby Charlton", "Harry Kane", "Michael Owen"],
        answer: "Wayne Rooney"
      },
      {
        question: "¿Qué club ganó la UEFA Europa League en la temporada 2020-2021?",
        options: ["Villarreal", "Manchester United", "Sevilla", "Inter de Milán"],
        answer: "Villarreal"
      },
      {
        question: "¿Quién es el jugador con más títulos de la Copa del Rey en España?",
        options: ["Lionel Messi", "Sergio Ramos", "Andrés Iniesta", "Gerard Piqué"],
        answer: "Lionel Messi"
      }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timer;
  let timeLeft = 15;
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  const totalQuestions = 10;
  
  // Seleccionar 10 preguntas aleatorias
  const shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, totalQuestions);
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const quizEl = document.getElementById("quiz");
  const startEl = document.getElementById("start");
  const feedbackEl = document.getElementById("feedback");
  const progressBarEl = document.getElementById("progress-bar");
  const questionCounterEl = document.getElementById("question-counter");
  const timeEl = document.getElementById("time");
  const timerEl = document.querySelector(".timer");
  const correctAnswersEl = document.getElementById("correct-answers");
  const incorrectAnswersEl = document.getElementById("incorrect-answers");
  const percentageEl = document.getElementById("percentage");
  const messageEl = document.getElementById("message");
  
  function startQuiz() {
    startEl.classList.add("hidden");
    quizEl.classList.remove("hidden");
    timerEl.classList.remove("hidden");
    showQuestion();
  }
  
  function showQuestion() {
    resetTimer();
    startTimer();
    
    const q = shuffledQuestions[currentQuestion];
    questionEl.textContent = q.question;
    questionCounterEl.textContent = `Pregunta ${currentQuestion + 1} de ${totalQuestions}`;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    
    // Actualizar la barra de progreso
    progressBarEl.style.width = `${(currentQuestion / totalQuestions) * 100}%`;
    
    q.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.onclick = () => selectAnswer(option, li);
      optionsEl.appendChild(li);
    });
  }
  
  function selectAnswer(option, element) {
    clearInterval(timer);
    
    const correct = shuffledQuestions[currentQuestion].answer;
    
    // Deshabilitar clics
    const allOptions = optionsEl.querySelectorAll("li");
    allOptions.forEach(li => li.onclick = null);
    
    if (option === correct) {
      score++;
      correctAnswers++;
      element.classList.add("correct");
      feedbackEl.innerHTML = "<i class='fas fa-check-circle'></i> ¡Correcto!";
      feedbackEl.style.color = "var(--correct)";
    } else {
      incorrectAnswers++;
      element.classList.add("incorrect");
      feedbackEl.innerHTML = `<i class='fas fa-times-circle'></i> Incorrecto. La respuesta correcta es: ${correct}`;
      feedbackEl.style.color = "var(--incorrect)";
      
      // Mostrar la correcta
      allOptions.forEach(li => {
        if (li.textContent === correct) {
          li.classList.add("correct");
        }
      });
    }
    
    // Pasar a la siguiente pregunta tras 2 segundos
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < totalQuestions) {
        showQuestion();
      } else {
        // Actualizar barra de progreso al finalizar
        progressBarEl.style.width = "100%";
        setTimeout(() => {
          showResult();
        }, 500);
      }
    }, 2000);
  }
  
  function startTimer() {
    timeLeft = 15;
    timeEl.textContent = timeLeft;
    
    timer = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;
      
      if (timeLeft <= 5) {
        timeEl.style.color = "var(--incorrect)";
      }
      
      if (timeLeft <= 0) {
        clearInterval(timer);
        // Tiempo agotado, seleccionar ninguna respuesta
        const allOptions = optionsEl.querySelectorAll("li");
        const correct = shuffledQuestions[currentQuestion].answer;
        
        // Deshabilitar clics
        allOptions.forEach(li => {
          li.onclick = null;
          if (li.textContent === correct) {
            li.classList.add("correct");
          }
        });
        
        incorrectAnswers++;
        feedbackEl.innerHTML = "<i class='fas fa-clock'></i> ¡Tiempo agotado!";
        feedbackEl.style.color = "var(--incorrect)";
        
        setTimeout(() => {
          currentQuestion++;
          if (currentQuestion < totalQuestions) {
            showQuestion();
          } else {
            progressBarEl.style.width = "100%";
            setTimeout(() => {
              showResult();
            }, 500);
          }
        }, 2000);
      }
    }, 1000);
  }
  
  function resetTimer() {
    clearInterval(timer);
    timeLeft = 15;
    timeEl.textContent = timeLeft;
    timeEl.style.color = "var(--white)";
  }
  
  function showResult() {
    quizEl.classList.add("hidden");
    timerEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    
    const percentage = Math.round((score / totalQuestions) * 100);
    
    scoreEl.textContent = `¡Has conseguido ${score} de ${totalQuestions} respuestas correctas!`;
    correctAnswersEl.textContent = correctAnswers;
    incorrectAnswersEl.textContent = incorrectAnswers;
    percentageEl.textContent = `${percentage}%`;
    
    // Mensaje personalizado según el resultado
    if (percentage >= 90) {
      messageEl.textContent = "¡Impresionante! Eres un auténtico experto en fútbol.";
    } else if (percentage >= 70) {
      messageEl.textContent = "¡Muy bien! Tienes un gran conocimiento de fútbol.";
    } else if (percentage >= 50) {
      messageEl.textContent = "No está mal, pero aún puedes mejorar tus conocimientos futbolísticos.";
    } else {
      messageEl.textContent = "Parece que necesitas ver más partidos. ¡Sigue intentándolo!";
    }
  }