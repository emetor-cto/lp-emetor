"use client"

let lastPathBeforeDiagnostico = "/"

export function openDiagnostico() {
  if (typeof window !== "undefined") {
    if (window.location.pathname !== "/diagnostico") {
      try {
        sessionStorage.setItem("emetor_last_path", window.location.pathname)
      } catch (e) {}
      lastPathBeforeDiagnostico = window.location.pathname
      window.history.pushState(null, "", "/diagnostico")
      window.dispatchEvent(new Event("popstate"))
    }
    window.dispatchEvent(new Event("open-diagnostico"))
  }
}

export function closeDiagnostico() {
  if (typeof window !== "undefined") {
    if (window.location.pathname === "/diagnostico") {
      let targetPath = lastPathBeforeDiagnostico || "/"
      try {
        const saved = sessionStorage.getItem("emetor_last_path")
        if (saved && saved !== "/diagnostico") {
          targetPath = saved
        }
      } catch (e) {}
      window.history.pushState(null, "", targetPath)
      window.dispatchEvent(new Event("popstate"))
    }
    window.dispatchEvent(new Event("close-diagnostico"))
  }
}
