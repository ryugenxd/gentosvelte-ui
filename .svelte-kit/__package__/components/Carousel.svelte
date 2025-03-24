<script lang="ts">
    import Icon from "@iconify/svelte"

    const {images} = $props();
    let index = $state(0);
    

    function next(){
         if (index < images.length - 1) {
              index++;
         }else {
              index = 0;
         }
    }

    function prev(){
         if (index > 0){
              index--;
         } else{
              index = images.length -1;
         }
    }

    function toIndex(i:number){
         index = i;
    }

    $effect(()=>{
         const interval = setInterval(() => {
           index += 1;
              if(index > images.length -1) {
                   index = 0;
              }
       }, 3000);

       return () => {
           clearInterval(interval);
       };
       
    })
</script>
<div class="flex justify-center items-center flex-col">
    
    <div class="flex max-[849px]:hidden items-center justify-center w-full">
         <Icon onclick={prev} icon="material-symbols:keyboard-arrow-left" class="text-white text-4xl hover:bg-[#3c2441c7] rounded-full" />
         <div class="flex items-center justify-center overflow-hidden max-w-[745px] w-full">
         
              <div class="flex w-full p-0 m-0" style="transition: transform 0.5s ease-in-out;transform: translateX(-{index * 100}%)">
                   {#each images as img }
                   <enhanced:img loading="lazy" class="max-w-[745px]  w-[auto] min-[858px]:h-[286px] h-[auto] flex-shrink-0"   src={img} alt={`image ${index}`} />
                   {/each}
              </div>
         </div>
         <Icon onclick={next} icon="material-symbols:keyboard-arrow-right" class="text-white text-4xl hover:bg-[#3c2441c7] rounded-full"/>
    </div>
    <!-- width max 636px -->
    <div class="hidden max-[849px]:flex items-center justify-center w-full">
         <div class="flex overflow-hidden">
         
              <div class="flex w-full p-0 m-0" style="transition: transform 0.5s ease-in-out;transform: translateX(-{index * 100}%)">
                   {#each images as img }
                   <enhanced:img loading="lazy" class="max-w-[849px]  w-[auto]  h-[auto] flex-shrink-0"   src={img} alt={`image ${index}`} />
                   {/each}
              </div>
         </div>
    </div>
    <!-- sparator -->
    <div class="flex justify-center items-center p-2 gap-2">
         {#each images as _ ,i }
              <button aria-label={`button ${i}`} onclick={()=>toIndex(i)} class={`w-[10px] h-[10px] rounded-full ${i == index ? "bg-white":"bg-[#3c2441c7]"}`}></button>
         {/each}
    </div>

</div>
