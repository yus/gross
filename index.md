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
  <article class="gross-card" style="max-width: 800px; margin: 0 auto 2rem; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #ff6b6b;">
    <!-- Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; color: #666; font-size: 0.9rem;">
      <div>📅 {{ post.date | date: "%B %d, %Y" }}</div>
      <div>⏱️ ~{{ post.templateContent | size | divided_by: 200 | round }} min</div>
    </div>
    
    <!-- Title -->
    <h2 style="margin-top: 0;">
      <a href="{{ post.url | url }}" style="color: #333; text-decoration: none;">
        {{ post.data.title }}
      </a>
    </h2>
    
    <!-- Tags -->
    {% if post.data.tags %}
    <div style="margin: 1rem 0;">
      {% for tag in post.data.tags %}
        {% if tag != "posts" %}
        <span style="display: inline-block; background: #f1f1f1; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.8rem; margin-right: 0.5rem;">
          #{{ tag }}
        </span>
        {% endif %}
      {% endfor %}
    </div>
    {% endif %}
    
    <!-- Content Preview (forces plain text) -->
    <div style="color: #555; line-height: 1.6;">
      {{ post.templateContent | strip_html | truncate: 200 }}
    </div>
    
    <!-- Read More -->
    <div style="margin-top: 1.5rem;">
      <a href="{{ post.url | url }}" style="display: inline-block; background: #667eea; color: white; padding: 0.5rem 1rem; border-radius: 0.25rem; text-decoration: none;">
        Read Full Experiment →
      </a>
    </div>
  </article>
  {% endfor %}
{% else %}
  <article style="text-align: center; padding: 3rem;">
    <h3>No experiments yet!</h3>
    <p>Create some markdown files in the `_posts` folder.</p>
  </article>
{% endif %}
