---
title: "Gross 144"
layout: base.njk
---

<!-- Stats -->
<!-- Enhanced Stats -->
<div style="text-align: center; margin: 3rem 0;">
  <h2>📊 GROSS METRICS</h2>
  <div class="grid" style="margin: 2rem 0;">
    {% assign tagCount = "" | split: "" %}
    {% for post in collections.posts %}
      {% for tag in post.data.tags %}
        {% assign tagCount = tagCount | push: tag %}
      {% endfor %}
    {% endfor %}
    
    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
      <article style="background: linear-gradient(135deg, #fff5f5, #fff); border: 2px solid #ff6b6b;">
        <h3 style="font-size: 3rem; margin: 0; color: #ff6b6b;">{{ collections.posts.size }}</h3>
        <p style="margin: 0; font-weight: bold;">EXPERIMENTS</p>
      </article>
      
      <article style="background: linear-gradient(135deg, #f3f4ff, #fff); border: 2px solid #667eea;">
        <h3 style="font-size: 3rem; margin: 0; color: #667eea;">{{ tagCount | uniq | size }}</h3>
        <p style="margin: 0; font-weight: bold;">UNIQUE TAGS</p>
      </article>
      
      <article style="background: linear-gradient(135deg, #faf5ff, #fff); border: 2px solid #764ba2;">
        <h3 style="font-size: 3rem; margin: 0; color: #764ba2;">100%</h3>
        <p style="margin: 0; font-weight: bold;">GITHUB BUILT</p>
      </article>
      
      <article style="background: linear-gradient(135deg, #f0f0f0, #fff); border: 2px solid #333;">
        <h3 style="font-size: 3rem; margin: 0; color: #333;">144</h3>
        <p style="margin: 0; font-weight: bold;">GROSS LEVEL</p>
      </article>
    </div>
    
    <div style="margin-top: 2rem;">
      <a href="https://github.com/yus/gross" target="_blank" role="button" style="background: linear-gradient(135deg, #667eea, #764ba2);">
        🔍 View Source on GitHub
      </a>
    </div>
  </div>
</div>

<!-- Posts -->
{% if collections.posts %}
  {% for post in collections.posts reversed %}
  <article class="gross-card">
    <header>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <small>📅 {{ post.date | date: "%B %d, %Y" }}</small>
        <small>⏱️ ~{{ post.templateContent | size | divided_by: 200 | round }} min read</small>
      </div>
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
