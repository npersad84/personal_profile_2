class HomePageDataService

  def initialize()
  	@url_helper = Rails.application.routes.url_helpers
  end

  delegate :root_path, :about_path, to: :@url_helper

   def to_builder
  	Jbuilder.new do |home_page_data|
      home_page_data.routes do |route|
        route.home_path self.root_path
  	    route.about_path self.about_path
      end
  	end.target!
  end

end
