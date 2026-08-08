import { ArrowRight, BookOpenText } from 'lucide-react'

const EducationCard = ({ topic, onOpen }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-pink-100 bg-white/90 shadow-[0_18px_55px_-34px_rgba(233,30,99,0.24)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_70px_-30px_rgba(233,30,99,0.3)]">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF8FA] via-white to-[#FDE7F3] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,30,99,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(156,39,176,0.12),transparent_38%)]" />
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-white/85 text-[#E91E63] shadow-sm backdrop-blur">
            <BookOpenText size={24} />
          </div>
          <div className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-[#E91E63] shadow-sm backdrop-blur">
            Guided lesson
          </div>
        </div>
        <div className="relative mt-6 rounded-[1.4rem] border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF8FA] text-[#E91E63]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E91E63]" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-28 rounded-full bg-[#F7C7D9]" />
              <div className="h-2.5 w-40 rounded-full bg-[#FEEAF2]" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap gap-2 px-5">
          <span className="rounded-full bg-[#FFF8FA] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#E91E63]">
            Education
          </span>
          <span className="rounded-full border border-pink-100 bg-white px-3 py-1 text-xs font-medium text-[#666666]">
            Modern care
          </span>
        </div>
        <div className="px-5 pb-5 pt-4">
          <h3 className="text-xl font-semibold tracking-tight text-[#333333]">{topic.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#666666]">{topic.summary}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onOpen}
        className="mx-5 mb-5 mt-auto inline-flex items-center justify-center rounded-full bg-[#E91E63] px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d51a5f]"
      >
        Open Lesson
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </article>
  )
}

export default EducationCard