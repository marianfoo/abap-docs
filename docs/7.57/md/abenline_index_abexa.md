---
title: "Source Code"
description: |
  REPORT. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: class_constructor, main. PRIVATE SECTION. CLASS-DATA flight_tab TYPE STANDARD TABLE OF spfli WITH EMPTY KEY WITH UNIQUE HASHED KEY id COMPONENTS carrid connid WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto. ENDCLASS. CLASS
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenline_index_abexa.htm"
abapFile: "abenline_index_abexa.htm"
keywords: ["select", "insert", "do", "if", "try", "method", "class", "data", "internal-table", "abenline", "index", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_expr_func.htm) →  [itab - Table Functions (table\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_functions.htm) →  [table\_func - line\_index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenline_index_function.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: table_func - Index Function, ABENLINE_INDEX_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

table\_func - Index Function

The example demonstrates the table function [line\_index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenline_index_function.htm).

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

Different line numbers in the same internal table as in the executable example for [specified lines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_itab_line_abexa.htm) are read and inserted into an internal table, idx:

1.  The line number of a line in the [primary table index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") found using a free search key.

1.  The number \-1, since the secondary hash key id is used.

1.  The number 0, since no line is found (0 overrides \-1).

1.  The line number of a line in the [primary table index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") found using a different free search key.

1.  The line number of a line found in the assigned [secondary table index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") using the sorted table key cities.

1.  The number 0, since no line is found.