  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, INTO, APPENDING](javascript:call_link\('abapinto_clause.htm'\)) →  [SELECT, INTO target](javascript:call_link\('abapselect_into_target.htm'\)) → 

SELECT, Create Internal Table as Target Area

The example demonstrates the creation of an internal table as a target area of the statement SELECT.

Source Code

REPORT demo\_select\_into\_new\_table.
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
        SELECT \*
               FROM (dbtab)
               INTO TABLE NEW @DATA(table)
               UP TO @rows ROWS.
        assign table->\* to field-symbol(<fs>).
        out->display( <fs> ).
      CATCH cx\_sy\_open\_sql\_db.
        out->display( 'Error in ABAP SQL' ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Creates an internal table that is compatible with a DDIC database table in the INTO clause and reads the first rows (rows) of the DDIC database table into the internal table. Since the data reference table is generically typed, access to the internal table can only take place using the field symbol <fs>.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the DDIC database table specified exists and can be used.

See also the [executable example](javascript:call_link\('abencreate_tabular_data_abexa.htm'\)) for CREATE DATA with explicit creation of the internal table.