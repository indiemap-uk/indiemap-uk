import type {Handle} from '@sveltejs/kit'

export const handle: Handle = async () => {
  return new Response(
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Indiemap.uk</title>
    <style>
      body {
        margin: 0;
        min-height: 100dvh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        background: #f5f5f5;
        color: #111;
      }
      p {
        font-size: 1.5rem;
      }
    </style>
  </head>
  <body>
    <p>Indiemap.uk will open later</p>
  </body>
</html>`,
    {
      status: 200,
      headers: {'content-type': 'text/html; charset=utf-8'},
    },
  )
}
