---
title: "SELECT, Create Internal Table as Target Area"
description: |
  The example demonstrates the creation of an internal table as a target area of the statement SELECT. Source Code  Public class definition CLASS cl_demo_select_into_new_table DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_into_new_table_abexa.htm"
abapFile: "abenselect_into_new_table_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abenselect", "into", "new", "table", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm) →  [SELECT, INTO, APPENDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) →  [SELECT, INTO target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_into_target.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Create%20Internal%20Table%20as%20Target%20Area%2C%20ABENSELECT_INTO_NEW_TABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

SELECT, Create Internal Table as Target Area

The example demonstrates the creation of an internal table as a target area of the statement SELECT.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_into\_new\_table DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_into\_new\_table IMPLEMENTATION.
  METHOD main.
    DATA: dbtab TYPE tabname VALUE 'SPFLI',
          rows  TYPE i VALUE 100.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = dbtab
      )->add\_field( CHANGING field = rows )->request( ).
    IF rows < 1 OR rows > 1000.
      out->write( 'Enter rows between 1 and 1000' ).
      RETURN.
    ENDIF.
    dbtab = to\_upper( dbtab ).
    TRY.
        cl\_abap\_dyn\_prg=>check\_table\_name\_str(
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
        SELECT \*
               FROM (dbtab)
               INTO TABLE NEW @FINAL(table)
               UP TO @rows ROWS.
        out->write( table->\* ).
      CATCH cx\_sy\_open\_sql\_db.
        out->write( 'Error in ABAP SQL' ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

Creates an internal table that matches any DDIC database table in the INTO clause and reads the first rows rows of the DDIC database table into the internal table.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the DDIC database table specified exists and can be used.

See also the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_tabular_data_abexa.htm) for CREATE DATA with explicit creation of the internal table.