#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_KEY="oriol/technical-overview"
PROJECT_NAME="technical-overview"
ROOT_DIR="$(cd "$PROJECT_DIR/../../.." && pwd)"
OUTPUT_DIR="$PROJECT_DIR/output"
PPTX_FILE="$OUTPUT_DIR/$PROJECT_NAME.pptx"
PDF_FILE="$OUTPUT_DIR/$PROJECT_NAME.pdf"
SLIDES_DIR="$OUTPUT_DIR/slides"
PROFILE_DIR="$OUTPUT_DIR/.lo-profile"

mkdir -p "$OUTPUT_DIR" "$SLIDES_DIR" "$PROFILE_DIR"

node "$ROOT_DIR/build.js" "$PROJECT_KEY"

if ! command -v soffice >/dev/null 2>&1; then
  echo "Missing dependency: soffice"
  exit 1
fi

if ! command -v pdftoppm >/dev/null 2>&1; then
  echo "Missing dependency: pdftoppm"
  exit 1
fi

rm -f "$PDF_FILE"
soffice --headless -env:UserInstallation="file://$PROFILE_DIR" --convert-to pdf --outdir "$OUTPUT_DIR" "$PPTX_FILE"

rm -f "$SLIDES_DIR"/slide-*.jpg
pdftoppm -jpeg -r 150 "$PDF_FILE" "$SLIDES_DIR/slide"

echo "✅ Updated $PPTX_FILE"
echo "✅ Updated $PDF_FILE"
echo "✅ Updated $SLIDES_DIR"
