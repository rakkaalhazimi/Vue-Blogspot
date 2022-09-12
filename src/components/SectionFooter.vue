<template>
  <footer>
    <div class="contact-container">

      <h3 class="contact-title">Machine Learning Blog</h3>
      <p class="contact-desc">Blog created as a practice for me to become a fullstack developer.<br>You can connect with
        me through:</p>
      <ul class="contact-icon-list">
        <li class="contact-icon-item">
          <a href="#">
            <i class="fa-regular fa-envelope"></i>
          </a>
        </li>
        <li class="contact-icon-item">
          <a href="https://www.linkedin.com/in/rakka-alhazimi-707848198/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li class="contact-icon-item">
          <a href="https://github.com/rakkaalhazimi" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li class="contact-icon-item">
          <a href="https://www.kaggle.com/rakkaalhazimi/" target="_blank">
            <i class="fa-brands fa-kaggle"></i>
          </a>
        </li>
        <li class="contact-icon-item">
          <a href="https://www.instagram.com/rakkayombex/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>

    </div>

    <div class="copyright-container">
      <p class="copyright-desc">
        Copyright all rights reserved. Made with <a href="https://vuejs.org/" target="_blank">Vue</a>
      </p>
    </div>

  </footer>
</template>


<style lang="scss">
footer {
  margin-top: auto;
  padding: var(--big-padding);
  background-color: $text-dark;
  color: $text-light;
}

.contact-container {
  margin-bottom: var(--medium-space);
}

.contact-title,
.contact-desc,
.made-with-title {
  margin-bottom: var(--small-space);
}

.contact-icon-list,
.made-with-icon-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: var(--medium-space);
}

.contact-icon-item>a,
.made-with-icon-item>a {
  color: $text-light;
  font-size: var(--icon-size);
}

.contact-icon-item>a:hover,
.made-with-icon-item>a:hover {
  color: $accent;
  transition: all 0.5 ease;
}
</style>