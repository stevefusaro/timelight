## Transparent navbar

Use the new `.navbar-transparent` variation for placing navbars over backgrounds and interactive content.

{% example html %}
<div class="py-5 px-1" style="background: url({{ relative }}assets/img/kanye.jpg) top center; background-size: cover">
  <nav class="navbar navbar-transparent">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggler hidden-lg-up float-right" data-toggle="collapse" data-target="#navbar-collapse-com"></button>
        <a class="navbar-brand" href="#">
          <h4 class="text-uppercase my-0">Project Name</h4>
        </a>
      </div>
      <div class="navbar-toggleable-md collapse" id="navbar-collapse-com">
        <ul class="nav navbar-nav float-none float-lg-right">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
{% endexample %}
