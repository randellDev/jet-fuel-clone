<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sectionRef = ref(null);
const isInView = ref(false);

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isInView.value = false;

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            isInView.value = true;
          });
        });
      } else {
        isInView.value = false;
      }
    },
    {
      threshold: 0.25,
    },
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value);
    observer.disconnect();
  }
});
</script>

<template>
  <section
    ref="sectionRef"
    class="jf-section jf-section--indoor-intelligence"
    :class="{ 'in-viewport': isInView }"
  >
    <div class="jf-container">
      <div class="title-container">
        <h2>TOTAL INDOOR INTELLIGENCE IN ONE PLATFORM</h2>
        <p>
          JetFuel Safety is a SaaS company delivering real-time analytics for
          heat stress prevention, air quality optimization, and system-level
          diagnostics.
        </p>
      </div>

      <div class="images-and-bars">
        <div class="bars-container left">
          <div class="sidebars bar1"></div>
          <div class="sidebars bar2"></div>
          <div class="sidebars bar3"></div>
          <div class="sidebars bar4"></div>
          <div class="sidebars bar5"></div>
          <div class="sidebars bar6"></div>
          <div class="sidebars bar7"></div>
          <div class="sidebars bar8"></div>
        </div>

        <div class="bars-container right">
          <div class="sidebars bar1"></div>
          <div class="sidebars bar2"></div>
          <div class="sidebars bar3"></div>
          <div class="sidebars bar4"></div>
          <div class="sidebars bar5"></div>
          <div class="sidebars bar6"></div>
          <div class="sidebars bar7"></div>
          <div class="sidebars bar8"></div>
        </div>

        <div class="images-container">
          <!-- Row 1: full-width image on mobile, 2 images on desktop -->
          <div class="row">
            <div class="img-container grid2c">
              <img src="@/assets/images/IndoorIntelligence1.svg" />
            </div>
            <div class="img-container hidden-on-mobile">
              <img src="@/assets/images/IndoorIntelligence2.jpg" />
            </div>
          </div>

          <!-- Row 2: middle 2 images — mobile only -->
          <div class="row hidden-on-desktop">
            <div class="img-container">
              <img src="@/assets/images/IndoorIntelligence2.jpg" />
            </div>
            <div class="img-container">
              <img src="@/assets/images/IndoorIntelligence3.jpg" />
            </div>
          </div>

          <!-- Row 3: bottom images -->
          <div class="row">
            <div class="img-container hidden-on-mobile">
              <img src="@/assets/images/IndoorIntelligence3.jpg" />
            </div>
            <div class="img-container">
              <img src="@/assets/images/IndoorIntelligence4.jpg" />
            </div>
            <div class="img-container">
              <img src="@/assets/images/IndoorIntelligence5.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
section.jf-section--indoor-intelligence {
  position: relative;
  background: #3e3c3e;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (max-width: 930px) {
    height: auto;
    min-height: unset;
    overflow: visible;
    padding: 40px 16px;
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.85);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-120%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(120%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .bars-container {
    position: relative;
    height: 100%;
    width: 0;

    @media (max-width: 930px) {
      display: none;
    }

    &.left {
      position: absolute;
      left: 0;

      .sidebars {
        position: absolute;
        background: #231f20;
        height: 100%;
        z-index: 2;
        opacity: 0;
      }

      .bar1 {
        right: 1em;
        width: 2em;
        animation-delay: 1.6s;
      }
      .bar2 {
        right: 4em;
        width: 4em;
        animation-delay: 1.7s;
      }
      .bar3 {
        right: 9em;
        width: 6em;
        animation-delay: 1.8s;
      }
      .bar4 {
        right: 16em;
        width: 8em;
        animation-delay: 1.9s;
      }
      .bar5 {
        right: 25em;
        width: 10em;
        animation-delay: 2s;
      }
      .bar6 {
        right: 36em;
        width: 18em;
        animation-delay: 2.1s;
      }
      .bar7 {
        right: 55em;
        width: 32em;
        animation-delay: 2.2s;
      }
      .bar8 {
        right: 88em;
        width: 50em;
        animation-delay: 2.3s;
      }
    }

    &.right {
      position: absolute;
      right: 0;

      .sidebars {
        position: absolute;
        background: #231f20;
        height: 100%;
        z-index: 2;
        opacity: 0;
      }

      .bar1 {
        left: 1em;
        width: 2em;
        animation-delay: 1.6s;
      }
      .bar2 {
        left: 4em;
        width: 4em;
        animation-delay: 1.7s;
      }
      .bar3 {
        left: 9em;
        width: 6em;
        animation-delay: 1.8s;
      }
      .bar4 {
        left: 16em;
        width: 8em;
        animation-delay: 1.9s;
      }
      .bar5 {
        left: 25em;
        width: 10em;
        animation-delay: 2s;
      }
      .bar6 {
        left: 36em;
        width: 18em;
        animation-delay: 2.1s;
      }
      .bar7 {
        left: 55em;
        width: 32em;
        animation-delay: 2.2s;
      }
      .bar8 {
        left: 88em;
        width: 50em;
        animation-delay: 2.3s;
      }
    }
  }

  .jf-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (max-width: 930px) {
      height: auto;
    }

    .images-and-bars {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 930px) {
        width: 100%;
      }

      .images-container {
        z-index: 3;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        .row {
          display: flex;
          gap: 0.5em;

          &.hidden-on-desktop {
            display: none;
          }
        }

        .img-container {
          position: relative;
          height: 15vw;
          width: 15vw;
          overflow: hidden;
          opacity: 0;
          transform: scale(0.85);
          transition: transform 0.3s ease;
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          min-height: 100%;
          min-width: 100%;
          width: 100%;
        }

        .grid2c {
          width: calc(30vw + 0.5em);
        }

        .img-container:nth-child(1) {
          animation-delay: 0.1s;
        }
        .img-container:nth-child(2) {
          animation-delay: 0.2s;
        }
        .img-container:nth-child(3) {
          animation-delay: 0.3s;
        }
        .img-container:nth-child(4) {
          animation-delay: 0.4s;
        }
        .img-container:nth-child(5) {
          animation-delay: 0.5s;
        }
        .img-container:nth-child(6) {
          animation-delay: 0.6s;
        }
        .img-container:nth-child(7) {
          animation-delay: 0.7s;
        }
        .img-container:nth-child(8) {
          animation-delay: 0.8s;
        }

        @media (max-width: 930px) {
          width: 100%;

          .row {
            display: flex;
            gap: 6px;

            &.hidden-on-desktop {
              display: flex;
            }
          }

          .img-container {
            height: 44vw;
            width: 44vw;
            flex: 1;
          }

          .row:first-child .img-container:first-child {
            height: 56vw;
            width: 100%;
            flex: unset;
          }

          .grid2c {
            width: 100%;
          }

          .hidden-on-mobile {
            display: none;
          }
        }
      }
    }

    .title-container {
      > h2 {
        color: white;
        font-size: 70px;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
        line-height: 1.25em;
        letter-spacing: -0.7px;
        margin-bottom: 40px;

        @media (max-width: 930px) {
          font-size: 40px;
        }
      }

      > p {
        color: white;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        line-height: 1.25em;
        letter-spacing: -0.4px;
        max-width: 1290px;
        margin-bottom: 64px;
        margin-left: 270px;

        @media (max-width: 930px) {
          font-size: 18px;
          margin-left: 0;
          margin-bottom: 32px;
          padding: 0 8px;
        }
      }
    }
  }

  &.in-viewport {
    .img-container {
      animation: scaleIn 0.6s ease-out forwards;
    }

    .img-container:nth-child(1) {
      animation-delay: 0.1s;
    }
    .img-container:nth-child(2) {
      animation-delay: 0.2s;
    }
    .img-container:nth-child(3) {
      animation-delay: 0.3s;
    }
    .img-container:nth-child(4) {
      animation-delay: 0.4s;
    }
    .img-container:nth-child(5) {
      animation-delay: 0.5s;
    }
    .img-container:nth-child(6) {
      animation-delay: 0.6s;
    }
    .img-container:nth-child(7) {
      animation-delay: 0.7s;
    }
    .img-container:nth-child(8) {
      animation-delay: 0.8s;
    }
  }

  &.in-viewport {
    .sidebars {
      opacity: 1;
    }

    .bars-container.left .sidebars {
      animation: slideInLeft 0.6s ease-out forwards;
    }

    .bars-container.right .sidebars {
      animation: slideInRight 0.6s ease-out forwards;
    }
  }
}
</style>
