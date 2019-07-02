class MoodsController < ApplicationController
  def new
    @mood = Mood.new
  end

  def create
    # @mood = Mood.new(feeling: params[:feeling])
    feelings = params[:feeling]

    date = Date.new(params["day"]["date(1i)"].to_i, params["day"]["date(2i)"].to_i, params["day"]["date(3i)"].to_i)

    day = Day.find_by(date: date)
    day = Day.create(date: date, user: current_user) if day.nil?
    # does day exist?
    # if yes .. find day .. if no create day
    feelings.each do |feeling|
      Mood.create(feeling: feeling, day: day)
    end

    redirect_to days_path

    # if @mood.save
    #   redirect_to days_path
    # else
    #   render :new
    # end
  end

  # def moodSetAction
  #   @mood_stuff = params[:mood_setting]
  #   @mood = Mood.create(@mood_stuff)
  # end

  private

    def mood_params
      params.require(:mood).permit(:feeling)
    end
end
