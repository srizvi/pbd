import { Icons } from '@pbn/ui/icons';

export function Intro() {
  return (
    <div id="intro" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-muted-foreground">
        <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Convert AI spends into board-ready returns within 18 months
        </h2>
        <p className="mt-6 text-xl/8 text-muted-foreground">
          You approved AI budgets. Hired consultants. Launched pilots. Your board still asks when
          they will see returns. The State Bank of Pakistan demands governance frameworks you
          continue to work on. Emerging competitors report AI wins while your initiatives stall in
          proof-of-concept. The gap between spending and results widens each quarter.
        </p>

        <div className="mt-10 max-w-2xl">
          <p>
            Most banks fail at AI because they treat it as a technology problem. It is an execution
            problem. Our principals have led banking transformations at global scale. We&apos;ve
            driven technology enablement at organizations serving billions of users worldwide. We
            know what boards demand and we know how to deliver it.
          </p>
          <p className="mt-8">
            The difference between banks that generate measurable AI returns and banks that waste
            millions comes down to systematic capability building. Each stage must deliver
            documented ROI. Each investment must prove itself before the next. Each outcome must be
            something you can report to your board with specific numbers.
          </p>

          <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-foreground">
            Four clear stages with compounding returns
          </h2>

          <ul role="list" className="mt-8 max-w-2xl space-y-8">
            <li className="flex gap-x-3">
              <Icons.Check aria-hidden="true" className="mt-1 size-5 flex-none text-alternate" />
              <span>
                <strong className="font-semibold text-foreground">
                  Awareness delivers immediate productivity.
                </strong>{' '}
                Enterprise AI literacy lifts global performance from day one. Your talented people
                work 50 percent faster. Your underperformers become more visible. You prove AI
                generates value before investing millions in infrastructure. Minimal investment,
                immediate and measurable returns.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Icons.Check aria-hidden="true" className="mt-1 size-5 flex-none text-alternate" />
              <span>
                <strong className="font-semibold text-foreground">
                  Readiness prevents wasted investment.
                </strong>{' '}
                Audit your data, governance, processes, systems, and culture before spending
                heavily. Identify quick wins that deliver three to five times ROI within months.
                Build compliance frameworks for the enterprise that satisfy regulators. Stop
                throwing money at pilots that never scale.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Icons.Check aria-hidden="true" className="mt-1 size-5 flex-none text-alternate" />
              <span>
                <strong className="font-semibold text-foreground">
                  Enablement cuts costs and defends share.
                </strong>{' '}
                Deploy frontier AI models that enable customer service, reduce fraud losses, and
                accelerate credit decisions. Each system generates documented savings. Each
                implementation funds the next. Your board sees financial statement line items, not
                promises.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Icons.Check aria-hidden="true" className="mt-1 size-5 flex-none text-alternate" />
              <span>
                <strong className="font-semibold text-foreground">
                  Transformation creates competitive distance.
                </strong>{' '}
                Rewire operations with AI that deliver billions in economic value over just a few
                years. Build advantages competitors cannot replicate. Prepare for the next wave of
                AI innovation so your bank leads the market instead of following it.
              </span>
            </li>
          </ul>

          <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-foreground">
            Concrete, capitalized returns
          </h2>
          <p className="mt-6">
            Most consultants sell you studies. We deliver returns. Every investment must generate
            three to ten time returns within 18 months or we have failed. We stay through
            implementation because reports do not create value. Working systems do.
          </p>
          <p className="mt-6">
            We measure results rigorously. We track specific cost reductions, productivity gains,
            and revenue improvements. We build capability inside your institution so the returns
            compound after we leave. We make certain you can walk into your next board meeting with
            numbers that prove AI works.
          </p>
          <p className="mt-6">
            The banks moving now will report measurable AI returns within 18 months. Those that wait
            will explain to their boards why they fell behind. The window closes each quarter your
            competitors move faster.
          </p>
        </div>
      </div>
    </div>
  );
}
