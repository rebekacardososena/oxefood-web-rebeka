import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormEntregador() {
   
    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="9.999.999"
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={7}>
                                    <InputMask
                                        mask="(99) 99999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    maxLength="100"
                                />

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    maxLength="100"
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    maxLength="255"

                                />

                                <Form.Input
                                    fluid
                                    label='Número'
                                    maxLength="255"
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="255"
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    maxLength="255"
                                />

                                <Form.Input
                                    fluid
                                    label='CEP'>
                                    <InputMask
                                        required
                                        mask="99.999.999"
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Select
                                fluid
                                label='UF'
                                placeholder='Selecione'
                                const countryOptions = [
                                    { key: 'AM', value: 'AM', text: 'Amazonias' },
                                    { key: 'AC', value: 'AC', text: 'Acre' },
                                    { key: 'AL', value: 'AL', text: 'Alagoas' },
                                    { key: 'PA', value: 'PA', text: 'Pará' },

                                    
                                  ]
                            
                                  const SelectExample = () => (
                                    <Select placeholder='Select your country' options={countryOptions} />
                                  )
                                  export default SelectExample
                                />

                            <Form.Input
                                fluid
                                label='Complemento'
                                maxLength="255"
                            />

                            <Form.Radio
                                fluid
                                label='Ativo:'
                                
                
                            />

                        </Form>

                        <div style={{ marginTop: '4%' }}>

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
