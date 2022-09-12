<template>
  <header id="header-home" class="flex-col">
    <h1 id="header-home-title"><span id="header-home-title-high">Recognize</span><br/>Machine Learning</h1>
    <p id="header-home-subtitle">Where machine learning is taught concisely</p>
    <a href="#blog-cov"><button id="start-btn">Start</button></a>
  </header>
</template>

<style lang="scss">
  #header-home {
    row-gap: 0;
  }

  #header-home-title {
    margin-bottom: 0.5rem;
  }

  #header-home-title-high {
    color: $accent;
  }

  #header-home-subtitle {
    margin-bottom: 2rem;
  }

  #start-btn {
    @include hollow-btn();
    color: $text-dark;
  }
</style>
