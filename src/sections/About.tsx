export default function About() {
  return (
    <div className='grid h-screen place-content-center text-black'>
      <div className='flex items-center'>
        <div className='mr-10 px-10'>
          <p className='max-w-[450px] text-justify text-2xl leading-relaxed tracking-wide'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, iure. Placeat eligendi dolore sint porro nam
            dignissimos quas quis vero Lorem, ipsum dolor Lorem, ipsum..
          </p>
        </div>
        <img
          src='https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlrZXJ8ZW58MHwxfDB8fHwy'
          alt='hiker-portrait'
          className=' h-[700px] w-auto'
        />
      </div>
    </div>
  );
}
//https://images.unsplash.com/photo-1602333158618-dd71de539d3b?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlrZXJ8ZW58MHwxfDB8fHwy
