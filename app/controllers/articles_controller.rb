class ArticlesController < ApplicationController
  def index
    articles = Article.all
    render json: article
  end

  def create
    article = Article.new(article_attributes)
    article.save
  end

private
  def article_attributes
    params.require(:article).permit(
      :title,
      :text
    )
  end
end
