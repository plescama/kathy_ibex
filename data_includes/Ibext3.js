PennController.ResetPrefix(null);
PennController.Sequence("Seite1", "Welcome", "instruction", "trial", "trial2", "introduction", randomize("ListeW"), "send", "final")
PennController.DebugOff()

///////
PennController("Seite1",
newHtml("Consent", "Consent.html")
    .print()
,

newButton("Weiter","Weiter")
    .print()
    .wait(
        getHtml("Consent").test.complete()
            .failure(getHtml("Consent").warn())    
    )
    )



//willkommen//////////////////
PennController("Welcome",
    newText("WelcomeText", "<p>Um an unserem Experiment teilnehmen zu k&ouml;nnen, ben&ouml;tigen wir einige Angaben zu Ihrer Person. Diese werden anonym ausgewertet. Genauere Informationen entnehmen Sie bitte dem Informationsblatt f&uuml;r Probanden.<p>")              
        .settings.css("font-size", "20px")
        .settings.italic()

    ,

    newCanvas("infocanvas", 1000, 80)

        .settings.add(0, 0, getText("WelcomeText") )

        .print()
    ,
    
    newDropDown("age", "")
        .settings.add ("18", "18" , "19" , "20", "21" , "22" , "23", "24" , "25" , "26", "27" , "28" , "29", "30" , "31" , "&uuml;ber 31")
        .settings.log()
    ,   
    newText("agetext", "Alter:")
        .settings.css("font-size", "20px")
        .settings.bold()
    ,
    
    newCanvas("agecanvas", 1000, 45)
        .settings.add(0,10, getText("agetext"))  
        .settings.add(100,8, getDropDown("age"))
        .settings.log()
        .print()
    ,
    newText("Muttersprache", "Ist Deutsch Ihre Muttersprache?")
        .settings.css("font-size", "20px")
        .settings.bold()
    ,
    newDropDown("NativeLang", "")
        .settings.add("ja", "nein")
        .settings.log()
    ,
    
    newCanvas("Langanvas", 1000, 45)
        .settings.add(0,0, getText("Muttersprache"))
        .settings.add(300,3, getDropDown("NativeLang"))
        .print()
    ,
    
    newText("Geschlecht", "Geschlecht: ")
        .settings.css("font-size", "20px")
        .settings.bold()
    ,
    newDropDown("sex","")
        .settings.add("&nbsp;weiblich&nbsp;","&nbsp;m&auml;nnlich&nbsp;", "&nbsp;divers&nbsp;")
        .settings.log()
    ,
    newCanvas("sexcanvas", 1000, 30)
        .settings.add(0,0, getText("Geschlecht"))
        .settings.add(120,3, getDropDown("sex"))
        .print()
    ,
    newText("SpracheTest", "Haben Sie bis zum 6. Lebensjahr au&szliger Deutsch eine weitere Sprache gelernt?")
        .settings.css("font-size", "20px")
        .settings.bold()
    ,
    newTextInput("und zwar", "")
        .settings.log()
        .settings.hidden()
        .print()
    ,
    newText("label input", "")
        .settings.after(getTextInput("und zwar"))
        .print()
    ,
    
    newDropDown("language", "")
        .settings.add("ja","nein")
        .settings.log()
        
    ,
    
    newCanvas("languageanvas", 1000, 30)
        .settings.add(0,0, getText("SpracheTest"))
        .settings.add(690,2, getDropDown("language"))
        .print()
    ,
    newButton("okay", "Weiter")
        .print()
        .wait()
    ,
    
    getDropDown("age")
    .test.selected()
    .success()
    .failure(
        newText("Bitte geben Sie Ihr Alter an.")
        .settings.color("red")
        .print())
    ,
    getDropDown("NativeLang")
    .test.selected()
    .success()
    .failure(
        newText("Bitte geben Sie an, ob Deutsch Ihre Muttersprache ist.")
        .settings.color("red")
        .print())
    ,
    getDropDown("sex")
    .test.selected()
    .success()
    .failure(
        newText("Bitte geben Sie Ihr Geschlecht an.")
        .settings.color("red")
        .print())
    ,
    getDropDown("language")
    .test.selected()
    .success()
    .failure(
        newText("Bitte beantworten Sie die Frage zum fr&uuml;hen Spracherwerb.")
        .settings.color("red")
        .print())
    ,
    getDropDown("age"). wait("first")
    ,
    getDropDown("NativeLang").wait("first")
    ,
    getDropDown("sex").wait("first")
    ,
    getDropDown("language") .wait("first")
    ,
        getButton("okay")
        .print()
        .wait()
)
    
    //Beispiel
    
    PennController("instruction",
        newText("<p> In diesem Experiment werden Ihnen W&ouml;rter zur intuitiven Bewertung angezeigt. <p>")
            .settings.css("font-size", "18px")
            .print()
        ,
        newText("explanation1", "Ihre Aufgabe besteht darin, die Wörter dahingehend zu bewerten, ob sie eher hochsprachlich oder umgangssprachlich sind.")
            .settings.css("font-size", "18px")
        ,
        
        newCanvas("infocanvas1", 1000, 25)
            .settings.add(0,0, getText("explanation1"))
            .print()
        ,
        
        newText("explanation2", "<p>Bitte bewerten Sie jedes Wort auf einer Skala von 0 (sehr umgangssprachlich) bis 50 (sehr hochsprachlich). </br> Es gibt bei der Bewertung kein Richtig oder Falsch, wir sind nur an Ihrer intuitiven Einsch&auml;tzung als MuttersprachlerIn interessiert. </br> Bitte denken Sie bei der Beantwortung nicht zu lange nach, sondern bewerten Sie nach Bauchgef&uuml;hl.")
            .settings.css("font-size","18px")
            .print()
            ,
            newCanvas("infocanvas2", 1000, 80)
                .settings.add(0,0, getText("explanation2"))
                .print()
        ,
    
    newText("explanation3","<p>Erklärung: Ein Wort, welches Sie in einem Vortrag auf einem Ärztekongress nutzen würden, wie beispielsweise „eloquent,“ würden Sie wahrscheinlich </br> eher als sehr hochsprachlich bewerten und einen hohen Wert (beispielsweise 50) vergeben. Eine Phrase, welche Sie nur unter Freunden verwenden würden, </br> wie beispielsweise „hart chillen,“ würden Sie wahrscheinlich eher als sehr umgangssprachlich bewerten und einen niedrigen Wert (beispielsweise 0) vergeben.") 
            .settings.css("font-size","15px")
        .settings.italic()
        .print()
        ,
        newCanvas("infocanvas3", 1000, 80)
            .settings.add(0,0, getText("explanation3"))
            .print()

    

    ,
    newButton("Weiter")
            .print()
            .wait()
    
    )
    ////////////////////////////
    
   PennController("trial",
   newText("Das Experiment dauert ungef&auml;hr 15 Minuten. <br/> Um Sie mit der Aufgabe vetraut zu machen, folgt nun ein Beispiel:  ")
        .settings.css("font-size", "18px")
        .print()
    ,
    newButton("&Uuml;bungen beginnen")
        .print()
        .wait())
    
    ////////////////////////////////////
    
    PennController("trial2",
        newText("kapieren")
            .settings.css("font-size", "25px")
            .settings.center()
            .settings.italic()
            .print()
    ,
    newText("f1","<p>Wie hochsprachlich / umgangssprachlich sch&auml;tzen Sie das gegebene Wort ein?<p>")
        .settings.css("font-size","20px")
        .settings.center()
        .print()
        
    ,
    newScale("slider1", "0", "1","2","3","4","5","6","7","8","9", "10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40" ,"41","42","43","44","45","46","47","48","49", "50")
    .settings.center()
    .settings.before(newText("umgangssprachlich", "0 <br>(sehr<br/> umgangssprachlich)"))
    .settings.after(newText("hochsprachlich", "50 <br/> (sehr hochsprachlich)"))
    .settings.size (1100)
    .settings.labelsPosition("bottom")
    .print()
    .settings.log()
    .wait()
    //.remove()
        ,
        
            newButton("best1", "best&auml;tigen")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        getText("f1")
            .remove()
        ,
        getScale("slider1")
            .remove()
        ,
        getButton("best1")
            .remove()
    )
    ////////////////////////
    
    PennController("introduction",
        newText("<p>Das war die Übung. <p>Es folgt nun das Experiment.<p>")
            .settings.css("font-size", "20px")
            .print()
    ,
    newText("<p>Viel Spa&szlig;!<p>")
        .settings.css("font-size", "20px")
        .print()

    ,
    newButton("Experiment beginnen")
        .print()
        .wait()
        );   
    
    PennController.Template(
    PennController.GetTable("ListeWoerter.csv"),
        variable => PennController("ListeW",
    
    newText("Woerter", variable.Words)
        .settings.css("font-size", "25px")
        .settings.center()
        .settings.italic()
        .print()
    ,
    
    newText("frage","<p> Wie hochsprachlich / umgangssprachlich sch&auml;tzen Sie das Wort ein?<p>")
        .settings.css("font-size", "20px")
        .settings.center()
        .print()
    ,
    newScale("slider", "0", "1","2","3","4","5","6","7","8","9", "10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40" ,"41","42","43","44","45","46","47","48","49", "50")
    .settings.center()
    .settings.before( newText("umgangssprachlich", "0 <br/> (sehr umgangssprachlich)"))
    .settings.after(newText("hochsprachlich", "50 <br/> (sehr hochsprachlich)"))
    .settings.size(1100)
    .settings.labelsPosition("bottom")
    .print()
    .settings.log()
    .wait()
    //.remove()
        ,
        newButton("best", "best&auml;tigen")
            .settings.center()
            .print()
            .wait()
            .remove()
        ,
        getText("frage")
            .remove()
        ,
        getScale("slider")
        ,
        getButton("best")
            .remove()
        
    .log("Item", variable.Item)
    .log("expSet",variable.expSet)
    .log("condition", variable.condition)
    .log("WP1_match", variable.WP1_match)
    .log("Words",variable.Words)
     )
     )
    
    PennController.SendResults("send");
    
    ////////////////
    
    PennController("final",
        newText("<p>Vielen Dank f&uuml;r Ihre Teilnahme! Die Studie ist hiermit beendet. </p>")
            .settings.css("font-size", "20px")
            .settings.center()
            .print()
        ,
        newText ("<p>Bitte geben Sie folgenden Code bei Clickworker ein, um die Bezahlung zu erhalten: </p>")
            .settings.css("font-size", "20px")
            .settings.center()
            .print()
        ,
        newText ("<p> 95170119 </p>")
             .settings.css("font-size", "30px")
             .settings.center()
             .print()
        ,
        
        newButton("void")
            .wait()
    
        
   )