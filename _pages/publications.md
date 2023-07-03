---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<!-- {% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %} -->

<!-- For an updated list of publications please refer to [my Google Scholar profile](). \* denotes equal contribution -->

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">

  {% for post in site.publications reversed%}
  <tr>
    <td style="border: none; padding:2.5%;width:25%;vertical-align:middle;max-width:100px;max-height:100px">
      <img src="/{{post.image}}" alt="project image" style="width:auto; height:auto; max-width:100%;" />
    </td>
    <td style="border: none; padding:2.5%;width:75%;vertical-align:middle">
      <h3>{{post.title}}</h3>
      {{post.authors}}
      <em>{{post.venue}}</em>, {{ post.date | date: "%Y" }}
      <br>
        {% if post.paperurl %}
          <a href="{{post.paperurl}}">Paper</a> /
        {% endif %}
        {% if post.page %}
          <a href="{{post.page}}">Website</a> /
        {% endif %}
        {% if post.video %}
          <a href="{{post.video}}">Video</a> /
        {% endif %}
        {% if post.code %}
          <a href="{{post.code}}">Code</a> /
        {% endif %}
        {% if post.poster %}
          <a href="{{post.poster}}">Poster</a> /
        {% endif %}
        {% if post.slides %}
          <a href="{{post.slides}}">Slides</a> /
        {% endif %}
        {% if post.dataset %}
          <a href="{{post.dataset}}">Dataset</a> /
        {% endif %}
      <p></p>
      {{ post.excerpt }}
    </td>
  </tr>
  {% endfor %}
</table>