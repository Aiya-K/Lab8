$(document).ready(function(){
    correct = ["2009", "1845", "Mukhtar Auezov", "25th of October", "30th of August"];
    questions = ["Which year Nazarbayev University was founded?","When was the Kazakh poet Abai Qunanbaiuly born?", "Who wrote the novel 'The Path of Abai?'","When is Republic Day in Kazakhstan?", "When is the Contitution Day in Kazakhstan?" ]
    choice_options = [["2009","2010","2011","2012"],["1845","1905","1900","1800"], ["Ybyrai Altynsarin", "Mukhtar Auezov", "Sabit Mukanov", "Saken Seifullin"], ["16th of December", "25th of October", "31th of August", "7th of May"], ["17th of December", "26th of October", "30th of August", "9th of May"]]
    
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append("<div class='question' id='q1'>"); 
    
    $('#q1').append ("<p class='d'> Q1. Which year Nazarbayev University was founded? </p>");
    $('#q1').append ("<label><input type='radio' name='q1' value='a'>2010</label>")
    $('#q1').append ("<label><input type='radio' name='q1' value='a'>2009</label>")
    $('#q1').append ("<label><input type='radio' name='q1' value='a'>2011</label>")
    $('#q1').append ("<label><input type='radio' name='q1' value='a'>2012</label>")
    
    quizBox.append("<div class='question' id='q2'>"); 
    
    $('#q2').append ("<p class='d'> Q2. When was the Kazakh poet Abai Qunanbaiuly born? </p>");
    $('#q2').append ("<label><input type='radio' name='q2' value='a'>1845</label>")
    $('#q2').append ("<label><input type='radio' name='q2' value='a'>1905</label>")
    $('#q2').append ("<label><input type='radio' name='q2' value='a'>1900</label>")
    $('#q2').append ("<label><input type='radio' name='q2' value='a'>1800</label>")
    
    quizBox.append("<div class='question' id='q3'>"); 
    
    $('#q3').append ("<p class='d'> Q3. Who wrote the novel 'The Path of Abai?' </p>");
    $('#q3').append ("<label><input type='radio' name='q3' value='a'>Ybyrai Altynsarin</label>")
    $('#q3').append ("<label><input type='radio' name='q3' value='a'>Mukhtar Auezov</label>")
    $('#q3').append ("<label><input type='radio' name='q3' value='a'>Sabit Mukanov</label>")
    $('#q3').append ("<label><input type='radio' name='q3' value='a'>Saken Seifullin</label>")

    quizBox.append("<div class='question' id='q4'>"); 
    
    $('#q4').append ("<p class='d'> Q4. When is Republic Day in Kazakhstan? </p>");
    $('#q4').append ("<label><input type='radio' name='q4' value='a'>16th of December</label>")
    $('#q4').append ("<label><input type='radio' name='q4' value='a'>25th of October</label>")
    $('#q4').append ("<label><input type='radio' name='q4' value='a'>31th of August</label>")
    $('#q4').append ("<label><input type='radio' name='q4' value='a'>7th of May</label>")

    quizBox.append("<div class='question' id='q5'>"); 
    
    $('#q5').append ("<p class='d'> Q5. When is the Contitution Day in Kazakhstan? </p>");
    $('#q5').append ("<label><input type='radio' name='q2' value='a'>17th of December</label>")
    $('#q5').append ("<label><input type='radio' name='q2' value='a'>26th of October</label>")
    $('#q5').append ("<label><input type='radio' name='q2' value='a'>30th of August</label>")
    $('#q5').append ("<label><input type='radio' name='q2' value='a'>9th of May</label>")

    
    

   countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
     $(".question").each(function(index) {
                choice = $(this).parent().text(); 
                if ($( this ).prop("checked") == true && correct [0] == choice){
                     countCorrect += 1;
                }
         });
    $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    }); 

});
