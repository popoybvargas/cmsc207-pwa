const homeNavLink = document.getElementById('homeNavLink');
const aboutNavLink = document.getElementById('aboutNavLink');
const contactNavLink = document.getElementById('contactNavLink');
const navMenus = [ homeNavLink, aboutNavLink, contactNavLink ];
const container = document.querySelector(".content-body");
let activeMenu = 'home';
let menus, mainMenuButtons, home, about, contact, contents, subContents;
var beverages, breakfast, burgers, pastries, snacks, desserts, beveragesContent, breakfastContent, burgersContent, pastriesContent, snacksContent, dessertsContent;
const subMenus = [ 'beverages', 'breakfast', 'burgers', 'pastries', 'snacks', 'desserts' ];

function handleNavbarClick(clickedNav)
{
  subContents.forEach(content => content.classList.add('hidden'));

  contents.forEach(content =>
  {
    if (content.id === clickedNav) content.classList.remove('hidden');
    else content.classList.add('hidden');
  });

  navMenus.forEach(nav =>
  {
    if (clickedNav === nav.id.replace('NavLink', '')) nav.classList.add('active');
    else nav.classList.remove('active');
  });
}

homeNavLink.addEventListener('click', () => handleNavbarClick('home'));
aboutNavLink.addEventListener('click', () => handleNavbarClick('about'));
contactNavLink.addEventListener('click', () => handleNavbarClick('contact'));

const footer = '<footer>food items & images are from <a href="https://www.mcdonalds.com" target="_blank">McDonald\'s</a> | for educational purposes only</footer>';

window.addEventListener('DOMContentLoaded', () =>
{
  menus =
  [
    {
      name: 'beverages',
      image: 'images/beverages.jpg',
      items:
      [
        { name: 'coca-cola', image: 'images/coca-cola.jpg' },
        { name: 'sprite', image: 'images/sprite.jpg' },
        { name: 'fanta orange', image: 'images/fanta_orange.jpg' }
      ]
    },
    {
      name: 'breakfast',
      image: 'images/breakfast.jpg',
      items:
      [
        { name: 'bacon, egg & cheese biscuit', image: 'images/bacon_egg_cheese_biscuit.jpg' },
        { name: 'egg mcMuffin', image: 'images/egg_mcmuffin.jpg' },
        { name: 'sausage mcMuffin', image: 'images/sausage_mcmuffin.jpg' },
        { name: 'sausage mcMuffin with egg', image: 'images/sausage_mcmuffin_with_egg.jpg' },
        { name: 'sausage biscuit', image: 'images/sausage_biscuit.jpg' }
      ]
    },
    {
      name: 'burgers',
      image: 'images/burgers.jpg',
      items:
      [
        { name: 'big mac', image: 'images/big_mac.jpg' },
        { name: 'quarter pounder w/ cheese', image: 'images/quarter_pounder_with_cheese.jpg' },
        { name: 'double quarter pounder w/ cheese', image: 'images/double_quarter_pounder_with_cheese.jpg' },
        { name: 'quarter pounder w/ cheese deluxe', image: 'images/quarter_pounder_with_cheese_deluxe.jpg' }
      ]
    },
    {
      name: 'pastries',
      image: 'images/pastries.jpg',
      items:
      [
        { name: 'apple fritter', image: 'images/apple_fritter.jpg' },
        { name: 'blueberry muffin', image: 'images/blueberry_muffin.jpg' },
        { name: 'cinnamon roll', image: 'images/cinnamon_roll.jpg' }
      ]
    },
    {
      name: 'snacks & sides',
      image: 'images/snacks_sides.jpg',
      items:
      [
        { name: 'world famous fries', image: 'images/fries.jpg' },
        { name: 'apple slices', image: 'images/apple_slices.jpg' },
        { name: 'minute maid blue raspberry slushie', image: 'images/minute_maid_blue_raspberry_slushie.jpg' },
        { name: 'minute maid pink lemonade slushie', image: 'images/minute_maid_pink_lemonade_slushie.jpg' },
      ]
    },
    {
      name: 'desserts & shakes',
      image: 'images/desserts_shakes.jpg',
      items:
      [
        { name: 'chocolate shake', image: 'images/chocolate_shake.jpg' },
        { name: 'vanilla shake', image: 'images/vanilla_shake.jpg' },
        { name: 'strawberry shake', image: 'images/strawberry_shake.jpg' },
        { name: 'vanilla cone', image: 'images/vanilla_cone.jpg' },
        { name: 'hot fudge sundae', image: 'images/hot_fudge_sundae.jpg' }
      ]
    }
  ];

  // main menu
  let content = '<div id="home"><div class="container">';

  subMenus.forEach(subMenu =>
  {
    window[`${subMenu}Content`] = `<div id="${subMenu}" class="hidden"><div class="container">`;
  });
  
  menus.forEach(menu =>
  {
    content +=
    `
      <div class="card">
        <img class="card--avatar" src=${menu.image} />
        <h1 class="card--title">${menu.name}</h1>
        <button class="card--link main-menu-btn" data-menu="${menu.name}">Select</button>
      </div>
    `;

    if (menu.name.startsWith('snacks'))
    {
      menu.items.forEach(subMenu =>
      {
        window['snacksContent'] +=
        `
          <div class="card">
            <img class="card--avatar" src=${subMenu.image} />
            <h1 class="card--title">${subMenu.name}</h1>
        `;
      
        window['snacksContent'] += (subMenu.name.length < 28) ? `<button class="card--link">Buy</button>` : '';
        window['snacksContent'] += '</div>';
      });
    }
    else if (menu.name.startsWith('desserts'))
    {
      menu.items.forEach(subMenu =>
      {
        window['dessertsContent'] +=
        `
          <div class="card">
            <img class="card--avatar" src=${subMenu.image} />
            <h1 class="card--title">${subMenu.name}</h1>
        `;
      
        window['dessertsContent'] += (subMenu.name.length < 28) ? `<button class="card--link">Buy</button>` : '';
        window['dessertsContent'] += '</div>';
      });
    }
    else
    {      
      menu.items.forEach(subMenu =>
      {
        window[`${menu.name}Content`] +=
        `
          <div class="card">
            <img class="card--avatar" src=${subMenu.image} />
            <h1 class="card--title">${subMenu.name}</h1>
        `;
      
        window[`${menu.name}Content`] += (subMenu.name.length < 28) ? `<button class="card--link">Buy</button>` : '';
        window[`${menu.name}Content`] += '</div>';
      });
    }
  });

  content += `</div>${footer}</div>`;

  container.insertAdjacentHTML('afterbegin', content);

  mainMenuButtons = document.querySelectorAll('.main-menu-btn');
  mainMenuButtons.forEach(btn => btn.addEventListener('click', e => showItems(e.target.dataset.menu)));

  subMenus.forEach(subMenu =>
  {
    window[`${subMenu}Content`] += `</div>${footer}</div>`;
    container.insertAdjacentHTML('beforeend', window[`${subMenu}Content`]);
  });

  // about 'page'
  content =
  `
    <div id="about" class="hidden">
      <h1>zV Café</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil pariatur quia totam vitae illo quam alias iure. Ratione quis nesciunt harum natus, dolore est, nam, quia dolorem saepe deleniti vero!</p>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta unde corrupti expedita, autem pariatur labore quis eos ab soluta recusandae porro quas, sed dolorem! Dicta rerum eos officia veniam soluta?</p>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', content);

  // contact us 'page'
  content =
  `
    <div id="contact" class="contact-card hidden">
      <div>
        <h1 class="card--title">Team zV</h1>
        <p>One Apple Park Way</p>
        <p>Cupertino, CA 95014</p>
        <p>(408) 996-1010</p>
        <br>
        <a class="card--link" href="#">Call</a>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', content);

  home = document.getElementById('home');
  about = document.getElementById('about');
  contact = document.getElementById('contact');
  contents = [ home, about, contact ];

  subMenus.forEach(subMenu =>
  {
    window[subMenu] = document.getElementById(subMenu);
  });
  subContents = [ beverages, breakfast, burgers, pastries, snacks, desserts ];
});

function showItems(menu)
{
  home.classList.add('hidden');
  
  subContents.forEach(content =>
  {
    if (menu.startsWith(content.id)) content.classList.remove('hidden');
    else content.classList.add('hidden');
  });
};

if ('serviceWorker' in navigator)
{
  window.addEventListener('load', function()
  {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(res => console.log('service worker registered'))
      .catch(err => console.log('service worker not registered', err))
  });
}