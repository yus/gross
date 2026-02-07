---
title: "Tags Archive"
layout: base.liquid
---

<h1>📚 All Tags</h1>

{% assign allTags = "" | split: "" %}
{% for post in collections.posts %}
  {% for tag in post.data.tags %}
    {% if tag != "posts" %}
      {% assign allTags = allTags | push: tag %}
    {% endif %}
  {% endfor %}
{% endfor %}

{% assign uniqueTags = allTags | uniq | sort %}

<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 2rem 0;">
  {% for tag in uniqueTags %}
    <span class="gross-tag" style="font-size: 1.1rem; padding: 0.5rem 1rem;">
      #{{ tag }}
    </span>
  {% endfor %}
</div>

<p>Click any tag to see all posts with that tag.</p>

<a href="/gross/">← Back to Home</a>
