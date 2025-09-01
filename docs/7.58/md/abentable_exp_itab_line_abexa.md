  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [itab - Table Expressions (table\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expressions.htm) →  [table\_exp - itab\_line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_exp_itab_line.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20table_exp%20-%20Line%20Specification%2C%20ABENTABLE_EXP_ITAB_LINE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

table\_exp - Line Specification

This example demonstrates how the line is specified in table expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_tab\_exp\_line DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA
      flight\_tab
        TYPE STANDARD TABLE OF spfli
        WITH EMPTY KEY
        WITH UNIQUE HASHED KEY id COMPONENTS carrid connid
        WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_tab\_exp\_line IMPLEMENTATION.
  METHOD main.
    TRY.
        out->begin\_section(
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
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    SELECT \*
            FROM spfli
            ORDER BY carrid, connid
            INTO TABLE @flight\_tab.
  ENDMETHOD.
ENDCLASS.

Description   

Table expressions that specify different lines are used as input parameters of the method WRITE\_DATA of the output class CL\_DEMO\_OUTPUT. The following output is produced:

1.  The first line of the [primary table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_index_glosry.htm "Glossary Entry")
2.  The first line of the [secondary table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") that is assigned to the [secondary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") cities.
3.  A line with specific content in the columns CARRID and CONNID. Searches using a free key are not optimized and the associated syntax check warning is hidden here using a [pragma](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpragma_glosry.htm "Glossary Entry").
4.  The same line as before, but with a read optimized using the secondary hash key id.
5.  A line with specific content in the columns CITYFROM and CITYTO with searches optimized using the secondary sorted key cities.