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
                <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="0%" y1="32.443%" x2="104.18%" y2="50%" id="flogo-a">
                      <stop stopColor="#FFF" stopOpacity=".299" offset="0%" />
                      <stop stopColor="#7587E4" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="18.591%" y1="0%" x2="100%" y2="100%" id="flogo-b">
                      <stop stopColor="#818CF8" offset="0%" />
                      <stop stopColor="#C7D2FE" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z" />
                    <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z" />
                    <path fillOpacity=".64" fill="url(#flogo-a)" d="M16 13 0 23l16 9 16-9z" />
                    <path fill="url(#flogo-b)" d="M16 0 0 9.25l16 9.25 15.999-9.25z" />
                  </g>
                </svg>
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
          {/* Links */}
          <div className="text-sm text-slate-600">
            <a className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out" href="https://x.com/argonmining">Built with  ❤️ by Ashton</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
