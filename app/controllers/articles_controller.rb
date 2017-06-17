# frozen_string_literal: true
class ArticlesController < ApplicationController
  def index
    article = Article.all
    render json: article
  end

  def create
    article = Article.new(article_attributes)
    article.save
  end

  def show
    article = Article.find_by 'id= ?', params[:id]

    if article.nil?
      render json: { error: '404 not found' }, status: :not_found
    else
      render json: article
    end
  end

  def update
    article = Article.find(params[:id])
    article.update!(article_attributes)
  end

  def article_attributes
    params.require(:article).permit(
      :title,
      :text
    )
  end
end
