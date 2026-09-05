import React, { useState, useMemo } from "react";
import { Link } from "../router";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, ArrowUpRight, SearchIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { blogPosts } from "../data/blog";

export function BlogPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map((p) => p.category)));
    return ["all", ...cats];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCat = selectedCategory === "all" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPosts[0];

  return (
    <div className="page-blog">
      <SEOHead
        title="Engineering Blog & Technical Insights — ANM Digital Labs"
        description="Technical articles, Android SDK architecture notes, AI governance practices, and cloud security deep-dives from the ANM Digital Labs engineering team."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.nav.blog }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Engineering Publications</span>
            </div>
            <h1>Insights from the software engineering studio.</h1>
            <p className="page-lead">
              Architectural deep-dives, mobile performance optimizations, security practices, and responsible AI engineering directly from our practitioners.
            </p>
          </div>
        </div>
      </div>

      <section className="section section-blog-catalog">
        <div className="section-container">
          {/* Featured Post (if no search active) */}
          {!searchQuery && selectedCategory === "all" && featuredPost && (
            <div className="featured-blog-card">
              <div className="featured-blog-meta">
                <span className="featured-pill">Featured Article</span>
                <span className="blog-cat-badge">{featuredPost.category}</span>
                <span className="blog-date">{featuredPost.publishedDate}</span>
                <span className="blog-time">{featuredPost.readTime}</span>
              </div>
              <h2>
                <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>
              <p className="featured-summary">{featuredPost.summary}</p>
              <div className="featured-footer">
                <div className="author-info">
                  <b>{featuredPost.author.name}</b>
                  <small>{featuredPost.author.role}</small>
                </div>
                <Link to={`/blog/${featuredPost.slug}`} className="button small">
                  <span>{t.common.readMore}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}

          {/* Controls Bar */}
          <div className="catalog-controls">
            <div className="category-tabs" role="tablist" aria-label="Blog categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`category-tab-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "all" ? t.common.allCategories : cat}
                </button>
              ))}
            </div>

            <div className="catalog-search-wrap">
              <SearchIcon size={15} />
              <input
                type="text"
                placeholder="Search articles &amp; topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search articles"
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery("")} aria-label="Clear search">
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="catalog-empty-state">
              <p>No articles found matching your search.</p>
              <button
                className="ghost-button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-top">
                    <span className="blog-cat-badge">{post.category}</span>
                    <span className="blog-time">{post.readTime}</span>
                  </div>

                  <div className="blog-card-body">
                    <h3>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p>{post.summary}</p>
                  </div>

                  <div className="blog-card-footer">
                    <div className="blog-author-mini">
                      <b>{post.author.name}</b>
                      <small>{post.publishedDate}</small>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="card-link-btn">
                      <span>{t.common.readMore}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
