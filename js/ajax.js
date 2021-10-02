$(document).ready(function () {
    jQuery.support.cors = true;            
    $("#Boton-Llenar").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car";
        $("#tabla.carros tbody").empty();
        $.ajax({
            url: urlServicio,
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
                categoryId = 0;
                var salidaFila = "";

                $("#tabla-carros tbody").empty();

                salidaFila = "<tr><th>ID Carro</th><th>Marca</th><th>Modelo</th><th>Category_ID</th><th>Detalle</th></tr>";
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
    $("#Boton-Cliente").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
        $("#tabla.cliente tbody").empty();
        $.ajax({
            url: urlServicio,
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

                salidaFila = "<tr><th>ID Cliente</th><th>Nombre</th><th>Email</th><th>Edad</th><th>Detalle</th></tr>";
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
    $("#Boton-Mensaje").click(function () {
        var urlServicio = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";
        $("#tabla.mensaje tbody").empty();
        $.ajax({
            url: urlServicio,
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

                salidaFila = "<tr><th>ID Mensaje</th><th>Mensaje</th><th>Detalle</th></tr>";
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
    $("#id-carro").click(function(){
        var uriServicioBusqueda = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car/";
    
        //Recupero el id digitado de la caja texto
        var id=0;
        id = parseInt($("#ID-Carro").val());
        console.log ("id digitado por el usuario: " + id);

        console.log ("uriServicioBusqueda: " + (uriServicioBusqueda+id));

        var resultadoConsulta = null;

        $.ajax(
            {url: uriServicioBusqueda + id, 
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

                salidaFila = "<tr><td>ID Carro</td><td>Marca</td><td>Modelo</td><td>Category_ID</td><td>Detalle</td></tr>";
                $("#tabla-carros tbody").append(salidaFila);


                for (i = 0;  i < resultadoConsulta.length;  i++){
                    id = result.items[i]["id"];
                    marca = result.items[i]["brand"];
                    modelo = result.items[i]["model"];
                    categoryId = result.items[i]["category_id"]
                    estructuraFila = "<tr><td>" + id + "</td><td>" +
                    marca + "</td><td>" + modelo + "</td><td>" + categoryId + "</td></tr>";
                    
                    $("#tabla-carros tbody").append(estructuraFila);
                    $("#tabla-carros").addClass("estiloRelleno" );
                }
                
                $("#tabla-carros tbody").show();

            }});

    });
    //Fin del selector  del boton de busqueda
    $("#id-cliente").click(function(){
        var uriServicioBusqueda = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/";
    
        //Recupero el id digitado de la caja texto
        var id=0;
        id = parseInt($("#ID-Cliente").val());
        console.log ("id digitado por el usuario: " + id);

        console.log ("uriServicioBusqueda: " + (uriServicioBusqueda+id));

        var resultadoConsulta = null;

        $.ajax(
            {url: uriServicioBusqueda + id, 
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

                salidaFila = "<tr><td>ID Cliente</td><td>Nombre</td><td>Email</td><td>Edad</td><td>Detalle</td></tr>";
                $("#tabla-cliente tbody").append(salidaFila);


                for (i = 0;  i < resultadoConsulta.length;  i++){
                    id = result.items[i]["id"];
                    nombre = result.items[i]["name"];
                    email = result.items[i]["email"];
                    edad = result.items[i]["age"]
                    estructuraFila = "<tr><td>" + id + "</td><td>" +
                    nombre + "</td><td>" + email + "</td><td>" + edad + "</td></tr>";
                    
                    $("#tabla-cliente tbody").append(estructuraFila);
                    $("#tabla-cliente").addClass("estiloRelleno" );
                }
                
                $("#tabla-cliente tbody").show();

            }});

    });
    //Fin del selector  del boton de busqueda
    $("#id-mensaje").click(function(){
        var uriServicioBusqueda = "https://g272857530b233b-db202109272016.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/";
    
        //Recupero el id digitado de la caja texto
        var id=0;
        id = parseInt($("#ID-Mensaje").val());
        console.log ("id digitado por el usuario: " + id);

        console.log ("uriServicioBusqueda: " + (uriServicioBusqueda+id));

        var resultadoConsulta = null;

        $.ajax(
            {url: uriServicioBusqueda + id, 
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

                salidaFila = "<tr><td>ID Mensaje</td><td>Mensaje</td><td>Detalle</td></tr>";
                $("#tabla-mensaje tbody").append(salidaFila);


                for (i = 0;  i < resultadoConsulta.length;  i++){
                    id = result.items[i]["id"];
                    mensaje = result.items[i]["messagetext"];                   
                    estructuraFila = "<tr><td>" + id + "</td><td>" +
                    mensaje + "</td></tr>";
                    
                    $("#tabla-mensaje tbody").append(estructuraFila);
                    $("#tabla-mensaje").addClass("estiloRelleno" );
                }
                
                $("#tabla-mensaje tbody").show();

            }});

    });
    //Fin del selector  del boton de busqueda
})
