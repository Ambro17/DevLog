<template>
    <footer class="bg-white">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div>
            <div class="text-sm text-gray-600 mr-2">Made with ❤ by Nahuel Ambrosini</div>
          </div>

          <div class="flex items-center -mx-2">
            <div class="mercadopago-div">
              <script
                type="application/javascript" defer 
                src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                data-preference-id="143169574-8f08f596-4758-43fb-8ee7-5390b05a2909"
                data-button-label="Donate ☕">
              </script>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>
<style>
button.mercadopago-button {
  padding: 0 1rem;
}
</style>