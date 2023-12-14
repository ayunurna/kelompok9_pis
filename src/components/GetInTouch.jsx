import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Hubungi kami untuk membeli properti'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Merupakan komitmen kami untuk memastikan pengalaman membeli rumah baru yang profesional dan menyenangkan bagi Anda. Jika Anda ingin mendapatkan rumah untuk mulai hidup berkeluarga di daerah yang Anda sukai klik tombol di bawah ini.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                Hubugi Kami
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;