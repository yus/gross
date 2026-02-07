---
title: "Gross Experiments"
layout: base.njk
---

<div class="text-center mb-12">
  <h1 class="text-5xl font-bold mb-4 font-mono">GROSS 144</h1>
  <p class="text-xl text-gray-600">A tabloid for digital experiments, built entirely on GitHub</p>
</div>

<!-- Featured Posts -->
<div class="grid md:grid-cols-2 gap-8 mb-12">
  {% for post in collections.posts | reverse | slice(0, 4) %}
  <article class="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-shadow border-l-4 border-gross-pink">
    <div class="text-sm text-gray-500 mb-2 font-mono">{{ post.date | date: "%Y-%m-%d" }}</div>
    <h2 class="text-2xl font-bold mb-3">
      <a href="{{ post.url }}" class="hover:text-gross-purple">{{ post.data.title }}</a>
    </h2>
    <div class="mb-4">
      {% for tag in post.data.tags %}
      <span class="tag-pill bg-gray-100 border-gray-300 mr-2 mb-2">{{ tag }}</span>
      {% endfor %}
    </div>
    <a href="{{ post.url }}" class="text-gross-blue font-bold hover:underline">Read →</a>
  </article>
  {% endfor %}
</div>

<!-- Stats -->
<div class="bg-white p-8 rounded-xl shadow mb-8">
  <h2 class="text-2xl font-bold mb-6 font-mono">📊 Gross Stats</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <div class="p-4">
      <div class="text-3xl font-bold text-gross-pink">{{ collections.posts.length }}</div>
      <div class="text-gray-600">Experiments</div>
    </div>
    <div class="p-4">
      <div class="text-3xl font-bold text-gross-purple">{{ collections.tagList.length }}</div>
      <div class="text-gray-600">Tags</div>
    </div>
    <div class="p-4">
      <div class="text-3xl font-bold text-gross-blue">100%</div>
      <div class="text-gray-600">GitHub Built</div>
    </div>
    <div class="p-4">
      <div class="text-3xl font-bold text-gray-800">144</div>
      <div class="text-gray-600">Gross Level</div>
    </div>
  </div>
</div>

<!-- All Tags -->
<div class="bg-gray-100 p-8 rounded-xl">
  <h2 class="text-2xl font-bold mb-6 font-mono">🏷️ Browse by Tag</h2>
  <div class="flex flex-wrap gap-3">
    {% for tag in collections.tagList %}
    <a href="/tags/{{ tag | slug }}/" 
       class="tag-pill bg-white border-gross-blue text-gross-blue hover:bg-gross-blue hover:text-white transition-colors text-lg px-5 py-3">
      {{ tag }} <span class="opacity-75">({{ collections.postsByTag[tag].length }})</span>
    </a>
    {% endfor %}
  </div>
</div>
