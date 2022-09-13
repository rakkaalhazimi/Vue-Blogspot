<template>
  <footer>
    <div class="subcontainer">

      <h4>Contact me</h4>
      <ul class="icon-list">
        <li>
          <a class="icon-item" href="#">
            <i class="fa-regular fa-envelope"></i>
          </a>
        </li>
        <li>
          <a class="icon-item" href="https://www.linkedin.com/in/rakka-alhazimi-707848198/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a class="icon-item" href="https://github.com/rakkaalhazimi" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a class="icon-item" href="https://www.kaggle.com/rakkaalhazimi/" target="_blank">
            <i class="fa-brands fa-kaggle"></i>
          </a>
        </li>
        <li>
          <a class="icon-item" href="https://www.instagram.com/rakkayombex/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>

    </div>

    <div class="subcontainer">
      <h4>Made with</h4>
      <ul class="icon-list">
        <li>
          <a class="icon-item" href="https://vuejs.org/">
            <i class="fa-brands fa-vuejs"></i>
          </a>
        </li>
      </ul>
    </div>

  </footer>
</template>


<style lang="scss">
footer {
  @include flex-row($justify: space-between);

  margin-top: auto;
  padding: $navbar-pad;
  background-color: $dominant-shade;
  color: $text-dark;
  border-top: 1px solid $complement;

  & .subcontainer {
    @include flex-col($gap: .5rem);
    text-align: left;
  }

  & .icon-list {
    @include flex-row();
  }

  & .icon-item {
    @include icon-btn();
    font-size: 1rem;
  }
}
</style>