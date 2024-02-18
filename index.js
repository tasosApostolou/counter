// Initial State of the app
const DEFAULT = 0
let counter = DEFAULT


$(document).ready(function() {
    
    const btns =$('.btn')
    let btnDecr = $('#btnDecr')
    const btnReset = $('#btnReset')
    const btnIncr = $('#btnIncr')

    btnDecr.on('click', function(){
        counter-- 
        $('#counter').html(counter)
        styleCounter($('#counter'))  
    })
    
    btnReset.on('click', function(){
        counter = DEFAULT 
        $('#counter').html(counter)
        styleCounter($('#counter'))
    } )
    btnIncr.on('click',function(){
        counter++ 
        $('#counter').html(counter)
        styleCounter($('#counter'))
    })
  
})

function styleCounter(counterDOM) {
 
        counterDOM.toggleClass('green', counter > 0);
   
        counterDOM.toggleClass('red', counter < 0);
  
        counterDOM.toggleClass('black', counter === 0);

}


