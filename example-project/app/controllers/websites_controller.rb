require "httparty"
require "nokogiri"
class WebsitesController < ApplicationController
    include Nokogiri
    include HTTParty

    def index
        render json: Website.all()
    end

    def scrape
        pagination_url = params[:url]
        pagination_unparsed_page = HTTParty.get(pagination_url)
        pagination_parsed_page = Nokogiri::HTML(pagination_unparsed_page.body)
        meta_description = pagination_parsed_page.search("meta[name='description'], meta[name='keywords'], meta[name='viewport']").map { |n| 
            n['content'] 
        }
        view_port = pagination_parsed_page.search("meta[name='viewport']").map { |n| 
            n['content'] 
        }
        twitter_content = pagination_parsed_page.search("meta[name='twitter:site'], meta[name='twitter:description']").map { |n| 
            n['content'] 
        }
        index_type = pagination_parsed_page.search("meta[name='robots']").map { |n| 
            n['content'] 
        }
        title = pagination_parsed_page.css('title').text
        header = pagination_parsed_page.css('header').text
        header1 = pagination_parsed_page.css('h1').text
        header2 = pagination_parsed_page.css('h2').text
        header3 = pagination_parsed_page.css('h3').text
        header4 = pagination_parsed_page.css('h4').text
        header5 = pagination_parsed_page.css('h5').text
        header6 = pagination_parsed_page.css('h6').text
        links = index_type = pagination_parsed_page.search("img").map { |n| 
            n['src'] 
          }
        icon = pagination_parsed_page.search("link[rel='icon']").map { |n| 
            n.attribute('href').value
          }
        
        website = { 
            'title' => title,
            'header' => header,
            'header1' => header1,
            'header2' => header2,
            'header3' => header3,
            'header4' => header4,
            'header5' => header5,
            'header6' => header6,
            'links' => links,
            'icon' => icon[0],
            'meta_description' => meta_description[0],
            'view_port' => view_port[0],
            'twitter_content' => twitter_content[0],
            'index_type' => index_type[0],
            'url' => pagination_url,
         }
        render json: website, status: :created
    end
end
