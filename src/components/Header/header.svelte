<script>
  import Meteors from "../Specials/meteors.svelte";
  import HeaderTexts from "../Header/header-texts.svelte";
  import HTMLIcon from "../Header/html-icon.svelte";
  import TailwindIcon from "./tailwind-icon.svelte";
  import ArrowsRight from "../Icons/arrows-right.svelte";
</script>


<header class="text-center relative z-30 left-0 right-0 pt-36 container mx-auto overflow-hidden">
  <HTMLIcon />
  <TailwindIcon />
  <HeaderTexts />
  <a href="#" class="leading-none inline-block px-[7px] py-[7px] bg-[#111C25]/50 border-[1px] border-[#1A2836] rounded-xl backdrop-blur-xl transition-colors cursor-pointer">
    <span class="inline-flex items-center bg-[#15212C] hover:bg-[#182531] outline outline-[1px] outline-[#284056] hover:outline-[#28435B] py-[10px] px-[8px] rounded-md shadow-black hover:shadow-neutral-950 shadow-lg transition-all">
      <span class="">Empezar ahora</span>
      <ArrowsRight />
    </span>
  </a>
</header>

<div class="w-full absolute top-0 z-10 h-screen bg-gradient-to-b from-[#15222E] to-[#090E13]/80"></div>
<Meteors />
