    var questions = [{
    
    question: "What is the name of the biggest part of the human brain?",
    choices : ["cerebrum", "Thalamus","Medulla", "Cerebellum"],
    correctAnswer: 0
    },
    {
    question: "The colored part of the human eye that controls how much light passes through the pupil is called the?",
    choices: ["Pupil", "Rods", "Iris", "Cornea"],
    correctAnswer: 2
    },
    {
    question: "What is the name of the substance that gives skin and hair its pigment?",
    choices: ["Dermis", "Melanin", "Swear Gland", "Epiderms"],
    correctAnswer: 1
    },
    { 
    question: "The muscles found in the front of your thighs are known as what?",
    choices: ["Adductor", "petella", "tibia", "Quadriceps"],
    correctAnswer: 3
    },
    {
    question: "The shape of DNA is known as?",
    choices: ["Double helix", "Adenine helix", "tri helix", "thymine"],
    correctAnswer: 0
    }, 
    {
    question: "A structure composed of two or more tissues is termed?",
    choices: ["serous membrane", "complex tissue", "organ system", "organ"],
    correctAnswer: 3
    },
    {
    question: "The heart is ____ to the lungs?",
    choices: ["superior", "dorsal", "medial", "lateral"],
    correctAnswer: 2
    }, 
    {
        question: "Male hormones are produced by which of the following?",
        choices: ["prostate", "testes", "vas deferens", "prepuce"],
        correctAnswer: 1
    },
    {
        question: "Which of the following terms describes the body's ability to maintain its normal state?",
        choices: ["anabolism", "catabolism", "tolerance", "homoestasis"],
        correctAnswer: 3
    }, 
        {
        question: "Each of the following is known to help prevent infection EXCEPT?",
        choices: ["hair in nose", "mucous membranes", "osteoblasts", "saliva"],
        correctAnswer: 3
        }  
    ];
    var j=0;
    var score=0;
    showquestion(j);
    var next = document.getElementById("next");
    next.style.display = "none";
    next.addEventListener("click", function(){
            document.getElementById("result").style.display = "none"
        if(j<9){
            showquestion(j=j+1);
            submit.style.display = "block";
            next.style.display = "none";
        }
        else
        {
            document.getElementById("heading").innerHTML = "score : "+score;
            showkey();
        }
    });

    function showkey()
    {
        let ul = document.getElementById("choice");
        ul.innerHTML="";
        ul = document.getElementById("ans");
        document.getElementById("question").innerHTML="Answer Key";
        for(let i=0;i<10;i++){
            var li = document.createElement("li"); 
            var span = document.createElement("span");
            span.innerHTML=questions[i].question+" - ";
            var span1 = document.createElement("span");
            span1.style.background="lightgreen";
            span1.innerHTML=questions[i].choices[questions[i].correctAnswer];
            li.appendChild(span);
            li.appendChild(span1);
            ul.appendChild(li);
        }
        var restart = document.getElementById("restart");
        next.style.display = "none";
        restart.style.display = "block";
        restart.addEventListener("click",function(){
            j=0;
            showquestion(j);
            next.style.display="block";
            restart.style.display="none";
            score=0;
            document.getElementById("heading").innerHTML = "QUIZ";
        });  
    }

    var submit = document.getElementById("submit");
    submit.addEventListener("click", function(){
        var ele = document.getElementsByName("option");
        let f=0;
        document.getElementById("result").style.display = "block";
            for(let i = 0; i < ele.length; i++) { 
                if(ele[i].checked)
                {
                    if(ele[i].value==questions[j].correctAnswer)
                    {
                        document.getElementById("result").innerHTML = "CORRECT";
                        document.getElementById("result").style.background="rgb(183, 230, 174)";
                        score++;
                    }
                    else{
                        document.getElementById("result").innerHTML = "INCORRECT";
                        document.getElementById("result").style.background="rgb(240, 210, 210)";
                    }
                    f=1;
                }
            }
            if(f==0) document.getElementById("result").innerHTML = "Noting is  selected";
            else{
            submit.style.display = "none";
            next.style.display = "block";
            }
    });

    function showquestion(j)
    {
        var q = document.getElementById("question");
        q.innerHTML=j+1+". "+questions[j].question;
        var ul = document.getElementById("choice");
        ul.innerHTML="";
        document.getElementById("ans").innerHTML="";
        for(let i=0;i<4;i++){
            var li = document.createElement("li"); 
            var span = document.createElement("span");
            span.innerHTML=questions[j].choices[i];
            var input = document.createElement("input");
            input.type = "radio";
            input.name = "option";
            input.id = i;
            input.value = i;
            li.appendChild(input);
            li.appendChild(span);
            ul.appendChild(li);
        }
    }
