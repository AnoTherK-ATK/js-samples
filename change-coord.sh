#!/bin/bash

# --- Configuration ---
# Exit immediately if a command exits with a non-zero status.
set -e

# Check if all required arguments are provided.
if [ "$#" -ne 3 ]; then
    echo "Usage: ./update_coords.sh <latitude> <longitude> <directory>"
    echo "Example: ./update_coords.sh 34.0522 -118.2437 ."
    exit 1
fi

NEW_LAT=$1
NEW_LNG=$2
TARGET_DIR=$3

# The regex for sed to find the coordinates.
# Note the pattern is slightly different for sed.
REGEX="s/center: *{ *lat: *[-.0-9]*, *lng: *[-.0-9]* *}/center: { lat: ${NEW_LAT}, lng: ${NEW_LNG} }/g"

echo "Searching for .js and .ts files in '${TARGET_DIR}'..."

# Find all files ending in .js or .ts and execute sed to replace the text in-place.
# The -o -name part means "OR".
find "${TARGET_DIR}" -type f -name "index.ts" -print0 | while IFS= read -r -d $'\0' file; do
    echo "  -> Checking ${file}"
    # sed -i'.bak' creates a backup. Use sed -i '' for no backup on macOS.
    # For GNU/Linux sed, you can just use sed -i.
    sed -i "${REGEX}" "${file}"
done

echo "Done! Backup files have been created with a .bak extension."