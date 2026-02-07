---
title: "Gross 144"
layout: base.njk
---

<div class="text-center mb-12">
  <h1 class="text-5xl font-bold mb-4 font-mono">GROSS 144</h1>
  <p class="text-xl text-gray-600">A tabloid for digital experiments</p>
</div>

{% if collections.posts %}
<div class="grid md:grid-cols-2 gap-8 mb-12">
  {% for post in collections.posts reversed %}
  <article class="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-shadow border-l-4 border-pink-500">
    <div class="text-sm text-gray-500 mb-2 font-mono">{{ post.date | date: "%B %d, %Y" }}</div>
    <h2 class="text-2xl font-bold mb-3">
      <a href="{{ post.url }}" class="text-purple-600 hover:text-pink-500">{{ post.data.title }}</a>
    </h2>
    
    {% if post.data.tags %}
    <div class="mb-4">
      {% for tag in post.data.tags %}
      <span class="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full border mr-2">
        {{ tag }}
      </span>
      {% endfor %}
    </div>
    {% endif %}
    
    <div class="prose prose-lg">
      {{ post.templateContent }}
    </div>
    
    <a href="{{ post.url }}" class="mt-4 inline-block text-blue-500 font-bold hover:underline">
      Read full experiment →
    </a>
  </article>
  {% endfor %}
</div>
{% else %}
<p class="text-center text-gray-500 py-12">No posts yet.</p>
{% endif %}
