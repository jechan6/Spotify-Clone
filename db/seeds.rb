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

album2 = Album.create({title: "Acid rap", artist_id: a.id, year: 2013})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-acid+rap/chance-acidrap.jpg')
album2.photo.attach(io: photo, filename: 'chance-acidrap.jpg ')

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

song = Song.create!({title: 'Mixtape (feat Young Thug Lil Yachty)', artist_id: a.id, album_id: album.id})
file = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-coloring+book/Mixtape+(feat+Young+Thug+Lil+Yachty).mp3')
song.track.attach(io: file, filename: 'Mixtape (feat Young Thug Lil Yachty).mp3')

song = Song.create!({title: 'Summer Friends (feat Jeremih Francis, The Lights)', artist_id: a.id, album_id: album.id})
file = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-coloring+book/Summer+Friends+(feat+Jeremih+Francis%2C+The+Lights).mp3')
song.track.attach(io: file, filename: 'Summer Friends (feat Jeremih Francis, The Lights).mp3')



#ACID RAP ALBUM
song = Song.create!({title: 'Cocoa Butter Kisses', artist_id: a.id, album_id: album2.id})
file = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-acid+rap/Cocoa+Butter+Kisses.mp3')
song.track.attach(io: file, filename: 'Cocoa Butter Kisses.mp3')

song = Song.create!({title: "Everybody's Something", artist_id: a.id, album_id: album2.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/chance-acid+rap/Everybody's+Something.mp3")
song.track.attach(io: file, filename: "Everybody's Something.mp3")

song = Song.create!({title: 'Good Ass Intro', artist_id: a.id, album_id: album2.id})
file = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-acid+rap/Good+Ass+Intro.mp3')
song.track.attach(io: file, filename: 'Good Ass Intro.mp3')

song = Song.create!({title: "Interlude-That's Love", artist_id: a.id, album_id: album2.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/chance-acid+rap/Interlude-+That's+Love.mp3")
song.track.attach(io: file, filename: "Interlude- That's Love.mp3")

song = Song.create!({title: "Juice", artist_id: a.id, album_id: album2.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/chance-acid+rap/Juice.mp3")
song.track.attach(io: file, filename: "Juice.mp3")

song = Song.create!({title: "Lost", artist_id: a.id, album_id: album2.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/chance-acid+rap/Lost.mp3")
song.track.attach(io: file, filename: "Lost.mp3")

song = Song.create!({title: "Pusha Man", artist_id: a.id, album_id: album2.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/chance-acid+rap/Pusha+Man.mp3")
song.track.attach(io: file, filename: "Pusha Man.mp3")
