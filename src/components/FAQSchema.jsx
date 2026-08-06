import { useEffect } from 'react'

export default function FAQSchema({ categories }) {
  useEffect(() => {
    const mainEntity = categories.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    )

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-schema'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity,
    })

    document.head.querySelector('#faq-schema')?.remove()
    document.head.appendChild(script)

    return () => {
      document.head.querySelector('#faq-schema')?.remove()
    }
  }, [categories])

  return null
}
