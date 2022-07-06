import { useState } from 'react';
import Modal from 'react-modal'
import closeIme from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTipeContainer, RadioBox } from './styles';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

    

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type='button' onClick={onRequestClose} className="react-modal-close">
                <img src={closeIme} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder='Título'
                />
                <input
                type='number'
                    placeholder='Valor'
                />

                <TransactionTipeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>

                    </RadioBox>
                    <RadioBox
                        type='button'
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>

                    </RadioBox>
                </TransactionTipeContainer>

                <input 
                    placeholder='Categoria'
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}