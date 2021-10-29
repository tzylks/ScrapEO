class CreateWebsites < ActiveRecord::Migration[6.1]
  def change
    create_table :websites do |t|
      t.string :title
      t.string :header
      t.string :header1
      t.string :header2
      t.string :header3
      t.string :header4
      t.string :header5
      t.string :header6
      t.string :links
      t.string :icon
      t.string :meta_description
      t.string :view_port
      t.string :twitter_content
      t.string :index_type
      t.string :url

      t.timestamps
    end
  end
end
