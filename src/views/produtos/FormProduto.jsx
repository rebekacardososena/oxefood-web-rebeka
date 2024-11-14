import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormTextArea } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto() {

    const [codigo, setCodigo] = useState();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();

    function salvar() {

        let produtoRequest = {
            codigo: codigo,
            titulo: titulo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo: tempoEntregaMaximo
        }

        axios.post("http://localhost:8081/api/produto", produtoRequest)
            .then((response) => {
                console.log('Produto cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir produto.')
            })
    }
    return (

        <div>
            <MenuSistema tela={'produto'} />
            <div style={{ marginTop: '3%' }}>
           


                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    placeholder='Informe o título do produto'
                                    maxLength="100"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    placeholder='Informe o código do produto'
                                    maxLength="100"
                                    value={codigo}
                                    onChange={e => setCodigo(e.target.value)}
                                />

                            </Form.Group>

                            <Form.TextArea
                                fluid
                                label='Descrição'
                                placeholder='Informe a descrição do produto'
                                textarea name="postContent" rows={4} cols={40}
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />

                            <Form.Group widths={"equal"}>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    placeholder='Informe o código do produto'
                                    maxLength="255"
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    placeholder='30'
                                    maxLength="255"
                                    value={tempoEntregaMinimo}
                                    onChange={e => setTempoEntregaMinimo(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    placeholder='40'
                                    maxLength="255"
                                    value={tempoEntregaMaximo}
                                    onChange={e => setTempoEntregaMaximo(e.target.value)}
                                />

                            </Form.Group>

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
                                onClick={() => salvar()}
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
