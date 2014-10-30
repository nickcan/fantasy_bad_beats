class UserSeeder
  def self.seed
    10.times do
      User.create(name: Faker::Name.name, email: Faker::Internet.free_email, password: Faker::Internet.password)
    end
  end
end

class BeatSeeder
  def self.seed
    User.all.each do |user|
      3.times do
        user.beats.create(content: Faker::Lorem.sentence(5, true, 7))
      end
    end
  end
end

class CommentSeeder
  def self.seed
    Beat.all.each do |beat|
      beat.comments.create(content: Faker::Lorem.sentence(5, true, 7), user_id: User.all.sample.id)
    end
  end
end

UserSeeder.seed
BeatSeeder.seed
CommentSeeder.seed