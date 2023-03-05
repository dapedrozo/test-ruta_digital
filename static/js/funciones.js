setTimeout(function () {   
    // Closing the alert 
    $('.alert').alert('close'); 
}, 5000); 

$(document).ready(function(){

    $('#RT06').change(function(){

        var input3 = document.getElementById('RT06').value;
        
        if (input3 == 1) {
          
            $('#SCc1').val(0.5);
            $('#SCc2').val(0.5);
            $('#SCp1').val(0.5);
            $('#SCp2').val(0.5);
            $('#SCc3').val(0.5);
            $('#SCd').val(0.25);
               
       
        }else if(input3 == 2){

            $('#SCc1').val(0.75);
            $('#SCc2').val(0.75);
            $('#SCp1').val(0.75);
            $('#SCp2').val(0.75);
            $('#SCc3').val(0.75);
            $('#SCd').val(0.5);

        }else if(input3 == 3){

            $('#SCc1').val(1.75);
            $('#SCc2').val(2.25);
            $('#SCp1').val(1.75);
            $('#SCp2').val(1.75);
            $('#SCc3').val(2.25);
            $('#SCd').val(1.75);

        }else if(input3 == 4){

            $('#SCc1').val(2.25);
            $('#SCc2').val(2.5);
            $('#SCp1').val(2.5);
            $('#SCp2').val(2.25);
            $('#SCc3').val(2.25);
            $('#SCd').val(2.25);

        }else if(input3 == 5){

            $('#SCc1').val(2.5);
            $('#SCc2').val(2.5);
            $('#SCp1').val(2.75);
            $('#SCp2').val(2.5);
            $('#SCc3').val(2.5);
            $('#SCd').val(2.5);

        }else if(input3 == 6){

            $('#SCc1').val(0);
            $('#SCc2').val(0);
            $('#SCp1').val(0);
            $('#SCp2').val(0);
            $('#SCc3').val(0);
            $('#SCd').val(0);

        }else{
            $('#SCc1').val(1);
            $('#SCc2').val(1);
            $('#SCp1').val(1);
            $('#SCp2').val(1);
            $('#SCc3').val(1);
            $('#SCd').val(1);

        }             
      });

    $('#RT07').change(function(){

        var input3 = document.getElementById('RT07').value;
        
        if (input3 == 1) {
          
            $('#PVc1').val(0.5);
            $('#PVc2').val(0.5);
            $('#PVp1').val(0.5);
            $('#PVp2').val(0.5);
            $('#PVc3').val(0.5);
            $('#PVd').val(0.5);
            $('#RCc').val(0.5);
            $('#RCta').val(0.5);
            $('#RCtc').val(0.5);
            $('#RCd').val(0.25);
               
       
        }else if(input3 == 2){

            $('#PVc1').val(0.75);
            $('#PVc2').val(0.75);
            $('#PVp1').val(0.75);
            $('#PVp2').val(0.75);
            $('#PVc3').val(0.75);
            $('#PVd').val(0.75);
            $('#RCc').val(0.75);
            $('#RCta').val(0.75);
            $('#RCtc').val(0.75);
            $('#RCd').val(0.75);

        }else if(input3 == 3){

            $('#PVc1').val(1.75);
            $('#PVc2').val(2.25);
            $('#PVp1').val(1.75);
            $('#PVp2').val(1.75);
            $('#PVc3').val(2.25);
            $('#PVd').val(1.75);
            $('#RCc').val(1.75);
            $('#RCta').val(2.25);
            $('#RCtc').val(1.75);
            $('#RCd').val(1.75);

        }else if(input3 == 4){

            $('#PVc1').val(2.25);
            $('#PVc2').val(2.5);
            $('#PVp1').val(2.5);
            $('#PVp2').val(2.25);
            $('#PVc3').val(2.25);
            $('#PVd').val(2.25);
            $('#RCc').val(2.25);
            $('#RCta').val(2.5);
            $('#RCtc').val(2.5);
            $('#RCd').val(2.25);

        }else if(input3 == 5){

            $('#PVc1').val(2.5);
            $('#PVc2').val(2.5);
            $('#PVp1').val(2.75);
            $('#PVp2').val(2.5);
            $('#PVc3').val(2.5);
            $('#PVd').val(2.5);
            $('#RCc').val(2.5);
            $('#RCta').val(2.5);
            $('#RCtc').val(2.75);
            $('#RCd').val(2.5);

        }else if(input3 == 6){

            $('#PVc1').val(2.75);
            $('#PVc2').val(2.75);
            $('#PVp1').val(3);
            $('#PVp2').val(2.75);
            $('#PVc3').val(2.75);
            $('#PVd').val(2.75);
            $('#RCc').val(2.75);
            $('#RCta').val(2.75);
            $('#RCtc').val(3);
            $('#RCd').val(2.75);

        }else if(input3 == 7){

            $('#PVc1').val(0);
            $('#PVc2').val(0);
            $('#PVp1').val(0);
            $('#PVp2').val(0);
            $('#PVc3').val(0);
            $('#PVd').val(0);
            $('#RCc').val(0);
            $('#RCta').val(0);
            $('#RCtc').val(0);
            $('#RCd').val(0);

        }else{
            $('#PVc1').val(1);
            $('#PVc2').val(1);
            $('#PVp1').val(1);
            $('#PVp2').val(1);
            $('#PVc3').val(1);
            $('#PVd').val(1);
            $('#RCc').val(1);
            $('#RCta').val(1);
            $('#RCtc').val(1);
            $('#RCd').val(1);
        }             
      });
      

      $('#RT08').change(function(){

        var input3 = document.getElementById('RT08').value;
        if (input3 == 1) {
          
            $('#CCp').val(2.25);
            $('#CCc').val(2.5);
            $('#CCta').val(2.5);
            $('#CCtc').val(2.25);
             $('#CCd').val(2.25);    
                      
        }else if(input3 == 2){

            $('#CCp').val(1.75);
            $('#CCc').val(2.25);
            $('#CCta').val(1.75);
            $('#CCtc').val(1.75);
            $('#CCd').val(1.75);

        }else if(input3 == 3){

            $('#CCp').val(2.5);
            $('#CCc').val(2.5);
            $('#CCta').val(2.75);
            $('#CCtc').val(2.5);
            $('#CCd').val(2.5);

        }else if(input3 == 4){
            $('#CCp').val(2.75);
            $('#CCc').val(2.75);
            $('#CCta').val(3);
            $('#CCtc').val(2.75);
            $('#CCd').val(2.75);
        }else if(input3 == 5){
            $('#CCp').val(0.5);
            $('#CCc').val(0.5);
            $('#CCta').val(0.5);
            $('#CCtc').val(0.5);
            $('#CCd').val(0.5);
        }else{
            $('#CCp').val(1);
            $('#CCc').val(1);
            $('#CCta').val(1);
            $('#CCtc').val(1);
            $('#CCd').val(1);

        }


      });

      $('#RT10').change(function(){

        var input3 = document.getElementById('RT10').value;
        if (input3 == 1) {
          
            $('#ACCta').val(0.5);
            $('#ACCtc').val(0.5);
            $('#ACCd').val(0.5);
              
                      
        }else if(input3 == 2){

            $('#ACCta').val(1.75);
            $('#ACCtc').val(1.75);
            $('#ACCd').val(1.75);

        }else if(input3 == 3){

            $('#ACCta').val(2.5);
            $('#ACCtc').val(2.5);
            $('#ACCd').val(2.5);

        }else if(input3 == 4){
           
            $('#ACCta').val(2.75);
            $('#ACCtc').val(2.75);
            $('#ACCd').val(2.75);
        }else if(input3 == 5){
          
            $('#ACCta').val(3);
            $('#ACCtc').val(3);
            $('#ACCd').val(3);
        }else if(input3 == 6){
           
            $('#ACCta').val(3.25);
            $('#ACCtc').val(3.25);
            $('#ACCd').val(3.25);
        }else{

            
            $('#ACCta').val(0);
            $('#ACCtc').val(0);
            $('#ACCd').val(0);


        }


      });

      $('#RT11').change(function(){

        var input3 = document.getElementById('RT11').value;
        if (input3 == 1) {
          
            $('#Ic').val(0.5);
            $('#Ip').val(0.5);
            $('#Ita').val(0.5);
            $('#Itc').val(0.5);
            $('#Id').val(0.5);
              
                      
        }else if(input3 == 2){

            $('#Ic').val(1.75);
            $('#Ip').val(1.75);
            $('#Ita').val(1.75);
            $('#Itc').val(1.75);
            $('#Id').val(1.75);
              

        }else if(input3 == 3){
            
            $('#Ic').val(2.5);
            $('#Ip').val(2.5);
            $('#Ita').val(2.5);
            $('#Itc').val(2.5);
            $('#Id').val(2.5);
              
        }else if(input3 == 4){           
            
            $('#Ic').val(2.75);
            $('#Ip').val(2.75);
            $('#Ita').val(2.75);
            $('#Itc').val(2.75);
            $('#Id').val(2.75);
              
        }else if(input3 == 5){         
           
            $('#Ic').val(0);
            $('#Ip').val(0);
            $('#Ita').val(0);
            $('#Itc').val(0);
            $('#Id').val(0);
              
        }else{            
          
            $('#Ic').val(1);
            $('#Ip').val(1);
            $('#Ita').val(1);
            $('#Itc').val(1);
            $('#Id').val(1);            


        }


      });

      $('#RT12').change(function(){

        var input3 = document.getElementById('RT12').value;
        if (input3 == 1) {
          
            $('#RECta').val(0.5);
            $('#RECtc').val(0.5);
            $('#RECd').val(0.5);          
              
                      
        }else if(input3 == 2){

          $('#RECta').val(1.75);
          $('#RECtc').val(1.75);
          $('#RECd').val(1.75);
              

        }else if(input3 == 3){
            
          $('#RECta').val(2.5);
          $('#RECtc').val(2.5);
          $('#RECd').val(2.5);
              
        }else if(input3 == 4){ 

            $('#RECta').val(2.75);
            $('#RECtc').val(2.75);
            $('#RECd').val(2.75);
              
        }else if(input3 == 5){   
            $('#RECta').val(3);
            $('#RECtc').val(3);
            $('#RECd').val(3);
        }else{            
          
            $('#RECta').val(1);
            $('#RECtc').val(1);
            $('#RECd').val(1);            


        }


      });

      $('#RT13').change(function(){

        var input3 = document.getElementById('RT13').value;
        if (input3 == 1) {
          
            $('#ECta1').val(0.5);
            $('#ECtc1').val(0.5);
            $('#ECd1').val(0.5);          
              
                      
        }else if(input3 == 2){

            $('#ECta1').val(1.75);
            $('#ECtc1').val(1.75);
            $('#ECd1').val(1.75);   
              

        }else if(input3 == 3){
            
            $('#ECta1').val(2.5);
            $('#ECtc1').val(2.5);
            $('#ECd1').val(2.5);   
              
        
        }else{            
          
            $('#ECta1').val(1);
            $('#ECtc1').val(1);
            $('#ECd1').val(1);             


        }


      });

      $('#RT15').change(function(){

        var input3 = document.getElementById('RT15').value;
        if (input3 == 1) {
          
            $('#ECta2').val(1.25);
            $('#ECtc2').val(1.25);
            $('#ECd2').val(1.25);          
              
                      
        }else if(input3 == 2){

            $('#ECta2').val(1.75);
            $('#ECtc2').val(1.75);
            $('#ECd2').val(1.75);  

        }else if(input3 == 3){
            
            $('#ECta2').val(2.25);
            $('#ECtc2').val(2.25);
            $('#ECd2').val(2.25);   
              
        
        }else{            
          
            $('#ECta2').val(2.75);
            $('#ECtc2').val(2.75);
            $('#ECd2').val(2.75);             


        }


      });
      $('#RT16').change(function(){

        var input3 = document.getElementById('RT16').value;
        if (input3 == 1) {
          
            $('#ACta').val(0.5);
            $('#ACtc').val(0.5);
            $('#ACd').val(0.5);          
              
                      
        }else if(input3 == 2){

            $('#ACta').val(1.75);
            $('#ACtc').val(2.25);
            $('#ACd').val(1.75); 

        }else if(input3 == 3){
            
            $('#ACta').val(2.25);
            $('#ACtc').val(2.5);
            $('#ACd').val(2.5);   
              
        
        }else if(input3 == 4){
            
            $('#ACta').val(2.5);
            $('#ACtc').val(2.5);
            $('#ACd').val(2.75);   
              
        
        }else if(input3 == 5){
            
            $('#ACta').val(2.75);
            $('#ACtc').val(2.75);
            $('#ACd').val(3);   
              
        
        }else if(input3 == 6){
            
            $('#ACta').val(3);
            $('#ACtc').val(3);
            $('#ACd').val(3.25);   
              
        
        }else{            
          
            $('#ACta').val(1);
            $('#ACtc').val(1);
            $('#ACd').val(1);              


        }


      });

  })  

  // CHART JS
 
  /*var ejex = document.getElementById('ejex').value;
  //var ejey = document.getElementById('ejey').value;  
  var color = Chart.helpers.color;
  window.onload = function() {
      var ctx = document.getElementById('canvas').getContext('2d');
      var scatterChart = new Chart(ctx, {
              type: 'scatter',
              
              data: {
                  
                  datasets: [{
                      label: 'Enfoque Empresarial',
                      borderColor: window.chartColors.red,
                     backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
                     pointRadius: 10,
                     pointHoverRadius: 15,
                          data: [{
                          x: ejex,
                          y: ejey
                      },]
                  }]
              },
              options: {
                  scales: {
                      xAxes: [{
                          ticks: {
                                  max: 5,
                                  min: 0,
                                  stepSize: 0.5
                              },
                              id: 'B'
                               
                          
                      }],
                      yAxes: [{
                          ticks: {
                                  max: 5,
                                  min: 0,
                                  stepSize: 0.5
                              },
                              id: 'A'
                              

                      }]
                  },
                  title: {
                  display: true,
                  text: 'Cuadrantes de transformacion digital'
              },
              annotation: {
                  annotations: [{
                  type: 'line',
                  mode: 'horizontal',
                  scaleID: 'A',
                  value: 2.5,
                  borderColor: 'rgb(52, 73, 94)',
                  borderWidth: 3,
                  label: {
                    enabled: false,
                    content: 'Test label'
                  }
                },

                {
                  type: 'line',
                  mode: 'vertical',
                  scaleID: 'B',
                  value: 2.5,
                  borderColor: 'rgb(52, 73, 94)',
                  borderWidth: 3,
                  label: {
                    enabled: false,
                    content: 'Test label'
                  }
                }



                ]

              },
              responsive: true,
              //maintainAspectRatio: false,
              }
          });
        
    
    };*/

    
    $(document).ready(function () {            
   
        //form
   
         $('<div/>', {
            'class' : 'fields_duplicate', html: getValues()
        }).appendTo('#fields');
        $('.add-field').click(function () {
              $('<div/>', {
                  'class' : 'fields_duplicate', html: getValues()
        }).hide().appendTo('#fields').slideDown('slow');
            
        });
        $('.remove-field').click(function(){
          
          var long = $('.fields_duplicate').length;
          $('.fields_duplicate').last().remove();
        
        })
   
   
    })
  
   
   function getValues(){
   
        var len = $('.fields_duplicate').length;
         console.log(len);
       var $html = $('.valores').clone();
       $html.find('[name=CV]')[0].name="CV" + len;
       $html.find('[name=VL]')[0].name="VL" + len;
       
       return $html.html();
   
   
   }





