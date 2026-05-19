<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
      isInView.value = entry.isIntersecting;
    },
    {
      threshold: 0.2,
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
    class="jf-section jf-section--jetfuel-safety"
    :class="{ 'in-viewport': isInView }"
  >
    <div class="jf-section-cooling">
      <div class="jf-cooling-row">
        <div class="left-col">
          <div class="left-col-wrapper">
            <div class="title-content">
              <svg
                width="271"
                height="23"
                viewBox="0 0 271 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.2235 0V18.7013C36.2255 19.2651 36.1161 19.8237 35.9017 20.3451C35.6874 20.8666 35.3722 21.3405 34.9742 21.7399C34.5762 22.1392 34.1033 22.4561 33.5827 22.6723C33.062 22.8885 32.5037 22.9998 31.94 22.9998H4.29847C3.15845 22.9998 2.06511 22.5469 1.259 21.7408C0.452878 20.9347 0 19.8413 0 18.7013V12.6566H6.68651V16.373H29.537V0H36.2235Z"
                  fill="#ED1C24"
                />
                <path
                  d="M75.4028 0H44.0598C42.7773 0 41.5473 0.509482 40.6404 1.41637C39.7335 2.32325 39.224 3.55325 39.224 4.83578V6.6865H75.4028V0Z"
                  fill="#ED1C24"
                />
                <path
                  d="M153.268 0.0449215H121.925C120.658 0.0565999 119.446 0.565104 118.55 1.46107C117.654 2.35704 117.146 3.56888 117.134 4.83592V6.68664H153.268V0.0449215Z"
                  fill="#ED1C24"
                />
                <path
                  d="M114.656 0.0591246V6.74563H99.895V22.9992H93.2086V6.74563H78.4326V0.0591246H114.656Z"
                  fill="#ED1C24"
                />
                <path
                  d="M153.372 8.13376H123.818V8.11956H117.132V23H123.818V14.8203H153.372V8.13376Z"
                  fill="#ED1C24"
                />
                <path
                  d="M45.91 14.7759V16.2684H75.4469V22.9549H43.5667C42.9944 22.9549 42.4277 22.8422 41.8989 22.6232C41.3702 22.4042 40.8897 22.0831 40.485 21.6785C40.0803 21.2738 39.7593 20.7933 39.5403 20.2646C39.3213 19.7358 39.2085 19.1691 39.2085 18.5968V8.14912H75.4469V14.8505L45.91 14.7759Z"
                  fill="#ED1C24"
                />
                <path
                  d="M270.653 22.9992V16.3127H241.086V0.0591246H234.4V18.5216C234.4 19.7091 234.872 20.848 235.711 21.6877C236.551 22.5274 237.69 22.9992 238.877 22.9992H270.653Z"
                  fill="#ED1C24"
                />
                <path
                  d="M192.072 18.1783V0.0591246H185.446V16.3127H162.595V0.0591246H155.909V18.1783C155.909 19.4569 156.416 20.6831 157.321 21.5872C158.225 22.4913 159.451 22.9992 160.729 22.9992H187.266C188.542 22.9952 189.765 22.4856 190.666 21.5819C191.567 20.6783 192.072 19.4543 192.072 18.1783Z"
                  fill="#ED1C24"
                />
                <path
                  d="M199.983 0.0449452H231.326V6.68666H195.132V4.83594C195.144 3.5586 195.661 2.33782 196.57 1.44018C197.479 0.542532 198.706 0.0409479 199.983 0.0449452Z"
                  fill="#ED1C24"
                />
                <path
                  d="M201.835 16.3129V14.8204L231.417 14.8801V8.17868H195.178V18.6562C195.178 19.2278 195.291 19.7938 195.51 20.3217C195.729 20.8496 196.051 21.3291 196.456 21.7326C196.86 22.1361 197.341 22.4557 197.87 22.6731C198.398 22.8905 198.965 23.0014 199.536 22.9994H231.372V16.3129H201.835Z"
                  fill="#ED1C24"
                />
              </svg>

              <h1>saas cooling technology</h1>
            </div>
            <div class="wrapper-content">
              <div class="image-container">
                <div class="chart-01-animation">
                  <div class="chart-01-size">
                    <img :src="chart01" alt="" />
                  </div>
                </div>
                <div class="item-col">
                  <ul class="weather-list">
                    <div class="zoom-on-hover">
                      <li class="weather-item">PRECIPTION</li>
                    </div>
                    <div class="zoom-on-hover">
                      <li class="weather-item">TEMPERATURE</li>
                    </div>

                    <div class="zoom-on-hover">
                      <li class="weather-item">HUMIDITY</li>
                    </div>
                    <div class="zoom-on-hover">
                      <li class="weather-item">PRESSURE</li>
                    </div>
                  </ul>
                  <div class="zoom-on-hover">
                    <div class="chart08-animation">
                      <div class="chart-08-img">
                        <img :src="chart08" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="image-container">
                <div class="gallery-col">
                  <div class="gallery-row">
                    <div class="zoom-on-hover">
                      <div class="img-size">
                        <img :src="chart02" alt="" />
                      </div>
                    </div>
                    <div class="zoom-on-hover">
                      <div class="img-size">
                        <img :src="chart03" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="gallery-row">
                    <div class="zoom-on-hover">
                      <div class="img-size">
                        <img :src="chart04" alt="" />
                      </div>
                    </div>

                    <div class="zoom-on-hover">
                      <div class="img-size">
                        <img :src="chart05" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="zoom-on-hover">
                  <img :src="chart06" alt="" class="chart06" />
                </div>
              </div>
              <div>
                <ul class="bottom-list">
                  <li>
                    <div class="list-wrapper">
                      <div class="bottom-list-items">
                        <div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 20C12.7614 20 15.2614 18.8807 17.0711 17.0711C18.8807 15.2614 20 12.7614 20 10C20 7.2386 18.8807 4.7386 17.0711 2.92893C15.2614 1.11929 12.7614 0 10 0C7.2386 0 4.7386 1.11929 2.92893 2.92893C1.11929 4.7386 0 7.2386 0 10C0 12.7614 1.11929 15.2614 2.92893 17.0711C4.7386 18.8807 7.2386 20 10 20Z"
                              fill="#ED1C24"
                            />
                            <path
                              d="M6 10.001L9 13.001L15 7.00098"
                              stroke="white"
                              stroke-width="2.00455"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span> Unified dashboard with live data </span>
                      </div>
                      <div class="bottom-list-items">
                        <div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 20C12.7614 20 15.2614 18.8807 17.0711 17.0711C18.8807 15.2614 20 12.7614 20 10C20 7.2386 18.8807 4.7386 17.0711 2.92893C15.2614 1.11929 12.7614 0 10 0C7.2386 0 4.7386 1.11929 2.92893 2.92893C1.11929 4.7386 0 7.2386 0 10C0 12.7614 1.11929 15.2614 2.92893 17.0711C4.7386 18.8807 7.2386 20 10 20Z"
                              fill="#ED1C24"
                            />
                            <path
                              d="M6 10.001L9 13.001L15 7.00098"
                              stroke="white"
                              stroke-width="2.00455"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span> Predictive Alerts </span>
                      </div>
                      <div class="bottom-list-items">
                        <div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 20C12.7614 20 15.2614 18.8807 17.0711 17.0711C18.8807 15.2614 20 12.7614 20 10C20 7.2386 18.8807 4.7386 17.0711 2.92893C15.2614 1.11929 12.7614 0 10 0C7.2386 0 4.7386 1.11929 2.92893 2.92893C1.11929 4.7386 0 7.2386 0 10C0 12.7614 1.11929 15.2614 2.92893 17.0711C4.7386 18.8807 7.2386 20 10 20Z"
                              fill="#ED1C24"
                            />
                            <path
                              d="M6 10.001L9 13.001L15 7.00098"
                              stroke="white"
                              stroke-width="2.00455"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span> Historical trends and analysis </span>
                      </div>
                      <div class="bottom-list-items">
                        <div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 20C12.7614 20 15.2614 18.8807 17.0711 17.0711C18.8807 15.2614 20 12.7614 20 10C20 7.2386 18.8807 4.7386 17.0711 2.92893C15.2614 1.11929 12.7614 0 10 0C7.2386 0 4.7386 1.11929 2.92893 2.92893C1.11929 4.7386 0 7.2386 0 10C0 12.7614 1.11929 15.2614 2.92893 17.0711C4.7386 18.8807 7.2386 20 10 20Z"
                              fill="#ED1C24"
                            />
                            <path
                              d="M6 10.001L9 13.001L15 7.00098"
                              stroke="white"
                              stroke-width="2.00455"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span> Custom thresholds and zone monitoring </span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="hidden">
                  <span class="hidden-span"> see the dashboard in action </span>
                  <div class="button-hidden">
                    <button class="button-label-2" @click="showModal = true">
                      <div class="label">REQUEST A DEMO</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-col">
          <div class="right-col-content">
            <span>see the dashboard in action</span>
            <button class="button-label" @click="showModal = true">
              <div class="label">REQUEST A DEMO</div>
            </button>
          </div>
          <div class="subject">
            <img :src="subject" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <RequestDemo v-if="showModal" @close="showModal = false" />
</template>

<style lang="scss" scoped>
// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }
.jf-section-cooling {
  background-image: url('@/assets/images/section-saas-cooling-technology_bg-v01-7680x2204.jpg');
  background-position: center;
  background-size: auto 100%;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 980px) {
    display: flex;
  }
}

.jf-cooling-row {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;

  @media (max-width: 0px) {
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: center;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.left-col-wrapper {
  width: 950px;
  height: 890px;
  display: flex;
  background-color: #e5e5e5;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow: hidden;

  animation: slideDown 0.8s ease-out;

  @media (max-width: 930px) {
    width: 100%;
    height: 1900px;
    padding: 40px 20px;
  }

  @media (max-width: 880px) {
    width: 100%;
    height: 1910px;
  }
}

.left-col {
  padding-top: 10px;

  @media (max-width: 980px) {
    padding-right: 33px;
  }
}
.wrapper-content {
  width: 100%;
}

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
.title-content {
  padding-top: 80px;
  padding-bottom: 40px;

  > svg {
    animation: slideFromRight 1.4s ease forwards;
  }

  > h1 {
    font-weight: 600;
    font-size: 44px;
    color: #231f20;
    text-align: start;
    margin-right: 170px;
    text-transform: uppercase;
    padding-top: 8px;

    animation: slideFromRight 1.7s ease forwards;
  }

  @media (max-width: 980px) {
    padding-top: 40px;

    > h1 {
      font-size: 34px;
      margin-right: 0;
      text-align: center;
    }
  }

  @media (max-width: 580px) {
    > h1 {
      font-size: 26px;
    }
  }
}

.image-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-bottom: 20px;

  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
  }
}

.zoom-on-hover {
  &:hover {
    transform: scale(1.09) !important;
  }
}

@keyframes fallIn {
  from {
    transform: translateY(-50px) scale(1.25);
    opacity: 0;
  }

  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.chart-01-animation {
  &:hover {
    transform: scale(1.06);
  }
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.item-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@keyframes slideUp {
  from {
    transform: translateY(70px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.chart-08-img img {
  @media (max-width: 930px) {
    width: 800px;
    height: auto;
  }
}

.chart08-animation {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.09);
  }
}

.weather-list {
  display: flex;
  gap: 14px;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 980px) {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.weather-item {
  flex: 1;
  background: white;
  border-radius: 11px;
  padding: 15px;
  text-align: center;
  font-size: 10px;
  font-weight: 800;
  cursor: pointer;

  opacity: 0;

  transition: transform 0.2s ease;

  @media (max-width: 980px) {
    min-width: 140px;
  }

  @media (max-width: 580px) {
    font-size: 9px;
    padding: 8px;
  }
}

.weather-item:nth-child(1) {
  animation-delay: 0.2s;
}

.weather-item:nth-child(2) {
  animation-delay: 0.3s;
}

.weather-item:nth-child(3) {
  animation-delay: 0.4s;
}

.weather-item:nth-child(4) {
  animation-delay: 0.5s;
}

.gallery-col {
  display: flex;
  flex-direction: column;

  @media (max-width: 980px) {
    align-items: center;
  }
}

@keyframes slide {
  from {
    transform: translateY(70px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.gallery-col {
  display: flex;
  flex-direction: column;
}

.gallery-row {
  display: flex;
  gap: 12px;
  padding-bottom: 12px;

  opacity: 0;
}

.gallery-row:nth-child(1) {
  animation-delay: 0.4s;
}

.gallery-row:nth-child(2) {
  animation-delay: 0.6s;
}

@media (max-width: 880px) {
  .gallery-row {
    justify-content: center;
  }

  .gallery-row img {
    width: 100%;
    max-width: 450px;
    height: auto;
    display: block;
  }
}

.img-size {
  width: 100%;
  max-width: 320px;
}

.img-size img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 880px) {
  .chart-01-size {
    max-width: 880px;
  }
}

@media (max-width: 880px) {
  .img-size {
    width: 950px;
  }
}

@media (max-width: 580px) {
  .gallery-row {
    gap: 8px;
  }

  .gallery-row img {
    max-width: 150px;
  }
}

.chart06 {
  width: 530px;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.09);
  }

  transition: transform 0.3s ease;

  @media (max-width: 980px) {
    width: 100%;
    max-width: 500px;
  }
}

.bottom-list {
  list-style-type: none;
  padding-top: 40px;
  padding-left: 0;

  transition: transform 0.3s ease;
}

.list-wrapper {
  display: flex;
  flex-direction: row;
  gap: 29px;

  @media (max-width: 980px) {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.bottom-list-items {
  width: 190px;
  display: flex;
  gap: 8px;
  background-color: #e5e5e5;

  > span {
    font-weight: 700;
    font-size: 18px;
  }

  @media (max-width: 980px) {
    width: 100%;
    max-width: 320px;

    > span {
      font-size: 16px;
    }
  }

  @media (max-width: 580px) {
    > span {
      font-size: 14px;
    }
  }
}

.hidden {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  gap: 12px;

  @media (max-width: 3980px) {
    display: none;
  }

  @media (max-width: 980px) {
    display: flex;
  }
}

.hidden-span {
  font-family: Quattrocento Sans;
  font-weight: 700;
  font-size: 22px;
  text-transform: uppercase;
  color: rgb(0, 0, 0);

  @media (max-width: 1980px) {
    display: none;
  }

  @media (max-width: 980px) {
    display: flex;
  }
}

.button-label-2 {
  width: 216px;
  height: 40px;
  border-radius: 10px;
  background: red;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  align-items: center;

  @media (max-width: 1980px) {
    display: none;
  }

  @media (max-width: 980px) {
    display: flex;
    justify-content: center;
    min-width: 100%;
    max-width: 420px;
  }

  @media (max-width: 580px) {
    font-size: 16px;
  }
}
.right-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  min-height: 100vh;
}

.right-col-content {
  position: relative;

  top: -290px;
  right: -95px;

  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 980px) {
    display: none;
  }

  span {
    font-family: Quattrocento Sans;
    font-weight: 700;
    font-size: 22px;
    text-transform: uppercase;
    color: white;
  }
}

.button-label {
  min-width: 216px;
  height: 40px;
  border-radius: 14px;

  background: red;
  color: white;

  font-size: 18px;
  font-weight: 700;

  border: none;
  cursor: pointer;

  @media (max-width: 980px) {
    display: none;
  }
}

.subject {
  position: absolute;

  bottom: 13px;
  right: -280px;

  width: 800px;
  z-index: 1;

  pointer-events: none;

  @media (max-width: 980px) {
    display: none;
  }

  img {
    width: 85%;
    height: auto;
    display: block;
  }
}

.weather-item,
.chart-01-animation,
.chart08-animation,
.gallery-row,
.chart06,
.bottom-list {
  opacity: 0;
  transform: translateY(40px);
}

.in-viewport .weather-item {
  animation: slideUp 1s ease forwards;
}

.in-viewport .chart-01-animation {
  animation: fallIn 1s ease forwards;
}

.in-viewport .chart08-animation {
  animation: slideUp 1s ease forwards;
}

.in-viewport .gallery-row {
  animation: slide 0.8s ease forwards;
}

.in-viewport .chart06 {
  animation: slideUp 1.2s ease forwards;
}

.in-viewport .bottom-list {
  animation: slideUp 1.2s ease forwards;
}

.in-viewport .weather-item:nth-child(1) {
  animation-delay: 0.1s;
}
.in-viewport .weather-item:nth-child(2) {
  animation-delay: 0.2s;
}
.in-viewport .weather-item:nth-child(3) {
  animation-delay: 0.3s;
}
.in-viewport .weather-item:nth-child(4) {
  animation-delay: 0.4s;
}
</style>
