function doFade(){
    
    $("#msg").fadeIn('slow').delay(200).fadeOut('slow').delay(200).fadeIn('slow');
            
        
    /*
        if(x == 5)
        {
            clearInterval(interv);
            $(".hero").css("visibility", "hidden");
            $(".myCard").css("visibility", "visible");
        }
    
        $("#msg").fadeIn('slow').delay(200).fadeOut('slow').delay(200).fadeIn('slow');
        cont ++;
        console.log(cont);
        
        if(cont === 5){
            clearInterval(interv);
            $("#myCard").css("visibility", "visible");
        }
    */
}


function Submit() {
    var name = $("#txtName").val();
    var email = $("#txtEmail").val();
    var phone = $("#txtPhone").val();
    
    if (name == '') {
        
        $("#msgDanger").text("Ingrese su Nombre para poder continuar");
        $("#txtName").focus();
    }  else if (email == '') {
        $("#msgDanger").text("Ingrese su Correo para poder continuar");
        $("#txtEmail").focus();
    } else if (phone == '') {
        $("#msgDanger").text("Ingrese su Telefono para poder continuar");
        $("#txtPhone").focus();
    } else {

        $.post('./setUser.php', {
            user_name: name,
            user_email: email,
            user_phone: phone
        }).done(function (data) {

            if (data.user_email == email) {

                alert("Este correo ya existe. Sera redirigido a Kryptonia.")
                window.location.href = "https://kryptonia.io";
            }
            else{
                $("#spnSuccess").text("Su registro a sido completado !");
                showScroll("step1");
                $('html, body').animate({
                scrollTop: $("#step1").offset().top
                }, 2000);
            }
        })

    }
}

function showScroll(view){
    
    if(view == 'myCard'){
        $(".myCard").fadeIn(3000)
        $('html, body').animate({
        scrollTop: $(".myCard").offset().top
        }, 2000);
    }
        
    if(view == 'step1')
        $(".step1").fadeIn(3000)
        
    if(view == 'step2')
        $(".step2").fadeIn(3000)
    
    if(view == 'step3')
        $(".step3").fadeIn(3000)
        
    if(view == 'step4')
        $(".step4").fadeIn(3000)
}

$(document).ready(function () {
    
    setTimeout(showScroll("myCard"), 10000);
        
    $("#btnSubmit").click(function () {
        Submit();
    })
    
    $("#btnNext1").click(function(){
        showScroll("step2");
        $('html, body').animate({
        scrollTop: $("#step2").offset().top
        }, 2000);
        $("#btnNext1").css("display","none");    
    })
    
    $("#btnNext2").click(function(){
        showScroll("step3");
        $('html, body').animate({
        scrollTop: $("#step3").offset().top
        }, 2000);
        $("#btnNext2").css("display","none");
    })
    
    $("#btnNext3").click(function(){
        showScroll("step4");
        $('html, body').animate({
        scrollTop: $("#step4").offset().top
        }, 2000);
        $("#btnNext3").css("display","none");
    })
    
    $("#btnNext4").click(function(){
        window.open("https://kryptonia.io");
    })
    
    //setInterval(doFade, 1000);
    
        
    /*setInterval(function() {
        $("#msg").fadeIn('slow').delay(200).fadeOut('1500').delay(200).fadeIn('slow');
    }, 2000)
    
    doFade.then((succesMessage) => {
        
        console.log(succesMessage);
    }).then(() => {
        alert('next');
    })
    
    */
});