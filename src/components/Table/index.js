const config = {
    grouping: {
      placeholder: 'Arrastar cabeçalhos ...',
      groupedBy: 'Agrupados por:',
    },
    body: {
      addTooltip: 'Adicionar',
      deleteTooltip: 'Excluir',
      editTooltip: 'Editar' ,
      emptyDataSourceMessage: 'Não há registros a serem exibidos',
      editRow: { 
        deleteText: 'Confirmar a exclusão ?',
        cancelTooltip: 'Cancelar',
        saveTooltip: 'Salvar',
      },
      filterRow: {
        filterTooltip: 'Filtrar'
      },
    },
      header: { 
        actions: 'Ações',
      },
      pagination: {
          labelRowsSelect: 'linhas',
          labelRowsPerPage: 'Linhas por página:',
          firstAriaLabel: 'Primeira página',
          firstTooltip: 'Primeira página',
          previousAriaLabel: 'Página anterior',
          previousTooltip: 'Página anterior',
          nextAriaLabel: 'Próxima página',
          nextTooltip: 'Próxima página',
          lastAriaLabel: 'Última página',
          lastTooltip: 'Última página',
      },
      toolbar: {
          addRemoveColumns: 'Adicionar ou remover colunas',
          nRowsSelected: `{0} linha(s) selecionada(s)`,
          showColumnsTitle: 'Mostrar colunas',
          showColumnsAriaLabel: 'Mostrar colunas',
          exportTitle: 'Exportar',
          exportAriaLabel: 'Exportar',
          exportName: 'Exportar para CSV',
          searchTooltip: 'Procurar',
          searchPlaceholder: 'Procurar'

        } 
}

export default config