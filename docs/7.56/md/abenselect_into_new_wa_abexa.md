  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_clauses.htm) →  [SELECT, INTO, APPENDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) →  [SELECT, INTO target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_into_target.htm) → 

SELECT, Create Structure as Target Area

The example demonstrates the creation of an structure as a target area of the statement SELECT.

Source Code

REPORT demo\_select\_into\_new\_wa.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: dbtab TYPE tabname VALUE 'SPFLI',
          rows  TYPE i VALUE 100.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = dbtab
      )->add\_field( CHANGING field = rows )->request( ).
    IF rows < 1 OR rows > 1000.
      cl\_demo\_output=>display( 'Enter rows between 1 and 1000' ).
      RETURN.
    ENDIF.
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
        SELECT \*
               FROM (dbtab)
               INTO NEW @DATA(row)
               UP TO @rows ROWS.
          ASSIGN row->\* TO FIELD-SYMBOL(<fs>).
          out->write( <fs> ).
        ENDSELECT.
        out->display( ).
      CATCH cx\_sy\_open\_sql\_db.
        out->display( 'Error in ABAP SQL' ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Creates a work area that matches any DDIC database table in the INTO clause and reads the first rows rows of the DDIC database table into this work area using a [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) loop. Since the data reference row is typed generically, access to the work area can only take place using the field symbol <fs>.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the DDIC database table specified exists and can be used.

See also the [executable example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_structured_data_abexa.htm) for CREATE DATA with explicit creation of the structure.