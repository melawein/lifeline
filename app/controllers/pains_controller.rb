class PainsController < ApplicationController
  def new
    @pain = Pain.new
  end

  def create
    @pain = Pain.new(pain_params)
    @pain.user = current_user
    authorize @pain
    if @pain.save
      redirect_to days_path
    else
      render :new
  end

  private

   def pain_params
      params.require(:pain).permit(:symptom)
    end
end
