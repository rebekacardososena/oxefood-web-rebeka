import axios from "axios";
import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, FormGroup, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { Link, useLocation } from "react-router-dom";

export default function FormEntregador() {
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dtaNascimento, setDtaNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUF, setEnderecoUF] = useState();
    const [ativo, setAtivo] = useState(true);

    const { state } = useLocation();
    const [idEntregador, setIdEntregador] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8081/api/entregador/" + state.id)
                .then((response) => {
                    setIdEntregador(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setRg(response.data.rg)
                    setDtaNascimento(formatarData(response.data.dtaNascimento))
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)
                    setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
                    setValorFrete(response.data.valorFrete)
                    setEnderecoRua(response.data.enderecoRua)
                    setEnderecoComplemento(response.data.enderecoComplemento)
                    setEnderecoNumero(response.data.enderecoNumero)
                    setEnderecoBairro(response.data.enderecoBairro)
                    setEnderecoCidade(response.data.enderecoCidade)
                    setEnderecoCep(response.data.enderecoCep)
                    setEnderecoUF(response.data.enderecoUF)
                    setAtivo(response.data.ativo)

                })
        }
    }, [state])

    function salvar() {

        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dtaNascimento: dtaNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qtdEntregasRealizadas: qtdEntregasRealizadas,
            valorFrete: valorFrete,
            enderecoRua: enderecoRua,
            enderecoComplemento: enderecoComplemento,
            enderecoNumero: enderecoNumero,
            enderecoBairro: enderecoBairro,
            enderecoCidade: enderecoCidade,
            enderecoCep: enderecoCep,
            enderecoUF: enderecoUF,
            ativo: ativo
        }
        if (idEntregador != null) { //Alteração:
            axios.put("http://localhost:8081/api/entregador/" + idEntregador, entregadorRequest)
                .then((response) => { console.log('Entregador alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alterar um Entregador.') })
        } else { //Cadastro: 

            axios.post("http://localhost:8081/api/entregador", entregadorRequest)
                .then((response) => {
                    console.log('Entregador cadastrado com sucesso.')
                })
                .catch((error) => {
                    console.log('Erro ao incluir Entregador.')
                })
        }
    }
    const estados = [
        { key: 'al', value: 'al', text: 'Alagoas' },
        { key: 'ba', value: 'ba', text: 'Bahia' },
        { key: 'ce', value: 'ce', text: 'Ceará' },
        { key: 'ma', value: 'ma', text: 'Maranhão' },
        { key: 'pb', value: 'pb', text: 'Paraíba' },
        { key: 'pe', value: 'pe', text: 'Pernambuco' },
        { key: 'pi', value: 'pi', text: 'Piauí' },
        { key: 'rn', value: 'rn', text: 'Rio Grande do Norte' },
        { key: 'se', value: 'se', text: 'Sergipe' },
    ];
    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    return (

        <div>
            <MenuSistema tela={'entregador'} />


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
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="9.999.999"
                                        value={rg}
                                        onChange={e => setRg(e.target.value)}
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
                                        value={dtaNascimento}
                                        onChange={e => setDtaNascimento(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={7}>
                                    <InputMask
                                        mask="(99) 99999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    maxLength="100"
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    maxLength="100"
                                    value={valorFrete}
                                    onChange={e => setValorFrete(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    maxLength="255"
                                    value={enderecoRua}
                                    onChange={e => setEnderecoRua(e.target.value)}

                                />

                                <Form.Input
                                    fluid
                                    label='Número'
                                    maxLength="255"
                                    value={enderecoNumero}
                                    onChange={e => setEnderecoNumero(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="255"
                                    value={enderecoBairro}
                                    onChange={e => setEnderecoBairro(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    maxLength="255"
                                    value={enderecoCidade}
                                    onChange={e => setEnderecoCidade(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='CEP'>
                                    <InputMask
                                        required
                                        mask="99.999.999"
                                        value={enderecoCep}
                                        onChange={e => setEnderecoCep(e.target.value)}
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Select
                                label='UF'
                                placeholder="Selecione"
                                options={estados}
                                value={enderecoUF}
                                onChange={e => setEnderecoUF(e.target.value)}
                            >
                            </Form.Select>

                            <Form.Input
                                fluid
                                label='Complemento'
                                maxLength="255"
                                value={enderecoComplemento}
                                onChange={e => setEnderecoComplemento(e.target.value)}
                            />
                            <FormGroup inline>
                                <label>Ativo:</label>
                                <Form.Radio
                                    label='Sim'
                                    checked={ativo}
                                    onChange={e => setAtivo(true)}
                                />
                                <Form.Radio
                                    label='Não'
                                    checked={!ativo}
                                    onChange={e => setAtivo(false)}
                                />
                            </FormGroup>

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
                                    <Link to={'/list-entregador'}>Voltar</Link>
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
                        </Form>
                    </div>

                </Container>
            </div>
        </div>

    );

}
