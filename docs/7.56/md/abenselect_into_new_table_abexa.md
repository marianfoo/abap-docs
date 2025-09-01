---
title: "SELECT, Create Internal Table as Target Area"
description: |
  The example demonstrates the creation of an internal table as a target area of the statement SELECT. Source Code REPORT demo_select_into_new_table. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: dbtab TYPE tabname VALUE 'SPFLI',
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_into_new_table_abexa.htm"
abapFile: "abenselect_into_new_table_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "field-symbol", "abenselect", "into", "new", "table", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_clauses.htm) →  [SELECT, INTO, APPENDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) →  [SELECT, INTO target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_into_target.htm) → 

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

Creates an internal table that matches any DDIC database table in the INTO clause and reads the first rows rows of the DDIC database table into the internal table. Since the data reference table is generically typed, access to the internal table can only take place using the field symbol <fs>.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the DDIC database table specified exists and can be used.

See also the [executable example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_tabular_data_abexa.htm) for CREATE DATA with explicit creation of the internal table.