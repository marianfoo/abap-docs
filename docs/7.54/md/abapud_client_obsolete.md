  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete ABAP SQL](javascript:call_link\('abenabap_sql_obsolete.htm'\)) →  [Obsolete Syntax in ABAP SQL](javascript:call_link\('abenopen_sql_syntax_obsolete.htm'\)) → 

UPDATE WHERE, DELETE WHERE - CLIENT SPECIFIED

Obsolete Syntax

... CLIENT SPECIFIED ...

Effect

The addition CLIENT SPECIFIED can be used instead of the [USING](javascript:call_link\('abapiumd_client.htm'\)) additions in the variants [UPDATE SET](javascript:call_link\('abapupdate.htm'\)) and [DELETE FROM](javascript:call_link\('abapdelete_dbtab.htm'\)) of those [write ABAP SQL statements](javascript:call_link\('abenopen_sql_writing.htm'\)) in which a WHERE condition can be specified. This is obsolete and forbidden in [strict mode from Release 7.54](javascript:call_link\('abenopensql_strict_mode_754.htm'\)) and whenever [global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) are accessed. The addition [USING](javascript:call_link\('abapiumd_client.htm'\)) should be used instead of CLIENT SPECIFIED.

The addition CLIENT SPECIFIED disables implicit ABAP SQL [client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) off for the write statement. No implicit condition is created for the current client and the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") of client-specific data sources can be specified in the WHERE condition for selecting clients.

If it is known statically that the target of the write statement specified in [target](javascript:call_link\('abapiumd_target.htm'\)) is not client-specific, the addition CLIENT SPECIFIED cannot be specified.

Notes

-   If the addition CLIENT SPECIFIED is specified in [UPDATE SET](javascript:call_link\('abapupdate.htm'\)) and [DELETE FROM](javascript:call_link\('abapdelete_dbtab.htm'\)) and no WHERE condition is specified, all rows of the target specified in [target](javascript:call_link\('abapiumd_target.htm'\)) are edited. The statement DELETE then deletes the entire content. The addition [USING ALL CLIENTS](javascript:call_link\('abapiumd_client.htm'\)) is available as a replacement for this behavior.
    
-   If the addition CLIENT SPECIFIED is used for a dynamically specified database table or view and they are not client-specific, the addition is ignored.
    
-   If specified for statically specified cross-client database tables or views , the addition CLIENT SPECIFIED produces a syntax error in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05 or else a syntax warning.
    

Example

This example demonstrates two uses of the obsolete addition CLIENT SPECIFIED and how it is replaced by [USING](javascript:call_link\('abapiumd_client.htm'\)). The UPDATE statement selects a client, which can be implemented by switching implicit client handling to this client using USING CLIENT. The DELETE statement is intended to delete the data of all clients, which can be implemented by the addition USING ALL CLIENTS.

UPDATE demo\_expressions
  CLIENT SPECIFIED SET num1 = 1 WHERE mandt = '100' AND id = 'X'.
UPDATE demo\_expressions
  USING CLIENT '100' SET num1 = 1  WHERE id = 'X'.
DELETE FROM demo\_expressions CLIENT SPECIFIED.
DELETE FROM demo\_expressions USING ALL CLIENTS.