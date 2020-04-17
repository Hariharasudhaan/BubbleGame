var $body = $('body');
var score = 0;
    $(document).ready(function(){ 
    });
    function begin(){
       var butdiv=document.getElementById('b2')
       butdiv.style.display="none";
       var tim = prompt("Time Limit (in Seconds)", "60");
        function start(counter){
            if(counter < (tim*2)){
              setTimeout(function(){
                counter++;
                console.log(counter);
                start(counter);
                bubblegen();
              }, 600);
            }
          }
          start(0);
          setTimeout(function(){
            var modal = document.getElementById("myModal");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            var div=document.getElementById('p1')
            div.innerHTML+=score;
            modal.style.display = "block";
            
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
              modal.style.display = "none";
              location.replace("D:/Bubble Game/index.html");
            }
          }, (tim*1000));
    }
      

  function bubblegen()
  {
    var $bubble;
    $bubble=$('<div>');
    $bubble.addClass('bubble');
     var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        } 
    $bubble.css({
        'top': Math.random() * (document.documentElement.clientHeight - 100),
        'left': Math.random() * (document.documentElement.clientWidth - 100),
        'background-color':color
    });
    $body.append($bubble); 
    console.log($bubble)
  }
$body.on('click','.bubble',function(){
    score += 10;
    console.log(score);
    $(this).addClass('is-popping');
});
$body.on('transformend','.bubble',function(){
    $(this).remove();
})



