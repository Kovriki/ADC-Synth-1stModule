  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('prototype_3')
    const textBlock = document.createElement('div')
    const flower = document.createElement('div')
    const fl1 = document.createElement('div')


    // textBlock.innerText = 'Creative Studio OFFICE'

    textBlock.classList.add('bg')
    textBlock.classList.add('blur')

    flower.innerText = 'Creative Studio OFFICE'
    // flower.classList.add('fl1')

    fl1.classList.add('fl1')


    container.appendChild(textBlock)
    textBlock.appendChild(flower)
    flower.appendChild(fl1)

  })
