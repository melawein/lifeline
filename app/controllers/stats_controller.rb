class StatsController < ApplicationController

  def all_stats
   authorize :stat, :all_stats?
   @moods = Mood.where(user_id: current_user)

   # find all days in the week
   @week = Date.today - 7
   # @days = Day.where("date > #{Date.today} AND date < #{Date.today - 7} ")

   @days = Day.where(user: current_user)

   @moods = {}
   @days.each do |day|
    day.moods.each do |mood|
      if @moods[mood.feeling]
        @moods[mood.feeling][:r] += 1
      else
       @moods[mood.feeling] = {
          r: 1
        }
      end
    end
   end

   @final_moods = []
   x_array = (2..7).to_a
   y_array = (2..7).to_a
   @moods.each do |feeling, mini_hash|
      mini_hash[:feeling] = feeling
      x = x_array.sample
      mini_hash[:x] = x
      x_array.delete(x)
      y = y_array.sample
      mini_hash[:y] = y
      y_array.delete(y)
      mini_hash[:r] = mini_hash[:r] * 5

      @final_moods << mini_hash
  end
  @final_moods.sort_by! { |mood_hash| mood_hash[:feeling] }
  @final_moods << {x: 8, y: 9, r: 0}
  @final_moods << {x: 9, y: 8, r: 0}
  @final_moods << {x: 1, y: 1, r: 0}
  @final_moods << {x: 0, y: 0, r: 0}
  @final_moods
end
end
