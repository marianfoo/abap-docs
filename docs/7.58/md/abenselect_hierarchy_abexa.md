---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_hrrchy_bulk_increment DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. PRIVATE SECTION. DATA: all_lines   TYPE i VALUE 100000, hiera_lines TYPE i VALUE 10, start_node  TYPE demo_guid_hiera
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_abexa.htm"
abapFile: "abenselect_hierarchy_abexa.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "try", "catch", "method", "class", "data", "abenselect", "hierarchy", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_data.htm) →  [SELECT, FROM hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy.htm) →  [SELECT, FROM HIERARCHY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_generator.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Hierarchy%20Generator%2C%20BULK%20vs.%20INCREMENTAL%2C%20ABENSELECT_HIERARCHY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

SELECT, Hierarchy Generator, BULK vs. INCREMENTAL

This example demonstrates how the addition [LOAD INCREMENTAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_generator.htm) can speed up the generation of a hierarchy.

Source Code   

\* Public class definition
CLASS cl\_demo\_hrrchy\_bulk\_increment DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA:
      all\_lines   TYPE i VALUE 100000,
      hiera\_lines TYPE i VALUE 10,
      start\_node  TYPE demo\_guid\_hiera-id.
    METHODS fill\_table.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_hrrchy\_bulk\_increment IMPLEMENTATION.
  METHOD main.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = all\_lines
      )->add\_field( CHANGING field = hiera\_lines
      )->request( ).
    IF all\_lines < 10 OR hiera\_lines > all\_lines.
      out->write(
        |ALL\_LINES mus be at least 10\\n| &&
        |HIERA\_LINES cannot be greater than ALL\_LINES| ).
      RETURN.
    ENDIF.
    fill\_table( ).
    SELECT FROM HIERARCHY( SOURCE demo\_cds\_guid\_hiera\_source
                           CHILD TO PARENT ASSOCIATION \_relat
                           START WHERE id = @start\_node
                           SIBLINGS ORDER BY id
                           LOAD BULK )
           FIELDS id,
                  parent,
                  field
           INTO TABLE @DATA(bulk\_result).
    FINAL(timer) = cl\_abap\_runtime=>create\_hr\_timer( ).
    FINAL(t1\_bulk) = timer->get\_runtime( ).
    DO 10 TIMES.
      SELECT FROM HIERARCHY( SOURCE demo\_cds\_guid\_hiera\_source
                             CHILD TO PARENT ASSOCIATION \_relat
                             START WHERE id = @start\_node
                             SIBLINGS ORDER BY id
                             LOAD BULK )
             FIELDS id,
                    parent,
                    field
             INTO TABLE @bulk\_result.
    ENDDO.
    FINAL(t2\_bulk) = timer->get\_runtime( ).
    SELECT FROM HIERARCHY( SOURCE demo\_cds\_guid\_hiera\_source
                           CHILD TO PARENT ASSOCIATION \_relat
                           START WHERE id = @start\_node
                           SIBLINGS ORDER BY id
                           LOAD INCREMENTAL )
           FIELDS id,
                  parent,
                  field
           INTO TABLE @DATA(inc\_result).
    FINAL(t1\_inc) = timer->get\_runtime( ).
    DO 10 TIMES.
      SELECT FROM HIERARCHY( SOURCE demo\_cds\_guid\_hiera\_source
                             CHILD TO PARENT ASSOCIATION \_relat
                             START WHERE id = @start\_node
                             SIBLINGS ORDER BY id
                             LOAD INCREMENTAL )
             FIELDS id,
                    parent,
                    field
             INTO TABLE @inc\_result.
    ENDDO.
    FINAL(t2\_inc) = timer->get\_runtime( ).
    ASSERT inc\_result = bulk\_result.
    FINAL(factor) = CONV decfloat34(
      ( t2\_bulk - t1\_bulk ) / ( t2\_inc - t1\_inc ) ).
    out->write( inc\_result
      )->write(
        |Bulk time/Incremental time: { factor DECIMALS = 2 }| ).
  ENDMETHOD.
  METHOD fill\_table.
    DELETE FROM demo\_guid\_hiera.
    TRY.
        INSERT demo\_guid\_hiera FROM TABLE @(
          VALUE #( FOR i = 1 UNTIL i > all\_lines
            LET uuid1 = cl\_system\_uuid=>create\_uuid\_x16\_static( )
                uuid2 = cl\_system\_uuid=>create\_uuid\_x16\_static( ) IN
            ( id        = uuid1
              parent\_id = uuid2
              field = uuid1 && '-' && uuid2 ) ) ).
      CATCH cx\_uuid\_error.
        RETURN.
    ENDTRY.
    FINAL(rnd) = cl\_abap\_random\_int=>create(
      seed = + cl\_demo\_date\_time=>get\_system\_time( )
      min  = 1
      max  = all\_lines ).
    DATA lines TYPE TABLE OF i.
    DO.
      FINAL(line) = rnd->get\_next( ).
      IF NOT line\_exists( lines\[ table\_line = line \] ).
        lines = VALUE #( BASE lines ( line ) ).
        IF lines( lines ) = hiera\_lines.
          EXIT.
        ENDIF.
      ELSE.
        CONTINUE.
      ENDIF.
    ENDDO.
    LOOP AT lines ASSIGNING FIELD-SYMBOL(<line>).
      FINAL(idx) = sy-tabix.
      SELECT id FROM demo\_guid\_hiera
             ORDER BY id
             INTO @FINAL(node)
             OFFSET @<line> UP TO 1 ROWS.
      ENDSELECT.
      IF idx = 1.
        start\_node = node.
        DATA(parent\_node) = node.
      ELSE.
        UPDATE demo\_guid\_hiera SET parent\_id = @parent\_node
               WHERE id = @node.
        parent\_node = node.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.

Description   

The table DEMO\_GUID\_HIERA serves as data source for a hierarchy. The user can enter how many rows in total are inserted, and how many of them are part of the hierarchy. Then, the table is filled with [GUIDs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenguid_glosry.htm "Glossary Entry") and the rows that build a hierarchy tree are chosen randomly.

Based on this table, a hierarchy is generated, once with the addition LOAD BULK and once with LOAD INCREMENTAL. The time of hierarchy generation, which is done in DO\-loops with 10 repetitions, is measured and compared.

When using the default values for the formal parameters, LOAD INCREMENTAL is many times faster than LOAD BULK. This positive effect is minimized when the total number of rows is decreased and the number of rows that are part of the hierarchy is increased.