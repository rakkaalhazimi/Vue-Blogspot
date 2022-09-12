<template>
  <header class="header-about">
    <img class="about-photo" src="../assets/photo.jpg" />
    <h2 class="about-name">Rakka Alhazimi</h2>
    <p class="about-title">Data Scientist, Web Developer</p>
    <p class="about-desc">
      Proficient Python Programmer with 3 years learning experience.
      Machine Learning Lecturer from one of the Educational Technology startups.
      Have a tons of experiences doing client requested projects like machine learning,
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
  margin: 0 auto;
  width: $photo-width;
  height: $photo-height;
  border-radius: 100px;
}


.about-name,
.about-title {
  letter-spacing: 1px;
}

.about-title {
  margin-bottom: $big-space;
  color: $accent;
}

.about-desc {
  letter-spacing: 0.9px;
  line-height: 20px;
}

@media (min-width: 768px) {
  .about-desc {
    padding: 0 10vw;
  }
}

@media (min-width: 1200px) {
  .about-desc {
    padding: 0 20vw;
  }

}
</style>
