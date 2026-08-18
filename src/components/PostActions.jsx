import { Bookmark, Heart, MessageCircle, Share2 } from 'lucide-react'

const ActionButton = ({ icon: Icon, label, count, active = false, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    aria-pressed={active}
    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-primary)] ${active ? 'border-[var(--app-primary)] bg-[#FFF8FA] text-[var(--app-primary)]' : 'border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)] hover:border-[var(--app-primary)] hover:text-[var(--app-primary)]'}`}
  >
    <Icon size={16} />
    {count}
  </button>
)

const PostActions = ({ post, onToggleLike, onToggleSave, onShare, onCommentSubmit }) => {
  return (
    <div className="flex flex-wrap gap-2 sm:justify-end">
      <ActionButton icon={Heart} label="Like post" count={post.likes} active={post.liked} onClick={() => onToggleLike(post.id)} />
      <ActionButton icon={MessageCircle} label="Comment on post" count={post.comments} onClick={() => onCommentSubmit(post.id)} />
      <ActionButton icon={Bookmark} label="Save post" count={post.saved ? 'Saved' : 'Save'} active={post.saved} onClick={() => onToggleSave(post.id)} />
      <ActionButton icon={Share2} label="Share post" count={post.shares} onClick={() => onShare(post.id)} />
    </div>
  )
}

export default PostActions
