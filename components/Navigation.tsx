import Head from 'next/head'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div>
      <nav className="w-1/2 h-screen">
        <ul className="bg-yellow-500 flex flex-col justify-center items-center w-100 h-screen text-6xl font-black tracking-widest uppercase -space-y-5">
        <li className="text-black text-opacity-50 hover:text-white hover:text-opacity-80 hover:scale-110 transition">
            <Link href="/">
              <a>Introduction</a>
            </Link>
          </li>
          <li className="text-black text-opacity-50 hover:text-white hover:text-opacity-80 hover:scale-110 transition">
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </li>
          <li className="text-black text-opacity-50 hover:text-white hover:text-opacity-80 hover:scale-110 transition">
            <Link href="/experience">
              <a>Experience</a>
            </Link>
          </li>
          <li className="text-black text-opacity-50 hover:text-white hover:text-opacity-80 hover:scale-110 transition">
            <Link href="/showcase">
              <a>Showcase</a>
            </Link>
          </li>
          <li className="text-black text-opacity-50 hover:text-white hover:text-opacity-80 hover:scale-110 transition">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
