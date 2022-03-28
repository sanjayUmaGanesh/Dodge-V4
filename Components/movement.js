AFRAME.registerComponent('movement', {
    schema: {
        
    },

    init: function () {
      this.movePlayer()
      
    },

    movePlayer: function (){
        var playerPosition = 0;
        window.addEventListener('keydown',function(e){
            var player = document.querySelector("#player-camera")
            if(e.code == "ArrowRight" && playerPosition < 13){
                playerPosition += 12
                player.setAttribute("position", {x:playerPosition, y: 4 , z: 0})
                console.log(playerPosition)
            }
            if(e.code == "ArrowLeft" && playerPosition > -13){
                playerPosition -= 12
                player.setAttribute("position", {x:playerPosition, y: 4 , z: 0})
                console.log(playerPosition)
            }
            
        })
    }
    
});
