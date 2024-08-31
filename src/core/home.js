import { getRandomColor } from "./util";

const HomeComponent = () => {
    let count = 0;
    let increaseBtn = null;
    let decreaseBtn = null;
    let countElement = null;

    const _render = () => {
        return `
            <div class="home-container">
                <span class='count'>Count ${count}</span>
            </div>
            <div class="actions">
                <button class="increase primary">Increase</button>
                <button class="decrease secondary">Decrease</button>
            </div>
        `
    }

    const updateCount = () => {
        const color = getRandomColor();
        countElement.innerText = `Hello world ${count}`;
        countElement.style.color = color;
    }

    const registerValueChanges = () => {
        console.log("registerValueChanges invoked");
        increaseBtn.addEventListener('click', () => {
            count += 1;
            updateCount();
        })

        decreaseBtn.addEventListener('click', () => {
            count -= 1;
            updateCount();
        })
    }

    const onInit = () => {
        if (!increaseBtn && !decreaseBtn) {
            increaseBtn = document.querySelector('.increase');
            decreaseBtn = document.querySelector('.decrease');
        }

        if (!countElement) {
            countElement = document.querySelector('.count');
        }
    }

    (() => {
        setTimeout(() => {
            onInit();
            registerValueChanges();
        }, 2000)
    })();

    return {
        render: _render,
    }
}

const { render } = HomeComponent();
export {
    render
}