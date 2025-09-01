---
title: "Internal Tables, Index Function"
description: |
  The example demonstrates the table function line_index(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenline_index_function.htm). Source Code REPORT. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: class_constructor, main. PRIVATE SECTION. CLASS-DATA flight_tab TYPE STANDARD
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenline_index_abexa.htm"
abapFile: "abenline_index_abexa.htm"
keywords: ["select", "insert", "do", "if", "try", "method", "class", "data", "internal-table", "abenline", "index", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_expr_func.htm) →  [Table Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_functions.htm) →  [line\_index - Index Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenline_index_function.htm) → 

Internal Tables, Index Function

The example demonstrates the table function [line\_index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenline_index_function.htm).

Source Code

REPORT.
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
    DATA idx TYPE TABLE OF i.
    idx = VALUE #(
          ( line\_index( flight\_tab\[ carrid = 'UA'
                                    connid = '0941'
                                    ##primkey\[id\] \] ) )
          ( line\_index( flight\_tab\[ KEY id
                                    carrid = 'UA'
                                    connid = '0941' \] ) )
          ( line\_index( flight\_tab\[ KEY id
                                    carrid = 'xx'
                                    connid = 'yyyy' \] ) )
          ( line\_index( flight\_tab\[ cityfrom = 'FRANKFURT'
                                    cityto   = 'NEW YORK'
                                    ##primkey\[cities\] \] ) )
          ( line\_index( flight\_tab\[ KEY cities
                                    cityfrom = 'FRANKFURT'
                                    cityto   = 'NEW YORK'  \] ) )
          ( line\_index( flight\_tab\[ KEY cities
                                    cityfrom = 'xxxxxxxx'
                                    cityto   = 'yyyyyyyy'  \] ) ) ).
    cl\_demo\_output=>display( idx ).  ENDMETHOD.
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

Various row numbers in the same internal table as used in the executable example for [specified rows](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_itab_line_abexa.htm) are read and inserted in an internal table, idx:

1.  The row number of a row in the [primary table index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") found using a free search key.
    
2.  The number \-1, since the secondary hash key id is used.
    
3.  The number 0, since no row is found (0 overrides \-1).
    
4.  The row number of a row in the [primary table index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") found using a different free search key.
    
5.  The row number of a row found in the associated [secondary table index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") using the sorted table key cities.
    
6.  The number 0, since no row is found.