document.addEventListener('DOMContentLoaded', function(){
    
    var div = $('body');
    var inputs = $('input')
    
    $('form').on('submit', function(event){
        event.preventDefault();
        
       $.ajax({
           headers: {
               'Accept':'application/json',
               'Content-Type':'application/json'
               
           },
           'url': 'http://localhost:8282/books/add',
           'type':'POST',
           'data': JSON.stringify({
                    'author': event.target.author.value,
                    'publisher': event.target.publisher.value,
                    'title': event.target.title.value
                    })
                }).done(function(data){
               console.log(data);
               location.reload();
           })

    })






});
