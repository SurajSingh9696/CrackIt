# Uploads Directory

This directory is used to temporarily store uploaded resume files during processing.

**Note:** Files are deleted immediately after processing to maintain privacy and save storage space.

## Security

- Only PDF files are accepted
- Maximum file size: 5MB
- Files are validated before processing
- Automatic cleanup after analysis

## Privacy

No resume files are permanently stored. After AI analysis:
1. Resume text is extracted
2. Relevant data is stored in database
3. Original PDF is deleted
4. No personal files remain on server

## .gitignore

This directory is ignored in version control to prevent accidental commits of user data.
