---
title: "Gross 144"
layout: base.liquid
---

<!-- Simple check -->
{% if collections.posts and collections.posts.size > 0 %}
  <p>Found {{ collections.posts.size }} posts ✓</p>
  
  {% for post in collections.posts reversed %}
    <article class="gross-card">
      <h2>{{ post.data.title }}</h2>
      <p>{{ post.date | date: "%B %d, %Y" }}</p>
      <div>{{ post.templateContent | truncate: 200 }}</div>
    </article>
  {% endfor %}
{% else %}
  <p>No posts found. Check if posts have <code>tags: ["posts"]</code> in frontmatter.</p>
{% endif %}

<!-- Posts -->
{% if collections.posts %}
  {% for post in collections.posts reversed %}
  <article class="gross-card">
    <header>
      <!-- DATE & READING TIME ROW - ADD THIS -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; color: #666; font-size: 0.9rem;">
        <div>
          <span style="margin-right: 0.5rem;">📅</span>
          <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%B %d, %Y" }}</time>
        </div>
        <div>
          <span style="margin-right: 0.5rem;">⏱️</span>
          <span>~{{ post.templateContent | size | divided_by: 200 | round }} min read</span>
        </div>
      </div>
      <!-- END DATE ROW -->
      
      <hgroup>
        <h2 style="margin: 0;">
          <a href="{{ post.url }}">{{ post.data.title }}</a>
        </h2>
      </hgroup>
      
      {% if post.data.tags %}
      <div style="margin: 1rem 0;">
        {% for tag in post.data.tags %}
        <span class="gross-tag">#{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </header>
    
    <div style="margin: 1.5rem 0;">
      {{ post.templateContent | truncate: 300 }}
    </div>
    
    <footer>
      <a href="{{ post.url | url }}">Read Full Post →</a>
    </footer>
  </article>
  {% endfor %}
{% else %}
  <article style="text-align: center; padding: 3rem;">
    <h3>No experiments yet!</h3>
    <p>Create some markdown files in the `_posts` folder.</p>
  </article>
{% endif %}
