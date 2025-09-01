  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Write Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_writing.htm) →  [DELETE dbtab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20dbtab%2C%20source%2C%20ABAPDELETE_SOURCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE dbtab, source

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab_shortref.htm)

Syntax

... *{*@wa*|*@( expr )*}*
  *|* *{*TABLE @itab*|*@( expr )*}* ...

Alternatives:

[1\. ... @wa*|*@( expr )](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TABLE @itab*|*@( expr )](#!ABAP_ALTERNATIVE_2@2@)

Effect

In the variant DELETE target FROM of the statement [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab.htm), a non-table-like data object can be specified after FROM, or an internal table after TABLE can be specified as a [host variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm) or [host expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm). The content of the data objects determines which rows are deleted. Like every [host variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm), the name of the work area or internal table must be prefixed by the escape character @.

Hint

Host variables without the escape character @ are [obsolete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_hostvar_obsolete.htm). The escape character @ must be specified in the [strict modes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP05.

Alternative 1   

... @wa*|*@( expr )

Effect

If a non-table-like work area is specified as a host variable [@wa](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm) or host expression [@( expr )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm), a row is searched in the DDIC database table whose [primary key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_key_glosry.htm "Glossary Entry") content is the same as that of the corresponding initial part of the work area. The content of the work area is not converted and is interpreted according to the structure of the DDIC database table or DDIC view. This row is deleted. The work area must meet the [prerequisites](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_wa.htm) for use in ABAP SQL statements.

If there is no row in the database with the same content as the primary key, no row is deleted and sy-subrc is set to 4.

[Implicit ABAP SQL client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_client_handling.htm) applies, in which a [client ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_identifier_glosry.htm "Glossary Entry") specified in wa is ignored. The current client is used by default. The addition [USING CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_client.htm) can be used to switch to an explicitly specified client. The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_client.htm) can be used to switch to the client specified in wa.

Hints

-   The work area wa should be declared with reference to the DDIC database table or DDIC view in ABAP Dictionary using the length of the primary key.
-   If a [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") is specified as a [host expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm) for the work area wa, for which the data type is inferred using the # character, a structure consisting of the components of the primary key of the DDIC database table is created as the type.
-   If the DDIC database table or DDIC view is specified statically, a [short form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_obsolete.htm) can be specified outside of classes. This means that the work area specified using FROM wa can be omitted if a [table work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab for the respective DDIC database table or the DDIC view is declared using the statement TABLES. The system then implicitly adds the addition FROM dbtab to the DELETE statement.

Example

Deletion of a carrier from the DDIC database table SCARR using a host expression.

DELETE scarr FROM @( VALUE #( carrid   = 'FF' ) ).

Alternative 2   

... TABLE @itab*|*@( expr )

Effect

If an internal table is specified as a host variable [@itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm) or host expression [@( expr )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm), the system processes all rows of the internal table in accordance with the rules for the work area wa. The row type of the internal table must meet the [prerequisites](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_wa.htm) for use in ABAP SQL statements.

If there is no row in the database with the same content as the primary key for a row of the internal table, the corresponding row is ignored and sy-subrc is set to 4. If the internal table is empty, no rows are deleted. However, sy-subrc is still set to 0. The system field sy-dbcnt is set to the number of rows that are actually deleted.

Hints

-   When an internal table is used, package-by-package processing causes some of the rows being deleted to still be visible to any read access running in parallel with DELETE.
-   If an internal table itab is specified using a [host expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm) that is a [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") for which the data type is inferred using the # character, a structured standard table with an empty table key whose row type consists of the components of the primary key of the DDIC database table is created as the type.

Example

Deletion of all today's flights of an airline in which no seats are occupied from the DDIC database table SFLIGHT. The internal table from which the key values of the deleted rows are taken is obtained in a host expression using a method call. The client field must occur in the row structure of the internal table with the type sflight\_key\_tab to ensure that its components match the primary key of the DDIC database table. This example works in the same way as [DELETE dbtab - cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_where.htm), but it requires the database to be accessed twice.

TYPES:
  BEGIN OF sflight\_key,
    mandt  TYPE sflight-mandt,
    carrid TYPE sflight-carrid,
    connid TYPE sflight-connid,
    fldate TYPE sflight-fldate,
  END OF sflight\_key,
  sflight\_key\_tab TYPE STANDARD TABLE OF sflight\_key WITH EMPTY KEY.
CLASS sflight\_methods DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS
      get\_empty\_flights IMPORTING carrid   TYPE sflight-carrid
                                  date     TYPE d
                        RETURNING VALUE(r) TYPE sflight\_key\_tab.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sflight\_methods IMPLEMENTATION.
  METHOD get\_empty\_flights.
    SELECT mandt, carrid, connid, fldate
           FROM sflight
           WHERE carrid = @carrid AND
                 fldate = @date AND
                 NOT seatsocc > 0
           INTO TABLE @r.
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ).
    DELETE sflight FROM TABLE @(
      sflight\_methods=>get\_empty\_flights( carrid = carrid
                                          date   = date ) ).
  ENDMETHOD.
ENDCLASS.