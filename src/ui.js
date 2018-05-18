//@ts-check
export const render = (id, content) => (document.getElementById(id).innerHTML = `${content}`);

export const append = (id, content) => (document.getElementById(id).innerHTML += `${content}`);

export const clearAll = () => {
  window.scrollTo(0, 0);
  [...document.getElementById("app").children].forEach(e => render(e.id, ""));
};

export const getElement = id => document.getElementById(id);

export const attachEvent = (element, event, callBack) => element.addEventListener(event, callBack);

export const detachEvent = (element, event) => element.removeEventListener(event);
