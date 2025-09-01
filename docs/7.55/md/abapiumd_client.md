  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Write Access](javascript:call_link\('abenopen_sql_writing.htm'\)) →  [INSERT, UPDATE, MODIFY, DELETE, target](javascript:call_link\('abapiumd_target.htm'\)) → 

INSERT, UPDATE, MODIFY, DELETE dbtab, CLIENT, CLIENTS

Syntax

... *{* USING CLIENT clnt *}*  *|* *{* CLIENT SPECIFIED *}*
  *|* *{* USING *{* CLIENT clnt *}*
          *|* *{* CLIENTS IN @client\_range\_tab *}*
          *|* *{* CLIENTS IN T000 *}*
          *|* *{* ALL CLIENTS *}* *}* ...

Variants:

[1\. ... *{*USING CLIENT clnt*}**|**{*CLIENT SPECIFIED*}*](#!ABAP_VARIANT_1@1@)
[2\. ... *{*USING CLIENT clnt*}**|**{*USING *\[*ALL*\]* CLIENTS *\[*IN*\]**}*](#!ABAP_VARIANT_2@2@)

Effect

These additions modify [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") of the ABAP SQL write statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)). They can be specified as optional additions after the target [target](javascript:call_link\('abapiumd_target.htm'\)) in each of these statements If none of these statements are specified, default client handling applies:

-   If a work area wa, an internal table itab, or a subquery [subquery\_clauses](javascript:call_link\('abapinsert_from_select.htm'\)) is specified as a source source after FROM, the ID of the current client is used when client-dependent tables are modified and not the values of the tables for the client column.

-   In the case of the variants UPDATE SET or DELETE FROM, in which a WHERE can be specified, no explicit condition can be applied to the client column. Instead, an implicit condition for the current client is passed to the database system.

The two variants of the optional additions are specific for these two cases:

-   Variant 1 modifies client handling when sources are specified after FROM.

-   Variant 2 modifies client handling in modifying statements with potential WHERE conditions.

Hints

-   Each client represents a self-contained unit, which means that implicit client handling should not be switched off in application programs.

-   See also the associated [security note](javascript:call_link\('abenclient_dependent_scrty.htm'\)) and the [programming guideline](javascript:call_link\('abenclient_handling_guidl.htm'\) "Guideline").
    

Variant 1

... *{*USING CLIENT clnt*}**|**{*CLIENT SPECIFIED*}*

Alternatives:

[1\. ... USING CLIENT clnt](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... CLIENT SPECIFIED](#!ABAP_ALTERNATIVE_2@2@)

Effect

These two additions modify implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") of a modifying ABAP SQL statement in cases where its source is specified as a work area wa, internal table itab, or subquery subquery\_clauses after FROM.

-   The addition USING CLIENT switches implicit client handling to the specified client.

-   The addition CLIENT SPECIFIED specifies that the client IDs specified in source are used.

Hints

-   If data is to be processed with exactly one other client ID, USING CLIENT should be used instead of CLIENT SPECIFIED, since it specifies the client explicitly.

-   If data of multiple clients is to be processed, CLIENT SPECIFIED can or must be used. This is particularly the case when an internal table is used as a data source whose client column contains different client IDs or if a subquery is used as a data source to select the data of various clients using [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)).

-   The addition [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)) cannot be used in this variant.

-   In this variant, the addition CLIENT SPECIFIED is not [obsolete](javascript:call_link\('abapud_client_obsolete.htm'\)) and is even allowed when accessing [global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)). Here, it is used to express the fact that the client IDs of the sources specified after FROM are used.

Example

The following two INSERT statements produce the same result. The first statement uses the addition USING CLIENT and hence shows the recommended variant for specifying the inserted client explicitly. The second statement, on the other hand, uses CLIENT SPECIFIED and must hence fill the client field with the required client in the work area passed.

DELETE FROM demo\_expressions USING CLIENT '800'.
INSERT demo\_expressions USING CLIENT '800'
  FROM @( VALUE #( id = 'X' num1 = '555' ) ).
DELETE FROM demo\_expressions USING CLIENT '800'.
INSERT demo\_expressions CLIENT SPECIFIED
  FROM @( VALUE #( mandt = '800' id = 'X' num1 = '555' ) ).

Example

Modifies a line in a different client. The first UPDATE statement shows the recommended method with the addition USING CLIENT. The second UPDATE statement, on the other hand, uses CLIENT SPECIFIED and the client field of the work area has to be filled.

DELETE FROM demo\_update USING ALL CLIENTS.
INSERT demo\_update USING CLIENT '800'
       FROM @( VALUE #( id = 'X' ) ).
UPDATE demo\_update USING CLIENT '800'
       FROM @( VALUE #( id = 'X' col1 = 100 ) ).
UPDATE demo\_update CLIENT SPECIFIED
       FROM @( VALUE #( client = '800' id = 'X' col1 = 100 ) ).

Executable Example

See [INSERT, CLIENT](javascript:call_link\('abeninsert_client_abexa.htm'\))

Alternative 1

... USING CLIENT clnt

Effect

This addition modifies implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") in ABAP SQL so that the client ID from clnt is used instead of the current client ID. The [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") replaces the client specified in source with the client specified in clnt and passes it to the database system.

clnt expects a data object of the type c with length 3 and containing a client ID. A [literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) can be specified.

The following rules apply to the addition USING:

-   It can be used only when modifying a client-dependent table or view of this type .

-   This addition cannot be used with the addition CLIENT SPECIFIED.

-   It cannot be used if a subquery is used as a data source of [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) or [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) in which implicit client handling is switched using [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)).

-   If specified, the system field sy-mandt would be ignored and cannot be specified directly for clnt.

Hints

-   If the addition USING CLIENT is used, the statement ABAP SQL functions as if the current user were logged on with the client ID specified in clnt.

-   If the addition USING CLIENT is used for a dynamically specified DDIC database table or DDIC view and they are not client-dependent, the addition is ignored.

-   The addition USING CLIENT is not allowed in the [obsolete short forms](javascript:call_link\('abenopen_sql_obsolete.htm'\)).

-   If the addition USING CLIENT is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.

Example

The following MODIFY statement uses the addition USING CLIENT, as recommended, to access a specific client.

MODIFY demo\_expressions USING CLIENT '800'
  FROM @( VALUE #( id = 'X' num1 = '555' ) ).

Example

The addition USING CLIENT after INSERT fills two columns of a DDIC database table with three lines for the client 100. Afterwards, these lines are copied to the current client in a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") by specifying USING CLIENT.

DELETE FROM demo\_expressions.
DELETE FROM demo\_expressions USING CLIENT '100'.
INSERT demo\_expressions USING CLIENT '100'
  FROM TABLE @( VALUE #( ( id = 'X' num1 = 1 )
                         ( id = 'Y' num1 = 2 )
                         ( id = 'Z' num1 = 3 ) ) ).
INSERT demo\_expressions FROM
( SELECT \* FROM demo\_expressions USING CLIENT '100' ) ##NULL\_VALUES.
SELECT id, num1
       FROM demo\_expressions
       INTO TABLE @DATA(itab).
SELECT id, num1
       FROM demo\_expressions USING CLIENT '100'
       INTO TABLE @DATA(itab\_100).
ASSERT itab = itab\_100.

Alternative 2

... CLIENT SPECIFIED

Effect

The addition CLIENT SPECIFIED specifies that the [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") in the client column in the source source specified after FROM is used and not the ID of the current client.

The following rules apply to the addition CLIENT SPECIFIED:

-   It can be used only when accessing client-dependent DDIC database tables or views .

-   It cannot be used together with USING CLIENT.

-   It cannot be used when a subquery is used as a data source of [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) or [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) that works with default client handling or in which implicit client handling is switched using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)).

-   It must be used if a subquery is used as a data source of [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) or [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) in which implicit client handling is switched using [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)).

Hints

-   If the addition CLIENT SPECIFIED is used for a dynamically specified DDIC database table or DDIC view and they are not client-dependent, the addition is ignored.

-   If specified for statically specified client-independent DDIC database tables or DDIC views , the addition CLIENT SPECIFIED produces a syntax error in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05 or else a syntax warning.

Example

This example implements a client copy of all data in a table to multiple clients. The addition CLIENT SPECIFIED of the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) specifies that the client IDs of the internal table used as a data source are not overwritten by the current client. The internal table is created in a host variable by copying the data of the current client read previously from SCARR is copied to multiple different client IDs. Duplicate entries are avoided by first using the addition USING CLIENTS IN to delete all data of the area in question. After the insertion, all data of this area is read and displayed.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(itab).
DATA clients TYPE RANGE OF mandt.
clients = VALUE #( ( sign = 'I' option = 'GT' low = '900' ) ).
DELETE FROM scarr USING CLIENTS IN @clients.
INSERT scarr CLIENT SPECIFIED FROM TABLE @( VALUE #(
  FOR i = 1 UNTIL i > 4
  FOR wa IN itab
       ( VALUE #( BASE wa mandt = 900 + i \* 10 ) ) ) ).
SELECT \*
       FROM scarr USING CLIENTS IN @clients
       ORDER BY PRIMARY KEY
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Variant 2

... *{*USING CLIENT clnt*}**|**{*USING *\[*ALL*\]* CLIENTS *\[*IN*\]**}*

Alternatives:

[1\. ... USING CLIENT clnt](#!ABAP_ALTERNATIVE_1@3@)
[2\. ... USING CLIENTS IN @client\_range\_tab](#!ABAP_ALTERNATIVE_2@4@)
[3\. ... USING CLIENTS IN T000](#!ABAP_ALTERNATIVE_3@5@)
[4\. ... USING ALL CLIENTS](#!ABAP_ALTERNATIVE_4@6@)

Effect

These additions modify implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") of a modifying ABAP SQL statement [UPDATE SET](javascript:call_link\('abapupdate.htm'\)) or [DELETE FROM](javascript:call_link\('abapdelete_dbtab.htm'\)) in which a WHERE condition can be specified.

-   The addition USING CLIENT switches implicit client handling to the specified client.

-   The additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* select the data of any number of clients instead of the current client.

Hint

Instead of USING, the addition [CLIENT SPECIFIED](javascript:call_link\('abapud_client_obsolete.htm'\)) can also be specified outside [strict mode from Release 7.54](javascript:call_link\('abenopensql_strict_mode_754.htm'\)). This is, however, obsolete here. The additions shown here should be used instead.

Alternative 1

... USING CLIENT clnt

Effect

This addition modifies implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") in ABAP SQL so that the client ID from clnt is used instead of the current client ID. In the implicit WHERE condition, the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") replaces the current client ID by the ID specified in clnt.

clnt expects a data object of the type c with length 3 and containing a client ID. A [literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) can be specified.

The following rules apply to the addition USING:

-   It can be used only when modifying a client-dependent table or view of this type .

-   If specified, the system field sy-mandt would be ignored and cannot be specified directly for clnt.

Hints

-   If the addition USING CLIENT is used, the ABAP SQL statement functions as if the current user were logged on with the client ID specified in clnt.

-   If the addition USING CLIENT is used for a dynamically specified DDIC database table or DDIC view and they are not client-dependent, the addition is ignored.

-   If the addition USING CLIENT is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.
    

Example

Statements DELETE FROM with the addition USING CLIENT. The first statement deletes lines from the client 100 with a specific ID. The second statement deletes all lines of the client 100.

DELETE FROM demo\_expressions USING CLIENT '100' WHERE id = 'X'.
DELETE FROM demo\_expressions USING CLIENT '100'.

Alternative 2

... USING CLIENTS IN @client\_range\_tab

Alternative 3

... USING CLIENTS IN T000

Alternative 4

... USING ALL CLIENTS

Effect

These additions switch implicit ABAP SQL [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") so that the data of all clients specified by the addition is modified and not just the data from the current client. The additions modify the implicit WHERE condition for the client column passed to the database.

-   The addition USING CLIENTS IN @client\_range\_tab selects implicitly the clients whose client IDs meet the conditions in a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") client\_range\_tab instead of the current client. If the ranges table is empty, the data of all clients is selected.

-   The addition USING CLIENTS IN T000 selects implicitly the clients whose client IDs are in the column MANDT of the system table T000 instead of the current client.

-   The addition USING ALL CLIENTS selects implicitly all lines regardless of client ID instead of the current client.

The same rules apply to the additions as to the identically named additions [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)) in queries.

Hints

-   The additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* replace the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapud_client_obsolete.htm'\)) if this is used to select more than one client.

-   If used, the additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* apply [strict mode from Release 7.54](javascript:call_link\('abenopensql_strict_mode_754.htm'\)).

Executable Example

See [UPDATE, USING CLIENT, CLIENTS](javascript:call_link\('abenupdate_client_clients_abexa.htm'\))

Continue
![Example](exa.gif "Example") [INSERT, CLIENT](javascript:call_link\('abeninsert_client_abexa.htm'\))
![Example](exa.gif "Example") [UPDATE, USING CLIENT, CLIENTS](javascript:call_link\('abenupdate_client_clients_abexa.htm'\))