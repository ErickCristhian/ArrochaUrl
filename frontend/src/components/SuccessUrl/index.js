import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, Table } from 'reactstrap';


function Success(){
    const [urls, setUrls] = useState();
    useEffect(() => {
        api.get('/success').then(response => {
            setUrls(response.data)
        })
    }, [urls])
    
    async function handleClick(e, url_encurtada) {
        e.preventDefault();
        const response = await api.post('edit', { url_encurtada });
        window.open(response.data.original_url, '_blank');
    }
    return(
        <>
            <h1 className="text-center">Últimas URLs de Hoje</h1>
            <Container fluid={true} className="row justifu-content-center">
                <Table striped>
                    <thead>
                        <tr>
                            <th>Url Original</th>
                            <th>Url Encurtada</th>
                            <th>Total de Clicks - URL Curta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urls?.map(url => (
                            <tr key={url.id}>
                                <td><a href={url.original_url} target="_blank">
                                    {url.original_url}
                                </a></td>
                                <td 
                                onClick={e => handleClick(e, url.url_encurtada)}>
                                    http://localhost:3000/{url.url_encurtada}
                                </td>
                                <td>{url.count_clicks}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                
            </Container>
        </>
    )
}
export default Success;