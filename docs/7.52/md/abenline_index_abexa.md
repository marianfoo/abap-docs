  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [Table Functions](javascript:call_link\('abentable_functions.htm'\)) →  [line\_index - Index Function](javascript:call_link\('abenline_index_function.htm'\)) → 

Internal Tables, Index Function

The example demonstrates the table function [line\_index](javascript:call_link\('abenline_index_function.htm'\)).

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

Various row numbers in the same internal table as used in the executable example for [specified rows](javascript:call_link\('abentable_exp_itab_line_abexa.htm'\)) are read and inserted in an internal table, idx:

1.  The row number of a row in the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") found using a free search key.
    
2.  The number \-1, since the secondary hash key id is used.
    
3.  The number 0, since no row is found (0 overrides \-1).
    
4.  The row number of a row in the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") found using a different free search key.
    
5.  The row number of a row found in the associated [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") using the sorted table key cities.
    
6.  The number 0, since no row is found.