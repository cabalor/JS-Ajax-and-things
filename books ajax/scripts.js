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

$.ajax({
        'url': 'http://localhost:8282/books'
    }).done(function (data){
        console.log(data);
    
        for(var i =0; i<data.length; i++){
        div.append("<h1 data-id='"+data[i].id+"'>"+ 
                   data[i].title+data[i].author+" "+data[i].publisher+"</h1>"+
                   "<a data-id='"+data[i].id+"' class='del'>delete</a><div>tyryryry</div>");
        }
        $('div').hide();
        
        //.one dany event wykona sie tylko raz, .on bedzie wykonywal sie za kazdym kliknieciem
        
        $('h1').one('click', function(event){
            var h1 = $(event.target);
            var id = h1.data('id');
                                           // $(event.target).next().fadeIn();
        $.get('http://localhost:8282/books/'+id).done( function (data){
            var div = h1.next();
            div.append("<p>"+data.author+"</p>");
            div.append("<p>"+data.publisher+"</p>");
            div.fadeIn();
            
        })    

        })
        
        var d = document.querySelector("a");
        console.log(d);
       $("a.del").on('click', function(event){
       var id = $(event.target).data('id');
        $.ajax({
            'url': 'http://localhost:8282/books/remove/'+id,
            'type': "DELETE"
        }).done(function(){
            location.reload();
        })
    })

    })
});
/*JSON.stringify(data[i]) zmienia jsona na dane*/  