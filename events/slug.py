from django.template.defaultfilters import slugify

date = "04-13"
title = "Building Bridges not Walls"



slug = slugify(title)

result ="2017-" + date + "-" + slug
print(result)
