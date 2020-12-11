import React from "react"
import { ToastContainer } from "react-toastify"

import "typeface-fira-sans"
import "tailwindcss/dist/base.min.css"
import "react-toastify/dist/ReactToastify.min.css"

import { ThemeProvider } from "@context"

console.log(
  "%cHELLO FRIEND, WELCOME TO THE CONSOLE",
  `
    background-color: #1e293b;
    color: #e2e8f0;
    font-size: 2rem;
    font-weight: bold;
    padding: 4rem;
  `
)

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
    <ToastContainer
      position="top-center"
      autoClose={2000}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
    />
  </ThemeProvider>
)
