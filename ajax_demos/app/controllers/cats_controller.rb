class CatsController < ApplicationController
  def create
    @cat = Cat.create!(cat_params)

    respond_to do |format|
      format.json { render :show }
    end
  end

  def index
    @cats = Cat.all
    render :index
  end

  private
  def tweet_params
    params.require(:cat).permit(:name, :personal_legend)
  end
end
