import tw from "twin.macro"
import { createGlobalStyle } from "styled-components"

export const CustomStyles = createGlobalStyle`
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #f1f5f9;
    --bg-tertiary: #f8fAfC;

    --text-primary: #64748b;
    --text-secondary: #0f172a;
    --text-tertiary: #cbd5e1;

    --color-blue-01: #2563eb;
    --color-blue-02: #1d4ed8;
    --color-red-01: #e11d48;
    --color-red-02: #be123c;
  }

  .dark {
    --bg-primary: #1e293b;
    --bg-secondary: #0f172a;
    --bg-tertiary: #334155;

    --text-primary: #94a3b8;
    --text-secondary: #f1f5f9;
    --text-tertiary: #475569;

    --color-blue-01: #3b82f6;
    --color-blue-02: #2563eb;
    --color-red-01: #f43f5e;
    --color-red-02: #e11d48;
  }

  * {
    ${tw`m-0 p-0 box-border outline-none`}
  }

  html,
  body {
    ${tw`h-screen bg-primary text-primary font-sans antialiased`}
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    ${tw`h-full`}
  }

  ::selection {
    ${tw`bg-blue-02 text-white`}
  }

  .Toastify__toast--success {
    ${tw`bg-tertiary text-secondary text-xs sm:text-sm rounded-sm`}

    button[aria-label="close"] {
      ${tw`text-primary opacity-100 focus:outline-none`}
    }

    .Toastify__progress-bar--success {
      ${tw`bg-blue-01`}
    }
  }
`
