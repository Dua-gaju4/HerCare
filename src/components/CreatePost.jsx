import { SendHorizonal, Sparkles } from 'lucide-react'
import { useState } from 'react'

const categories = ['Cycle Support', 'Self Care', 'Nutrition', 'Wellness Win', 'Community Question']

const CreatePost = ({ onCreatePost }) => {
  const [form, setForm] = useState({ category: categories[0], content: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.content.trim()) {
      return
    }

    onCreatePost(form)
    setForm({ category: categories[0], content: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-[0_18px_45px_-28px_rgba(233,30,99,0.22)]">
      <div className="flex items-center gap-2 text-[#E91E63]">
        <Sparkles size={18} />
        <p className="text-sm font-semibold uppercase tracking-[0.24em]">Create post</p>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <label className="space-y-2">
          <span className="text-sm font-medium text-[var(--app-text)]">Category</span>
          <select
            value={form.category}
            onChange={(event) => setForm((previous) => ({ ...previous, category: event.target.value }))}
            className="w-full rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-3 text-[var(--app-text)] outline-none transition focus:border-[var(--app-primary)] focus:ring-2 focus:ring-[var(--app-primary)]/20"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[var(--app-text)]">Share your update</span>
          <textarea
            rows={4}
            value={form.content}
            onChange={(event) => setForm((previous) => ({ ...previous, content: event.target.value }))}
            placeholder="Write something supportive or ask a question..."
            className="w-full rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-3 text-[var(--app-text)] outline-none transition placeholder:text-[var(--app-muted)] focus:border-[var(--app-primary)] focus:ring-2 focus:ring-[var(--app-primary)]/20"
          />
        </label>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-sm text-[var(--app-muted)]">Community posts are saved locally in this browser.</p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--app-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--app-primary-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-primary)]"
        >
          <SendHorizonal size={16} />
          Post
        </button>
      </div>
    </form>
  )
}

export default CreatePost