class StatsController < ApplicationController

  def mood_stats
   authorize :stat, :mood_stats?
   @moods = Mood.where(user_id: current_user)

   # find all days in the week
   @week = Date.today - 7
   # @days = Day.where("date > #{Date.today} AND date < #{Date.today - 7} ")

   @days = Day.where(user: current_user)

   @moods = {}
   Mood::FEELING.each do |feeling|
     @moods[feeling] = {r: 0}
   end

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

  @order_moods = @final_moods.map do |mood|
    [mood[:feeling], (mood[:r] / 5)] if !mood[:r].zero?
  end.compact.sort_by! { |array| array[1] }.reverse!

  @final_moods.sort_by! { |mood_hash| mood_hash[:feeling] }
  @final_moods << {x: 8, y: 9, r: 0}
  @final_moods << {x: 9, y: 8, r: 0}
  @final_moods << {x: 1, y: 1, r: 0}
  @final_moods << {x: 0, y: 0, r: 0}
  @final_moods

  end


  def pain_stats
   authorize :stat, :pain_stats?
   @pains = Pain.where(user: current_user)

   @week = Date.today - 7
     # @days = Day.where("date > #{Date.today} AND date < #{Date.today - 7} ")

     @days = Day.where(user: current_user)

     @pains = {}
     Pain::SYMPTOMS.each do |symptom|
      @pains[symptom] = {r: 0}
     end

     @days.each do |day|
      day.pains.each do |pain|
        if @pains[pain.symptom]
          @pains[pain.symptom][:r] += 1
        else
          @pains[pain.symptom] = {
            r: 1
          }
        end
      end
    end

    @final_pains = []
    x_array = (2..5).to_a
    y_array = (2..5).to_a
    @pains.each do |symptom, mini_hash|
      mini_hash[:symptom] = symptom
      x = x_array.sample
      mini_hash[:x] = x
      x_array.delete(x)
      y = y_array.sample
      mini_hash[:y] = y
      y_array.delete(y)
      mini_hash[:r] = mini_hash[:r] * 5

      @final_pains << mini_hash
    end
    @order_pains = @final_pains.map do |pain|
      [pain[:symptom], (pain[:r] / 5)] if !pain[:r].zero?
    end.compact.sort_by! { |array| array[1] }.reverse!

    @final_pains.sort_by! { |pain_hash| pain_hash[:symptom] }

    @final_pains << {x: 6, y: 7, r: 0}
    @final_pains << {x: 7, y: 6, r: 0}
    @final_pains << {x: 1, y: 1, r: 0}
    @final_pains << {x: 0, y: 0, r: 0}

    @final_pains

  end

  def exercise_stats
     authorize :stat, :exercise_stats?

     @exercises = Exercise.where(user: current_user)

     @days = Day.where(user: current_user)

     @day_names = []
     @times = []
     7.times do |i|
       date = Date.today - i
       day_name = date.strftime("%A")
       @day_names << day_name
       exercise_time = Day.find_by(date: date)&.exercise&.time
       @times << exercise_time
     end

     @times.reverse!
     @day_names.reverse!
  end

end





















