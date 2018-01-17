# 1. Use json.() to add all cat columns.
# 2. Add isLiked property.

json.(@cat, *Cat.column_names)
json.isLiked(current_user.likes?(@cat))
