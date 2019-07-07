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
    false
  end

  def create?
   true
  end

  # def new?
  #   create?
  # end

  def update?
    false
  end

  def edit?
    update?
  end

  def destroy?
    false
  end
end
