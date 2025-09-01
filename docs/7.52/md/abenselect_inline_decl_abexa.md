  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_clauses.htm) →  [SELECT - INTO, APPENDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) → 

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