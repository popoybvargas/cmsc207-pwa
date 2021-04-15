const staticzVCafe = "dev-zv-cafe-v1";
const assets =
[
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/beverages.jpg",
  "/images/coca-cola.jpg",
  "/images/sprite.jpg",
  "/images/fanta_orange.jpg",
  "/images/breakfast.jpg",
  "/images/bacon_egg_cheese_biscuite.jpg",
  "/images/egg_mcmuffin.jpg",
  "/images/sausage_mcmuffin.jpg",
  "/images/sausage_mcmuffin_with_egg.jpg",
  "/images/sausage_biscuit.jpg",
  "/images/burgers.jpg",
  "/images/big_mac.jpg",
  "/images/quarter_pounder_with_cheese.jpg",
  "/images/double_quarter_pounder_with_cheese.jpg",
  "/images/quarter_pounder_with_cheese_deluxe.jpg",
  "/images/pastries.jpg",
  "/images/apple_fritter.jpg",
  "/images/blueberry_muffin.jpg",
  "/images/cinnamon_roll.jpg",
  "/images/snacks_sides.jpg",
  "/images/fries.jpg",
  "/images/apple_slices.jpg",
  "/images/minute_maid_blue_raspberry_slushie.jpg",
  "/images/minute_maid_pink_lemonade_slushie.jpg",
  "/images/desserts_shakes.jpg",
  "/images/chocolate_shake.jpg",
  "/images/vanilla_shake.jpg",
  "/images/strawberry_shake.jpg",
  "/images/vanilla_cone.jpg",
  "/images/hot_fudge_sundae.jpg"
];

self.addEventListener('install', installEvent =>
{
  installEvent.waitUntil(
    caches.open(staticzVCafe).then(cache =>
		{
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', fetchEvent =>
{
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res =>
		{
      return res || fetch(fetchEvent.request);
    })
  );
});