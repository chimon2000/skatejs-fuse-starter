import './polyfills'
import {App} from './app'

const mount = document.getElementById('app')

const render = (what: Function, where: HTMLElement | null) => {
    if(where) {
        where.innerHTML =  `<${App.is}></${App.is}>`
    }
}

render(App, mount)
