---
title: Debug
layout: base.njk
---

Line 1: {% if collections.posts %}
Line 2: {% if collections.posts %} test
Line 3: {% if collections.posts %}{% endif %}
Line 4: {{ collections.posts.length }}
