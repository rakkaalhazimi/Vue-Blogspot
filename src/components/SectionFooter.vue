<template>
  <footer>
    <div id="contact-container">

      <h4 id="contact-title">Contact me</h4>
      <ul class="icon-list">
        <li>
          <a class="icon-btn" href="mailto:rakkakeren@gmail.com">
            <i class="fa-regular fa-envelope"></i>
          </a>
        </li>
        <li>
          <a class="icon-btn" href="https://www.linkedin.com/in/rakka-alhazimi-707848198/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a class="icon-btn" href="https://github.com/rakkaalhazimi" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a class="icon-btn" href="https://www.kaggle.com/rakkaalhazimi/" target="_blank">
            <i class="fa-brands fa-kaggle"></i>
          </a>
        </li>
        <li>
          <a class="icon-btn" href="https://www.instagram.com/rakkayombex/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>

      <p class="subdesc">Copyright all rights reserved. Design by Rakka</p>

    </div>

  </footer>
</template>


<style lang="scss">
footer {
  @include flex-col($justify: center);

  margin-top: auto;
  padding: $navbar-pad;
  background-color: $dominant;
  color: $text-dark;
  border-top: 1px solid $complement;

  & #contact-container {
    @include flex-col($gap: 0rem);
  }

  & #contact-title {
    margin-bottom: .5rem;
  }

  & .icon-list {
    @include flex-row();
    margin-bottom: 2rem;
  }
}
</style>