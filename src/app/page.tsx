/**
 * The Home component is a functional component in TypeScript React that renders a template page with a
 * heading and paragraph.
 * @returns The `Home` component is being returned, which contains a main element with a heading
 * "Template Page" and a paragraph of Lorem Ipsum text.
 */
export default function Home () {
  return (
    <main className='max-w-screen-md mx-auto h-screen'>
      <h1 className='text-center font-serif font-bold text-3xl py-2'>
        Template Page
      </h1>
      <p className='px-3 pt-2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae sapiente
        architecto inventore tempore fugit doloremque repellat velit neque ipsam
        beatae, ducimus itaque similique minus! Consectetur tenetur voluptatibus
        esse aliquid modi?
      </p>
    </main>
  )
}
