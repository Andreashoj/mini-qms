class Api::V1::TestController < ApplicationController
  def index
    render json: { text: 'hello' }
  end
end