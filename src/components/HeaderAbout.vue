<template>
  <header class="header-about">
    <img class="about-photo medium-low-mb" src="../assets/photo.jpg" />
    <h2 class="about-name">Rakka Alhazimi</h2>
    <p class="about-title medium-mb">Data Scientist, Web Developer</p>
    <p class="about-desc">
      Proficient Python Programmer with 3 years learning experience.
      Machine Learning Lecturer from one of the Educational Technology startups.
      Have a tons of experiences doing client projects on machine learning,
      web prototype and browser automation.
    </p>
  </header>
</template>

<style lang="scss">
header.header-about {
  margin-bottom: 0;
  height: 90vh;
}


.about-photo {
  width: 150px;
  height: 150px;
  border-radius: 100px;
}


.about-name,
.about-title {
  letter-spacing: 1px;
}

.about-title {
  color: $accent;
}

.about-desc {
  letter-spacing: 0.9px;
  line-height: 20px;

  @media (min-width: 768px) {
    padding: 0 10vw;
  }

  @media (min-width: 1200px) {
    padding: 0 20vw;

  }
}
</style>
