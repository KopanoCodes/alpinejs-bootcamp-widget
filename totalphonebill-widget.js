document.addEventListener('alpine:init', () => {
    Alpine.data ("phonebillWidget", function() {
        return   { 
           messagebill: '',
           totalCost: '',
           showGreeting : false,
           phonebill(){
           this.messagebill = totalPhoneBill(this.totalCost);
       
           setTimeout(() => {
               this.messagebill = '';
           }, 3000);
       }
       }
       }  );
})