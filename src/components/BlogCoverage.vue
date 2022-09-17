<template>
  <div id="blog-cov">

    <!-- Title and subtitle -->
    <h2 class="subtitle">Coverage</h2>
    <p class="medium-mb">what will you learn</p>

    <!-- Image List -->
    <ul id="blog-cov-list">
      <li class="blog-cov-item">
        <div class="blog-cov-item-triangle"></div>
        <p class="superdesc">Machine Learning</p>
        <p class="subdesc">Learn from the features of data</p>
      </li>
      <li class="blog-cov-item">
        <div class="blog-cov-item-triangle"></div>
        <p class="superdesc">Deep Learning</p>
        <p class="subdesc">Learn to create features from data</p>
      </li>
      <li class="blog-cov-item">
        <div class="blog-cov-item-triangle"></div>
        <p class="superdesc">Mathematics</p>
        <p class="subdesc">Craft real world formula</p>
      </li>
      <li class="blog-cov-item">
        <div class="blog-cov-item-triangle"></div>
        <p class="superdesc">Statistics</p>
        <p class="subdesc">Summary the collections of data</p>
      </li>
      <li class="blog-cov-item">
        <div class="blog-cov-item-triangle"></div>
        <p class="superdesc">Python</p>
        <p class="subdesc">Simple programming language</p>
      </li>
    </ul>

  </div>
</template>

<style lang="scss">
#blog-cov {
  @include flex-col($justify: center);
  padding: $content-pad;
  color: $text-dark;
}

#blog-cov-list {
  @include flex-row($wrap: wrap, $gap: 3rem);
}

.blog-cov-item {
  @include flex-col($justify: center, $gap: .5rem);
  @include filled-card($width: 295px, $height: 165px, $color: $dominant);
  align-items: flex-start;

  // Apply color and gradient to each card
  @for $i from 1 through length($variants) {
    $c: nth($variants, $i);

    &:nth-child(#{$i}) {
      background: radial-gradient(circle at top left, rgba($c, .3), rgba(0, 0, 0, 0) 150%);
    }

    &:nth-child(#{$i}) &-triangle {
      @include top-triangle-test($width: 36px, $height: 32px, $color: $c);
      margin-bottom: 1rem;
    }
  }
}
</style>