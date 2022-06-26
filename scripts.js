let background = document.querySelector('html')




background.addEventListener('animationend', () => {
    background.style.backgroundColor = '#89fc00';
    background.style.animation = ''
})




const addSong = () => {


    let newAudio = document.createElement('audio')
    let newSource = document.createElement('source')
     newSource.src = './assets/td4w.mp3'
     newSource.type = 'audio/mpeg'

     newAudio.play()
     newAudio.appendChild(newSource)
     body.appendChild(newAudio)
}

const playSong = () => {

    background.style.animation = 'td4w 3.5s'
    let body = document.querySelector('div')
    let audio = document.querySelector('audio')
    let source = document.querySelector('source')
   

    if(audio !== null && audio !== undefined) {
        body.removeChild(audio)
        addSong(audio)
    } else {
      addSong(audio)
    }



}

background.addEventListener('click', () => {

    console.log(background.style.animation )
    playSong()
})
