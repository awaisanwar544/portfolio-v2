import Link from 'next/link'
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const activeClass = 'text-white text-opacity-50 hover:text-white hover:text-opacity-80 hover:scale-110 transition';
  const inactiveClass = 'text-black text-opacity-50 hover:text-white hover:text-opacity-80 hover:scale-110 transition';
  return (
    <div>
      <nav>
        <ul className="bg-yellow-500 flex flex-col justify-center items-center w-100 h-screen text-6xl font-black tracking-widest uppercase -space-y-5 px-20">
        <li className={router.pathname == '/' ? activeClass : inactiveClass}>
            <Link href="/">
              <a>Introduction</a>
            </Link>
          </li>
          <li className={router.pathname == '/skills' ? activeClass : inactiveClass}>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </li>
          <li className={router.pathname == '/experience' ? activeClass : inactiveClass}>
            <Link href="/experience">
              <a>Experience</a>
            </Link>
          </li>
          <li className={router.pathname == '/showcase' ? activeClass : inactiveClass}>
            <Link href="/showcase">
              <a>Showcase</a>
            </Link>
          </li>
          <li className={router.pathname == '/contact' ? activeClass : inactiveClass}>
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
