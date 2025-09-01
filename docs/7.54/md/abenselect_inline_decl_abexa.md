  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT - INTO, APPENDING](javascript:call_link\('abapinto_clause.htm'\)) →  [SELECT - INTO target](javascript:call_link\('abapselect_into_target.htm'\)) → 

SELECT, Inline Declarations

This example demonstrates inline declarations in the statement SELECT.

Source Code

REPORT demo\_select\_inline\_declaration.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES BEGIN OF output\_line.
    INCLUDE TYPE scarr AS scarr RENAMING WITH SUFFIX \_scarr.
    INCLUDE TYPE spfli AS spfli RENAMING WITH SUFFIX \_spfli.
    TYPES END OF output\_line.
    TYPES output TYPE STANDARD TABLE OF output\_line WITH EMPTY KEY.
    data carrier type scarr-carrid VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    SELECT \*
       FROM scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid
       WHERE scarr~carrid = @carrier
       ORDER BY scarr~carrid
       INTO TABLE @DATA(itab).
    SELECT scarr~\*, spfli~\*
       FROM scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid
       WHERE scarr~carrid = @carrier
       ORDER BY scarr~carrid
       INTO TABLE @DATA(jtab).
    ASSERT itab = jtab.
    cl\_demo\_output=>write( name = 'OUTPUT1' data =
      VALUE output( FOR wa IN itab ( scarr = wa-scarr
                                     spfli = wa-spfli ) ) ).
    SELECT scarr~carrname,
           spfli~connid, spfli~cityfrom, spfli~cityto
       FROM scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid
       WHERE scarr~carrid = @carrier
       ORDER BY scarr~carrid
       INTO TABLE @DATA(output2).
    cl\_demo\_output=>display( output2 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The inline declarations of the first two SELECT statements create the same internal tables. The row type of the internal tables is a structure with the two substructures scarr and spfli that each have the columns of the two joined database tables as components. The substructures are resolved in a table comprehension in the output.

The inline declaration of the third SELECT statement creates an internal table with a non-nested row structure. The components of the row are determined directly using the columns specified in the SELECT list.