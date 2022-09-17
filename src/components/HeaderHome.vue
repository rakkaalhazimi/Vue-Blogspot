<template>
  <header id="header-home" class="flex-col">
    <div id="header-home-lable" class="medium-mb">
      <h1 class="supertitle">recognize.</h1>
      <p id="header-home-subtitle" class="subdesc">
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
}

#header-home-subtitle {
  // @include responsive-font-size($size:.9rem);
  position: absolute;
  bottom: 2%;
  right: 0;
}
</style>
