---
title: "Gross Experiments"
layout: base.njk
---

<div class="text-center mb-12">
  <h1 class="text-5xl font-bold mb-4 font-mono">GROSS 144</h1>
  <p class="text-xl text-gray-600">A tabloid for digital experiments, built entirely on GitHub</p>
</div>

<!-- Posts Grid -->
{% if collections.posts %}
<div class="grid md:grid-cols-2 gap-8 mb-12">
  {% for post in collections.posts | reverse %}
  <article class="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-shadow border-l-4 border-pink-500">
    <div class="text-sm text-gray-500 mb-2 font-mono">{{ post.date | date: "%Y-%m-%d" }}</div>
    <h2 class="text-2xl font-bold mb-3">
      <a href="{{ post.url }}" class="text-purple-600 hover:text-pink-500">{{ post.data.title }}</a>
    </h2>
    
    {% if post.data.tags %}
    <div class="mb-4">
      {% for tag in post.data.tags %}
      <a href="/tags/{{ tag | slug }}/" 
         class="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full border mr-2">
        {{ tag }}
      </a>
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
<p class="text-center text-gray-500 py-12">No posts yet. Create some in `_posts/` folder!</p>
{% endif %}

<!-- Stats -->
<div class="bg-white p-8 rounded-xl shadow mb-8">
  <h2 class="text-2xl font-bold mb-6 font-mono">📊 Gross Stats</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <div class="p-4">
      <div class="text-3xl font-bold text-pink-500">
        {% if collections.posts %}{{ collections.posts.length }}{% else %}0{% endif %}
      </div>
      <div class="text-gray-600">Experiments</div>
    </div>
    <div class="p-4">
      <div class="text-3xl font-bold text-purple-600">
        {% if collections.tagList %}{{ collections.tagList.length }}{% else %}0{% endif %}
      </div>
      <div class="text-gray-600">Tags</div>
    </div>
    <div class="p-4">
      <div class="text-3xl font-bold text-blue-500">100%</div>
      <div class="text-gray-600">GitHub Built</div>
    </div>
    <div class="p-4">
      <div class="text-3xl font-bold text-gray-800">144</div>
      <div class="text-gray-600">Gross Level</div>
    </div>
  </div>
</div>
