<template>
  <header id="header-home" class="flex-col">
    <div id="header-home-lable">
      <h1 id="header-home-title">recognize.</h1>
      <p id="header-home-subtitle">
        Where machine learning is taught concisely
      </p>
    </div>
    <a href="#blog-cov"><button class="filled-btn">start</button></a>
  </header>
</template>

<style lang="scss">
#header-home {
  @include flex-col($justify: center);
}

#header-home-lable {
  position: relative;
  margin-bottom: 2rem;
}

#header-home-title {
  @include header-text;
}

#header-home-subtitle {
  @include responsive-font-size($size:.9rem);
  position: absolute;
  bottom: 2%;
  right: 0;
}
</style>
