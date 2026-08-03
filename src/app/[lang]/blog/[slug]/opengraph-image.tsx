import { ImageResponse } from 'next/og'
import { posts } from '@/lib/posts'

export const dynamic = "force-static"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const SUPPORTED = ["en", "sw"]

export function generateStaticParams() {
  return SUPPORTED.flatMap((lang) =>
    posts.map((p) => ({ lang, slug: p.slug }))
  )
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const post = posts.find((p) => p.slug === slug)
  const postLang =
    post?.lang?.[lang] ??
    post?.lang?.['en'] ??
    post?.lang?.['sw'] ??
    Object.values(post?.lang ?? {})[0]
  const title = postLang?.title ?? 'CO2.ke — Insights'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1a3a2a 0%, #0d2218 100%)',
          padding: '72px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 13,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#52b788',
            fontWeight: 700,
            marginBottom: 'auto',
          }}
        >
          CO2.ke — Insights
        </div>
        <div
          style={{
            fontSize: title.length > 65 ? 40 : title.length > 45 ? 48 : 56,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.25,
            marginBottom: 28,
            flex: 1,
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)' }}>
          co2.ke · Kenya Carbon Market Intelligence
        </div>
      </div>
    ),
    size,
  )
}
