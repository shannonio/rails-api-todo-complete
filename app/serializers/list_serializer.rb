class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :private, :items

  def name
    object.name
  end

  def user_id
    object.user_id
  end

  def private
    object.private
  end

  def created_at
    object.created_at.strftime('%B %d, %Y')
  end

  def items
    Item.where(list_id: object.id)
  end
end
