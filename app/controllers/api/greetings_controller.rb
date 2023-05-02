class Api::GreetingsController < ApplicationController
  def random
    render json: { message: Greeting.order('RANDOM()').first.message }
  end
end
