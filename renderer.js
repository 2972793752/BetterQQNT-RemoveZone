export function onLoad() {

  const element = document.querySelector("#app > div.container > aside > div.sidebar__upper > div.nav.sidebar__nav > div:nth-child(4)");
  if (element) {
    element.parentNode.removeChild(element);
  }

}
