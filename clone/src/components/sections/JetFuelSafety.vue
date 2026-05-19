<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

import background from '@/assets/images/section-saas-cooling-technology_bg-v01-7680x2204.jpg';
import logo from '@/assets/images/JetFuelLogo.jpg';
import chart01 from '@/assets/images/chart-01.svg';
import chart08 from '@/assets/images/chart-08.svg';

import chart02 from '@/assets/images/chart-02.svg';
import chart03 from '@/assets/images/chart-03.svg';
import chart04 from '@/assets/images/chart-04.svg';
import chart05 from '@/assets/images/chart-05.svg';
import chart06 from '@/assets/images/chart-06.svg';
import chart07 from '@/assets/images/chart-07.svg';

import subject from '@/assets/images/cooling-fg.png';

import RequestDemo from '../modal/RequestDemo.vue';

const sectionRef = ref(null);
const isInView = ref(false);
const showModal = ref(false);

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isInView.value = false;

        setTimeout(() => {
          isInView.value = true;
        }, 50);
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
  <Header class="site-header"></Header>

  <section
    ref="sectionRef"
    class="jf-section jf-section--jetfuel-safety"
    :class="{ 'in-viewport': isInView }"
  >
    <div class="background-strip"></div>

    <div class="container">
      <div class="jf-col-row">
        <div class="jf-col-left">
          <h1>JETFUEL SAFETY</h1>
          <h2>
            PREDICTIVE SAFETY. <br />
            SMARTER ENVIRONMENTS
          </h2>
          <h3>
            Safety is no longer reactive-it's predictive. Data that protects.
            Intelligence that saves. Welcome to the future of indoor wellness
          </h3>
          <button class="button-label" @click="showModal = true">
            <div class="label">REQUEST A DEMO</div>
          </button>
        </div>

        <div class="jf-col-right">
          <div class="chart-wrap">
            <ul class="weather-list">
              <li class="weather-item">PRECIPTION</li>
              <li class="weather-item">TEMPERATURE</li>
              <li class="weather-item">HUMIDITY</li>
              <li class="weather-item">PRESSURE</li>
            </ul>

            <div class="image-col">
              <div class="zoom-on-hover">
                <img :src="chart01" />
              </div>

              <div class="image-gallery">
                <div class="image-row">
                  <div class="zoom-on-hover">
                    <img :src="chart02" />
                  </div>
                  <div class="zoom-on-hover">
                    <img :src="chart03" />
                  </div>
                </div>

                <div class="image-row2">
                  <div class="zoom-on-hover">
                    <img :src="chart04" />
                  </div>
                  <div class="zoom-on-hover">
                    <img :src="chart05" />
                  </div>
                </div>
              </div>
            </div>

            <div class="side-images">
              <div class="zoom-on-hover">
                <img :src="chart06" />
              </div>
              <div class="zoom-on-hover">
                <img :src="chart07" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <RequestDemo v-if="showModal" @close="showModal = false" />
</template>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.site-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: transparent;
}

.jf-section--jetfuel-safety {
  position: relative;
  background:
    linear-gradient(
      65deg,
      rgba(35, 31, 32, 0.6) -2.12%,
      rgba(184, 184, 184, 0.6) 47.27%,
      rgba(35, 31, 32, 0.6) 101.65%
    ),
    linear-gradient(0deg, rgba(35, 31, 32, 0.4) 0%, rgba(35, 31, 32, 0.4) 100%),
    linear-gradient(229deg, #ffffff 17.03%, #999 79.75%);
  min-height: 100vh;
  width: 100%;
  overflow: hidden;

  .background-strip {
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    background: #231f20;
    z-index: 1;
  }

  @keyframes slideRight {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .container {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    min-height: 100vh;
    max-width: 1600px;
    margin: 0 auto;
    padding: 80px 40px;
    box-sizing: border-box;
  }

  .jf-col-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 180px;
    width: 100%;
  }

  .jf-col-left {
    flex: 1;
    max-width: 700px;
    margin-left: 60px;
    color: white;

    @keyframes slideFromRight {
      from {
        transform: translateX(50%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    h1 {
      font-family: Oswald;
      font-size: 77px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -2px;
      margin-bottom: 20px;

      animation-delay: 0s;
    }

    h2 {
      font-family: Oswald;
      font-size: 45px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -1px;
      margin-bottom: 40px;
      max-width: 900px;

      animation-delay: 0.2s;
    }

    h3 {
      font-size: 18px;
      line-height: 1.25;
      max-width: 585px;
      margin-bottom: 60px;

      animation-delay: 0.4s;
    }

    .button-label {
      min-width: 216px;
      height: 40px;
      border-radius: 16px;
      background: red;
      color: white;
      font-size: 18px;
      font-weight: 700;
      border: none;
      cursor: pointer;

      animation-delay: 0.3s;
    }
  }

  .jf-col-right {
    flex: 1;
    max-width: 850px;
    width: 100%;
    position: relative;

    .chart-wrap {
      display: flex;
      flex-direction: column;
      gap: 13px;
      width: 100%;
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

    .weather-list {
      display: flex;
      gap: 14px;
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .weather-item {
      flex: 1;
      background: white;
      border-radius: 11px;
      padding: 10px;
      text-align: center;
      font-size: 10px;
      font-weight: 800;
      cursor: pointer;

      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05) !important;
      }
    }

    .image-col {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 100%;

      > .zoom-on-hover {
        flex: 1 1 56%;
      }

      .image-gallery {
        flex: 1 1 40%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .image-row,
        .image-row2 {
          display: flex;
          gap: 10px;

          .zoom-on-hover {
            flex: 1;
            opacity: 0;
          }
        }

        .image-row .zoom-on-hover:nth-child(1) {
          animation-delay: 0.1s;
        }
        .image-row .zoom-on-hover:nth-child(2) {
          animation-delay: 0.3s;
        }
        .image-row2 .zoom-on-hover:nth-child(1) {
          animation-delay: 0.4s;
        }
        .image-row2 .zoom-on-hover:nth-child(2) {
          animation-delay: 0.5s;
        }
      }
    }

    .side-images {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .zoom-on-hover {
      opacity: 0;
      transform: scale(0.85);

      transition: transform 0.3s ease;
      transform-origin: center;
      will-change: transform;

      &:hover {
        transform: scale(1.05) !important;
      }

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    .side-images .zoom-on-hover:nth-child(1) {
      animation-delay: 0.9s;
    }
    .side-images .zoom-on-hover:nth-child(2) {
      animation-delay: 1.2s;
    }
  }

  &.in-viewport {
    .jf-col-left {
      h1 {
        animation: slideFromRight 1s ease forwards;
      }

      h2 {
        animation: slideFromRight 1s ease forwards;
        animation-delay: 0.2s;
      }

      h3 {
        animation: slideFromRight 1s ease forwards;
        animation-delay: 0.4s;
      }

      .button-label {
        animation: slideFromRight 1s ease forwards;
        animation-delay: 0.6s;
      }
    }

    .weather-item {
      animation: scaleIn 0.8s ease forwards;
    }

    /* ALL IMAGES */
    .zoom-on-hover:nth-of-type(1) {
      animation: scaleIn 0.8s ease forwards;
      animation-delay: 0.1s;
    }

    .zoom-on-hover:nth-of-type(2) {
      animation: scaleIn 0.8s ease forwards;
      animation-delay: 0.2s;
    }

    .zoom-on-hover:nth-of-type(3) {
      animation: scaleIn 0.8s ease forwards;
      animation-delay: 0.3s;
    }

    .zoom-on-hover:nth-of-type(4) {
      animation: scaleIn 0.8s ease forwards;
      animation-delay: 0.4s;
    }

    .zoom-on-hover:nth-of-type(5) {
      animation: scaleIn 0.8s ease forwards;
      animation-delay: 0.5s;
    }

    .zoom-on-hover:nth-of-type(6) {
      animation: scaleIn 0.8s ease forwards;
      animation-delay: 0.6s;
    }

    .zoom-on-hover:nth-of-type(7) {
      animation: scaleIn 0.8s ease forwards;
      animation-delay: 0.7s;
    }
  }

  @media (max-width: 1200px) {
    .jf-col-row {
      gap: 80px;
    }

    .jf-col-left {
      margin-left: 0;
      h1 {
        font-size: 58px;
      }
      h2 {
        font-size: 38px;
      }
    }
  }

  @media (max-width: 980px) {
    .container {
      padding: 120px 20px 60px;
    }

    .jf-col-row {
      flex-direction: column;
      gap: 60px;
      align-items: center;
    }

    .jf-col-left {
      max-width: 100%;
      margin: 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      text-align: left;

      h1 {
        font-size: 120px;
        padding-left: 30px;
      }
      h2 {
        font-size: 70px;
        margin-bottom: 24px;
        padding-left: 30px;
      }
      h3 {
        font-size: 22px;
        margin-bottom: 40px;
        padding-left: 30px;
      }
    }

    .jf-col-right {
      max-width: 100%;
      width: 100%;
    }
    .weather-list {
      flex-wrap: wrap;
      justify-content: center;
    }
    .weather-item {
      min-width: 140px;
    }
    .image-col {
      flex-direction: column;
    }
    .image-gallery {
      width: 100%;
    }
    .image-row,
    .image-row2 {
      justify-content: center;
    }
    .side-images {
      width: 100%;
    }
    .zoom-on-hover img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  @media (max-width: 930px) {
    .container {
      padding: 100px 16px 40px;
    }

    .jf-col-left {
      h1 {
        font-size: 40px;
        letter-spacing: -1px;
      }
      h2 {
        font-size: 26px;
      }
      h3 {
        font-size: 14px;
        line-height: 1.5;
      }
      .button-label {
        width: 300px;
        max-width: 320px;
        font-size: 16px;
        background: red;
      }
    }

    .weather-list {
      gap: 10px;
      display: flex;
      flex-direction: row;
    }
    .weather-item {
      min-width: calc(50% - 10px);
      font-size: 9px;
      padding: 8px;
    }
    .image-row,
    .image-row2 {
      gap: 8px;
    }
    .image-gallery {
      gap: 8px;
    }
    .chart-wrap {
      gap: 10px;
    }
    .side-images {
      gap: 8px;
    }
  }

  @media (max-width: 980px) {
    .container {
      padding: 120px 20px 60px;
    }

    .jf-col-row {
      flex-direction: column;
      gap: 60px;
      align-items: center;
    }

    .jf-col-left {
      max-width: 100%;
      margin: 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      text-align: left;

      h1 {
        font-size: 120px;
        padding-left: 30px;
      }
      h2 {
        font-size: 70px;
        margin-bottom: 24px;
        padding-left: 30px;
      }
      h3 {
        font-size: 22px;
        margin-bottom: 40px;
        padding-left: 30px;
      }
    }

    .jf-col-right {
      max-width: 100%;
      width: 100%;
    }
    .weather-list {
      flex-wrap: wrap;
      justify-content: center;
    }
    .weather-item {
      min-width: 140px;
    }
    .image-col {
      flex-direction: column;
    }
    .image-gallery {
      width: 100%;
    }
    .image-row,
    .image-row2 {
      justify-content: center;
    }
    .side-images {
      width: 100%;
    }
    .zoom-on-hover img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  @media (max-width: 780px) {
    .container {
      padding: 100px 16px 40px;
    }

    .jf-col-left {
      h1 {
        font-size: 40px;
        letter-spacing: -1px;
      }
      h2 {
        font-size: 26px;
      }
      h3 {
        font-size: 14px;
        line-height: 1.5;
      }
      .button-label {
        width: 100%;
        max-width: 320px;
        font-size: 16px;
        background: red;
      }
    }

    .weather-list {
      gap: 10px;
      display: flex;
      flex-direction: row;
    }
    .weather-item {
      min-width: calc(50% - 10px);
      font-size: 9px;
      padding: 8px;
    }
    .image-row,
    .image-row2 {
      gap: 8px;
    }
    .image-gallery {
      gap: 8px;
    }
    .chart-wrap {
      gap: 10px;
    }
    .side-images {
      gap: 8px;
    }
  }
}
</style>
