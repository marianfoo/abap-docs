---
title: "Creating Tabular Data Objects"
description: |
  The example demonstrates the creation of tabular data objects Source Code  Public class definition CLASS cl_demo_create_tabular_data DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_tabular_data_abexa.htm"
abapFile: "abencreate_tabular_data_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abencreate", "tabular", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm) →  [CREATE DATA, TABLE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20Tabular%20Data%20Objects%2C%20ABENCREATE_TABULAR_DATA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Creating Tabular Data Objects

The example demonstrates the creation of tabular data objects

Source Code   

\* Public class definition
CLASS cl\_demo\_create\_tabular\_data DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_create\_tabular\_data IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO data.
    DATA: dbtab TYPE tabname VALUE 'SPFLI',
          rows  TYPE i VALUE 100.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = dbtab
      )->add\_field( CHANGING field = rows )->request( ).
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
        CREATE DATA dref TYPE STANDARD TABLE OF (dbtab)
                              WITH NON-UNIQUE DEFAULT KEY.
        SELECT \*
               FROM (dbtab)
               INTO TABLE @dref->\*
               UP TO @rows ROWS.
        out->write( dref->\* ).
      CATCH cx\_sy\_create\_data\_error.
        out->write( 'Error in data creation' ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

Creation of an internal table that matches any database table and reading the first rows (rows) of the database into the internal table.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the database table specified exists and can be used.

See also the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_into_new_table_abexa.htm) for SELECT INTO NEW, where the internal table is created implicitly in the INTO clause.