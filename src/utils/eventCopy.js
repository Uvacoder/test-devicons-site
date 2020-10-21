export default function eventCopy(label) {
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', {
      eventCategory: 'copy',
      eventAction: 'click',
      eventLabel: label
    })
  }
}