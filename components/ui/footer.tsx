import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '@/public/images/logo-image.png'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 md:py-12 border-t border-slate-800">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <Link className="inline-flex" href="/" aria-label="Cruip">
                <Image 
                  src="/images/logo-image.png" 
                  width={160} 
                  height={160} 
                  alt="Logo" 
                />
              </Link>
            </div>
          </div>
          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">Governance Links</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="https://gov.kaspadao.org/proposals">
                  Proposals
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="https://gov.kaspadao.org/elections">
                  Elections
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="https://gov.kaspadao.org/treasury">
                  Treasury
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">DAO Resources</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="#0">
                  Proposal Guide
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="#0">
                  Elections Guide
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="#0">
                  Kaspa DAO Bylaws
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">Funded Projects</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="#0">
                  Recent Project 1
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="#0">
                  Recent Project 2
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="#0">
                  Recent Project 3
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">Official Links</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="https://x.com/KaspaDAO">
                  Follow on X
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="https://discord.gg/mBqQDxBcJY">
                  Join Discord
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="https://t.me/KASPADAO_KASPA">
                  Join Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
          {/* Left-aligned text */}
          <div className="text-sm text-slate-600">
            <span className="text-slate-500">© 2024 Kaspa DAO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
