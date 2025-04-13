function renderBookmarks(data = bookmarkData) {
  const container = document.getElementById('box_container');
  container.innerHTML = '';
  data.forEach(bookmark => {
      const boxDiv = document.createElement('div');
      boxDiv.className = 'box';

      const titleP = document.createElement('p');
      titleP.className = 'title';
      titleP.style.backgroundColor = generateBackgroundColor(bookmark.urlText);
      titleP.textContent = bookmark.urlText.charAt(0).toUpperCase();
      boxDiv.appendChild(titleP);

      const urlP = document.createElement('p');
      urlP.className = 'url';
      urlP.textContent = bookmark.urlText;
      boxDiv.appendChild(urlP);

      const linkA = document.createElement('a');
      linkA.href = bookmark.linkUrl;
      linkA.target = '_blank';
      linkA.title = bookmark.linkTitle || '';
      boxDiv.appendChild(linkA);

      container.appendChild(boxDiv);
  });
}

const showButton = () => document.getElementById('search_submit').style.display = 'block';
const hideButton = () => {
  const searchInput = document.getElementById('search_input');
  document.getElementById('search_submit').style.display = searchInput.value === '' ? 'none' : 'block';
  if (searchInput.value === '') renderBookmarks();
};

const search = () => {
  const searchInputValue = document.getElementById('search_input').value.toLowerCase();
  const filteredBookmarks = bookmarkData.filter(bookmark =>
      bookmark.urlText.toLowerCase().includes(searchInputValue) ||
      bookmark.linkUrl.toLowerCase().includes(searchInputValue) ||
      bookmark.linkTitle.toLowerCase().includes(searchInputValue)
  );
  renderBookmarks(filteredBookmarks);
  return false;
};

const baiduSearch = () => {
  const searchInputValue = document.getElementById('search_input').value;
  window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(searchInputValue)}`, '_blank');
  return false;
};

const generateBackgroundColor = (text) => {
  const colors = ['#282c34', '#3e4451', '#61afef', '#98c379', '#e5c07b', '#d19a66', '#c678dd', '#abb2bf', '#5c6370', '#e06c75'];
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

document.addEventListener('DOMContentLoaded', () => {
  renderBookmarks();
  document.getElementById('search_input').addEventListener('input', () => {
      const searchInputValue = document.getElementById('search_input').value.trim();
      searchInputValue ? search() : renderBookmarks();
  });
  document.getElementById('search_submit').addEventListener('click', baiduSearch);
});
