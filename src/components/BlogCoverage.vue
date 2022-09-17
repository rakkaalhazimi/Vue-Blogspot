<template>
  <div id="blog-cov">

    <!-- Title and subtitle -->
    <h2 id="blog-cov-subheader">Coverage</h2>
    <p id="blog-cov-desc">what will you learn</p>

    <!-- Image List -->
    <ul id="blog-cov-list">
      <li class="blog-cov-item">
        <div class="blog-cov-item-triangle"></div>
        <p class="blog-cov-item-title">Machine Learning</p>
        <p class="blog-cov-item-desc">Learn from the features of data</p>
      </li>
      <li class="blog-cov-item">
        <div class="blog-cov-item-triangle"></div>
        <p class="blog-cov-item-title">Deep Learning</p>
        <p class="blog-cov-item-desc">Learn to create features from data</p>
      </li>
      <li class="blog-cov-item">
        <div class="blog-cov-item-triangle"></div>
        <p class="blog-cov-item-title">Mathematics</p>
        <p class="blog-cov-item-desc">Craft real world formula</p>
      </li>
      <li class="blog-cov-item">
        <div class="blog-cov-item-triangle"></div>
        <p class="blog-cov-item-title">Statistics</p>
        <p class="blog-cov-item-desc">Summary the collections of data</p>
      </li>
      <li class="blog-cov-item">
        <div class="blog-cov-item-triangle"></div>
        <p class="blog-cov-item-title">Python</p>
        <p class="blog-cov-item-desc">Simple programming language</p>
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

#blog-cov-subheader {
  @include subheader-text;
}

#blog-cov-desc {
  @include desc-text;
  margin-bottom: 2rem;
}

#blog-cov-list {
  @include flex-row($wrap: wrap, $gap: 3rem);
  margin-bottom: 6rem;
}

.blog-cov-item {
  @include flex-col($justify: center, $gap: .5rem);
  @include filled-card($width: 295px, $height: 165px, $color: $dominant);
  align-items: flex-start;

  &-title {
    font-size: 1.25rem;
  }

  &-desc {
    font-size: .8rem;
  }

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