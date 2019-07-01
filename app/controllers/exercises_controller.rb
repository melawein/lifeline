class ExercisesController < ApplicationController
  def new
    @exercise = Exercise.new
  end

  def create
    time = params[:exercise][:time]

    date = Date.new(params["day"]["date(1i)"].to_i, params["day"]["date(2i)"].to_i, params["day"]["date(3i)"].to_i)

    day = Day.find_by(date: date)
    day = Day.create(date: date, user: current_user) if day.nil?

    Exercise.create(time: time, day: day)

    redirect_to days_path
  end

  private
    def exercise_params
      params.require(:exercise).permit(:time)
    end
end

