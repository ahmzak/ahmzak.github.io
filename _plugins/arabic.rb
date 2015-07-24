# module Jekyll
#   class ShortArabicTag < Liquid::Tag

#     def initialize(tag_name, text, tokens)
#       super
#       @text = text
#     end

#     def render(context)
#       "<span class=\"ar\">#{@text}</span>"
#     end
#   end

#   module DefinitionFilter
#     def define(input, definition="")
#       "<a class=\"defined\" href=\"#\" alt=\"" + definition.to_s + "\">" + input.to_s + "</a>"
#     end
#   end
# end

# Liquid::Template.register_tag('ar', Jekyll::ShortArabicTag)
# Liquid::Template.register_filter(Jekyll::DefinitionFilter)

# class RRandom < Liquid::Block
#   def initialize(tag_name, markup, tokens)
#      super
#      @rand = markup.to_i
#   end

#   def render(context)
#     # value = rand(@rand)
#     # super.sub('^^^', value.to_s)  # calling `super` returns the content of the block
#     "<div class=\"ar rtl\">#{super}</div>"
#   end
# end

# Liquid::Template.register_tag('arb', RRandom)