export const eventDownload = label => {
  if (typeof window.ga === "function") {
    window.ga("send", "event", {
      eventCategory: "download",
      eventAction: "click",
      eventLabel: label
    })
  }
}
