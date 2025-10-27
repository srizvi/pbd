const people = [
  {
    name: 'Rehan Shaikh',
    role: 'CEO',
    imageSrc: '/rehan.jpg',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Sam Shah',
    role: 'Principal Consultant',
    imageSrc: 'sam.jpg',
    bio: 'Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum accumsan. Purus viverra facilisi suspendisse quis est.',
  },
];

export default function Team() {
  return (
    <div className="bg-white py-24 dark:bg-gray-900 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            About the team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated
            to delivering the best results for our clients.
          </p>
        </div>
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-800 xl:col-span-3">
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row"
            >
              <img
                alt=""
                src={person.imageSrc}
                className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900 dark:text-white">
                  {person.name}
                </h3>
                <p className="text-base/7 text-gray-600 dark:text-gray-400">{person.role}</p>
                <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
