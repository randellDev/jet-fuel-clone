<template>
  <div class="scroll-container">
    <JetFuelSafety />
    <Indoor />
    <CoreCapabilites />
  </div>
</template>

<style lang="scss">
.scroll-container {
  height: 100vh;
  overflow-y: scroll;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.scroll-container > * {
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>
