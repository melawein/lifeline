class MoodsController < ApplicationController
  def new
    @mood = Mood.new
  end

  def create
    @mood = Mood.new(mood_params)
    if @mood.save
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
