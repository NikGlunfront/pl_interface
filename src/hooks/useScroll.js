export function useScroll() {

    const scrollTop = () => {
        document.querySelector("#root").scrollTo(0, 0);
    }
    const scrollBottom = () => {
        document.querySelector('#root').scrollTo(0, document.querySelector('#root').scrollHeight);
    }

    return {
        scrollTop,
        scrollBottom
    }
}