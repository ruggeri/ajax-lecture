# 1. use json.array! to list out the cats.
# 2. use json.() to show the cat attributes.
# 3. Add one last property: json.isLiked.

json.array!(@cats) do |cat|
  json.(cat, *Cat.column_names)

  json.isLiked(current_user.likes?(cat))
end
