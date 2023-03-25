const characters = document.querySelectorAll('.character')

characters.forEach((character) => {
    
        character.addEventListener('mouseenter', () => {

            const idSelected = character.attributes.id.value

            if (idSelected === 'arlong') return

            const selectedCharacter = document.querySelector('.selected')
            selectedCharacter.classList.remove('selected')

            character.classList.add('selected')

            const imagePlayer1 = document.getElementById('character-player-1')

            imagePlayer1.src = `src/images/${idSelected}.png`

            const characterDataName = character.getAttribute('data-name')

            const namePlayer1 = document.getElementById('player1-name')

            namePlayer1.innerHTML = characterDataName
        })
})