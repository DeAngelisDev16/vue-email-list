const { createApp } = Vue

createApp({
  data() {
    return {
        randomEmail:null,
        emailList:[],
        
      
    }
  },
  methods:{
    getRandomEmail(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then( (response) => {
              console.log(response.data.response);
              this.randomEmail = response.data.response;
             
            
          })

    },
    addElementsToArray(){
        while(this.emailList.length < 9){
            this.getRandomEmail();
            this.emailList.push(this.randomEmail);
        }
        console.log(this.randomEmail);
            
            
         
            
    }
    
        
    
  },
  created(){
    this.getRandomEmail();
    this.addElementsToArray();

   

  }
}).mount('#app')
