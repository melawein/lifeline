class SleepsController < ApplicationController
  def new
    @sleep = Sleep.new
    authorize @sleep
  end

  def create

    hours = params[:sleep][:hours]

    date = Date.new(params["day"]["date(1i)"].to_i, params["day"]["date(2i)"].to_i, params["day"]["date(3i)"].to_i)

    day = Day.find_by(date: date, user: current_user)
    day = Day.create(date: date, user: current_user) if day.nil?

    @sleep = Sleep.create(hours: hours, day: day)
    authorize @sleep

    redirect_to days_path
  end
def destroy
    # feelings = params[:feeling]

    @sleep = Sleep.find(params[:id])
    day = @sleep.day
    authorize @sleep
    @sleep.destroy
    redirect_to days_path
    end
end
