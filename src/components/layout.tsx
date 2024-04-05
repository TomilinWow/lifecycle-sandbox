import type { PropsWithChildren } from 'react'
import Link from 'next/link'
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
