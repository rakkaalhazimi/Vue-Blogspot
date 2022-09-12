<template>
  <div id="blog-cov">

    <!-- Title and subtitle -->
    <h2 class="subtitle">Blog Coverage</h2>
    <p class="desc">What topics will you mostly read here</p>

    <!-- Image List -->
    <ul id="blog-cov-list">
      <li class="blog-cov-item">
        <img src="@/assets/machine-learning.png" />
        <p>Machine Learning</p>
      </li>
      <li class="blog-cov-item">
        <img src="@/assets/deep-learning.png" />
        <p>Deep Learning</p>
      </li>
      <li class="blog-cov-item">
        <img src="@/assets/math.png" />
        <p>Mathematics</p>
      </li>
      <li class="blog-cov-item">
        <img src="@/assets/statistic.png" />
        <p>Statistics</p>
      </li>
      <li class="blog-cov-item">
        <img src="@/assets/python.png" />
        <p>Python</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
#blog-cov {
  padding: $content-pad;
  color: $text-light;
  background-color: $complement;
}

#blog-cov-list {
  @include flex-row($wrap: wrap, $gap: 2rem);
}

.blog-cov-item {
  width: 100px;
  height: auto;
  font-size: .9rem;
}
</style>