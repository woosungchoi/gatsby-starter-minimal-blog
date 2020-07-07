/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import ItemTags from "./item-tags"

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={5}>
    <TLink as={Link} to={post.slug} sx={{ fontSize: [4, 4, 5], color: `text`, fontWeight: 700 }}>
      {post.title}
    </TLink>
    <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
    </p>
    <p sx={{ mt: -3, mb: 0 }}>
      {post.tags && showTags && (
        <React.Fragment>
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
    <p sx={{ fontSize: [1, 2, 2], mt: 1, color: `#666666cc`, }}>
      {post.description ? post.description : post.excerpt}
    </p>
  </Box>
)

export default BlogListItem
