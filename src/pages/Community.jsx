import { useEffect, useMemo, useState } from 'react'
import { HeartPulse, MessageSquareQuote } from 'lucide-react'
import ModulePageShell from '../components/ModulePageShell'
import CreatePost from '../components/CreatePost'
import CommunityPost from '../components/CommunityPost'
import communityPosts from '../data/communityPosts.json'
import profileData from '../data/profile.json'
import { getAuthState, readStorageValue, writeStorageValue } from '../utils/storage'

const STORAGE_KEY = 'hercare-community-feed'

const buildInitialPosts = () =>
  communityPosts.map((post) => ({
    ...post,
    liked: false,
    saved: false,
    commentsList: [],
  }))

const Community = () => {
  const auth = getAuthState()
  const [posts, setPosts] = useState(() => readStorageValue(STORAGE_KEY, buildInitialPosts()))

  useEffect(() => {
    writeStorageValue(STORAGE_KEY, posts)
  }, [posts])

  const profile = useMemo(
    () => ({
      fullName: auth?.user?.name || profileData.fullName,
      avatar: (auth?.user?.name || profileData.avatar).slice(0, 2).toUpperCase(),
    }),
    [auth],
  )

  const handleCreatePost = ({ category, content }) => {
    const newPost = {
      id: `community-${Date.now()}`,
      userName: profile.fullName,
      avatar: profile.avatar,
      category,
      timestamp: 'Just now',
      title: 'New community post',
      content,
      likes: 0,
      comments: 0,
      shares: 0,
      liked: false,
      saved: false,
      commentsList: [],
    }

    setPosts((previous) => [newPost, ...previous])
  }

  const updatePost = (postId, updater) => {
    setPosts((previous) => previous.map((post) => (post.id === postId ? updater(post) : post)))
  }

  const handleToggleLike = (postId) => {
    updatePost(postId, (post) => ({ ...post, liked: !post.liked, likes: post.liked ? Math.max(0, post.likes - 1) : post.likes + 1 }))
  }

  const handleToggleSave = (postId) => {
    updatePost(postId, (post) => ({ ...post, saved: !post.saved }))
  }

  const handleShare = async (postId) => {
    const post = posts.find((entry) => entry.id === postId)
    if (!post) {
      return
    }

    const shareText = `${post.userName}: ${post.content}`
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(shareText)
      } catch (error) {
        console.error('Unable to copy post text', error)
      }
    }

    updatePost(postId, (entry) => ({ ...entry, shares: entry.shares + 1 }))
  }

  const handleCommentSubmit = (postId) => {
    const comment = window.prompt('Write a supportive comment')
    if (!comment?.trim()) {
      return
    }

    updatePost(postId, (post) => ({
      ...post,
      comments: post.comments + 1,
      commentsList: [
        ...(post.commentsList || []),
        {
          id: `comment-${Date.now()}`,
          author: profile.fullName,
          text: comment.trim(),
        },
      ],
    }))
  }

  return (
    <main className="min-h-screen bg-[var(--app-bg)] px-4 py-6 text-[var(--app-text)] sm:px-6 lg:px-8">
      <ModulePageShell>
        <div className="mx-auto max-w-7xl space-y-6">
          <section className="overflow-hidden rounded-[2rem] border border-[var(--app-border)] bg-gradient-to-br from-white via-[#FFF8FA] to-[#FCE7F3] p-6 shadow-[0_24px_70px_-34px_rgba(233,30,99,0.22)] md:p-8 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E91E63]">Community feed</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">A calm space for shared wins, questions, and everyday care.</h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--app-muted)] sm:text-lg">
                  Read, react, and share local demo posts that feel supportive, educational, and easy to explore across devices.
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-[var(--app-border)] bg-[var(--app-surface-strong)] p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#FFF8FA] p-3 text-[#E91E63]">
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--app-text)]">{posts.length} posts</p>
                    <p className="text-sm text-[var(--app-muted)]">Community updates stored locally</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CreatePost onCreatePost={handleCreatePost} />

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-[#E91E63]">
              <MessageSquareQuote size={18} />
              <p className="text-sm font-semibold uppercase tracking-[0.24em]">Latest posts</p>
            </div>

            <div className="space-y-4">
              {posts.length ? (
                posts.map((post) => (
                  <CommunityPost
                    key={post.id}
                    post={post}
                    onToggleLike={handleToggleLike}
                    onToggleSave={handleToggleSave}
                    onShare={handleShare}
                    onCommentSubmit={handleCommentSubmit}
                  />
                ))
              ) : (
                <div className="rounded-[1.35rem] border border-dashed border-[var(--app-border)] bg-[var(--app-surface-strong)] px-4 py-12 text-center text-sm text-[var(--app-muted)]">
                  No community posts found.
                </div>
              )}
            </div>
          </section>
        </div>
      </ModulePageShell>
    </main>
  )
}

export default Community