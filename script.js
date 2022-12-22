const { createApp } = Vue

createApp({
  data() {
    return {
        
        emailList:[],
        
      
    }
  },
  methods:{
    getRandomEmail(){
      for(let i=0; i<10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then( (response) => {
              console.log(response.data.response);
              this.emailList.push(response.data.response);
              
                
              
              
             
            
          })

      }
      console.log(this.emailList);

    },
    
            
         
            
    
        
    
  },
  created(){
      this.getRandomEmail();
     
    

   

  }
}).mount('#app')
