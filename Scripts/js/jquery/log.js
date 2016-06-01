$(document).ready(function(){
    /***********Ajax calls to load data for tabs section*********************/

        ///// call to load data every 20 sec

         setInterval(function(){       
             
             $.ajax({
              url: "/Home/ManageOrder",
              method: "GET",
              success: function(data) {
                  if(!data.success){
                      $('#table-content').show(); 
                  }                  
              }
          });
          
          
           },30000);
        
       /*  $("#table-content").click(function(){ 
            
           $('#refresh').css("display", "none");
         //  ajaxCall("/admin/logs/logs");
         //  ajaxCall("/admin/logs/track_my_assets_logs"); 
         //  ajaxCall("/admin/logs/my_time_to_work_logs"); 
           
        }); */

   }    
    
    /**************Tooltip section************************/
   