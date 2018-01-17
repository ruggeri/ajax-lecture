class LikesController < ApplicationController
  def create
    @like = Like.create!(
      user_id: current_user.id,
      cat_id: params[:cat_id]
    )

    respond_to do |format|
      format.json { render 'show' }
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy!

    respond_to do |format|
      format.json { render 'show' }
    end
  end
end
