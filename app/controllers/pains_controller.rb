class PainsController < ApplicationController
  def new
    @pain = Pain.new
    authorize @pain
  end

  def create

    symptoms = params[:symptom]

    date = Date.new(params["day"]["date(1i)"].to_i, params["day"]["date(2i)"].to_i, params["day"]["date(3i)"].to_i)

    day = Day.find_by(date: date, user: current_user)
    day = Day.create(date: date, user: current_user) if day.nil?
    # does day exist?
    # if yes .. find day .. if no create day
    symptoms.each do |symptom|
      @pain = Pain.create(symptom: symptom, day: day)
    end
    authorize @pain
    redirect_to days_path
  end

  private

   def pain_params
      params.require(:pain).permit(:symptom)
    end
end
