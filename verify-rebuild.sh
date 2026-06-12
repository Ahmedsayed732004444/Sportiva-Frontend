#!/bin/bash
# verify-rebuild.sh - Quick verification script for Sportiva

set -e
echo "🔍 Sportiva Frontend - Verification Script"
echo "==========================================="

PASSED=0; FAILED=0
check_pass() { echo "✓ $1"; ((PASSED++)); }
check_fail() { echo "✗ $1"; ((FAILED++)); }

echo "1. Checking directory structure..."
[[ -d "src/app" ]] && check_pass "src/app exists" || check_fail "src/app missing"
[[ -d "src/features" ]] && check_pass "src/features exists" || check_fail "src/features missing"
[[ -d "src/shared" ]] && check_pass "src/shared exists" || check_fail "src/shared missing"
[[ -d "src/lib" ]] && check_pass "src/lib exists" || check_fail "src/lib missing"

echo ""
echo "2. Checking feature modules..."
for feature in auth home posts profile; do
  [[ -d "src/features/$feature" ]] && check_pass "Feature: $feature" || check_fail "Feature missing: $feature"
done

echo ""
echo "3. Checking critical files..."
[[ -f "src/app/App.tsx" ]] && check_pass "App.tsx" || check_fail "App.tsx missing"
[[ -f "src/app/routes/index.tsx" ]] && check_pass "routes" || check_fail "routes missing"
[[ -f "src/lib/api/client.ts" ]] && check_pass "API client" || check_fail "API client missing"
[[ -f ".husky/pre-commit" ]] && check_pass "husky pre-commit" || check_fail "husky missing"
[[ -f ".prettierrc" ]] && check_pass ".prettierrc" || check_fail ".prettierrc missing"
[[ -f "eslint.config.js" ]] && check_pass "eslint.config.js" || check_fail "eslint config missing"

echo ""
echo "==========================================="
echo "Passed: $PASSED | Failed: $FAILED"
[[ $FAILED -eq 0 ]] && echo "✓ All checks passed!" || exit 1
