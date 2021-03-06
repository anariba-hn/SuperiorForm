
function Submit() {
    var name = $("#txtName").val();
    var email = $("#txtEmail").val();
    var phone = $("#txtPhone").val();
    var result = validate();
    
    if (name == '') {
        
        $("#spnAlert").text("Ingrese su Nombre para poder continuar");
        $("#alert-modal").modal("show");
        $("#txtName").focus();
    } else if (email == '') {
        $("#spnAlert").text("Ingrese su Correo para poder continuar");
        $("#alert-modal").modal("show");
        $("#txtEmail").focus();
    } else if(!result){
        $("#spnAlert").text("Ingrese una direccion de correo Valida");
        $("#alert-modal").modal("show");
        $("#txtEmail").focus();
    } else if (phone == '') {
        $("#spnAlert").text("Ingrese su Telefono para poder continuar");
        $("#alert-modal").modal("show");
        $("#txtPhone").focus();
    } else if(phone.length != 8 ){
        $("#spnAlert").text("Ingrese un Numero telefonico de 8 digitos");
        $("#alert-modal").modal("show");
        $("#txtPhone").focus();
    }else {

        $.post('./setUser.php', {
            user_name: name,
            user_email: email,
            user_phone: phone
        }).done(function (data) {

            if (data.status == 404) {
                $("#spnAlert").text("Ocurrio un Error, intente nuevamente");
                $("#alert-modal").modal("show");
            }else if( data.user_email == email){
                $("#spnAlert2").text("Este correo ya existe. Sera redirigido a Kryptonia.")
                $("#alert-modal2").modal("show");
            }
            else{
                $("#spnAlert").text("Su registro a sido completado !");
                $("#alert-modal").modal("show");
                showScroll("step1");
                $('html, body').animate({
                scrollTop: $("#step1").offset().top
                }, 2000);
                $("#btnSubmit").css("display", "none");
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
        $(".step3").fadeIn(2000)
        
    if(view == 'step4')
        $(".step4").fadeIn(3000)
}

function validateEmail(email) {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate(){
    var email = $("#txtEmail").val();
    if (validateEmail(email))
        return true;
    else
        return false;
}

$(document).ready(function () {
    
    setTimeout(showScroll("myCard"), 5000);
        
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
        window.open("https://kryptonia.io/?ref=YEJ27DZN5M");
    })

    $("#btnRedirect").click(function(){
        window.location.href = 'https://kryptonia.io/?ref=YEJ27DZN5M';
    })
    
});