#!/bin/bash

input_dir="F:\Somanth\GreenSpace\frontend\public\videos\kids-bedroom-designs" # <- Update this path
output_dir="$input_dir/thumbnails"

mkdir -p "$output_dir"

for video in "$input_dir"/*.{mp4,mkv,avi,mov}; do
  [ -e "$video" ] || continue
  filename=$(basename "$video")
  name="${filename%.*}"
  ffmpeg -y -i "$video" -ss 00:00:01.000 -vframes 1 "$output_dir/${name}_thumb.jpg"
done

echo "✅ All thumbnails saved in $output_dir"
