export function noevent(evt: Event) {
  evt.preventDefault();
  evt.stopImmediatePropagation();
}
