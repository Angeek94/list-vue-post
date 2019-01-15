var vue = new Vue({
    el: '#app',
    data: {
     name:"",
     description:"",
     completed:"",
    assignedTo:""
    },
    methods: {
       post:function(){
           
        this.$http.post('http://localhost:3001/post',{
            name:this.name,
            description:this.description,
            completed:this.completed,
            assignedTo:this.assignedTo
        })
        .then(response => { console.log(response)})
        .catch(error => { console.log("post error") })
        
       },
       viewResponse:function(name){
           name=Response.name;

       }
      
    },
    created: function() {
        
    }
})