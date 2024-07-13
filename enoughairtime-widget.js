document.addEventListener('alpine:init', () => {
    Alpine.data ('airtimeWidget', function() {
        return   { 
           messageairtime: '',
           totalCost: '',
           airTime: '',
                          
                   airtime(){
           this.messageairtime = enoughAirtime(this.totalCost, this.airTime);
       
           setTimeout(() => {
               this.messageairtime = '';
           }, 3000);
       }
       }
       }  );
})
