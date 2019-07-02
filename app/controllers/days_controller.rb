class DaysController < ApplicationController
  def index
    @moods = Mood.joins(:day).where(days: { user: current_user })
    @exercises = Exercise.joins(:day).where(days: { user: current_user })
    @pains = Pain.joins(:day).where(days: { user: current_user })
    @sleeps = Sleep.joins(:day).where(days: { user: current_user })
    @events = @moods + @exercises + @pains + @sleeps

    @days = policy_scope(Day)
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



