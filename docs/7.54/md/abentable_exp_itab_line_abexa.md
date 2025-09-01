---
title: "Table Expressions, Specified Rows"
description: |
  This example demonstrates how the row is specified in table expressions. Source Code REPORT demo_tab_exp_line. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: class_constructor, main. PRIVATE SECTION. CLASS-DATA flight_tab TYPE STANDARD TABLE OF spfli WITH EMPTY KEY WITH UNIQUE HASHED KEY
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_itab_line_abexa.htm"
abapFile: "abentable_exp_itab_line_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abentable", "exp", "itab", "line", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_expr_func.htm) →  [table\_exp - Table Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm) →  [table\_exp - itab\_line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_itab_line.htm) → 

Table Expressions, Specified Rows

This example demonstrates how the row is specified in table expressions.

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

Table expressions that specify different rows are used as input parameters of the method WRITE\_DATA of the output class CL\_DEMO\_OUTPUT. The following output is produced:

1.  The first row of the [primary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_index_glosry.htm "Glossary Entry")
    
2.  The first row of the [secondary table index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") that is assigned to the [secondary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") cities.
    
3.  A row with specific content in the columns CARRID and CONNID. Searches using a free key are not optimized and the associated syntax check warning is hidden here using a [pragma](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpragma_glosry.htm "Glossary Entry").
    
4.  The same row as before, but with a read optimized using the secondary hash key id.
    
5.  A row with specific content in the columns CITYFROM and CITYTO with searches optimized using the secondary sorted key cities.