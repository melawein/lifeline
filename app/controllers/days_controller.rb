class DaysController < ApplicationController
  def index
    @moods = Mood.all
    @exercises = Exercise.all
    @pains = Pain.all
    @sleeps = Sleep.all
    @events = @moods + @exercises + @pains + @sleeps
    @days = Day.all
  end

  def show
    # date = Date.parse("#{params[:year]}-#{params[:month]}-#{params[:date]}")
    # @calendar = ::EventCal::Calendar.new(date)
  end


  def edit

  end

  def update
  end

end



