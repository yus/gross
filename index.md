---
title: "Gross 144"
layout: base.njk
---

<!-- Smaller Stats -->
<div style="text-align: center; margin: 2rem 0;">
  <h3 style="font-size: 1rem; color: #666; margin-bottom: 1rem;">📊 GROSS METRICS</h3>
  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; max-width: 600px; margin: 0 auto;">
    <div style="padding: 0.5rem;">
      <div style="font-size: 1.5rem; font-weight: bold; color: #ff6b6b;">{{ collections.posts.size }}</div>
      <div style="font-size: 0.8rem; color: #666;">Experiments</div>
    </div>
    <div style="padding: 0.5rem;">
      <div style="font-size: 1.5rem; font-weight: bold; color: #667eea;">
        {% assign allTags = "" | split: "" %}
        {% for post in collections.posts %}
          {% for tag in post.data.tags %}
            {% assign allTags = allTags | push: tag %}
          {% endfor %}
        {% endfor %}
        {{ allTags | uniq | size }}
      </div>
      <div style="font-size: 0.8rem; color: #666;">Tags</div>
    </div>
    <div style="padding: 0.5rem;">
      <div style="font-size: 1.5rem; font-weight: bold; color: #764ba2;">100%</div>
      <div style="font-size: 0.8rem; color: #666;">GitHub</div>
    </div>
    <div style="padding: 0.5rem;">
      <div style="font-size: 1.5rem; font-weight: bold; color: #333;">144</div>
      <div style="font-size: 0.8rem; color: #666;">Gross</div>
    </div>
  </div>
</div>

<!-- DEBUG: Posts Check -->
{#
<div style="background: #f5f5f5; padding: 1rem; margin: 1rem 0; border-radius: 0.5rem;">
  <p>Total posts in collection: <strong>{{ collections.posts.size }}</strong></p>
  <p>Collection exists: <strong>{{ collections.posts | json }}</strong></p>
</div>
#}

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
      <a href="{{ post.url }}" role="button">Read Full Experiment →</a>
    </footer>
  </article>
  {% endfor %}
{% else %}
  <article style="text-align: center; padding: 3rem;">
    <h3>No experiments yet!</h3>
    <p>Create some markdown files in the `_posts` folder.</p>
  </article>
{% endif %}
