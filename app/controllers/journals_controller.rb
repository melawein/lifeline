class JournalsController < ApplicationController

  before_action :set_journal, only: [:show, :edit, :destroy, :update]
  def index
    @journals = policy_scope(Journal).order(created_at: :desc)
  end

  def show
    # @journal = Journal.find(params[:id])
      authorize @journal
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
# authorize @journal
  end

  def update
# authorize @journal
    if @journal.update(journal_params)
      redirect_to @journal, notice: 'Journal was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @journal.destroy
    redirect_to journals_path
  end

  private

  def journal_params
    params.require(:journal).permit(:title, :text)
  end

  def set_journal
      @journal = Journal.find(params[:id])
      authorize @journal
    end
end
