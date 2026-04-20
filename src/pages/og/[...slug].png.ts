import { ImageResponse } from '@vercel/og';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const posts = await getCollection('post');
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  const html = {
    type: 'div',
    props: {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#0f172a',
        padding: '80px',
        fontFamily: 'Inter',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '72px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    lineHeight: 1.2,
                    maxWidth: '1000px',
                  },
                  children: post.data.title,
                },
              },
              post.data.excerpt && {
                type: 'div',
                props: {
                  style: {
                    fontSize: '32px',
                    color: '#94a3b8',
                    lineHeight: 1.4,
                    maxWidth: '900px',
                  },
                  children: post.data.excerpt,
                },
              },
            ].filter(Boolean),
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '28px',
                    color: '#64748b',
                  },
                  children: 'austinsonderman.vercel.app',
                },
              },
              post.data.category && {
                type: 'div',
                props: {
                  style: {
                    fontSize: '24px',
                    color: '#60a5fa',
                    backgroundColor: '#1e3a8a',
                    padding: '12px 24px',
                    borderRadius: '8px',
                  },
                  children: post.data.category,
                },
              },
            ].filter(Boolean),
          },
        },
      ],
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
  });
};
