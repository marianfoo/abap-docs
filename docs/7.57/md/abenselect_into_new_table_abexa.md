  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, INTO, APPENDING](javascript:call_link\('abapinto_clause.htm'\)) →  [SELECT, INTO target](javascript:call_link\('abapselect_into_target.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, Create Internal Table as Target Area, ABENSELECT_INTO_NEW_TABLE_ABEXA, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
    IF rows < 1 OR rows > 1000.
      cl\_demo\_output=>display( 'Enter rows between 1 and 1000' ).
      RETURN.
    ENDIF.
    FINAL(out) = cl\_demo\_output=>new( ).
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
               INTO TABLE NEW @FINAL(table)
               UP TO @rows ROWS.
        out->display( table->\* ).
      CATCH cx\_sy\_open\_sql\_db.
        out->display( 'Error in ABAP SQL' ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Creates an internal table that matches any DDIC database table in the INTO clause and reads the first rows rows of the DDIC database table into the internal table.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the DDIC database table specified exists and can be used.

See also the [executable example](javascript:call_link\('abencreate_tabular_data_abexa.htm'\)) for CREATE DATA with explicit creation of the internal table.