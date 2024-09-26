export default function Articles() {
  const Articles = [
    {
      title: 'This is Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, neque.',
    },
    {
      title: 'This is Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, neque.',
    },
  ];

  return (
    <section className='mt-40 grid grid-cols-1 place-content-center gap-y-10 bg-zinc-200 px-4 xs:px-8 md:h-[100dvh] lg:grid-cols-3 lg:gap-x-10'>
      <article className='lg:col-span-2'>
        <div className='h-80 w-auto bg-blue-400 lg:h-[550px]'></div>
        <div className='p-4'>
          <span className='text-4xl font-bold'>This is Title</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Minima, odit? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Temporibus, est.
          </p>
        </div>
      </article>
      <article className='grid gap-y-8'>
        {Articles.map((article, key) => (
          <div key={key}>
            <div className='h-48 w-auto bg-amber-400'></div>
            <div className='p-2'>
              <span className='text-lg font-semibold'>{article.title}</span>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
