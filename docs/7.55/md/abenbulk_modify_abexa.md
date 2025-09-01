  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Write Access](javascript:call_link\('abenopen_sql_writing.htm'\)) →  [MODIFY dbtab](javascript:call_link\('abapmodify_dbtab.htm'\)) → 

MODIFY, FROM TABLE

This example demonstrates the statement [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) ... [FROM TABLE](javascript:call_link\('abapmodify_source.htm'\)).

Source Code

REPORT demo\_bulk\_modify.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_bulk\_modify. "has an unique secondary index k1, v1
    INSERT demo\_bulk\_modify FROM @( VALUE #( k1 = 1 k2 = 1 v1 = 1 ) ).
    DATA itab TYPE STANDARD TABLE OF demo\_bulk\_modify WITH EMPTY KEY.
    itab = VALUE #( ( k1 = 1 k2 = 2 v1 = 1 )
                    ( k1 = 1 k2 = 1 v1 = 2 ) ).
    MODIFY demo\_bulk\_modify FROM TABLE itab. "platform dependent!
    SELECT \*
           FROM demo\_bulk\_modify
           INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The DDIC database table DEMO\_BULK\_MODIFY has two key fields, K1 and K2, and a normal field V1. A unique secondary index IDX comprises the fields K1 and V1. The DDIC database table is filled with a row 1, 1, 1, and then the statement MODIFY ... FROM TABLE is used with an internal table with the rows 1, 2, 1 and 1, 1, 2. The result is platform-specific:

-   In database systems with row-by-row MODIFY, like the SAP HANA database, the first line of the internal table cannot be inserted because of the unique secondary index. The second line of the internal table overwrites the existing line and the result is a line with the content 1, 1, 2.

-   In database systems with row-by-row MODIFY and termination after a failed insert, such as SAP MaxDB, no change is made and the result is a row with the content 1, 1, 1.

-   In database systems with block-by-block UPDATE and INSERT, such as ORACLE DB, the existing row is overwritten with the second line of the internal table and then the first line of the internal table is inserted; the result is two rows 1, 1, 2 and 1, 2, 1.