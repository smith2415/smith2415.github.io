---
layout: page
title: Contact
description: Connect with Austin Schmid.
permalink: /contact/
intro: The best way to connect is through LinkedIn.
---

<section class="contact-panel">
  {% if site.linkedin_url and site.linkedin_url != "" %}
    <p class="eyebrow">LinkedIn</p>
    <h2>Let’s connect.</h2>
    <p>For professional conversations and updates, find me on LinkedIn.</p>
    <a class="button button--primary" href="{{ site.linkedin_url }}" rel="me noopener" target="_blank">Open LinkedIn <span aria-hidden="true">↗</span></a>
  {% else %}
    <p class="eyebrow">LinkedIn link pending</p>
    <h2>Let’s connect.</h2>
    <p>A LinkedIn profile link will be added here once it is supplied. No public email address is displayed on this site.</p>
    <p class="placeholder-note">Placeholder: add the LinkedIn URL in <code>_config.yml</code>.</p>
  {% endif %}
</section>
