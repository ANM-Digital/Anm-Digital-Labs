import React from "react";
import { Link, useParams } from "../router";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, ArrowUpRight, CheckIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { blogPosts } from "../data/blog";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="page-not-found">
        <SEOHead title="Article Not Found" />
        <div className="section-container">
          <div className="notfound-content">
            <div className="tag">
              <i></i>
              <span>Error 404</span>
            </div>
            <h1>Article not found</h1>
            <p>The requested engineering publication could not be found.</p>
            <Link to="/blog" className="button">
              <span>{t.common.backToBlog}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="page-blog-post">
      <SEOHead
        title={`${post.title} — Engineering Blog`}
        description={post.summary}
        type="article"
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs
            items={[
              { label: t.nav.blog, to: "/blog" },
              { label: post.title },
            ]}
          />

          <div className="blog-post-header">
            <div className="post-meta-top">
              <span className="blog-cat-badge">{post.category}</span>
              <span className="post-date">{post.publishedDate}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>

            <h1>{post.title}</h1>
            <p className="post-lead-summary">{post.summary}</p>

            <div className="post-author-box">
              <div className="author-avatar-badge">ANM</div>
              <div>
                <b>{post.author.name}</b>
                <small>{post.author.role} · ANM Digital Labs</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section section-post-body">
        <div className="section-container">
          <div className="post-layout-grid">
            <article className="post-main-content">
              {/* Key Takeaways Box */}
              <div className="takeaways-callout">
                <div className="tag">
                  <i></i>
                  <span>Key Engineering Takeaways</span>
                </div>
                <ul>
                  {post.keyTakeaways.map((k, idx) => (
                    <li key={idx}>
                      <CheckIcon size={15} className="check-icon" />
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Body Content */}
              <div className="post-paragraphs">
                {post.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="post-tags-bar">
                <b>Tags:</b>
                <div className="post-tag-chips">
                  {post.tags.map((tag) => (
                    <span key={tag} className="post-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="post-sidebar">
              <div className="sidebar-card">
                <h4>About ANM Digital Labs</h4>
                <p>
                  ANM Digital Labs is an independent digital product and software engineering studio operated by Yoga Products Ltd.
                </p>
                <Link to="/about" className="text-link-btn">
                  <span>Learn about our studio</span> <ArrowRight size={13} />
                </Link>
              </div>

              <div className="sidebar-card">
                <h4>Related Articles</h4>
                <div className="related-posts-list">
                  {relatedPosts.map((r) => (
                    <div key={r.slug} className="related-post-item">
                      <small>{r.category}</small>
                      <h5>
                        <Link to={`/blog/${r.slug}`}>{r.title}</Link>
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="section-bottom-nav">
        <div className="section-container">
          <Link to="/blog" className="back-link-btn">
            <span>← {t.common.backToBlog}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
