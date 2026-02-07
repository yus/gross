---
title: "Gross 144"
layout: base.njk
---

<!-- Stats -->
<div style="text-align: center; margin-bottom: 3rem;">
  <h2>📊 Gross Stats</h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
    <article style="padding: 1rem; background: #f8f9fa; border-radius: 0.5rem;">
      <h3 style="margin: 0; font-size: 2.5rem; color: var(--gross-pink);">{{ collections.posts.size }}</h3>
      <p style="margin: 0; color: #666;">Experiments</p>
    </article>
    <article style="padding: 1rem; background: #f8f9fa; border-radius: 0.5rem;">
      <h3 style="margin: 0; font-size: 2.5rem; color: var(--gross-purple);">
        {% assign allTags = "" | split: "" %}
        {% for post in collections.posts %}
          {% for tag in post.data.tags %}
            {% assign allTags = allTags | push: tag %}
          {% endfor %}
        {% endfor %}
        {{ allTags | uniq | size }}
      </h3>
      <p style="margin: 0; color: #666;">Unique Tags</p>
    </article>
    <article style="padding: 1rem; background: #f8f9fa; border-radius: 0.5rem;">
      <h3 style="margin: 0; font-size: 2.5rem; color: var(--gross-blue);">100%</h3>
      <p style="margin: 0; color: #666;">GitHub Built</p>
    </article>
    <article style="padding: 1rem; background: #f8f9fa; border-radius: 0.5rem;">
      <h3 style="margin: 0; font-size: 2.5rem; color: #333;">144</h3>
      <p style="margin: 0; color: #666;">Gross Level</p>
    </article>
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
