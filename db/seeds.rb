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

a5 = Artist.create({name: 'Ed Sheeran'})
photo = File.open('app/assets/images/ed-sheeran.jpg')
a5.photo.attach(io: photo, filename: 'ed-sheeran.jpg')

a6 = Artist.create({name: 'Khalid'})
photo = File.open('app/assets/images/khalid.jpg')
a6.photo.attach(io: photo, filename: 'khalid.jpg')

a7 = Artist.create({name: 'Taylor Swift'})
photo = File.open('app/assets/images/taylor_swift.jpg')
a7.photo.attach(io: photo, filename: 'taylor_swift.jpg')

a8 = Artist.create({name: 'Kendrick Lamar'})
photo = File.open('app/assets/images/kendrick_lamar.jpg')
a8.photo.attach(io: photo, filename: 'kendrick_lamar.jpg')

a9 = Artist.create({name: 'Post Malone'})
photo = File.open('app/assets/images/post_malone.jpg')
a9.photo.attach(io: photo, filename: 'post_malone.jpg')



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

album6= Album.create({title: "X", artist_id: a5.id, year: 2014})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/ed_sheeran_x.jpg')
album6.photo.attach(io: photo, filename: 'ed_sheeran_x.jpg')

album7= Album.create({title: "Divide", artist_id: a5.id, year: 2017})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/divide.jpg')
album7.photo.attach(io: photo, filename: 'divide.jpg')

album8= Album.create({title: "American Teen", artist_id: a6.id, year: 2017})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/cover.jpg')
album8.photo.attach(io: photo, filename: 'cover.jpg')

album9= Album.create({title: "Red", artist_id: a7.id, year: 2012})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/cover.jpg')
album9.photo.attach(io: photo, filename: 'cover.jpg')

album10= Album.create({title: "1989", artist_id: a7.id, year: 2014})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/1989/cover.jpg')
album10.photo.attach(io: photo, filename: 'cover.jpg')

album11= Album.create({title: "DAMN", artist_id: a8.id, year: 2017})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/kendrick-dam/Cover.jpg')
album11.photo.attach(io: photo, filename: 'Cover.jpg')

album12= Album.create({title: "Stoney", artist_id: a9.id, year: 2016})
photo = open('https://s3-us-west-1.amazonaws.com/musicon-dev/post-malone-stoney/Post+Malone+%E2%80%93+Stoney+(Deluxe+Edition).jpg')
album12.photo.attach(io: photo, filename: 'Post Malone – Stoney (Deluxe Edition).jpg')


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

##X ALBUM

song = Song.create!({title: "Afire Love", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/Afire+Love.mp3")
song.track.attach(io: file, filename: "Afire Love.mp3")

song = Song.create!({title: "Bloodstream", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/Bloodstream.mp3")
song.track.attach(io: file, filename: "Bloodstream.mp3")

song = Song.create!({title: "Don't", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/Don_t.mp3")
song.track.attach(io: file, filename: "Don_t.mp3")

song = Song.create!({title: "Even My Dad Does Sometimes", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/Even+My+Dad+Does+Sometimes.mp3")
song.track.attach(io: file, filename: "Even My Dad Does Sometimes.mp3")

song = Song.create!({title: "I See Fire", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/I+See+Fire.mp3")
song.track.attach(io: file, filename: "I See Fire.mp3")

song = Song.create!({title: "I'm a Mess", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/I_m+a+Mess.mp3")
song.track.attach(io: file, filename: "I_m a Mess.mp3")

song = Song.create!({title: "One", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/One.mp3")
song.track.attach(io: file, filename: "One")

song = Song.create!({title: "Nina", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/Nina.mp3")
song.track.attach(io: file, filename: "Nina.mp3")

song = Song.create!({title: "Photograph", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/Photograph.mp3")
song.track.attach(io: file, filename: "Photograph.mp3")

song = Song.create!({title: "Runaway", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/Runaway.mp3")
song.track.attach(io: file, filename: "Runaway.mp3")

song = Song.create!({title: "Shirtsleeves", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/Shirtsleeves.mp3")
song.track.attach(io: file, filename: "Shirtsleeves.mp3")

song = Song.create!({title: "Sing", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/Sing.mp3")
song.track.attach(io: file, filename: "Sing.mp3")

song = Song.create!({title: "Take It Back", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/Take+It+Back.mp3")
song.track.attach(io: file, filename: "Take It Back.mp3")

song = Song.create!({title: "Thinking Out Loud", artist_id: a5.id, album_id: album6.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-x/Thinking+Out+Loud.mp3")
song.track.attach(io: file, filename: "Thinking Out Loud.mp3")

## DIVIDE ALBUM
song = Song.create!({title: "Galway Girl", artist_id: a5.id, album_id: album7.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/Galway+Girl.mp3")
song.track.attach(io: file, filename: "Galway Girl.mp3")

song = Song.create!({title: "Happier", artist_id: a5.id, album_id: album7.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/Happier.mp3")
song.track.attach(io: file, filename: "Happier.mp3")

song = Song.create!({title: "Hearts Don't Break Around Here", artist_id: a5.id, album_id: album7.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/Hearts+Don't+Break+Around+Here.mp3")
song.track.attach(io: file, filename: "Galway Girl.mp3")

song = Song.create!({title: "How Would You Feel", artist_id: a5.id, album_id: album7.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/How+Would+You+Feel+(Paean).mp3")
song.track.attach(io: file, filename: "How Would You Feel.mp3")

song = Song.create!({title: "Nancy Mulligan", artist_id: a5.id, album_id: album7.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/Nancy+Mulligan.mp3")
song.track.attach(io: file, filename: "Nancy Mulligan.mp3")

song = Song.create!({title: "New Man", artist_id: a5.id, album_id: album7.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/New+Man.mp3")
song.track.attach(io: file, filename: "New Man.mp3")

song = Song.create!({title: "Perfect", artist_id: a5.id, album_id: album7.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/Perfect.mp3")
song.track.attach(io: file, filename: "Perfect.mp3")

song = Song.create!({title: "Save Myself", artist_id: a5.id, album_id: album7.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/Save+Myself.mp3")
song.track.attach(io: file, filename: "Save Myself.mp3")

song = Song.create!({title: "Shape of You", artist_id: a5.id, album_id: album7.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/Shape+of+You.mp3")
song.track.attach(io: file, filename: "Shape of You.mp3")

song = Song.create!({title: "Supermarket Flowers", artist_id: a5.id, album_id: album7.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/Supermarket+Flowers.mp3")
song.track.attach(io: file, filename: "Save Myself.mp3")

song = Song.create!({title: "What Do I Know", artist_id: a5.id, album_id: album7.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/ed-sheeran-divide/What+Do+I+Know.mp3")
song.track.attach(io: file, filename: "What Do I Know.mp3")


## American Teen Album
song = Song.create!({title: "8TEEN", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/8TEEN.mp3")
song.track.attach(io: file, filename: "8TEEN.mp3")

song = Song.create!({title: "Young Dumb & Broke", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Young+Dumb+%26+Broke.mp3")
song.track.attach(io: file, filename: "Young Dumb & Broke.mp3")

song = Song.create!({title: "American Teen", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/American+Teen.mp3")
song.track.attach(io: file, filename: "American Teen.mp3")

song = Song.create!({title: "Angels", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Angels.mp3")
song.track.attach(io: file, filename: "Angels.mp3")

song = Song.create!({title: "Another Sad Love Song", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Another+Sad+Love+Song.mp3")
song.track.attach(io: file, filename: "Another Sad Love Song.mp3")

song = Song.create!({title: "Coaster", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Coaster.mp3")
song.track.attach(io: file, filename: "Coaster.mp3")

song = Song.create!({title: "Cold Blooded", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Cold+Blooded.mp3")
song.track.attach(io: file, filename: "Cold Blooded.mp3")

song = Song.create!({title: "Hopeless", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Hopeless.mp3")
song.track.attach(io: file, filename: "Hopeless.mp3")

song = Song.create!({title: "Keep Me", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Keep+Me.mp3")
song.track.attach(io: file, filename: "Keep Me.mp3")

song = Song.create!({title: "Let's Go", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Let's+Go.mp3")
song.track.attach(io: file, filename: "Let's Go.mp3")

song = Song.create!({title: "Location", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Location.mp3")
song.track.attach(io: file, filename: "Location.mp3")

song = Song.create!({title: "Saved", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Saved.mp3")
song.track.attach(io: file, filename: "Saved.mp3")

song = Song.create!({title: "Shot Down", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Shot+Down.mp3")
song.track.attach(io: file, filename: "Shot Down.mp3")

song = Song.create!({title: "Therapy", artist_id: a6.id, album_id: album8.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/khalid-american-teen/Therapy.mp3")
song.track.attach(io: file, filename: "Therapy.mp3")


## RED ALBUM
song = Song.create!({title: "22", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/22.mp3")
song.track.attach(io: file, filename: "22.mp3")

song = Song.create!({title: "Everything Has Changed", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/Everything+Has+Changed.mp3")
song.track.attach(io: file, filename: "Therapy.mp3")

song = Song.create!({title: "Girl At Home", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/Girl+At+Home.mp3")
song.track.attach(io: file, filename: "Girl At Home.mp3")

song = Song.create!({title: "Holy Ground", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/Holy+Ground.mp3")
song.track.attach(io: file, filename: "Holy Ground.mp3")

song = Song.create!({title: "I Almost Do", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/I+Almost+Do.mp3")
song.track.attach(io: file, filename: "I Almost Do.mp3")

song = Song.create!({title: "I Knew You Were Trouble", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/I+Knew+You+Were+Trouble..mp3")
song.track.attach(io: file, filename: "I Knew You Were Trouble.mp3")

song = Song.create!({title: "Red", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/Red.mp3")
song.track.attach(io: file, filename: "Red.mp3")

song = Song.create!({title: "Sad Beautiful Tragic", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/Sad+Beautiful+Tragic.mp3")
song.track.attach(io: file, filename: "Sad Beautiful Tragic.mp3")

song = Song.create!({title: "Starlight", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/Starlight.mp3")
song.track.attach(io: file, filename: "Starlight.mp3")

song = Song.create!({title: "State of Grace", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/State+of+Grace.mp3")
song.track.attach(io: file, filename: "State of Grace.mp3")

song = Song.create!({title: "Stay Stay Stay", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/Stay+Stay+Stay.mp3")
song.track.attach(io: file, filename: "Stay Stay Stay.mp3")

song = Song.create!({title: "The Lucky One", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/The+Lucky+One.mp3")
song.track.attach(io: file, filename: "The Lucky One.mp3")

song = Song.create!({title: "Treacherous", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/Treacherous.mp3")
song.track.attach(io: file, filename: "Treacherous.mp3")

song = Song.create!({title: "We Are Never Ever Getting Back Together", artist_id: a7.id, album_id: album9.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/taylor-swift-red/We+Are+Never+Ever+Getting+Back+Together.mp3")
song.track.attach(io: file, filename: "We Are Never Ever Getting Back Together.mp3")


## 1989 Album
song = Song.create!({title: "All You Had To Do Was Stay", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/All+You+Had+To+Do+Was+Stay.mp3")
song.track.attach(io: file, filename: "All You Had To Do Was Stay.mp3")

song = Song.create!({title: "Bad Blood", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/Bad+Blood.mp3")
song.track.attach(io: file, filename: "Bad Blood.mp3")

song = Song.create!({title: "How You Get The Girl", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/How+You+Get+The+Girl.mp3")
song.track.attach(io: file, filename: "How You Get The Girl.mp3")

song = Song.create!({title: "Blank Space", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/Blank+Space.mp3")
song.track.attach(io: file, filename: "Blank Space.mp3")

song = Song.create!({title: "Clean", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/Clean.mp3")
song.track.attach(io: file, filename: "Clean.mp3")

song = Song.create!({title: "I Know Places", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/I+Know+Places.mp3")
song.track.attach(io: file, filename: "I Know Places.mp3")

song = Song.create!({title: "I Wish You Would", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/I+Wish+You+Would.mp3")
song.track.attach(io: file, filename: "I Wish You Would.mp3")

song = Song.create!({title: "Out Of The Woods", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/Out+Of+The+Woods.mp3")
song.track.attach(io: file, filename: "Out Of The Woods.mp3")

song = Song.create!({title: "Shake It Off", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/Shake+It+Off.mp3")
song.track.attach(io: file, filename: "Shake It Off.mp3")

song = Song.create!({title: "Style", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/Style.mp3")
song.track.attach(io: file, filename: "Style.mp3")

song = Song.create!({title: "This Love", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/This+Love.mp3")
song.track.attach(io: file, filename: "This Love.mp3")

song = Song.create!({title: "Welcome To New York", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/Welcome+To+New+York.mp3")
song.track.attach(io: file, filename: "Welcome To New York.mp3")

song = Song.create!({title: "Widlest Dreams", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/Wildest+Dreams.mp3")
song.track.attach(io: file, filename: "Widlest Dreams.mp3")

song = Song.create!({title: "Wonderland", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/Wonderland.mp3")
song.track.attach(io: file, filename: "Wonderland.mp3")

song = Song.create!({title: "You Are In Love", artist_id: a7.id, album_id: album10.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/1989/You+Are+In+Love.mp3")
song.track.attach(io: file, filename: "You Are In Love.mp3")

## DAMN ALBUM
song = Song.create!({title: "BLOOD.", artist_id: a8.id, album_id: album11.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/kendrick-dam/BLOOD..mp3")
song.track.attach(io: file, filename: "BLOOD..mp3")

song = Song.create!({title: "DNA.", artist_id: a8.id, album_id: album11.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/kendrick-dam/DNA..mp3")
song.track.attach(io: file, filename: "DNA..mp3")

song = Song.create!({title: "ELEMENT.", artist_id: a8.id, album_id: album11.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/kendrick-dam/ELEMENT..mp3")
song.track.attach(io: file, filename: "ELEMENT..mp3")

song = Song.create!({title: "FEEL.", artist_id: a8.id, album_id: album11.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/kendrick-dam/FEEL..mp3")
song.track.attach(io: file, filename: "FEEL..mp3")

song = Song.create!({title: "HUMBLE.", artist_id: a8.id, album_id: album11.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/kendrick-dam/HUMBLE..mp3")
song.track.attach(io: file, filename: "HUMBLE..mp3")

song = Song.create!({title: "LOYALTY (FEAT. RIHANNA)", artist_id: a8.id, album_id: album11.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/kendrick-dam/LOYALTY.+(FEAT.+RIHANNA.).mp3")
song.track.attach(io: file, filename: "LOYALTY. (FEAT. RIHANNA.).mp3")

song = Song.create!({title: "XXX (FEAT. U2)", artist_id: a8.id, album_id: album11.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/kendrick-dam/XXX.+(FEAT.+U2.).mp3")
song.track.attach(io: file, filename: "XXX. (FEAT. U2.).mp3")

song = Song.create!({title: "YAH.", artist_id: a8.id, album_id: album11.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/kendrick-dam/YAH..mp3")
song.track.attach(io: file, filename: "YAH..mp3")

## STONEY
song = Song.create!({title: "Congratulations feat. Quavo", artist_id: a9.id, album_id: album12.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/post-malone-stoney/+Congratulations+feat.+Quavo.mp3")
song.track.attach(io: file, filename: "Congratulations feat. Quavo.mp3 ")

song = Song.create!({title: "Broken Whiskey Glass", artist_id: a9.id, album_id: album12.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/post-malone-stoney/Broken+Whiskey+Glass.mp3")
song.track.attach(io: file, filename: "Broken Whiskey Glass.mp3")

song = Song.create!({title: "Cold", artist_id: a9.id, album_id: album12.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/post-malone-stoney/Cold.mp3")
song.track.attach(io: file, filename: "Cold.mp3")

song = Song.create!({title: "Deja Vu feat. Justin Bieber", artist_id: a9.id, album_id: album12.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/post-malone-stoney/Deja+Vu+feat.+Justin+Bieber.mp3")
song.track.attach(io: file, filename: "Deja Vu feat. Justin Bieber.mp3")

song = Song.create!({title: "Feel (feat. Kehlani)", artist_id: a9.id, album_id: album12.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/post-malone-stoney/Feel+(feat.+Kehlani).mp3")
song.track.attach(io: file, filename: "Feel (feat. Kehlani).mp3")

song = Song.create!({title: "I Fall Apart", artist_id: a9.id, album_id: album12.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/post-malone-stoney/I+Fall+Apart.mp3")
song.track.attach(io: file, filename: "I Fall Apart.mp3")

song = Song.create!({title: "No Option", artist_id: a9.id, album_id: album12.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/post-malone-stoney/No+Option.mp3")
song.track.attach(io: file, filename: "No Option.mp3")

song = Song.create!({title: "Patient", artist_id: a9.id, album_id: album12.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/post-malone-stoney/Patient.mp3")
song.track.attach(io: file, filename: "Patient.mp3")

song = Song.create!({title: "White Iverson", artist_id: a9.id, album_id: album12.id})
file = open("https://s3-us-west-1.amazonaws.com/musicon-dev/post-malone-stoney/White+Iverson.mp3")
song.track.attach(io: file, filename: "White Iverson.mp3")

