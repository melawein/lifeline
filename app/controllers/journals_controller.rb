class JournalsController < ApplicationController

  before_action :set_journal, only: [:show, :edit, :destroy, :update]
  def index
    @journals = policy_scope(Journal).order(created_at: :desc)
    @journal = Journal.new
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
  def new_video
    @journal = Journal.new
    authorize @journal
  end
  def create_video
    @journal = Journal.new(video_params)
    @journal.user = current_user
    # @journal.title = DateTime.now
    @journal.title = "Video Entry"
    authorize @journal

    if @journal.video.nil?
      redirect_to journals_path, alert: "No Video Found"
    elsif @journal.save
    redirect_to journals_path, notice: "Journal Video was successfully created."
    else
      render :new
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

  def video_params
    params.require(:journal).permit(:title,:video, :video_cache)
  end

  def set_journal
      @journal = Journal.find(params[:id])
      authorize @journal
    end
end
