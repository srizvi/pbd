import { Icons } from '@pbn/ui/icons';

export default function Intro() {
  return (
    <div id="intro" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-muted-foreground">
        <p className="text-base/7 font-semibold text-alternate">For Bank Boards & CEOs</p>
        <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Pakistan&apos;s Banking Leaders Face the AI Test
        </h2>
        <p className="mt-6 text-xl/8">
          AI will decide which banks lead and which follow. Executive AI Stewardship helps boards
          turn regulation, compliance, and transformation pressure into measurable ROI before the
          window closes.
        </p>

        <div className="mt-10 max-w-2xl text-gray-600 dark:text-gray-400">
          <p>
            AI will decide which banks lead and which follow. Executive AI Stewardship helps boards
            turn regulation, compliance, and transformation pressure into measurable ROI before the
            window closes.
          </p>

          <ul role="list" className="mt-8 max-w-2xl space-y-8 text-gray-600 dark:text-gray-400">
            <li className="flex gap-x-3">
              <Icons.Check
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
              />
              <span>
                <strong className="font-semibold text-gray-900 dark:text-white">Awareness.</strong>{' '}
                Board-level alignment on AI’s role in regulation, profitability, and risk control.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Icons.Check
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
              />
              <span>
                <strong className="font-semibold text-gray-900 dark:text-white">Readiness.</strong>{' '}
                Assess data, culture, and leadership capacity for AI adoption.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Icons.Check
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
              />
              <span>
                <strong className="font-semibold text-gray-900 dark:text-white">Enablement.</strong>{' '}
                Build execution muscle—teams, processes, and governance that deliver at scale.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Icons.Check
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
              />
              <span>
                <strong className="font-semibold text-gray-900 dark:text-white">
                  Transformation.
                </strong>{' '}
                Embed AI into the bank’s operating system for lasting performance advantage.
              </span>
            </li>
          </ul>

          <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            The 30-Second Pitch
          </h2>
          <p className="mt-6">
            Pakistani banks have capital, vision, and urgency—but lack institutional execution. AI
            Stewardship gives boards a structured path to lead responsibly, comply early, and
            outperform peers on ROI before regulation and competition close the window.
          </p>
        </div>
      </div>
    </div>
  );
}
