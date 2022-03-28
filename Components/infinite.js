AFRAME.registerComponent('infinite', {
 
    init: function () {
        setInterval(this.createTracks, 1500)
        // this.createTracks()
    },



    createTracks: function () {
        var scene = document.querySelector("#scene")
        var mTrack = document.createElement('a-entity');
        mTrack.setAttribute('id', "mTrack")
        mTrack.setAttribute('position', {x:0, y:1, z: -150})
        mTrack.setAttribute('gltf-model', "#obst6")
        mTrack.setAttribute('animation','property: position; to: 0 0 100;easing:linear; loop: true; dur: 8600')
        mTrack.setAttribute('scale', {x:0.3,y:0.3,z:0.3})
        mTrack.setAttribute('physics',"static-body")
        mTrack.addEventListener("collide", this.removeTracks);

        scene.appendChild(mTrack)

        var lTrack = document.createElement('a-entity');
        lTrack.setAttribute('id', "lTrack")
        lTrack.setAttribute('position', {x:-13, y:1, z: -150})
        lTrack.setAttribute('gltf-model', "#obst6")
        lTrack.setAttribute('animation','property: position; to: -13 0 100;easing:linear; loop: true; dur: 8600')
        lTrack.setAttribute('scale', {x:0.3,y:0.3,z:0.3})
        lTrack.setAttribute('physics',"static-body")
        lTrack.addEventListener("collide", this.removeTracks);
        

        scene.appendChild(lTrack)

        var rTrack = document.createElement('a-entity');
        rTrack.setAttribute('id', "rTrack")
        rTrack.setAttribute('position', {x:13, y:1, z: -150})
        rTrack.setAttribute('gltf-model', "#obst6")
        rTrack.setAttribute('animation','property: position; to: 13 0 100;easing:linear; loop: true; dur: 8600')
        rTrack.setAttribute('scale', {x:0.3,y:0.3,z:0.3})
        rTrack.setAttribute('physics','dynamic-body;mass:0')
        rTrack.addEventListener("collide", this.removeTracks);
        

        scene.appendChild(rTrack)

        //adding hands
        //var hand = document.querySelector(#hand)
    },

    removeTracks: function(e){
        var element = e.detail.target.el
        var elementHit = e.detail.body.el
        if(elementHit.id.includes("Box")){
          console.log("rail deleted")
          // elementHit.setAttribute("materiel",{
          //   opacity:0.6,
          //   transparent: true
          // })
          element.removeEventListener("collide", this.removeTrack);
          var scene = document.querySelector("#scene");
          scene.removeChild(element)
        }
      },
      
});
