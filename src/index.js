import './styles/main.scss';
(async () => {
    console.log("Run main...")
    const homeComponent = await import('./core/home');
    const aboutComponent = await import('./core/about');
    const rootElement = document.querySelector('#root');
    const homeElement = document.createElement('div');
    const aboutElement = document.createElement('div');

    homeElement.innerHTML = homeComponent.render();
    aboutElement.innerHTML = aboutComponent.render();
    
    rootElement.appendChild(homeElement);
    rootElement.appendChild(aboutElement);
})()