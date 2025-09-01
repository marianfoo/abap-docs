  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) →  [Examples of structures](javascript:call_link\('abenstructure_abexas.htm'\)) → 

Structure from ABAP Dictionary

This example demonstrates a structure from the ABAP Dictionary and its use.

Source Code

REPORT demo\_dictionary\_structure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrier TYPE scarr.
    carrier-carrid = 'UA'.
    cl\_demo\_input=>request( CHANGING field = carrier-carrid ).
    SELECT SINGLE \*
           FROM scarr
           INTO carrier
           WHERE carrid = carrier-carrid.
    cl\_demo\_output=>display( carrier ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Structure types of the ABAP Dictionary are typically used in ABAP programs to define structures or internal tables with a structured line type to process data that is imported from the database. The example shows how a structure carrier local to the program is declared by reference to a database table SCARR defined in the ABAP Dictionary, and used as the target area of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.