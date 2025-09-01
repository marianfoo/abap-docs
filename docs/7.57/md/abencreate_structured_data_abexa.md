  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) →  [CREATE DATA, TYPE, LIKE](javascript:call_link\('abapcreate_data_existing.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Creating Structured Data Objects, ABENCREATE_STRUCTURED_DATA_ABEXA, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = dbtab
      )->add\_field( CHANGING field = rows )->request( ).
    FINAL(out) = cl\_demo\_output=>new( ).
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
        SELECT \*
               FROM (dbtab)
               INTO @dref->\*
               UP TO @rows ROWS.
          out->write( dref->\* ).
        ENDSELECT.
        out->display( ).
      CATCH cx\_sy\_create\_data\_error.
        out->display( 'Error in data creation' ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Creation of a work area that matches any database table and reads the first few rows (rows) of the database table into this work area using a [SELECT](javascript:call_link\('abapselect.htm'\)) loop.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the entered database table exists and can be used.

See also the [executable example](javascript:call_link\('abenselect_into_new_wa_abexa.htm'\)) for SELECT INTO NEW, where the structure is created implicitly in the INTO clause.