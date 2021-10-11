$(document).ready(function () {
    jQuery.support.cors = true;    
    $("#Tabla-Carro").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car";
        $("#tabla.carros tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "GET",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function (result) {
                console.log("Entre a invocar el servicio REST");
                console.log(result.items);
                var i = 0;
                var id = 0;
                var marca = "";
                var modelo = 0;
                var categoryId = 0;
                var salidaFila = "";

                $("#tabla-carros tbody").empty();

                salidaFila = "<tr><th>ID Carro</th><th>Marca</th><th>Modelo</th><th>Category_ID</th></tr>";
                $("#tabla-carros tbody").append(salidaFila);

                for (i = 0; i < result.items.length; i++) {
                    id = result.items[i]["id"];
                    marca = result.items[i]["brand"];
                    modelo = result.items[i]["model"];
                    categoryId = result.items[i]["category_id"]

                    salidaFila = "<tr><td>" + id + "</td><td>" +
                        marca + "</td><td>" + modelo + "</td><td>" + categoryId + "</td></tr>";

                    $("#tabla-carros tbody").append(salidaFila);

                }//Fin del for


                            //Fin del selector success del AJAX
            }
        });
    })
    $("#Borrar-Carro").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car";
        var id = $("#ID-Carro").val();
        $.ajax({
            url: urlServicio,
            type: "DELETE",
            data: JSON.stringify({id:id}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })    
    $("#Agregar-Carro").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car";
        var idCarro = parseInt($("#ID-Agregar-Carro").val());
        var marcaCarro = $("#Marca-Carro").val();
        var modeloCarro = parseInt($("#Modelo-Carro").val());
        var categoryIdCarro = parseInt($("#Category-ID-Carro").val());
        $.ajax({
            url: urlServicio,
            type: "POST",
            data: JSON.stringify({ "id":idCarro, "brand":marcaCarro, "model":modeloCarro, "category_id":categoryIdCarro }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })
    $("#Actualizar-Carro").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car";
        var idCarro = parseInt($("#ID-Agregar-Carro").val());
        var marcaCarro = $("#Marca-Carro").val();
        var modeloCarro = parseInt($("#Modelo-Carro").val());
        var categoryIdCarro = parseInt($("#Category-ID-Carro").val());
        $.ajax({
            url: urlServicio,
            type: "PUT",
            data: JSON.stringify({ "id":idCarro, "brand":marcaCarro, "model":modeloCarro, "category_id":categoryIdCarro }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })    
    
    $("#Boton-Cliente").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
        $("#tabla.cliente tbody").empty();
        $.ajax({            
            url: urlServicio,
            type: "GET",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function (result) {
                console.log("Entre a invocar el servicio REST");
                console.log(result.items);
                var i = 0;
                var id = 0;
                var nombre = "";
                var email = "";
                var edad = 0;
                var salidaFila = "";

                $("#tabla-cliente tbody").empty();

                salidaFila = "<tr><th>ID Cliente</th><th>Nombre</th><th>Email</th><th>Edad</th></tr>";
                $("#tabla-cliente tbody").append(salidaFila);

                for (i = 0; i < result.items.length; i++) {
                    id = result.items[i]["id"];
                    nombre = result.items[i]["name"];
                    email = result.items[i]["email"];
                    edad = result.items[i]["age"]

                    salidaFila = "<tr><td>" + id + "</td><td>" +
                        nombre + "</td><td>" + email + "</td><td>" + edad + "</td></tr>";

                    $("#tabla-cliente tbody").append(salidaFila);

                }//Fin del for


                        //Fin del selector success del AJAX
            }
        });
    })
    $("#Borrar-Cliente").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
        var id = $("#ID-Cliente").val();
        $.ajax({
            url: urlServicio,
            type: "DELETE",
            data: JSON.stringify({id:id}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })    
    $("#Agregar-Cliente").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
        var idCliente = parseInt($("#Agregar-ID-Cliente").val());
        var nombreCliente = $("#Nombre-Cliente").val();
        var emailCliente = $("#Email-Cliente").val();
        var edadCliente = parseInt($("#Edad-Cliente").val());
        $.ajax({
            url: urlServicio,
            type: "POST",
            data: JSON.stringify({ "id":idCliente, "name":nombreCliente, "email":emailCliente, "age":edadCliente }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })
    $("#Actualizar-Cliente").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
        var idCliente = parseInt($("#Agregar-ID-Cliente").val());
        var nombreCliente = $("#Nombre-Cliente").val();
        var emailCliente = $("#Email-Cliente").val();
        var edadCliente = parseInt($("#Edad-Cliente").val());
        $.ajax({
            url: urlServicio,
            type: "PUT",
            data: JSON.stringify({ "id":idCliente, "name":nombreCliente, "email":emailCliente, "age":edadCliente }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })

    $("#Boton-Mensaje").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";
        $("#tabla.mensaje tbody").empty();
        $.ajax({
            url: urlServicio,
            type: "GET",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function (result) {
                console.log("Entre a invocar el servicio REST");
                console.log(result.items);
                var i = 0;
                var id = 0;
                var mensaje = "";
                var salidaFila = "";

                $("#tabla-mensaje tbody").empty();

                salidaFila = "<tr><th>ID Mensaje</th><th>Mensaje</th></tr>";
                $("#tabla-mensaje tbody").append(salidaFila);

                for (i = 0; i < result.items.length; i++) {
                    id = result.items[i]["id"];
                    mensaje = result.items[i]["messagetext"];

                    salidaFila = "<tr><td>" + id + "</td><td>" +
                        mensaje + "</td></tr>";

                    $("#tabla-mensaje tbody").append(salidaFila);

                            }//Fin del for


                            //Fin del selector success del AJAX
            }
        });
    })
    $("#Borrar-Mensaje").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";
        var id = $("#ID-Mensaje").val();
        $.ajax({
            url: urlServicio,
            type: "DELETE",
            data: JSON.stringify({id:id}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })    
    $("#Agregar-Mensaje").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";
        var idMensaje = parseInt($("#Agregar-ID-Mensaje").val());
        var mensaje = $("#Mensaje-Texto").val();
        $.ajax({
            url: urlServicio,
            type: "POST",
            data: JSON.stringify({ "id":idMensaje, "messagetext":mensaje}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })
    $("#Actualizar-Mensaje").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";
        var idMensaje = parseInt($("#Agregar-ID-Mensaje").val());
        var mensaje = $("#Mensaje-Texto").val();
        $.ajax({
            url: urlServicio,
            type: "PUT",
            data: JSON.stringify({ "id":idMensaje, "messagetext":mensaje}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
        } );   
    })

    $("#buscar-id-carro").click(function(){
        var uriServicioBusqueda = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car/";
    
        //Recupero el id digitado de la caja texto
        var id=0;
        id = parseInt($("#ID-Carro").val());
        console.log ("id digitado por el usuario: " + id);

        console.log ("uriServicioBusqueda: " + (uriServicioBusqueda+id));

        var resultadoConsulta = null;

        $.ajax({
            url: uriServicioBusqueda + id,
            type: "GET", 
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function(result){
                var i = 0;
                var id = 0;
                var marca = "";
                var modelo = 0;
                var categoryId = 0;
                var estructuraFila = "";
                resultadoConsulta = result.items;

                $("#tabla-carros tbody").empty();

                salidaFila = "<tr><th>ID Carro</th><th>Marca</th><th>Modelo</th><th>Category_ID</th></tr>";
                $("#tabla-carros tbody").append(salidaFila);


                for (i = 0;  i < resultadoConsulta.length;  i++){
                    id = result.items[i]["id"];
                    marca = result.items[i]["brand"];
                    modelo = result.items[i]["model"];
                    categoryId = result.items[i]["category_id"]
                    estructuraFila = "<tr><td>" + id + "</td><td>" +
                    marca + "</td><td>" + modelo + "</td><td>" + categoryId + "</td></tr>";
                    
                    $("#tabla-carros tbody").append(estructuraFila);
                }
                
                $("#tabla-carros tbody").show();

            }});

    });
    
    $("#buscar-id-cliente").click(function(){
        var uriServicioBusqueda = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/";
    
        //Recupero el id digitado de la caja texto
        var id=0;
        id = parseInt($("#ID-Cliente").val());
        console.log ("id digitado por el usuario: " + id);

        console.log ("uriServicioBusqueda: " + (uriServicioBusqueda+id));

        var resultadoConsulta = null;

        $.ajax({
            url: uriServicioBusqueda + id, 
            type: "GET",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function(result){
                var i = 0;
                var id = 0;
                var nombre = "";
                var email = "";
                var edad = 0;
                var estructuraFila = "";
                resultadoConsulta = result.items;

                $("#tabla-cliente tbody").empty();

                salidaFila = "<tr><th>ID Cliente</th><th>Nombre</th><th>Email</th><th>Edad</th></tr>";
                $("#tabla-cliente tbody").append(salidaFila);


                for (i = 0;  i < resultadoConsulta.length;  i++){
                    id = result.items[i]["id"];
                    nombre = result.items[i]["name"];
                    email = result.items[i]["email"];
                    edad = result.items[i]["age"]
                    estructuraFila = "<tr><td>" + id + "</td><td>" +
                    nombre + "</td><td>" + email + "</td><td>" + edad + "</td></tr>";
                    
                    $("#tabla-cliente tbody").append(estructuraFila);
                }
                
                $("#tabla-cliente tbody").show();

            }});

    });

    $("#buscar-id-mensaje").click(function(){
        var uriServicioBusqueda = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/";
    
        //Recupero el id digitado de la caja texto
        var id=0;
        id = parseInt($("#ID-Mensaje").val());
        console.log ("id digitado por el usuario: " + id);

        console.log ("uriServicioBusqueda: " + (uriServicioBusqueda+id));

        var resultadoConsulta = null;

        $.ajax({
            url: uriServicioBusqueda + id,
            type: "GET",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,

            success: function(result){
                var i = 0;
                var id = 0;
                var mensaje = "";
                var estructuraFila = "";
                resultadoConsulta = result.items;

                $("#tabla-mensaje tbody").empty();

                salidaFila = "<tr><th>ID Mensaje</th><th>Mensaje</th></tr>";
                $("#tabla-mensaje tbody").append(salidaFila);


                for (i = 0;  i < resultadoConsulta.length;  i++){
                    id = result.items[i]["id"];
                    mensaje = result.items[i]["messagetext"];                   
                    estructuraFila = "<tr><td>" + id + "</td><td>" +
                    mensaje + "</td></tr>";
                    
                    $("#tabla-mensaje tbody").append(estructuraFila);
                }
                
                $("#tabla-mensaje tbody").show();

            }});

    });
})
