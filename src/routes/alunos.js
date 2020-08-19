const express = require('express');
const router = express.Router();
const pool = require('../database');

const { isLoggedIn } = require('../lib/auth');

router.get('/add', isLoggedIn, (req, res) => {
    res.render('alunos/add');
});

router.post('/add', isLoggedIn, async (req, res) => {
    const { Name, 
            DocumentCpf, 
            DocumentRg, 
            Birthday, 
            Phone, 
            AddressCode, 
            AddressStreet, 
            AddressDistrict, 
            AddressCity, 
            AddressState } = req.body;
    const newAluno = {
            Name, 
            DocumentCpf, 
            DocumentRg, 
            Birthday, 
            Phone, 
            AddressCode, 
            AddressStreet, 
            AddressDistrict, 
            AddressCity, 
            AddressState,
            user_id: req.user.IdAluno
    };
    console.log(newAluno);

    await pool.query('INSERT INTO aln.Alunos set ?', [newAluno]);
    req.flash('success', 'Aluno salvo com sucesso!')
    res.redirect('/alunos');
});

router.get('/', isLoggedIn, async (req, res) => {
    const alunos = await pool.query('SELECT * FROM aln.Alunos');
    console.log(alunos);
    res.render('alunos/list', { alunos });
});

router.get('/edit/:IdAluno', isLoggedIn, async (req, res) => {
    const {IdAluno } = req.params;
    const alunos = await pool.query('SELECT * FROM aln.Alunos WHERE IdAluno = ?', [IdAluno]);
    console.log(alunos[0]);
    res.render('alunos/edit', {alunos: alunos[0]});
});

router.post('/edit/:IdAluno', isLoggedIn, async (req, res) => {
    const { IdAluno } = req.params;
    const { Name, 
            DocumentCpf, 
            DocumentRg, 
            Birthday, 
            Phone, 
            AddressCode, 
            AddressStreet, 
            AddressDistrict, 
            AddressCity, 
            AddressState } = req.body;
    const newAluno = {
            Name, 
            DocumentCpf, 
            DocumentRg, 
            Birthday, 
            Phone, 
            AddressCode, 
            AddressStreet, 
            AddressDistrict, 
            AddressCity, 
            AddressState
        };
    console.log(newAluno);
    await pool.query('UPDATE aln.Alunos SET ? WHERE IdAluno = ?', [newAluno, IdAluno]);
    res.redirect('/alunos');
})

module.exports = router;