class CatsController < ApplicationController
  def create
    @cat = Cat.create!(cat_params)

    render :show
  end

  def index
    @cats = Cat.all
    render :index
  end

  def search
    @cats = Cat.where('name ~ ?', params[:query])

    render :index
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :personal_legend)
  end
end
