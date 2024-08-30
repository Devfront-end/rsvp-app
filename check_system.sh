#!/bin/bash

# Function to add a separator
separator() {
    echo "------------------------------------------------------------"
}

# Check command execution time
echo "Timing command: npm install"
separator
time npm install
separator

# Check system calls with strace (Linux)
echo "Running strace to check system calls"
separator
strace -c npm install
separator

# Check system resource usage with top (or use htop if installed)
echo "Monitoring system resources with top"
separator
top -b -n 1 | head -n 20
separator

# Check I/O bottlenecks
echo "Checking I/O statistics"
separator
iostat -dx 1 5
separator

# Run npm install with verbose logging
echo "Running npm install with verbose logging"
separator
npm install --verbose
separator

# Check for outdated npm packages
echo "Checking for outdated npm packages"
separator
npm outdated
separator

# Run ESLint to check code quality
echo "Running ESLint to check code quality"
separator
npx eslint . --ext .js,.jsx,.ts,.tsx
separator

# Run Prettier to check code formatting
echo "Running Prettier to check code formatting"
separator
npx prettier --check .
separator

# Check network performance (example with Google)
echo "Checking network performance"
separator
ping -c 4 google.com
separator

# Profile with perf (Linux)
if command -v perf &> /dev/null; then
    echo "Profiling with perf"
    separator
    perf record npm install
    perf report
else
    echo "perf not installed. Skipping perf profiling."
    separator
fi

# Collect environment information
echo "Collecting environment information"
separator
npx envinfo --system --binaries --npmPackages
separator

# Check for unused dependencies with depcheck
echo "Checking for unused dependencies with depcheck"
separator
npx depcheck
separator

# Check for vulnerabilities with Snyk (if installed)
if command -v snyk &> /dev/null; then
    echo "Checking for vulnerabilities with Snyk"
    separator
    snyk test
else
    echo "Snyk not installed. Skipping Snyk vulnerability check."
    separator
fi

# Check npm dependencies licenses
echo "Checking npm dependencies licenses"
separator
npx license-checker --summary
separator

echo "All checks completed."

