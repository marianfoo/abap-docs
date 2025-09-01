  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)) →  [SELECT, FROM hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\)) →  [SELECT, FROM HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)) → 

SELECT, hierarchy generator, BULK vs INCREMENTAL

This example demonstrates how the addition [LOAD INCREMENTAL](javascript:call_link\('abenselect_hierarchy_generator.htm'\)) can speed up the generation of a hierarchy.

Source Code

REPORT demo\_hierarchy\_bulk\_increment.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA:
      all\_lines   TYPE i VALUE 100000,
      hiera\_lines TYPE i VALUE 10,
      start\_node  TYPE demo\_guid\_hiera-id.
    CLASS-METHODS fill\_table.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = all\_lines
      )->add\_field( CHANGING field = hiera\_lines
      )->request( ).
    IF all\_lines < 10 OR hiera\_lines > all\_lines.
      cl\_demo\_output=>display(
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
    GET RUN TIME FIELD DATA(t1\_bulk).
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
    GET RUN TIME FIELD DATA(t2\_bulk).
    SELECT FROM HIERARCHY( SOURCE demo\_cds\_guid\_hiera\_source
                           CHILD TO PARENT ASSOCIATION \_relat
                           START WHERE id = @start\_node
                           SIBLINGS ORDER BY id
                           LOAD INCREMENTAL )
           FIELDS id,
                  parent,
                  field
           INTO TABLE @DATA(inc\_result).
    GET RUN TIME FIELD DATA(t1\_inc).
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
    GET RUN TIME FIELD DATA(t2\_inc).
    ASSERT inc\_result = bulk\_result.
    DATA(factor) = CONV decfloat34(
      ( t2\_bulk - t1\_bulk ) / ( t2\_inc - t1\_inc ) ).
    cl\_demo\_output=>new(
      )->write( inc\_result
      )->display(
        |Bulk time/Incremental time: { factor DECIMALS = 2 }| ).  ENDMETHOD.
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
        LEAVE PROGRAM.
    ENDTRY.
    DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                            min  = 1
                                            max  = all\_lines ).
    DATA lines TYPE TABLE OF i.
    DO.
      DATA(line) = rnd->get\_next( ).
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
      DATA(idx) = sy-tabix.
      SELECT id FROM demo\_guid\_hiera
             ORDER BY id
             INTO @DATA(node)
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
START-OF-SELECTION.
  demo=>main( ).

Description

The table DEMO\_GUID\_HIERA serves as data source for a hierarchy. The user can enter how many rows in total are inserted, and how many of them are part of the hierarchy. Then, the table is filled with [GUIDs](javascript:call_link\('abenguid_glosry.htm'\) "Glossary Entry") and the rows that build a hierarchy tree are chosen randomly.

Based on this table, a hierarchy is generated, once with the addition LOAD BULK and once with LOAD INCREMENTAL. The time of hierarchy generation, which is done in DO\-loops with 10 repetitions, is measured and compared.

When using the default values for the formal parameters, LOAD INCREMENTAL is many times faster than LOAD BULK. This positive effect is minimized when the total number of rows is decreased and the number of rows that are part of the hierarchy is increased.