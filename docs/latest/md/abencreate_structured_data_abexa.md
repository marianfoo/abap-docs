  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_data.htm) →  [CREATE DATA, TYPE, LIKE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_data_existing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20Structured%20Data%20Objects%2C%20ABENCREATE_STRUCTURED_DATA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Creating Structured Data Objects

This example demonstrates how structured data objects are created.

Source Code   

\* Public class definition
CLASS cl\_demo\_create\_structured\_data DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_create\_structured\_data IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO data.
    DATA: dbtab TYPE tabname VALUE 'SPFLI',
          rows  TYPE i VALUE 100.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = dbtab
      )->add\_field( CHANGING field = rows )->request( ).
    dbtab = to\_upper( dbtab ).
    TRY.
        dbtab = cl\_abap\_dyn\_prg=>check\_table\_name\_str(
                  val = dbtab
                  packages = 'SAPBC\_DATAMODEL' ).
      CATCH cx\_abap\_not\_a\_table.
        out->write( 'Database table not found' ).
        RETURN.
      CATCH cx\_abap\_not\_in\_package.
        out->write(
          'Only tables from the flight data model are allowed' ).
        RETURN.
    ENDTRY.
    TRY.
        CREATE DATA dref TYPE (dbtab).
        SELECT \*
               FROM (dbtab)
               INTO @dref->\*
               UP TO @rows ROWS.
          out->write( dref->\* ).
        ENDSELECT.
      CATCH cx\_sy\_create\_data\_error.
        out->write( 'Error in data creation' ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

Creation of a work area that matches any database table and reads the first few rows (rows) of the database table into this work area using a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) loop.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the entered database table exists and can be used.

See also the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_into_new_wa_abexa.htm) for SELECT INTO NEW, where the structure is created implicitly in the INTO clause.