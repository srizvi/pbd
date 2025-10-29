// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';

const people = [
  {
    name: 'Rehan Shaikh',
    role: 'CEO',
    imageSrc: '/rehan.jpg',
    bio: 'Rehan served five years as Senior Executive VP and Executive Committee member at HBL. As CEO of HBL Asset Management, he built the firm from inception. His 20-year mutual fund career includes a decade at State Street Corporation in Boston, managing institutional operations and overseeing $111 billion in asset migrations. Rehan also chaired the Mutual Fund Association of Pakistan.',
  },
  {
    name: 'Sam Shah',
    role: 'Principal Consultant',
    imageSrc: '/sam.jpg',
    bio: "Sam served thirteen years as Senior Partner at a top management consulting firm. Then he directed eBusiness at the Far East's largest energy conglomerate. From 2008 to 2016, he led worldwide operations expansion for a major social media platform as lead consultant. He holds degrees from UCLA, Stanford, and Tsinghua.",
  },
];

export function Team() {
  return (
    <div className="rounded-3xl bg-secondary py-16 ring-1 ring-foreground/10 md:py-32">
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
              {/* <Image
                alt=""
                width={400}
                height={400}
                src={person.imageSrc}
                className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
              /> */}
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
