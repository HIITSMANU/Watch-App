$(function(){
    var mode;
    var timecounter = 0;
    var lapcounter = 0;
    var action;
    var lapno = 0;
    var timemin,timesec,timecsec,
    lapmin,lapsec,lapcsec
    //On app load show start and stop button
    hideshowbutton("#startbutton","#lapbutton")
    //click on startbutton
    $("#startbutton").click(function(){
        mode = 1;//mode is on
        hideshowbutton("#stopbutton","#lapbutton")
        //start the counter
        startcounter();
    })
    $("#stopbutton").click(function(){
        hideshowbutton("#resumebutton","#resetbutton")
       
        clearInterval(action);//whole code is stopped or no functionality
    })
    $("#resumebutton").click(function(){
        hideshowbutton("#stopbutton","#lapbutton")
        //start the counter
        startcounter();
    })
    $("#resetbutton").click(function(){
        location.reload();
    })
    $("#lapbutton").click(function(){
        if(mode){
            clearInterval(action);
            lapcounter = 0;
            addlap();
            startcounter();
        }
       
    })



















    //functions
    function hideshowbutton(x,y) {
        $(".control").hide();
        $(x).show();
        $(y).show();
    }
    function startcounter() {
        action = setInterval(function(){
        timecounter++;
        lapcounter++;
        updatetime();
        },10)
    }
    function updatetime() {
        timemin = Math.floor(timecounter/6000);
        timesec = Math.floor((timecounter%6000)/100);
        timecsec = (timecounter%6000)%100;
        lapmin = Math.floor(lapcounter/6000);
        lapsec = Math.floor((lapcounter%6000)/100);
        lapcsec = (lapcounter%6000)%100;
        $("#tmin").text(format(timemin));
        $("#tsec").text(format(timesec));
        $("#tmec").text(format(timecsec));
        $("#mmin").text(format(lapmin));
        $("#msec").text(format(lapsec));
        $("#mmec").text(format(lapcsec));

    }
    //format number
    function format(number) {
        if(number<10){
            return '0'+number;
        }
        else{
            return number
        }
        
    }
    function addlap() {
        lapno++;
        var lapdet = 
        '<div class="lap">'+
            '<div class="lapname">'+
                'Lap'+lapno+
            '</div>'+
            '<div class="timelap">'+
                '<span>'+
                format(timemin)+
                '</span>'+':<span>'+
                format(timesec)+
                '</span>'+':<span>'+
                format(timecsec)+
                '</span>'+
            '</div>'+
            '<div class="laptime">'+
                '<span>'+
                format(lapmin)+
                '</span>'+':<span>'+
                format(lapsec)+
                '</span>'+':<span>'+
                format(lapcsec)+
                '</span>'+
            '</div>'

        '</div>' ;  
        $(lapdet).prependTo("#lapshow");
    }
})
