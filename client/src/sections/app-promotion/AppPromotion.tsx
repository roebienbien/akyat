import AppleStoreButton from './AppleStoreButton';
import GooglePlayButton from './GooglePlayButton';

export default function AppPromotion() {
  return (
    <section className="h-screen px-2 lg:px-10">
      <div className="grid h-full place-items-center justify-items-start py-10 md:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <h3 className="text-3xl font-bold lg:text-6xl">
            Download our app <br className="hidden md:block" /> to get the most out of it.
          </h3>
          <p className="mt-4 leading-relaxed xl:max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vitae doloremque atque totam dicta debitis illum hic libero. Earum,
            reiciendis.
          </p>
          <div className="flex flex-col justify-center sm:flex-row sm:space-x-4 lg:justify-start">
            <GooglePlayButton link={'https://example.com'} />
            <AppleStoreButton link={'https://example.com'} />
          </div>
        </div>
        <img src="" alt="cellphone-image" />
      </div>
    </section>
  );
}
