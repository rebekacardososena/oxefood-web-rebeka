import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormTextArea } from 'semantic-ui-react';

export default function FormProduto () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    placeholder= 'Informe o título do produto'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    placeholder= 'Informe o código do produto'
                                    maxLength="100"   
                              />

                            </Form.Group>
                            
                            <Form.TextArea
                                    fluid
                                    label='Descrição'
                                    placeholder= 'Informe a descrição do produto'
                                    textarea name="postContent" rows={4} cols={40}
                              />

                            <Form.Group widths={"equal"}>

                                <Form.Input
                                        required
                                        fluid
                                        label='Valor Unitário'
                                        placeholder= 'Informe o código do produto'
                                        maxLength="255"   
                                />

                                <Form.Input
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'
                                        placeholder= '30'
                                        maxLength="255"   
                                />

                                <Form.Input
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'
                                        placeholder= '40'
                                        maxLength="255"   
                                />

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
