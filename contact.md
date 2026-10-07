---
layout: page
title: Contact
description: Connect with Austin Schmid.
permalink: /contact/
intro: Professional background, education, and writing.
---

<section class="contact-panel">
  {% if site.linkedin_url and site.linkedin_url != "" %}
    <p class="eyebrow">LinkedIn</p>
    <h2>Let’s connect.</h2>
    <p>For professional conversations and updates, find me on LinkedIn.</p>
    <a class="button button--primary" href="{{ site.linkedin_url }}" rel="me noopener" target="_blank">Open LinkedIn <span aria-hidden="true">↗</span></a>
  {% else %}
    <p class="eyebrow">Contact information</p>
    <h2>No public contact link.</h2>
    <p>No email address is published here. Explore my professional experience and writing for more context.</p>
    <a class="button button--primary" href="{{ '/about/#writing' | relative_url }}">Explore writing <span aria-hidden="true">↗</span></a>
  {% endif %}
</section>
