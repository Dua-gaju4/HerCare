import { CalendarClock } from 'lucide-react'
import PostActions from './PostActions'

const CommunityPost = ({ post, onToggleLike, onToggleSave, onShare, onCommentSubmit }) => {
  return (
    <article className="rounded-[1.5rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-[0_18px_45px_-28px_rgba(233,30,99,0.22)] transition hover:-translate-y-1">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8] text-base font-semibold text-[#C2185B]">
            {post.avatar}
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-[var(--app-text)]">{post.userName}</h3>
              <span className="rounded-full bg-[#FFF8FA] px-3 py-1 text-xs font-semibold text-[#E91E63]">{post.category}</span>
            </div>
            <p className="mt-1 inline-flex items-center gap-2 text-sm text-[var(--app-muted)]">
              <CalendarClock size={14} className="text-[#E91E63]" />
              {post.timestamp}
            </p>
          </div>
        </div>

        <PostActions
          post={post}
          onToggleLike={onToggleLike}
          onToggleSave={onToggleSave}
          onShare={onShare}
          onCommentSubmit={onCommentSubmit}
        />
      </div>

      <div className="mt-4 space-y-3">
        {post.title ? <h4 className="text-xl font-semibold text-[var(--app-text)]">{post.title}</h4> : null}
        <p className="text-sm leading-7 text-[var(--app-muted)]">{post.content}</p>
      </div>

      {post.commentsList?.length ? (
        <div className="mt-4 space-y-3 rounded-[1.25rem] bg-[#FFF8FA] p-4 dark:bg-white/5">
          <p className="text-sm font-semibold text-[var(--app-text)]">Recent comments</p>
          <div className="space-y-2">
            {post.commentsList.slice(0, 2).map((comment) => (
              <div key={comment.id} className="rounded-2xl bg-[var(--app-surface-strong)] px-4 py-3 text-sm text-[var(--app-muted)] shadow-sm">
                <span className="font-semibold text-[var(--app-text)]">{comment.author}</span> {comment.text}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  )
}

export default CommunityPost