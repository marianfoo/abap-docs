  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_structure.htm) →  [Examples of structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_abexas.htm) → 

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

Structure types of the ABAP Dictionary are typically used in ABAP programs to define structures or internal tables with a structured row type to process data that is imported to them from the database. The example shows how a structure carrier local to the program is declared by reference to a database table SCARR defined in the ABAP Dictionary, and used as the target area of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm)statement.