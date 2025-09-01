  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Global Temporary Tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) → 

DDIC - Global Temporary Tables, Access

This example demonstrates how [global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) in ABAP Dictionary are accessed.

Source Code

REPORT demo\_gtt.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(o) = cl\_demo\_output=>new( ).
    DATA delete TYPE abap\_bool VALUE abap\_true.
    cl\_demo\_input=>request(
      EXPORTING text         = \`Delete lines before implicit commit\`
                as\_checkbox = abap\_true
      CHANGING  field       = delete ).
    "Fill GTT with ABAP SQL
    INSERT demo\_gtt FROM @( VALUE #( id = 'X' col = 111 ) ).
    SELECT SINGLE \* FROM demo\_gtt INTO @DATA(wa).
    o->write( COND #( WHEN sy-subrc = 0
                      THEN \`Line found after open insert\`
                      ELSE \`No line found after open insert\` ) ).
    IF delete = abap\_true.
      DELETE FROM demo\_gtt.
    ENDIF.
    WAIT UP TO 1 SECONDS.
    SELECT SINGLE \* FROM demo\_gtt INTO @wa.
    o->write( COND #( WHEN sy-subrc = 0
                      THEN \`Line found after implicit commit\`
                      ELSE \`No line found after implicit commit\` ) ).
    "Fill GTT with Native SQL (for demonstration only!)
    wa = VALUE demo\_gtt( id = 'X' col = 111 ).
    EXEC SQL.
      INSERT INTO DEMO\_GTT VALUES ( :wa-id, :wa-col )
    ENDEXEC.
    SELECT SINGLE \* FROM demo\_gtt INTO @wa.
    o->write( COND #( WHEN sy-subrc = 0
                      THEN \`Line found after native insert\`
                      ELSE \`No line found after native insert\` ) ).
    WAIT UP TO 1 SECONDS.
    SELECT SINGLE \* FROM demo\_gtt INTO @wa.
    o->write( COND #( WHEN sy-subrc = 0
                      THEN \`Line found after implicit commit\`
                      ELSE \`No line found after implicit commit\` ) ).
    o->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") and [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") are used to access a [global temporary table (GTT)](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry") DEMO\_GTT:

-   After the GTT is filled using the ABAP SQL statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), the table is cleared again depending on user input using the ABAP SQL statement [DELETE FROM](javascript:call_link\('abapdelete_dbtab.htm'\)) without a WHERE condition. If the DELETE statement is not executed, the statement [WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\)), which performs an implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"), produces the runtime error COMMIT\_GTT\_ERROR, which can be found in the ABAP dump analysis (ST22).
-   After the GTT has been filled using a static native INSERT statement between [EXEC SQL - ENDEXEC](javascript:call_link\('abapexec.htm'\)), the table is not cleared explicitly. Instead, it is cleared in most database platforms using an implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") raised by the statement [WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\)).

Hint

Native SQL is used to fill the GTT here for demonstration purposes only. Only ABAP SQL should be used to access GTTs.