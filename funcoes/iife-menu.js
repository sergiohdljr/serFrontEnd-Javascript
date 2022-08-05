// function init() {
//   var isValid = false;
//   console.log("init menu",isValid);
// }
// init()

//IIFE

(function(){
    var isValid = false;
    console.log("init menu",isValid);

    function init(){
        console.log("init do menu")
    }
    init()
})()
