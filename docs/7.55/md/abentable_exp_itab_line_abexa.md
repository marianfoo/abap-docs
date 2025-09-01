  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_expr_func.htm) →  [itab - Table Expressions (table\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expressions.htm) →  [table\_exp - itab\_line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_exp_itab_line.htm) → 

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
        DATA(out) = cl\_demo\_output=>new(
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

1.  The first line of the [primary table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_index_glosry.htm "Glossary Entry")
    
2.  The first line of the [secondary table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") that is assigned to the [secondary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") cities.
    
3.  A line with specific content in the columns CARRID and CONNID. Searches using a free key are not optimized and the associated syntax check warning is hidden here using a [pragma](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpragma_glosry.htm "Glossary Entry").
    
4.  The same line as before, but with a read optimized using the secondary hash key id.
    
5.  A line with specific content in the columns CITYFROM and CITYTO with searches optimized using the secondary sorted key cities.