const { createApp } = Vue

createApp({
  data() {
    return {
      
    }
  },
  methods:{
    getRandomMail(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(function (response) {
              console.log(response.data.response);
            
          })

    },
    
        
    
  },
  created(){
    this.getRandomMail();
   

  }
}).mount('#app')
