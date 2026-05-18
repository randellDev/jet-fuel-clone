<script setup lang="ts">
import Indoor from '../sections/Indoor.vue';
import JetFuelSafety from '../sections/JetFuelSafety.vue';
import CoreCapabilites from '../sections/CoreCapabilites.vue';
import JetfuelContact from '../sections/JetfuelContact.vue';
import SaasBuilt from '../sections/SaasBuilt.vue';
import SaasCooling from '../sections/SaasCooling.vue';
</script>

<template>
  <div class="snap-container">
    <section class="snap-section">
      <JetFuelSafety />
    </section>

    <section class="snap-section">
      <Indoor />
    </section>

    <section class="snap-section">
      <CoreCapabilites />
    </section>

    <section class="snap-section">
      <SaasCooling />
    </section>

    <section class="snap-section">
      <SaasBuilt />
    </section>

    <section class="snap-section">
      <JetfuelContact />
    </section>
  </div>
</template>

<style scoped>
.snap-container {
  height: 100vh;
  overflow-y: scroll;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.snap-section {
  height: 100vh;

  scroll-snap-align: start;
}

.snap-container {
  height: 100vh;
  overflow-y: scroll;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  overscroll-behavior: none;
  -webkit-overflow-scrolling: touch;
}

.snap-section {
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>
