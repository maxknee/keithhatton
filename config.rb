# --------------------------------------------------------------------------------------------------
# Helpers
# --------------------------------------------------------------------------------------------------

helpers do
  # Helpers are defined in and can be added to `helpers/custom_helpers.rb`.
  # In case you require helpers within `config.rb`, they can be added here.
  require "helpers/active_nav_helper"
  helpers ActiveNavHelper
end


# --------------------------------------------------------------------------------------------------
# Extensions
# --------------------------------------------------------------------------------------------------

# Use LiveReload
activate :livereload

# Use Search Engine Sitemap
set :url_root, data.config.site.root_url
activate :search_engine_sitemap

set :relative_links, true

# --------------------------------------------------------------------------------------------------
# Paths
# --------------------------------------------------------------------------------------------------

set :css_dir,     'stylesheets'
set :fonts_dir,   'fonts'
set :images_dir,  'images'
set :js_dir,      'javascripts'

# Pretty URLs - See https://middlemanapp.com/advanced/pretty_urls/
activate :directory_indexes

activate :automatic_image_sizes

page "/project/*", :layout => "project"

#data.types.types.each do |types|
 # proxy "/project/#{types[:type]}.html", "/project.html", :locals => { :project_name => types}, :ignore => true
#end

#page "/portfolio", ::layout => "portfolio"

# --------------------------------------------------------------------------------------------------
# Build configuration
# --------------------------------------------------------------------------------------------------

configure :build do
  # Exclude any vendor components (bower or custom builds) in the build
  ignore 'stylesheets/vendor/*'
  ignore 'javascripts/vendor/*'

  # Minify CSS
  activate :minify_css

  # Minify Javascript
  activate :minify_javascript
  activate :cache_buster
  activate :relative_assets

  # Minify HTML
  #activate :minify_html, {
   # remove_quotes: false,
    #remove_input_attributes: false
  #}

  # Compress images (default)
  require "middleman-smusher"
  activate :smusher

  # Compress ALL images (advanced)
  # Before activating the below, follow setup instructions on https://github.com/toy/image_optim
  activate :imageoptim do |options|
    options.pngout = true # set to true when pngout is also installed
  end

  # Uniquely-named assets (cache buster)
  # Exception: svg & png in images folder because they need to be interchangeable by JS
  activate :asset_hash, ignore: [/images\/(.*\.png|.*\.svg|.*\.jpg|.*\.jpeg)/]
end
