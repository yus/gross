---
title: "Archive"
layout: base.liquid
---

<h1>📚 Archive</h1>
<p>All experiments, sorted by year.</p>

{% assign postsByYear = collections.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in postsByYear reversed %}
<h2>{{ year.name }}</h2>

<div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; margin: 1rem 0;">
  {% for post in year.items reversed %}
  <article style="background: #f9f9f9; padding: 1rem; border-radius: 0.5rem;">
    <h3 style="margin-top: 0;">
      <a href="{{ post.url | url }}">{{ post.data.title }}</a>
    </h3>
    <div style="color: #666; font-size: 0.9rem;">
      {{ post.date | date: "%B %d" }}
      • 
      {% if post.data.tags %}
        {% for tag in post.data.tags %}
          {% if tag != "posts" %}#{{ tag }} {% endif %}
        {% endfor %}
      {% endif %}
    </div>
  </article>
  {% endfor %}
</div>
{% endfor %}

<a href="/gross/">← Back to Home</a>
