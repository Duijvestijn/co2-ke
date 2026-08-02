'use client'

import { useState } from 'react'

interface Props {
  lang: string
  siteKey: string
  workerUrl: string
  accentColor: string
  btnColor: string
}

const labels: Record<string, Record<string, string>> = {
  en: {
    heading: 'Stay informed',
    placeholder: 'Your email address',
    button: 'Subscribe',
    success: "Thank you — you're subscribed.",
    error: 'Something went wrong. Please try again.',
  },
  sw: {
    heading: 'Baki ukifahamishwa',
    placeholder: 'Anwani yako ya barua pepe',
    button: 'Jiandikisha',
    success: 'Asante — umejisajili.',
    error: 'Hitilafu imetokea. Tafadhali jaribu tena.',
  },
  fr: {
    heading: 'Restez informé',
    placeholder: 'Votre adresse e-mail',
    button: "S'abonner",
    success: 'Merci — vous êtes abonné.',
    error: 'Une erreur est survenue. Veuillez réessayer.',
  },
  ar: {
    heading: 'ابقَ على اطلاع',
    placeholder: 'عنوان بريدك الإلكتروني',
    button: 'اشترك',
    success: 'شكراً — لقد اشتركت بنجاح.',
    error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
  },
  ru: {
    heading: 'Будьте в курсе',
    placeholder: 'Ваш адрес электронной почты',
    button: 'Подписаться',
    success: 'Спасибо — вы подписались.',
    error: 'Что-то пошло не так. Попробуйте ещё раз.',
  },
  kk: {
    heading: 'Хабардар болыңыз',
    placeholder: 'Электрондық пошта мекенжайыңыз',
    button: 'Жазылу',
    success: 'Рахмет — сіз жазылдыңыз.',
    error: 'Қате орын алды. Қайталап көріңіз.',
  },
}

export default function NewsletterSubscribe({ lang, siteKey, workerUrl, accentColor, btnColor }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const t = labels[lang] ?? labels['en']

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch(`${workerUrl}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, site: siteKey }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p style={{ color: accentColor, fontSize: '0.875rem', margin: 0 }}>
        {t.success}
      </p>
    )
  }

  return (
    <div>
      <p className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
        {t.heading}
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.placeholder}
          className="flex-1 min-w-0 px-3 py-2 rounded text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-white/40"
          style={{ minWidth: '200px' }}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 rounded text-sm font-semibold text-white"
          style={{ background: btnColor, opacity: status === 'loading' ? 0.6 : 1 }}
        >
          {status === 'loading' ? '…' : t.button}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-1">{t.error}</p>
      )}
    </div>
  )
}
