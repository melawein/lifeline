class DaysController < ApplicationController
  def index
    @moods = policy_scope(Mood)
    @exercises = policy_scope(Exercise)
    @pains = policy_scope(Pain)
    @sleeps = policy_scope(Sleep)
    @events = @moods + @exercises + @pains + @sleeps
    @days = policy_scope(Day)
    authorize @days
    # authorize @moods
    # authorize @exercises
    # authorize @pains
    # authorize @sleeps

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



