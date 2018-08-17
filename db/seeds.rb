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
Playlist.destroy_all;

u = User.create!({name: 'Jeffrey Chan', username: 'jeff', password:'123456', birthday: Date.new(2018)})
photo = File.open('app/assets/images/golden.jpg')
u.photo.attach(io: photo, filename: 'golden.jpg')

a = Artist.create({name: 'Chance The Rapper'})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/Chance.jpg')
a.photo.attach(io: photo, filename: 'Chance.jpg')

a2 = Artist.create({name: 'Logic'})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/logic.jpg')
a2.photo.attach(io: photo, filename: 'logic.jpg')

a3 = Artist.create({name: 'Drake'})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/Cover.jpg')
a3.photo.attach(io: photo, filename: 'Cover.jpg')

a4 = Artist.create({name: 'Anderson.Paak'})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/anderson.pak/anderson_pic.jpg')
a4.photo.attach(io: photo, filename: 'anderson_pic.jpg')


album = Album.create({title: "Coloring Book", artist_id: a.id, year: 2016})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-coloring+book/+Chance_The_Rapper.jpg')
album.photo.attach(io: photo, filename: 'Chance_The_Rapper.jpg')

album2 = Album.create({title: "Acid rap", artist_id: a.id, year: 2013})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/chance-acid+rap/chance-acidrap.jpg')
album2.photo.attach(io: photo, filename: 'chance-acidrap.jpg ')

album3 = Album.create({title: "Young Sinatra", artist_id: a2.id, year: 2013})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/young_sinatra.jpg')
album3.photo.attach(io: photo, filename: 'Logic_Welcome_To_Forever.jpg')

album4= Album.create({title: "Scorpion", artist_id: a3.id, year: 2018})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/Cover.jpg')
album4.photo.attach(io: photo, filename: 'Cover.jpg')

album5= Album.create({title: "Cover Art", artist_id: a4.id, year: 2018})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/anderson.pak/anderson.jpg')
album5.photo.attach(io: photo, filename: 'Cover.jpg')


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


#Young Sinatra Album

song = Song.create!({title: "Feel Good", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/Feel+Good.mp3")
song.track.attach(io: file, filename: "Feel Good.mp3")

song = Song.create!({title: "Ballin (feat. Castro)", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/Ballin+(feat.+Castro).mp3")
song.track.attach(io: file, filename: "Ballin (feat. Castro).mp3")

song = Song.create!({title: "5AM", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/5AM.mp3")
song.track.attach(io: file, filename: "5AM.mp3")

song = Song.create!({title: "925", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/925.mp3")
song.track.attach(io: file, filename: "925.mp3")

song = Song.create!({title: "Nasty", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/Nasty.mp3")
song.track.attach(io: file, filename: "Nasty.mp3")

song = Song.create!({title: "Break It Down (feat. Jhene Aiko)", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/Break+It+Down+(feat.+Jhene+Aiko).mp3")
song.track.attach(io: file, filename: "Break It Down (feat. Jhene Aiko).mp3 ")

song = Song.create!({title: "Life Is Good", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/Life+Is+Good.mp3")
song.track.attach(io: file, filename: "Life Is Good.mp3 ")

song = Song.create!({title: "On The Low(feat. Kid Ink Trinidad Jame)", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/On+The+Low(feat.+Kid+Ink+Trinidad+Jame).mp3")
song.track.attach(io: file, filename: "On The Low(feat. Kid Ink Trinidad Jame).mp3")

song = Song.create!({title: "Roll Call", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/Roll+Call.mp3")
song.track.attach(io: file, filename: "Roll Call.mp3")

song = Song.create!({title: "The Come Up", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/The+Come+Up.mp3")
song.track.attach(io: file, filename: "The Come Up.mp3")

song = Song.create!({title: "Walk On By", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/Walk+On+By.mp3")
song.track.attach(io: file, filename: "Walk On By.mp3")

song = Song.create!({title: "Welcome To Forever (feat. Jon Bellion)", artist_id: a2.id, album_id: album3.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/logic-young+sinatra/Welcome+To+Forever+(feat.+Jon+Bellion).mp3")
song.track.attach(io: file, filename: "Welcome To Forever (feat. Jon Bellion)")


#SCORPION ALBUM
song = Song.create!({title: "8 Out Of 10", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/+8+Out+Of+10.mp3")
song.track.attach(io: file, filename: "8 Out Of 10.mp3")

song = Song.create!({title: "Can't Take a Joke", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/Can't+Take+a+Joke.mp3")
song.track.attach(io: file, filename: "Can't Take a Joke.mp3")

song = Song.create!({title: "Elevate", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/Elevate+.mp3")
song.track.attach(io: file, filename: "Elevate.mp3")

song = Song.create!({title: "Emotionless", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/Emotionless.mp3")
song.track.attach(io: file, filename: "Emotionless.mp3")

song = Song.create!({title: "God's Plan", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/God's+Plan.mp3")
song.track.attach(io: file, filename: "God's Plan.mp3")

song = Song.create!({title: "I'm Upset", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/I'm+Upset.mp3")
song.track.attach(io: file, filename: "God's Plan.mp3")

song = Song.create!({title: "Mob Ties", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/Mob+Ties.mp3")
song.track.attach(io: file, filename: "Mob Ties.mp3")

song = Song.create!({title: "Nonstop", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/Nonstop.mp3")
song.track.attach(io: file, filename: "Nonstop.mp3")

song = Song.create!({title: "Sandra's Rose", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/Sandra's+Rose.mp3")
song.track.attach(io: file, filename: "Sandra's Rose.mp3")

song = Song.create!({title: "Survival", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/Survival.mp3")
song.track.attach(io: file, filename: "Survival.mp3")

song = Song.create!({title: "Talk Up (feat. JAY-Z)", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/Talk+Up+(feat.+JAY-Z).mp3")
song.track.attach(io: file, filename: "Talk Up (feat. JAY-Z).mp3")

song = Song.create!({title: "That's How You Feel", artist_id: a3.id, album_id: album4.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/drake-scorpion/That's+How+You+Feel.mp3")
song.track.attach(io: file, filename: "That's How You Feel.mp3")


##COVER ART
song = Song.create!({title: "Blackbird", artist_id: a4.id, album_id: album5.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/anderson.pak/Blackbird.mp3")
song.track.attach(io: file, filename: "Blacbird.mp3")

song = Song.create!({title: "Heart of Gold", artist_id: a4.id, album_id: album5.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/anderson.pak/Heart+of+Gold.mp3")
song.track.attach(io: file, filename: "Heart of Gold.mp3")

song = Song.create!({title: "Hold The Line ft. Roquel Rodriguez", artist_id: a4.id, album_id: album5.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/anderson.pak/Hold+The+Line+ft.+Roquel+Rodriguez.mp3")
song.track.attach(io: file, filename: "Hold The Line ft. Roquel Rodriguez.mp3")

song = Song.create!({title: "Maps", artist_id: a4.id, album_id: album5.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/anderson.pak/Maps.mp3")
song.track.attach(io: file, filename: "Maps.mp3")

song = Song.create!({title: "Seven Nation Army", artist_id: a4.id, album_id: album5.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/anderson.pak/Seven+Nation+Army.mp3")
song.track.attach(io: file, filename: "Seven Nation Army.mp3")

song = Song.create!({title: "Such Great Heights", artist_id: a4.id, album_id: album5.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/anderson.pak/Such+Great+Heights.mp3")
song.track.attach(io: file, filename: "Such Great Heights.mp3")
