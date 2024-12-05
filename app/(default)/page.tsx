export const metadata = {
  title: 'Kaspa DAO',
  description: 'The first decentralized autonomous organization in the Kaspa ecosystem',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Features02 />
      <Faqs />
      <Cta />
    </>
  )
}
