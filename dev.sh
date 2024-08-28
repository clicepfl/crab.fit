export NEXT_PUBLIC_API_URL=http://localhost:3000 

(cd api && cargo r) &
api=$!

(cd frontend && npm run dev) &
frontend=$!

wait $api $frontend