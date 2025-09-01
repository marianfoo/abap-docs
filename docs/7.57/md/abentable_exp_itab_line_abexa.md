  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [itab - Table Expressions (table\_exp)](javascript:call_link\('abentable_expressions.htm'\)) →  [table\_exp - itab\_line](javascript:call_link\('abentable_exp_itab_line.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: table_exp - Line Specification, ABENTABLE_EXP_ITAB_LINE_ABEXA, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

table\_exp - Line Specification

This example demonstrates how the line is specified in table expressions.

Source Code   

REPORT demo\_tab\_exp\_line.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: class\_constructor,
                   main.
  PRIVATE SECTION.
    CLASS-DATA
      flight\_tab
        TYPE STANDARD TABLE OF spfli
        WITH EMPTY KEY
        WITH UNIQUE HASHED KEY id COMPONENTS carrid connid
        WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TRY.
        FINAL(out) = cl\_demo\_output=>new(
          )->begin\_section(
          \`Primary index line 1\`
          )->write(
            flight\_tab\[ 1 \] ).
        out->next\_section(
          \`Secondary index CITIES line 1\`
          )->write(
            flight\_tab\[ KEY cities INDEX 1 \] ).
        out->next\_section(
          \`Free key CARRID, CONNID not optimized\`
          )->write(
            flight\_tab\[ carrid = 'UA'
                        connid = '0941' \] ) ##primkey\[id\].
        out->next\_section(
          \`Secondary key ID optimized\`
          )->write(
            flight\_tab\[ KEY id COMPONENTS carrid = 'UA'
                                          connid = '0941' \] ).
        out->next\_section(
          \`Secondary key CITIES optimized\`
          )->write(
            flight\_tab\[ KEY cities cityfrom = 'FRANKFURT'
                                   cityto   = 'NEW YORK' \] ).
      CATCH cx\_sy\_itab\_line\_not\_found.
        out->write( \`Nothing found\` ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    SELECT \*
           FROM spfli
           ORDER BY carrid, connid
           INTO TABLE @flight\_tab.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Table expressions that specify different lines are used as input parameters of the method WRITE\_DATA of the output class CL\_DEMO\_OUTPUT. The following output is produced:

1.  The first line of the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry")
2.  The first line of the [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") that is assigned to the [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") cities.
3.  A line with specific content in the columns CARRID and CONNID. Searches using a free key are not optimized and the associated syntax check warning is hidden here using a [pragma](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry").
4.  The same line as before, but with a read optimized using the secondary hash key id.
5.  A line with specific content in the columns CITYFROM and CITYTO with searches optimized using the secondary sorted key cities.