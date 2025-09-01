  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm) →  [CREATE DATA - TYPE, LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_existing.htm) → 

Creating Structured Data Objects

This example demonstrates how structured data objects are created.

Source Code

REPORT demo\_create\_structured\_data.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO data.
    DATA: dbtab TYPE tabname VALUE 'SPFLI',
          rows  TYPE i VALUE 100.
    FIELD-SYMBOLS <wa> TYPE any.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = dbtab
      )->add\_field( CHANGING field = rows )->request( ).
    DATA(out) = cl\_demo\_output=>new( ).
    dbtab = to\_upper( dbtab ).
    TRY.
        dbtab = cl\_abap\_dyn\_prg=>check\_table\_name\_str(
                  val = dbtab
                  packages = 'SAPBC\_DATAMODEL' ).
      CATCH cx\_abap\_not\_a\_table.
        out->display( 'Database table not found' ).
        LEAVE PROGRAM.
      CATCH cx\_abap\_not\_in\_package.
        out->display(
          'Only tables from the flight data model are allowed' ).
        LEAVE PROGRAM.
    ENDTRY.
    TRY.
        CREATE DATA dref TYPE (dbtab).
        ASSIGN dref->\* TO <wa>.
        SELECT \*
               FROM (dbtab) UP TO @rows ROWS
               INTO @<wa>.
          out->write( <wa> ).
        ENDSELECT.
        out->display( ).
      CATCH cx\_sy\_create\_data\_error.
        out->display( 'Error in data creation' ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Creates a work area that is compatible with a database table and reads the first few rows (rows) of the database table into this work area using a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) loop. Since the data reference dref is typed dynamically, the work area can only be read using the field symbol <wa>.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the database table specified exists and can be used.

See also the [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_new_wa_abexa.htm) for SELECT INTO NEW, where the structure is created implicitly in the INTO clause.