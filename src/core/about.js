export const AboutComponent = () => {
    console.log("About component run...")
    const _render = () => {
        return `
            <div class="about-container">
                <span>Hello everyone, I'm TMP.</span>
                <span>I have been working as a Software Engineer at VNG for 4 years. This is my first program focused on learning build tools, especially Webpack</span>
            </div>
         
            <h1 class='girl-friend-title'>:)))</h1>
            <div class="girl-friend">
            </div>
        `
    }
    return {
        render: _render,
    }
}

const { render } = AboutComponent();
export {
    render,
}