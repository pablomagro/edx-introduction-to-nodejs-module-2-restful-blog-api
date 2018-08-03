# COMMENTS
# comments post data
curl -H "Content-Type: application/json" -X POST -d '{"text": "Test comment 1"}' "http://localhost:3000/posts/0/comments"
curl -H "Content-Type: application/json" -X POST -d '{"text": "Test comment 2"}' "http://localhost:3000/posts/0/comments"

# updates post data at specific id
curl -H 'Content-Type: application/json' -X PUT -d '{"text": "Updated comment 1"}' "http://localhost:3000/posts/0/comments/3"

# gets post data
curl "http://localhost:3000/posts/0/comments"

# deletes post data at specific id
curl -X DELETE "http://localhost:3000/posts/0/comments/3"