class StatPolicy <  Struct.new(:user, :stat)


  def mood_stats?
    true
  end

  def pain_stats?
    true
  end

  def exercise_stats?
    true
  end

  def sleep_stats?
    true
  end
end
