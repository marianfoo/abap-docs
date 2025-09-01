  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Write Accesses](javascript:call_link\('abenopen_sql_writing.htm'\)) →  [DELETE dbtab](javascript:call_link\('abapdelete_dbtab.htm'\)) → 

DELETE dbtab - source

[Quick Reference](javascript:call_link\('abapdelete_dbtab_shortref.htm'\))

Syntax

... *{*@wa*|*@( expr )*}*
  *|* *{*TABLE @itab*|*@( expr )*}* ...

Alternatives:

[1\. ... @wa*|*@( expr )](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TABLE @itab*|*@( expr )](#!ABAP_ALTERNATIVE_2@2@)

Effect

In the variant DELETE target FROM of the statement [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), following FROM, a non-table-like data object or, following TABLE, an internal table can be specified as a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) or [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)). The content of the data objects determines the row(s) to be deleted. The escape character @ should precede the work area name or the internal table name (as should be the case with every [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\))).

Note

Host variables without the escape character @ are [obsolete](javascript:call_link\('abenopen_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.

Alternative 1

... @wa*|*@( expr )

Effect

If a non-table-like work area is specified as a host variable [@wa](javascript:call_link\('abenopen_sql_host_variables.htm'\)) or host expression [@( expr )](javascript:call_link\('abenopen_sql_host_expressions.htm'\)), a row is found in the database table whose [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") content is the same as that of the corresponding initial part of the work area. The content of the work area is not converted and is interpreted according to the structure of the database table or view. This row is deleted. The work area must meet the [prerequisites](javascript:call_link\('abenopen_sql_wa.htm'\)) for use in ABAP SQL statements.

If there is no row in the database with the same content as the primary key, no row is deleted and sy-subrc is set to 4.

[Implicit ABAP SQL client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) applies, in which a [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") specified in wa is ignored. The current client is used by default. The addition [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\)) can be used to switch to an explicitly specified client. The addition [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)) can be used to switch to the client specified in wa.

Notes

-   The work area wa should be declared with reference to the database table or view in ABAP Dictionary using the length of the primary key.
    
-   If a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") is specified as a [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) for the work area wa, for which the data type is inferred using the # character, a structure consisting of the components of the primary key of the database table is created as the type.
    
-   If the database table or view is specified statically, a [short form](javascript:call_link\('abapdelete_obsolete.htm'\)) can be specified outside of classes. This means that the work area specified using FROM wa can be omitted. The prerequisite is that a [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") dbtab for the respective database table or the view is declared using the statement TABLES. The system then implicitly adds the addition FROM dbtab to the DELETE statement.
    

Example

Deletes a carrier from the database table SCARR using a host expression.

DELETE scarr FROM @( VALUE #( carrid   = 'FF' ) ).

Alternative 2

... TABLE @itab*|*@( expr )

Effect

If an internal table is specified as a host variable [@itab](javascript:call_link\('abenopen_sql_host_variables.htm'\)) or host expression [@( expr )](javascript:call_link\('abenopen_sql_host_expressions.htm'\)), the system edits all rows of the internal table in accordance with the rules for the work area wa. The row type of the internal table must meet the [prerequisites](javascript:call_link\('abenopen_sql_wa.htm'\)) for use in ABAP SQL statements.

If, for a row of the internal table, there is no row in the database with the same content as the primary key, the relevant row is ignored and sy-subrc is set to 4. If the internal table is empty, no rows are deleted. However sy-subrc is still set to 0. The system field sy-dbcnt is set to the number of rows that are actually deleted.

Notes

-   When an internal table is used, package-by-package processing causes some of the rows being deleted to still be visible to any read access running in parallel with DELETE.
    
-   If a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") as a [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) is specified as an internal table itab, for which the data type is inferred using the # character, a structured standard table with an empty table key (whose row type consists of the components of the primary key of the database table) is created as the type.
    

Example

Deletes all today's flights of an airline in which no seats are occupied from the database table SFLIGHT. The internal table from which the key values of the deleted rows are taken is obtained in a host expression using a method call. The client field must occur in the row structure of the internal table with the type sflight\_key\_tab to ensure that its components match the primary key of the database table. This example works in the same way as [DELETE dbtab - cond](javascript:call_link\('abapdelete_where.htm'\)), but it requires the database to be accessed twice.

TYPES:
  BEGIN OF sflight\_key,
    mandt  TYPE sflight-mandt,
    carrid   TYPE sflight-carrid,
    connid   TYPE sflight-connid,
    fldate TYPE sflight-fldate,
  END OF sflight\_key,
  sflight\_key\_tab TYPE STANDARD TABLE OF sflight\_key WITH EMPTY KEY.
CLASS sflight\_methods DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS
      get\_empty\_flights IMPORTING carrid   TYPE sflight-carrid
                                  date     TYPE sy-datum
                        RETURNING VALUE(r) TYPE sflight\_key\_tab.
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
DATA carrid TYPE sflight-carrid.
START-OF-SELECTION.
  cl\_demo\_input=>request( CHANGING field = carrid ).
  DELETE sflight FROM TABLE @(
    sflight\_methods=>get\_empty\_flights( carrid = carrid
                                        date   = sy-datum ) ).