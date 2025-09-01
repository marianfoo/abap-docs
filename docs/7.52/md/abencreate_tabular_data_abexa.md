  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) →  [CREATE DATA - TABLE OF](javascript:call_link\('abapcreate_data_itab.htm'\)) → 

Creating Tabular Data Objects

This example demonstrates how tabular data objects are created.

Source Code

REPORT demo\_create\_tabular\_data.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO data.
    DATA: dbtab TYPE tabname VALUE 'SPFLI',
          rows  TYPE i VALUE 100.
    FIELD-SYMBOLS <table> TYPE ANY TABLE.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = dbtab
      )->add\_field( CHANGING field = rows )->request( ).
    DATA(out) = cl\_demo\_output=>new( ).
    dbtab = to\_upper( dbtab ).
    TRY.
        cl\_abap\_dyn\_prg=>check\_table\_name\_str(
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
        CREATE DATA dref TYPE STANDARD TABLE OF (dbtab)
                              WITH NON-UNIQUE DEFAULT KEY.
        ASSIGN dref->\* TO <table>.
        SELECT \*
               FROM (dbtab) UP TO @rows ROWS
               INTO TABLE @<table>.
        out->display( <table> ).
      CATCH cx\_sy\_create\_data\_error.
        out->display( 'Error in data creation' ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Creates an internal table that matches any database table and reads the first few rows (rows) of the database into the internal table. Since the data reference dref is typed dynamically, the internal table can only be read using the field symbol <tab>.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the database table specified exists and can be used.