<template>
  <div class="static">
    <div class="flex justify-center lg:float-right">
        <button 
            class='switch'
            id='switch'
          >
            <router-link to="/">
              <span>ES</span>
            </router-link>
            <router-link to="/eng">
              <img src="../assets/united-kingdom.svg.png" width="50" height="50" alt="Bandera Reino Unido">
            </router-link>
        </button>
    </div>
    <Disclosure as="nav" class="flex sm:justify-center" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <!-- Mobile menu button-->
                  <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                      <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
                  </DisclosureButton>
              </div>

              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div class="hidden sm:block sm:ml-6">
                      <div class="flex space-x-4">
                        <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <DisclosurePanel class="sm:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
              <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
          </div>
      </DisclosurePanel>
    </Disclosure>
  </div>

    <!-- TODO: Add hobbies button -->
</template>

<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

    import '../assets/css/language.css'

    const navigation = [
        { name: 'Inicio', href: '#', current: true },
        { name: 'Sobre mí', href: '#sobre-mi', current: false },
        { name: 'Habilidades Blandas', href: '#habilidades-blandas', current: false },
        { name: 'Proyectos', href: '#proyectos', current: false },
        { name: 'Intereses', href: '#intereses', current: false },
    ]
</script>

<style scoped>
    a {
        cursor: pointer;
    }
</style>