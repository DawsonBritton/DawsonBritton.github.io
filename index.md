---
layout: default
title: Dawson Britton
---
<section class="hero">
  <p class="eyebrow">Mechanical Engineering · Old Dominion University</p>
  <h1>I design, build, and fly rockets, and the electronics that bring them home.</h1>
  <p class="lede">I'm a mechanical engineering student at Old Dominion University. I was Recovery &amp; Simulation Lead for our Spaceport America Cup (IREC) team, I lead our PROPEL competition rockets, and I'm Level 1 certified in high-power rocketry, working toward Level 2. I'm looking for internships and co-ops in aerospace and mechanical design.</p>
  <p class="cta">
    <a class="btn" href="{{ '/assets/Dawson_Britton_Resume.pdf' | relative_url }}">Resume (PDF)</a>
    <a class="btn ghost" href="mailto:{{ site.email }}">Email me</a>
  </p>
</section>

<section id="projects">
  <h2>Projects</h2>
  <div class="grid">
    {% assign projects = site.projects | sort: "order" %}
    {% for p in projects %}
    <a class="card" href="{{ p.url | relative_url }}">
      {% if p.image %}<img src="{{ p.image | relative_url }}" alt="">{% endif %}
      <p class="eyebrow">{{ p.category }}</p>
      <h3>{{ p.title }}</h3>
      <p>{{ p.summary }}</p>
      {% if p.status %}<span class="status">{{ p.status }}</span>{% endif %}
    </a>
    {% endfor %}
  </div>
</section>

<section class="skills">
  <h2>Tools I use</h2>
  <dl class="specs">
    <div><dt>CAD</dt><dd>Onshape and Rhino 3D (advanced), SolidWorks, Inventor</dd></div>
    <div><dt>Simulation</dt><dd>OpenRocket; learning ANSYS and Simulink</dd></div>
    <div><dt>Electronics</dt><dd>Arduino / C++, I²C and SPI sensors</dd></div>
    <div><dt>Shop</dt><dd>Welding, CNC, fabrication, automotive repair</dd></div>
  </dl>
</section>
