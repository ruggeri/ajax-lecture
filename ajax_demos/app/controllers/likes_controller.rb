class LikesController < ApplicationController
  def create
    sleep 1

    @like = Like.create!(
      user_id: current_user.id,
      cat_id: params[:cat_id]
    )

    respond_to do |format|
      format.json { render json: @like }
    end
  end

  def destroy
    sleep 1

    @like = Like.find_by(
      user_id: current_user.id, cat_id: params[:cat_id]
    )
    @like.destroy!

    respond_to do |format|
      format.json { render json: @like }
    end
  end
end
