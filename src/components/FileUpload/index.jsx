import { Box, IconButton, Typography } from '@mui/material'

import { DeleteForever } from '@mui/icons-material'
import { useDropzone } from 'react-dropzone'

import useStyles from './styles'

const FileUpload = ({ files, errors, touched, setFieldValue }) => {
  const classes = useStyles()

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map((file) => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })

      setFieldValue('files', [
        ...files,
        ...newFiles,
      ])
    }
  })

  const handleRemoveFile = (filePath) => {
    console.log(filePath, files)
    const newFileState = files.filter((file) => file.path !== filePath)
    setFieldValue('files', newFileState)
  }

  return (
    <>
      <Typography component="h6" variant="h6" color="textPrimary">
        Images
      </Typography>
      <Typography component="div" variant="body2" color={errors && touched ? 'error' : 'textPrimary'}>
        The first image is the main one of your advertisement.
      </Typography>
      {
        errors && touched
          ? <Typography variant="body2" color="error" gutterBottom>{errors}</Typography>
          : null
      }
      <Box className={classes.thumbsContainer}>
        <Box className={classes.dropzone} {...getRootProps()}>
          <input name="files" {...getInputProps()} />
          <Typography variant="body2" color={errors && touched ? 'error' : 'textPrimary'}>
            Click to add or drag the image here.
          </Typography>
        </Box>

        {
          files.map((file, index) => (
            <Box
              key={file.path}
              className={classes.thumb}
              style={{ backgroundImage: `url(${file.preview})` }}
            >
              {
                index === 0 ?
                  <Box className={classes.mainImage}>
                    <Typography variant="body2" color="secondary">
                      Main Image
                    </Typography>
                  </Box>
                : null
              }
              <Box className={classes.mask}>
                <IconButton color="secondary" onClick={() => handleRemoveFile(file.path)}>
                  <DeleteForever fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          ))
        }
      </Box>
    </>
  )
}

export default FileUpload
