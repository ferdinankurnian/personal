import { createFileRoute } from '@tanstack/react-router'
import Marquee from "react-fast-marquee";

export const Route = createFileRoute('/')({ component: App, ssr: false })

function App() {

  return (
    <div className="bg-background text-primary/75" style={{ viewTransitionName: 'main-content' }}>
      <section className="h-full py-20 px-6 text-center overflow-hidden">
        <div className="fixed -top-20 -left-5 overflow-hidden">
          <Marquee autoFill>
            <img src="/ferdinaniydheko-bigg.png" className="grayscale filter contrast-0 pointer-events-none select-none" alt="Ferdinan Iydheko Bigg Image" />
          </Marquee>
        </div>
        <div className="fixed -bottom-20 -left-5 overflow-hidden">
          <Marquee autoFill direction='right'>
            <img src="/ferdinaniydheko-bigg.png" className="grayscale filter contrast-0 pointer-events-none select-none" alt="Ferdinan Iydheko Bigg Image" />
          </Marquee>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-5xl md:text-7xl mb-4 font-black [letter-spacing:-0.08em]">
              <span>THIS IS</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                MEE
              </span>
            </h1>
            <div className="hidden md:flex text-[8rem] text-outline letter-spacing-4 transform scale-y-120 font-bebas leading-[1]">
              {'FERDINAN IYDHEKO'.split('').map((char, index) => (
                <span
                  key={index}
                  className="text-primary animate-[pulse_2s_ease-in-out_infinite] transition-all duration-300 animated-char"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
            <div className="flex flex-col md:hidden text-[7rem] text-outline letter-spacing-4 transform scale-y-120 font-bebas leading-[1]">
              <div>
                {'FERDINAN'.split('').map((char, index) => (
                  <span
                    key={index}
                    className="text-primary animate-[pulse_2s_ease-in-out_infinite] transition-all duration-300 animated-char"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div>
                {'IYDHEKO'.split('').map((char, index) => (
                  <span
                    key={index}
                    className="text-primary animate-[pulse_2s_ease-in-out_infinite] transition-all duration-300 animated-char"
                    style={{ animationDelay: `${(index + 9) * 100}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-md md:text-lg text-gray-400">
              a.k.a. Ferdinan Kurnia Nugroho
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
