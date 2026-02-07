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
  <article class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-8 border-pink-500 hover:border-purple-500 transform hover:-translate-y-1">
    <div class="flex items-center text-gray-500 mb-4 font-mono">
      <span class="mr-2">📅</span>
      <span>{{ post.date | date: "%B %d, %Y" }}</span>
    </div>
    
    <h2 class="text-3xl font-bold mb-4">
      <a href="{{ post.url }}" class="text-gray-800 hover:text-pink-500 transition">
        {{ post.data.title }}
      </a>
    </h2>
    
    {% if post.data.tags %}
    <div class="mb-6">
      {% for tag in post.data.tags %}
      <span class="inline-block px-4 py-2 text-sm bg-gradient-to-r from-gray-100 to-gray-200 rounded-full border border-gray-300 mr-3 mb-2">
        #{{ tag }}
      </span>
      {% endfor %}
    </div>
    {% endif %}
    
    <div class="prose prose-lg prose-headings:text-gray-800 prose-a:text-blue-500 max-w-none mb-6">
      {{ post.templateContent | truncate: 250 }}
    </div>
    
    <div class="flex justify-between items-center pt-6 border-t">
      <a href="{{ post.url }}" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 transition">
        Read Experiment →
      </a>
      <span class="text-gray-400 text-sm">~{{ post.templateContent | size | divided_by: 200 | round }} min read</span>
    </div>
  </article>
  {% endfor %}
</div>
{% else %}
<p class="text-center text-gray-500 py-12">No posts yet.</p>
{% endif %}

<!-- STATS SECTION -->
<div class="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-3xl mt-16 shadow-2xl">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div class="text-center">
      <div class="text-5xl font-bold mb-2">{{ collections.posts.size }}</div>
      <div class="text-gray-300">Experiments</div>
    </div>
    <div class="text-center">
      <div class="text-5xl font-bold mb-2">
        {% assign allTags = "" | split: "" %}
        {% for post in collections.posts %}
          {% for tag in post.data.tags %}
            {% assign allTags = allTags | push: tag %}
          {% endfor %}
        {% endfor %}
        {{ allTags | uniq | size }}
      </div>
      <div class="text-gray-300">Unique Tags</div>
    </div>
    <div class="text-center">
      <div class="text-5xl font-bold mb-2">100%</div>
      <div class="text-gray-300">GitHub Built</div>
    </div>
    <div class="text-center">
      <div class="text-5xl font-bold mb-2">144</div>
      <div class="text-gray-300">Gross Level</div>
    </div>
  </div>
  
  <div class="mt-10 text-center">
    <p class="text-xl text-gray-300 mb-6">Built ENTIRELY on GitHub.com - no local tools!</p>
    <a href="https://github.com/yus/gross" target="_blank" class="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition">
      <span>View Source on GitHub</span>
      <span>→</span>
    </a>
  </div>
</div>
