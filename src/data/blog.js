import { blogPosts as blogPostsBase } from './bigDataPage'

const summaries = [
  'Practical strategies for managing variable workloads and steady pipelines in consulting and delivery work.',
  'How constraints shape better design—and what we learned when bandwidth was the limit.',
  'Leadership signals that erode trust and velocity, and how to reset team dynamics.',
]

export const blogPosts = blogPostsBase.map((post, i) => ({
  ...post,
  summary: summaries[i] ?? 'Insights from our team on transformation, technology, and delivery.',
}))
