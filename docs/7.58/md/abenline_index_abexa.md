  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [itab - Table Functions (table\_func)](javascript:call_link\('abentable_functions.htm'\)) →  [table\_func - line\_index](javascript:call_link\('abenline_index_function.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20table_func%20-%20Index%20Function%2C%20ABENLINE_INDEX_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

table\_func - Index Function

The example demonstrates the table function [line\_index](javascript:call_link\('abenline_index_function.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_line\_index DEFINITION
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
CLASS cl\_demo\_line\_index IMPLEMENTATION.
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
    out->write( idx ).
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

Different line numbers in the same internal table as in the executable example for [specified lines](javascript:call_link\('abentable_exp_itab_line_abexa.htm'\)) are read and inserted into an internal table, idx:

1.  The line number of a line in the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") found using a free search key.

1.  The number \-1, since the secondary hash key id is used.

1.  The number 0, since no line is found (0 overrides \-1).

1.  The line number of a line in the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") found using a different free search key.

1.  The line number of a line found in the assigned [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") using the sorted table key cities.

1.  The number 0, since no line is found.