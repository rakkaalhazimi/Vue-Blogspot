<template>
  <footer>
    <div class="contact-container">

      <h4 class="contact-title">Contact Me</h4>
      <ul class="contact-icon-list">
        <li class="contact-icon-item">
          <a href="#">
            <i class="fa-regular fa-envelope"></i>
          </a>
        </li>
        <li class="contact-icon-item">
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li class="contact-icon-item">
          <a href="#">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li class="contact-icon-item">
          <a href="#">
            <i class="fa-brands fa-kaggle"></i>
          </a>
        </li>
        <li class="contact-icon-item">
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>

    </div>

    <div class="made-with-container">
      <h4 class="made-with-title">Made With</h4>
      <ul class="made-with-icon-list">
        <li class="made-with-icon-item">
          <a>
            <i class="fa-brands fa-vuejs"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style>
footer {
  margin-top: auto;
  padding: var(--big-padding);
  background-color: var(--complement);
  color: var(--dominant);
}

.contact-container {
  margin-bottom: var(--medium-space);
}

.contact-title,
.made-with-title {
  margin-bottom: var(--small-space);
}

.contact-icon-list,
.made-with-icon-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: var(--gap);
}

.contact-icon-item>a,
.made-with-icon-item>a {
  color: var(--dominant);
  font-size: var(--icon-size);
}

.contact-icon-item>a:hover,
.made-with-icon-item>a:hover {
  color: var(--accent);
  transition: all 0.5 ease;
}
</style>