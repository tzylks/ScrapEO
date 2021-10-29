class WebsiteSerializer < ActiveModel::Serializer
  attributes :id, :title, :header, :header1, :header2, :header3, :header4, :header5, :header6, :links, :icon, :meta_description, :view_port, :twitter_content, :index_type, :url
end
