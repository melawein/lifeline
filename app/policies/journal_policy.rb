class JournalPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
    scope.where(user: user)

    end
  end

  def index?
    false
  end

  def show?
    true
  end

  def create?
   true
  end

  # def new?
  #   create?
  # end
  def new_video?
    true

  end
  def create_video?
    true
  end

  def update?
        record.user == user

  end

  # def edit?
  #   update?
  # end

  def destroy?
    record.user == user

  end
end
