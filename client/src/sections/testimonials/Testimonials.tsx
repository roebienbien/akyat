import { Client } from './testimony-list';
import Testimony from './Testimony';

export default function Testimonials() {
  return (
    <section className="flex flex-col gap-y-6 px-4 py-20 lg:px-10">
      <h2 className="text-justify text-sm font-semibold lg:text-3xl">See what others have experience hiking with Akyat</h2>
      <div className="flex gap-x-4">
        {Client.map((client, key) => (
          <Testimony key={key} {...client} />
        ))}
      </div>
    </section>
  );
}
