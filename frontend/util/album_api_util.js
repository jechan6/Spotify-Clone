export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/${id}`
  })
);

export const fetchAlbums = () => (
  $.ajax({
    method: 'GET',
    url: '/api/albums'
  })
);
