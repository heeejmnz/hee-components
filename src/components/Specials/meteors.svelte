<script>
  import Stars from "./stars.svelte";
</script>

<div class="absolute z-20 top-0 left-0 w-full h-screen overflow-hidden">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <Stars />
</div>

<style>
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 1px;
    background: #fff;
    border-radius: 50px;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
    animation: meteors 10s linear infinite;
  }
  span:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-70%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg , rgba(255, 255, 255, 0.5), transparent);
  }
@keyframes meteors {
  0% {
    transform:  rotate(315deg) translate(50%, 400px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: rotate(315deg) translate(-1000px, 400px) ;
    opacity: 0;
  }
}
  span:nth-child(1) {
    top: 0;
    right: 0;
    animation-delay: 2s;
    animation-duration: 9s;
  }
  span:nth-child(2) {
    top: -300px;
    right: 0px;
    animation-delay: 4s;
    animation-duration: 12s;
  }
  span:nth-child(3) {
    top: 400px;
    right: 0;
    animation-delay: 5s;
    animation-duration: 15s;
  }
  span:nth-child(4) {
    top: -500px;
    right: 0px;
    animation-delay: 7s;
    animation-duration: 12s;
  }
  span:nth-child(5) {
    top: 700px;
    right: 0px;
    animation-delay: 8s;
    animation-duration: 6s;
  }
  span:nth-child(6) {
    top: 900px;
    right: 0px;
    animation-delay: 5s;
    animation-duration: 7s;
  }
  span:nth-child(7) {
    top: 1000px;
    right: 0px;
    animation-delay: 2s;
    animation-duration: 12s;
  }
  span:nth-child(8) {
    top: -700px;
    right: 0px;
    animation-delay: 4s;
    animation-duration: 5s;
  }
  span:nth-child(9) {
    top: -900px;
    right: 0px;
    animation-delay: 1s;
    animation-duration: 12s;
  }
  span:nth-child(10) {
    top: -550px;
    right: 0px;
    animation-delay: 3s;
    animation-duration: 12s;
  }
</style>
