export function fireEventToDocument(event: Event) {
    setTimeout( () => {
        window.document.body.dispatchEvent(event)
    })
}