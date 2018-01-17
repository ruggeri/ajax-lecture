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

  def search
    @cats = Cat.where('name ~ ?', params[:query])

    respond_to do |format|
      format.json { render :index }
    end
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :personal_legend)
  end
end
