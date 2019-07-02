class ExercisesController < ApplicationController
  def new
    @exercise = Exercise.new
    authorize @exercise
  end

  def create
    time = params[:exercise][:time]


    date = Date.new(params["day"]["date(1i)"].to_i, params["day"]["date(2i)"].to_i, params["day"]["date(3i)"].to_i)
    day = Day.find_by(date: date, user: current_user)
    day = Day.create(date: date, user: current_user) if day.nil?

    exercise = Exercise.new(exercise_params)
    exercise.day = day
    authorize exercise

    if exercise.save
      redirect_to days_path
    else
      render :new
    end
  end

  private
  def exercise_params
    params.require(:exercise).permit(:time)
  end
end

