'use client'

import Image from 'next/image'
import {
  ArrowUpRight,
  AtSign,
  Binary,
  Brain,
  Cpu,
  Globe,
  Mail,
  Orbit,
  Sparkles,
} from 'lucide-react'
import { motion } from 'framer-motion'

function SectionSignal({ variant = 'line' }: { variant?: 'line' | 'orbit' | 'pulse' | 'grid' | 'beam' }) {
  if (variant === 'orbit') {
    return (
      <div className="relative h-12 w-12">
        <motion.div
          className="absolute inset-0 rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border border-white/15"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
        />
        <motion.div
          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-white/70"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          style={{ transformOrigin: '50% 24px' }}
        />
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div className="relative flex h-12 w-12 items-center justify-center">
        <motion.div
          className="absolute h-12 w-12 rounded-full border border-white/10"
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.25, 0.7, 0.25] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
        />
        <motion.div
          className="h-2.5 w-2.5 rounded-full bg-white/80"
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
    )
  }

  if (variant === 'grid') {
    return (
      <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:12px_12px]" />
        <motion.div
          className="absolute inset-y-0 w-4 bg-gradient-to-r from-transparent via-white/25 to-transparent"
          animate={{ x: [-16, 48, -16] }}
          transition={{ repeat: Infinity, duration: 3.8, ease: 'linear' }}
        />
      </div>
    )
  }

  if (variant === 'beam') {
    return (
      <div className="relative h-12 w-24 overflow-hidden rounded-full border border-white/10 bg-white/[0.02]">
        <motion.div
          className="absolute inset-y-1 left-0 w-10 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ x: [-28, 88, -28] }}
          transition={{ repeat: Infinity, duration: 3.4, ease: 'linear' }}
        />
      </div>
    )
  }

  return (
    <div className="relative h-12 w-24 overflow-hidden rounded-full border border-white/10 bg-white/[0.02]">
      <motion.div
        className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        animate={{ x: ['-30%', '30%', '-30%'], opacity: [0.35, 0.9, 0.35] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
      />
    </div>
  )
}

function VisionArchitectSurface() {
  return (
    <div className="pointer-events-none relative mx-auto w-full max-w-[260px] xl:max-w-[300px]">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[26px] border border-white/[0.08] bg-zinc-950/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div
          className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:20px_20px]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.06),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(148,163,184,0.05),transparent_45%)]" />
        <div className="absolute inset-6">
          <motion.div
            className="absolute left-[12%] top-[18%] h-px w-[76%] bg-gradient-to-r from-transparent via-white/25 to-transparent"
            animate={{ opacity: [0.2, 0.55, 0.2], scaleX: [0.92, 1, 0.92] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-[12%] top-[42%] h-px w-[76%] bg-gradient-to-r from-transparent via-white/18 to-transparent"
            animate={{ opacity: [0.15, 0.45, 0.15], scaleX: [1, 0.88, 1] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
          <motion.div
            className="absolute left-[12%] top-[66%] h-px w-[76%] bg-gradient-to-r from-transparent via-white/22 to-transparent"
            animate={{ opacity: [0.18, 0.5, 0.18] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09]"
            animate={{ opacity: [0.15, 0.32, 0.15], scale: [1, 1.04, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute left-[22%] top-[28%] h-1 w-1 rounded-full bg-white/45 shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
          <div className="absolute right-[24%] top-[48%] h-1 w-1 rounded-full bg-white/35" />
          <div className="absolute bottom-[26%] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  )
}

export default function HakanDemirciLandingPage() {
  const domains = [
    {
      title: 'Bilinç Mimarlığı',
      text: 'Algıyı, dönüşümü ve yönü belirleyen içsel yapıları inceliyor; insanın iç mimarisi ile dış dünyadaki sistemler arasında köprü kuruyorum.',
      icon: Brain,
    },
    {
      title: 'Yazılım Mühendisliği',
      text: 'Soyut fikirleri çalışan yapılara, arayüzlere ve operasyonel mantığa dönüştürüyorum.',
      icon: Binary,
    },
    {
      title: 'Yapay Zeka',
      text: 'Yeni çağın bilişsel ve medeniyet düzeyindeki en güçlü kuvvetlerinden biri olarak yapay zekayla çalışıyorum.',
      icon: Cpu,
    },
    {
      title: 'Blockchain',
      text: 'Güveni, kimliği ve sahipliği merkezi yapılardan öteye taşıyan altyapılarla ilgileniyorum.',
      icon: Orbit,
    },
    {
      title: 'Kuantum Düşüncesi',
      text: 'Gerçekliği, bilgiyi ve olasılığı klasik çerçevelerin ötesinden okumaya çalışıyorum.',
      icon: Sparkles,
    },
  ]

  const principles = [
    'Gerçeklik süslenmez, olduğu gibi görülür.',
    'Sisteme dönüşmeyen vizyon zamanla dağılır.',
    'Teknoloji yalnızca araç değil, medeniyet katmanıdır.',
    'Bilinci yeniden kurmadan gelecek kurulamaz.',
    'Merkeziyetsizlik yalnızca teknik değil, varoluşsaldır.',
  ]

  const labels = ['Kimlik', 'Bilinç Sistemleri', 'Dijital Egemenlik', 'Yapay Zeka', 'Merkeziyetsizlik']

  const links = [
    { label: 'E-posta', value: 'hakandemircitech@gmail.com', icon: Mail, href: 'mailto:hakandemircitech@gmail.com' },
    { label: 'GitHub', value: 'github.com/hakandemircitech-sketch', icon: Globe, href: 'https://github.com/hakandemircitech-sketch' },
    { label: 'X / Twitter', value: 'x.com/HakanDemir48916', icon: AtSign, href: 'https://x.com/HakanDemir48916' },
  ]

  const marqueeItems = [
    'Hakan Demirci',
    'Bilinç Mimarlığı',
    'Yazılım Mühendisliği',
    'Yapay Zeka',
    'Blockchain',
    'Kuantum Düşüncesi',
    'Dijital Kimlik',
    'ZKID Vault',
  ]

  const marqueeTrack = [...marqueeItems, ...marqueeItems]

  const h2Section =
    'text-balance font-semibold leading-[1.06] tracking-[-0.04em] text-white text-[1.875rem] sm:text-[2.1rem] sm:leading-[1.02] md:text-[2.25rem] md:leading-[1.02] lg:text-[2.5rem] lg:leading-[1.05]'
  const h2SectionWide =
    'max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[34rem] xl:max-w-[38rem]'
  const sectionY = 'mt-16 sm:mt-24 lg:mt-28'
  const proseBody = 'max-w-[40rem] text-base leading-[1.75] text-zinc-300 md:text-lg md:leading-8'

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white/20 selection:text-white">
      <div className="pointer-events-none fixed inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(148,163,184,0.08),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.04),transparent_30%)]" />

      <main className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute left-0 top-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-[32rem] h-96 w-96 rounded-full bg-slate-400/5 blur-3xl" />
        <header className="relative mb-10 overflow-hidden rounded-full border border-white/10 bg-black/30 backdrop-blur-xl sm:mb-12 md:mb-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black via-black/95 to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black via-black/95 to-transparent sm:w-20" />
          <motion.div
            className="flex w-max items-center py-3 sm:py-3.5"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          >
            {marqueeTrack.map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center gap-4 px-4 sm:gap-5 sm:px-5">
                <span className="text-[10px] uppercase tracking-[0.36em] text-zinc-400/75 sm:text-[11px] sm:tracking-[0.4em]">
                  {item}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
              </div>
            ))}
          </motion.div>
        </header>

        <section className="grid min-h-[76vh] items-stretch gap-5 sm:min-h-[82vh] sm:gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center py-3 text-center sm:py-6 lg:text-left">
            <h1 className="mx-auto w-full max-w-none whitespace-nowrap pt-1 text-center text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:max-w-4xl sm:whitespace-normal sm:pt-0 sm:text-6xl sm:leading-[0.94] md:text-7xl lg:mx-0 lg:text-left lg:text-[6rem]">
              Hakan Demirci
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-[0.98rem] leading-7 text-zinc-300 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8 md:text-2xl lg:mx-0">
              Bilinç, teknoloji ve gelecek arasında kendi mimarimi kuruyorum.
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-zinc-500 sm:mt-5 sm:max-w-2xl sm:leading-8 md:text-base lg:mx-0">
              Bilinç mimarlığı, yazılım mühendisliği, yapay zeka, blockchain ve kuantum düşüncesi
              arasında çalışıyor; bunları birbirinden kopuk alanlar olarak değil, tek bir büyük
              yapının farklı katmanları olarak görüyorum.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap lg:items-start lg:justify-start">
              <a
                href="#vision"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.01] hover:bg-zinc-200 sm:justify-start"
              >
                Vizyonu Oku
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#zkid"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                ZKID Vault
                <ArrowUpRight className="h-4 w-4 text-zinc-500" />
              </a>
            </div>

            <div className="mt-9 hidden max-w-xl gap-4 sm:mt-12 sm:max-w-2xl md:grid md:grid-cols-3">
              {[
                ['Sinyal', 'Yüksek'],
                ['Yönelim', 'Uzun Vade'],
                ['Yapı', 'Bilinç Sistemleri'],
              ].map(([label, value]) => (
                <div key={label} className="border-l border-white/10 pl-4">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">{label}</div>
                  <div className="mt-2 text-sm text-zinc-200">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-first min-h-[400px] overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:min-h-[520px] lg:order-none lg:min-h-[680px] lg:rounded-[40px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_18%,rgba(255,255,255,0.14),transparent_22%),radial-gradient(circle_at_82%_78%,rgba(148,163,184,0.12),transparent_22%)]" />
            <div className="absolute inset-y-0 left-0 z-10 w-[18%] bg-gradient-to-r from-black via-black/70 to-transparent" />
            <Image
              src="/portrait.jpg"
              alt="Hakan Demirci portrait"
              fill
              priority
              className="object-cover object-[50%_10%] grayscale sm:object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.22),rgba(0,0,0,0.94))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,transparent,rgba(0,0,0,0.24)_48%,rgba(0,0,0,0.48)_100%)]" />
            <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 xl:block">
              <div className="rotate-180 text-[10px] uppercase tracking-[0.34em] text-zinc-500 [writing-mode:vertical-rl]">
                Bilinç / Sistem / Gelecek
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-7 md:p-8">
              <div className="max-w-md border-t border-white/10 pt-4 sm:pt-5">
                <div className="text-[10px] uppercase tracking-[0.34em] text-zinc-300">Sessiz Sinyal</div>
                <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-300">
                  Kendimi tanıtmak için değil; hangi yöne baktığımı görünür kılmak için kurduğum
                  dijital bir ön cephe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="identity" className={sectionY}>
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-[44rem] lg:text-left xl:max-w-[46rem]">
            <h2 className={`mt-1 sm:mt-2 ${h2Section}`}>Kimim Ben?</h2>
            <div className="mt-6 sm:mt-7 lg:mt-9 lg:border-l lg:border-white/[0.09] lg:pl-10 xl:pl-12">
              <p className={`${proseBody} mx-auto lg:mx-0`}>
                Benim için mesele yalnızca üretmek değil, hangi bilinçten ürettiğimi bilmektir. Çünkü
                insan, kendini tanımadan ve bilincini dönüştürmeden kurduğu her sistemin içinde bir
                eksiklik taşır. Bu yüzden önce bilinci, sonra gerçekliği anlamaya çalışıyorum. Hedefim,
                bugünden geleceği kuran sistemleri inşa edebilmek. Bunun için düşünüyor, çalışıyor ve
                üretiyorum.
              </p>
            </div>
          </div>
        </section>

        <section id="becoming" className={sectionY}>
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-[44rem] lg:text-left xl:max-w-[46rem]">
            <h2 className={`mt-1 sm:mt-2 ${h2Section}`}>Kim Olmak İstiyorum?</h2>
            <div className="mt-6 sm:mt-7 lg:mt-9 lg:border-l lg:border-white/[0.09] lg:pl-10 xl:pl-12">
              <p className={`${proseBody} mx-auto lg:mx-0`}>
                Yalnızca düşünen biri değil, düşündüğünü sisteme dönüştürebilen biri olmak istiyorum. Yalnızca
                teknolojiyle ilgilenen biri değil, bilinci, kimliği ve geleceği aynı mimari içinde okuyabilen biri
                olmak istiyorum. Kurduğum her yapı, olmak istediğim kişinin dış dünyadaki izine dönüşmeli.
              </p>
            </div>
          </div>
        </section>

        <section id="domains" className={sectionY}>
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-[44rem] lg:text-left xl:max-w-[46rem]">
            <h2
              className={`mt-1 max-w-[22rem] mx-auto text-center sm:mt-2 sm:max-w-xl md:max-w-2xl lg:mx-0 lg:max-w-none lg:text-left ${h2Section}`}
            >
              Hangi Disiplinler Üzerinde Çalışıyorum?
            </h2>
            <div className="mt-7 sm:mt-9 lg:mt-9 lg:border-l lg:border-white/[0.09] lg:pl-10 xl:pl-12">
              <div className="mx-auto flex w-full max-w-3xl flex-col lg:mx-0 lg:max-w-none [&>div:first-child]:lg:border-t-0">
                {domains.map((domain, index) => {
                  const Icon = domain.icon
                  return (
                    <motion.div
                      key={domain.title}
                      className="flex gap-5 border-t border-white/10 pt-6 sm:gap-6 sm:pt-7"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.55, delay: index * 0.06 }}
                    >
                      <div className="w-9 shrink-0 pt-0.5 text-left font-medium tabular-nums text-[10px] uppercase tracking-[0.28em] text-zinc-600 sm:w-10">
                        0{index + 1}
                      </div>
                      <div className="min-w-0 flex-1 pb-1">
                        <div className="flex items-center gap-3">
                          <Icon className="h-4.5 w-4.5 shrink-0 text-zinc-300" />
                          <h3 className="text-lg font-medium leading-6 text-white">{domain.title}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-zinc-500 sm:mt-3.5 lg:text-base lg:leading-[1.75] lg:text-zinc-300">
                          {domain.text}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className={sectionY}>
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-14 xl:gap-16">
            <div className="mx-auto min-w-0 max-w-3xl text-center lg:mx-0 lg:max-w-[42rem] lg:text-left xl:max-w-[44rem]">
              <h2 className={`mt-1 sm:mt-2 ${h2Section} ${h2SectionWide} mx-auto lg:mx-0`}>
                Ne inşa etmek istiyorum?
              </h2>
              <div className="mt-6 space-y-5 sm:mt-7 lg:mt-9 lg:space-y-6">
                <p className={`${proseBody} sm:leading-8 lg:mx-0`}>
                  Benim hedefim yalnızca daha gelişmiş teknolojiler üretmek değil; insanın bilinç, kimlik,
                  veri ve dijital varlık ilişkisini yeniden kuran sistemler inşa etmek. Geleceğin yalnızca
                  daha hızlı yazılımlar veya daha güçlü modellerle değil, insanın kendi varlığı üzerinde
                  daha bilinçli bir egemenlik kurabilmesiyle şekilleneceğine inanıyorum.
                </p>
                <p className={`${proseBody} sm:leading-8 lg:mx-0`}>
                  Bu yüzden ilgilendiğim şey sadece teknoloji değil; insan ile sistem, bilinç ile gerçeklik,
                  kimlik ile dijital dünya arasında yeni bir mimari kurabilmek. İnşa etmek istediğim gelecek,
                  bireyin kendi verisini, kimliğini ve zihinsel izlerini daha güvenli, daha bilinçli ve daha
                  bütünlüklü taşıyabildiği bir gelecek.
                </p>
                <p className="mx-auto max-w-[36rem] border-l border-white/15 pl-4 text-base leading-7 text-zinc-100 sm:pl-5 sm:leading-8 md:text-lg md:leading-8 lg:mx-0">
                  Benim için vizyon, araç üretmek değil; insanın dijital çağdaki varlığını yeniden
                  tasarlamaktır.
                </p>
              </div>
            </div>
            <div className="hidden lg:flex lg:justify-end lg:pt-2 xl:sticky xl:top-28">
              <VisionArchitectSurface />
            </div>
          </div>
        </section>

        <section
          id="zkid"
          className={`${sectionY} overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(148,163,184,0.05),rgba(0,0,0,0.32))] p-5 sm:rounded-[36px] sm:p-8 md:p-10 lg:rounded-[40px] lg:p-12`}
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 sm:gap-8 md:max-w-[40rem] lg:max-w-[42rem]">
            <div className="mx-auto w-full text-center sm:max-w-[28rem] md:max-w-none">
              <p className="mb-3 text-[11px] uppercase tracking-[0.34em] text-zinc-500 sm:mb-3.5">
                Bu vizyonun ilk somut formu ne?
              </p>
              <div className="flex items-center justify-center gap-4 text-[11px] tracking-[0.34em] text-zinc-400">
                <SectionSignal variant="orbit" />
                <div className="flex items-center gap-2">
                  <Orbit className="h-4 w-4" />
                  ZKID Vault
                </div>
              </div>
              <div className="mt-4 border-t border-white/[0.08] pt-5 sm:mt-5 sm:pt-6">
                <h2
                  className={`${h2Section} mx-auto max-w-[20rem] text-center sm:max-w-xl md:max-w-2xl`}
                >
                  <span className="block text-white">ZKID Vault,</span>
                  <span className="mt-2 block text-[0.88em] font-normal leading-snug tracking-[-0.03em] text-zinc-300 sm:mt-2.5 sm:text-[0.9em] lg:mt-3 lg:text-[0.82em] lg:leading-[1.38]">
                    kimlik ile dijital egemenlik arasında kurduğum uzun vadeli bir bilinç mimarisidir.
                  </span>
                </h2>
              </div>
            </div>
            <div className="w-full max-w-3xl border-l border-white/10 pl-4 sm:pl-6 md:pl-8">
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Düşünce Yazımı</div>
              <div className="mt-4 space-y-5 text-base leading-[1.75] text-zinc-300 sm:space-y-5 sm:text-[17px] sm:leading-8 md:text-lg md:leading-8">
                <p>
                  Her yaratım, yaratıcısından bir parça ister. Gerçek eserler kimlik ister.
                  Dürüstlük ister. Fedakârlık ister. Bazen yalnızlık ister. Bazen yanlış anlaşılmayı
                  göze almayı ister. Bazen de kendi rahatını yakmayı ister.
                </p>
                <p>Çünkü gerçek yaratım, benim için süs değil; öz aktarımıdır.</p>
                <p>
                  Sanatçının eserine ruh koyması gibi, yaratıcı bilinç de kendi varlığını yaptığı
                  şeyin içine koyar. Bu yüzden bazı insanlar üretir, bazıları ise eser bırakır.
                  Aradaki fark teknik değil, bilinç yoğunluğudur. Birinde çıktı vardır. Diğerinde iz
                  vardır.
                </p>
                <p className="text-white">Yaratıcı bilinç iz bırakır.</p>
                <p>
                  ZKID Vault, blockchain tabanlı dijital kimlik, kişiye özel veri kasası ve bilinç
                  verilerinin saklanacağı yeni nesil bir sistemdir. Bu yapıyı, insanın kendi
                  kimliği, verisi ve dijital varlığı üzerinde daha güçlü, daha bilinçli ve daha
                  bağımsız bir egemenlik kurabilmesi için tasarlıyorum.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-9">
            {labels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] tracking-[0.18em] text-zinc-200"
              >
                {label}
              </span>
            ))}
          </div>
        </section>

        <section id="principles" className={sectionY}>
          <div className="mx-auto mb-6 text-center sm:mb-8 lg:mb-10">
            <h2
              className={`mx-auto mt-1 max-w-[22rem] sm:mt-2 sm:max-w-xl md:max-w-2xl lg:max-w-[48rem] xl:max-w-[52rem] ${h2Section}`}
            >
              Bu yapıyı hangi pusulayla kuruyorum?
            </h2>
            <p className="mx-auto mt-4 max-w-[40rem] text-balance text-base leading-7 text-zinc-400 sm:mt-5 md:text-lg md:leading-8">
              Gerçek bazen serttir ama pusula her zaman onu gösterir.
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-3xl flex-col lg:max-w-[44rem] xl:max-w-[46rem]">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                className="flex gap-5 border-t border-white/10 pt-6 sm:gap-6 sm:pt-7"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <div className="w-9 shrink-0 pt-0.5 text-left font-medium tabular-nums text-[10px] uppercase tracking-[0.28em] text-zinc-600 sm:w-10">
                  0{index + 1}
                </div>
                <div className="min-w-0 flex-1 pb-1">
                  <p className="text-base leading-[1.75] text-zinc-200">{principle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={`${sectionY} border-t border-white/10 pt-10 pb-16 sm:pt-12 sm:pb-20`}>
          <div className="grid gap-10 sm:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-14">
            <div className="mx-auto text-center lg:mx-0 lg:max-w-[44rem] lg:text-left">
              <div className="flex items-center justify-center gap-4 text-[11px] tracking-[0.34em] text-zinc-500 lg:justify-start">
                <SectionSignal variant="pulse" />
                <span>İz</span>
              </div>
              <h2 className={`mt-3 sm:mt-4 ${h2Section} ${h2SectionWide} mx-auto lg:mx-0`}>
                Bazı yapılar anlaşılmadan önce hissedilir.
              </h2>
              <div className="mx-auto mt-5 max-w-[40rem] space-y-5 text-base leading-[1.75] text-zinc-300 sm:mt-6 sm:space-y-6 md:text-lg md:leading-8 lg:mx-0">
                <p>
                  Bu sayfa bir tanıtım metni değil; hikâyemin ve bilincimin dış dünyada görünür hâle gelen ilk
                  izlerinden biri.
                </p>
                <p>
                  Bazı gelecekler, dünyada belirmeden önce bilinçte kurulur. Benim için mesele görünmek değil;
                  doğru yapıyı, doğru kimlikle ve doğru bilinçten kurabilmek.
                </p>
                <p>
                  Burada görünen şey yalnızca bir başlangıç değil. Aynı zamanda içimde uzun süredir şekillenen
                  yapının, dış dünyadaki ilk somut izi.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-7 self-end sm:gap-8 lg:justify-end lg:pt-16">
              {links.map((item) => {
                const Icon = item.icon
                const isMail = item.href.startsWith('mailto:')
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    {...(isMail ? {} : { target: '_blank', rel: 'noreferrer' })}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors duration-300 hover:border-white/18 hover:text-zinc-200"
                  >
                    <Icon className="h-[17px] w-[17px]" strokeWidth={1.25} />
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
