function searchfn(){
    //GETTING INPUT VALUE
    var departure= document.getElementById("from").value;
    var arrival= document.getElementById("to").value;
    var date= document.getElementById("date").value;
    var type= document.getElementById("time").value;
    //GETTING INPUT VALUE

    //FETCHING DATA FROM JSON FILE
    fetch("./beaut_data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data){
        

        var flightOffer_length=data.flightOffer.length;
        var departure_length=data.flightOffer[0].itineraries[0].segments[0].departure.length;


        //TABLE HEAD
        document.write("<table border='1' width='1500' HEIGHT='50'>");
            document.write("<thead>");
                document.write("<tr><th>FLIGHT</th><th>AIRCRAFT</th><th>CLASS</th><th>FARE</th><th>ROUTE</th><th>DEPARTURE</th><th>ARRIVAL</th><th>DURATION</th><th>PRICE</th></tr>");
                   
            document.write("</thead>");



        
        //TABLE HEAD
        price="";
        
        for(var i=0;i<flightOffer_length;i++){
            var itineraries_length=data.flightOffer[i].itineraries.length;
            var h=0;
            document.write("<tbody>");

            price_d=data.flightOffer[i].price;
            price=price_d+price;
                        for(var j=0;j<itineraries_length;j++){
                            var segment_length=data.flightOffer[i].itineraries[j].segments.length;
                            var arri_data=data.flightOffer[i].itineraries[j].segments[segment_length-1].arrival.iataCode;
                            document.write("<tr>");

                                        flight="";
                                        flightnumber="";
                                        classe="";
                                        farebasis="";
                                        route_d="";
                                        depart="";
                                        arriv="";
                                        duretn="";
                                        

                                        
                                        dur_d=data.flightOffer[i].itineraries[j].duration;
                                        duretn=duretn+dur_d+"</br>";
                                        for(var k=0; k<segment_length; k++){
                                            price="";

                                            marketingcarrier=data.flightOffer[i].itineraries[j].segments[k].marketingCarrier;
                                            aircrft=data.flightOffer[i].itineraries[j].segments[k].aircraft;

                                            fl_number=data.flightOffer[i].itineraries[j].segments[k].flightNumber;

                                            classd=data.flightOffer[i].class[0][k];

                                            fare=data.flightOffer[i].fareBasis[0][k];

                                            from_d=data.flightOffer[i].itineraries[j].segments[k].departure.iataCode;
                                            to_d=data.flightOffer[i].itineraries[j].segments[k].arrival.iataCode;

                                            dep_date_time=data.flightOffer[i].itineraries[j].segments[k].departure.at;
                                            arr_date_time=data.flightOffer[i].itineraries[j].segments[k].arrival.at;

                                            price_d=data.flightOffer[i].price;
                                            price=price_d+price;
                                            

                                            
                                            flight=flight+marketingcarrier+aircrft+"</br>";
                                            flightnumber=flightnumber+fl_number+"</br>";
                                            classe= classe+classd+"</br>";
                                            farebasis=farebasis+fare+"</br>"
                                            route_d=route_d+from_d+"-"+to_d+"</br>";
                                            depart=depart+dep_date_time+"</br>";
                                            arriv=arriv+arr_date_time+"</br>";
                                            
                                            

                                        }
                                        document.write("<td>");
                                        document.write(flight);
                                        document.write("</td>");

                                        document.write("<td>");
                                        document.write(flightnumber);
                                        document.write("</td>");

                                        document.write("<td>");
                                        document.write(classe);
                                        document.write("</td>");
                                        
                                        document.write("<td>");
                                        document.write(farebasis);
                                        document.write("</td>");

                                        document.write("<td>");
                                        document.write(route_d);
                                        document.write("</td>");

                                        document.write("<td>");
                                        document.write(depart);
                                        document.write("</td>");

                                        document.write("<td>");
                                        document.write(arriv);
                                        document.write("</td>");

                                        document.write("<td>");
                                        document.write(duretn);
                                        document.write("</td>");

                                        document.write("<td>");
                                        document.write(price);
                                        document.write("</td>");

                                        document.write("<td>");
                                        document.write("<button> Select </button>");
                                        document.write("</td>");

                                        document.write("</tr>");     
                                        document.write("</tbody>");  

                                          
                                        
                        }


            }     
            
            
            document.write("</table>");
        
    }
        

        


        

    )};
    //FETCHING DATA FROM JSON FILE


    









// function searchfn()
// {

//     var departure= document.getElementById("from").value;
//     var arrival= document.getElementById("to").value;
//     var date= document.getElementById("date").value;
//     var type= document.getElementById("time").value;
    


//     fetch("./beaut_data.json")
//     .then(function(resp) {
//         return resp.json();
//     })
//     .then(function(data){
        

//         var flightOffer_length=data.flightOffer.length;
        
        
//         var departure_length=data.flightOffer[0].itineraries[0].segments[0].departure.length;

        
        
//         for(var i=0;i<flightOffer_length;i++){
//             var itineraries_length=data.flightOffer[i].itineraries.length;
//             var h=0;

//             for(var j=0;j<itineraries_length;j++){
//                 var segment_length=data.flightOffer[i].itineraries[j].segments.length;
//                 var arri_data=data.flightOffer[i].itineraries[j].segments[segment_length-1].arrival.iataCode;
                
//                         if(arrival==arri_data){
//                             h=segment_length;
//                             console.log(h);
                           
                            
//                         }

//                     }       
        
//                 }
        

        


        

// });
    
// }


