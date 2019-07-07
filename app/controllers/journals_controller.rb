class JournalsController < ApplicationController
  def index
    @journals = policy_scope(Journal)
  end

  def show
    @journal = Journal.find(params[:id])
  end

  def new
    @journal = Journal.new
    authorize @journal

  end

  def create
    @journal = Journal.new(journal_params)
        @journal.user = current_user

      authorize @journal
    if @journal.save

      redirect_to journals_path
    else
      render :new
    end

  end

  def edit
  end

  def update
    if @journal.update(journal_params)
      redirect_to @journal, notice: 'Journal was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @journal = Journal.find(params[:id])
    @journal.destroy
    redirect_to journals_path
  end
  private

  def journal_params
    params.require(:journal).permit(:title, :text)
  end
end
