// app.innerHTML = 'ensei'
const months = ['Jan','Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

function render() {
    let output = ''
    const thisMonth = months[new Date().getMonth()]
    //output = output+'ensei'
    for(let month of months){
        //output=output+'<div>'+month+'</div'
        const active = thisMonth == month ? 'active' : ''
        output+=`<div class="${active}">${month}</div>`
    }
    return output
}
app.querySelector('main').innerHTML=render()

app.querySelector('header span').innerHTML = new Date().getFullYear()
