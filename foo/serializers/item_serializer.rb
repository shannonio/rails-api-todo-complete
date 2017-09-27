class ItemSerializer < ActiveModel::Serializer
  attributes :id, :content, :done, :list_id

  def content
    object.content
  end

  def done
    object.done
  end

  def list_id
    object.list_id
  end

  def created_at
    object.created_at.strftime('%B %d, %Y')
  end
end
