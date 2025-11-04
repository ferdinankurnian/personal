import {
  HeadContent,
  Scripts,
  createRootRoute,
  useRouterState,
  Outlet,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { ThemeProvider } from '@/components/theme-provider'

import Header from '../components/Header'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {

  const { location } = useRouterState()

  const isAdminRoute = location.pathname.startsWith('/ah-ini-admin-yh')

  return (

    <html lang="en">

      <head>

        <HeadContent />

      </head>

      <body>

        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

          {!isAdminRoute && <Header />}

          <Outlet />

        </ThemeProvider>

        {process.env.NODE_ENV !== 'production' ? (

          <TanStackDevtools

            config={{

              position: 'bottom-right',

            }}

            plugins={[

              {

                name: 'Tanstack Router',

                render: <TanStackRouterDevtoolsPanel />,

              },

            ]}

          />

        ) : null}

        <Scripts />

      </body>

    </html>

  )

}
