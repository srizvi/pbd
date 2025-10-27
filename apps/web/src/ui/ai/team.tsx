import Image from 'next/image';

const people = [
  {
    name: 'Rehan Shaikh',
    role: 'CEO',
    imageSrc: '/rehan.jpg',
    bio: 'Rehan led HBL Asset Management as CEO, building the institution from inception with 19 years of experience in mutual funds. Before that, he spent a decade at State Street Corporation in Boston, managing operations for institutional clients and overseeing the migration of over $111 billion in assets. He served as Chairman of the Mutual Fund Association of Pakistan.',
  },
  {
    name: 'Sam Shah',
    role: 'Principal Consultant',
    imageSrc: '/sam.jpg',
    bio: 'Sam spent 13 years at a top management consulting firm as a Senior Partner. Then he lead eBusiness at the largest energy conglomerate in the Far East. In 2008, Sam joined the fastest growing social network, where he led the expansion of worldwide operations for 8 years as lead consultant. He has degrees from UCLA, Stanford and Tsinghua.',
  },
];

export function Team() {
  return (
    <div className="rounded-3xl bg-secondary ring-1 ring-foreground/10 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Your trusted advisors
          </h2>
          <p className="mt-6 text-lg/8 text-muted-foreground">
            We have guided leaders through transformations at institutions operating across
            continents and serving billions. CEOs trust us because we have sat in their chair, built
            what they need to build, and delivered the returns they must report.
          </p>
        </div>
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-800 xl:col-span-3">
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row"
            >
              <Image
                alt=""
                width={400}
                height={400}
                src={person.imageSrc}
                className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight text-foreground">
                  {person.name}
                </h3>
                <p className="text-base/7 text-muted-foreground">{person.role}</p>
                <p className="mt-6 text-base/7 text-muted-foreground">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
