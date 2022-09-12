<template>
  <div id="blog-cov" class="content-pad text-light">

    <!-- Title and subtitle -->
    <h2 class="text-left">Blog Coverage</h2>
    <p id="blog-cov-desc" class="text-left">What topics will you mostly read here</p>

    <!-- Image List -->
    <ul id="blog-cov-list" class="flex-row">
      <li class="blog-cov-item flex-col">
        <img src="@/assets/machine-learning.png" />
        <p>Machine Learning</p>
      </li>
      <li class="blog-cov-item flex-col">
        <img src="@/assets/deep-learning.png" />
        <p>Deep Learning</p>
      </li>
      <li class="blog-cov-item flex-col">
        <img src="@/assets/math.png" />
        <p>Mathematics</p>
      </li>
      <li class="blog-cov-item flex-col">
        <img src="@/assets/statistic.png" />
        <p>Statistics</p>
      </li>
      <li class="blog-cov-item flex-col">
        <img src="@/assets/python.png" />
        <p>Python</p>
      </li>
    </ul>
  </div>
</template>

<style>
#blog-cov {
  background-color: var(--complement);
}

#blog-cov-desc {
  margin-bottom: 3rem;
}

#blog-cov-list {
  justify-content: flex-start;
  gap: 2rem;
}

.blog-cov-item {
  width: 100px;
  height: auto;
  font-size: .9rem;
}
</style>