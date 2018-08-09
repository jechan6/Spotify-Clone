
export const fetchSong = id => (
  $.ajax({
    method: 'GET',
    url: `/api/songs/${id}`
  })
);
