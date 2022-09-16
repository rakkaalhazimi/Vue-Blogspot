<template>
  <div id="blog-cov">

    <!-- Title and subtitle -->
    <h2 id="blog-cov-subheader">Coverage</h2>
    <p id="blog-cov-desc">what will you learn</p>

    <!-- Image List -->
    <ul id="blog-cov-list">
      <li class="blog-cov-item">
        <p>ML</p>
      </li>
      <li class="blog-cov-item">
        <p>DL</p>
      </li>
      <li class="blog-cov-item">
        <p>MATH</p>
      </li>
      <li class="blog-cov-item">
        <p>STATS</p>
      </li>
      <li class="blog-cov-item">
        <p>PY</p>
      </li>
    </ul>

    <a href="#blog-browse"><button id="blog-cov-next"></button></a>
    
  </div>
</template>

<style lang="scss">
#blog-cov {
  @include flex-col($justify: center);
  padding: $content-pad;
  color: $text-dark;
}

#blog-cov-subheader {
  @include subheader-text;
}

#blog-cov-desc {
  margin-bottom: 2rem;
}

#blog-cov-list {
  @include flex-row($justify:center, $wrap: wrap, $gap: 3rem);
  margin-bottom: 6rem;
}

.blog-cov-item {
  @include flex-col($justify: center);
  width: 100px;
  height: 100px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1.5rem;

  &:nth-child(odd) {
    background-color: $complement;
    color: $text-light;
  }
  
  &:nth-child(even) {
    border: 1px solid $complement;
  }
}

#blog-cov-next {
  @include bottom-triangle();
  border-width: 28px 20px 0 20px;;

  &:hover {
    @include bottom-triangle-hover();
  }
}
</style>