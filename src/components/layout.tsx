import type { PropsWithChildren } from 'react'
import { Header } from "@/components/Header/header";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main>
      <Header/>
      <div>
        {props.children}
      </div>
    </main>
  )
}
