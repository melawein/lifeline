class MoodsController < ApplicationController
  def new
    @mood = Mood.new
  end

  def create
    # @mood = Mood.new(feeling: params[:feeling])
    feelings = params[:feeling]

    # does day exist?
    # if yes .. find day .. if no create day
    feelings.each do |feeling|
      Mood.create(feeling: feeling, day: Day.first)

    end
    if @mood.save!
      redirect_to days_path
    else
      render :new
    end
  end

  private

    def mood_params
      params.require(:mood).permit(:feeling)
    end
end
