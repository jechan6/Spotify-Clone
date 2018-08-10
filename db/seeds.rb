require 'date'
require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all;
Song.destroy_all;
Artist.destroy_all;
Album.destroy_all;
u = User.create!({name: 'Jeffrey Chan', username: 'jeff', password:'123456', birthday: Date.new(2018)})
photo = File.open('app/assets/images/golden.jpg')
u.photo.attach(io: photo, filename: 'golden.jpg')

a = Artist.create({name: 'Chance The Rapper'})

album = Album.create({title: "Coloring Book", artist_id: a.id, year: 2016})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-coloring+book/+Chance_The_Rapper.jpg')
album.photo.attach(io: photo, filename: 'Chance_The_Rapper.jpg')

# song = Song.create!({title: 'All Night (feat Knox Fortune)', artist_id: 1, album_id: 2})
# file = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-coloring+book/All+Night+(feat+Knox+Fortune).mp3')
# song.track.attach(io: file, filename: 'All Night (feat Knox Fortune).mp3')
song = Song.create!({title: 'All We Got', artist_id: a.id, album_id: album.id})
file = open('https://s3.console.aws.amazon.com/s3/object/musicon-dev/chance-coloring%2520book/All%2520We%2520Got%2520.mp3?region=us-east-1&tab=overview')
song.track.attach(io: file, filename: 'All We Got.mp3')

song = Song.create!({title: 'Angels (feat. Saba)', artist_id: a.id, album_id: album.id})
file = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-coloring+book/Angels+(feat.+Saba).mp3')
song.track.attach(io: file, filename: 'Angels (feat. Saba).mp3')

song = Song.create!({title: 'Blessings', artist_id: a.id, album_id: album.id})
file = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-coloring+book/Blessings.mp3')
song.track.attach(io: file, filename: 'Blessings.mp3')

song = Song.create!({title: 'DRAM Sings Special', artist_id: a.id, album_id: album.id})
file = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-coloring+book/DRAM+Sings+Special.mp3')
song.track.attach(io: file, filename: 'DRAM Sings Special.mp3')

song = Song.create!({title: 'Juke Jam (feat Justin Bieber, Towkio)', artist_id: a.id, album_id: album.id})
file = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-coloring+book/Juke+Jam+(feat+Justin+Bieber%2C+Towkio).mp3')
song.track.attach(io: file, filename: 'Juke Jam (feat Justin Bieber, Towkio).mp3')
