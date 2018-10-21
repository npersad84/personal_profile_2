class HomeController < ApplicationController
  before_action :compile_front_end_data
 
  def home
  end

  def about
  end

  private

  def compile_front_end_data
  	@home_page_data_service = HomePageDataService.new.to_builder
  end

end
