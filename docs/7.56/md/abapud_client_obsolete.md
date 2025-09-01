  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_access_obsolete.htm) →  [Obsolete ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_obsolete.htm) →  [Obsolete Syntax in ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_syntax_obsolete.htm) → 

UPDATE WHERE, DELETE WHERE, CLIENT SPECIFIED

Obsolete Syntax

... CLIENT SPECIFIED ...

Effect

The addition CLIENT SPECIFIED can be used instead of the [USING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapiumd_client.htm) additions in the variants [UPDATE SET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapupdate.htm) and [DELETE FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_dbtab.htm) of those [write ABAP SQL statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_writing.htm) in which a WHERE condition can be specified. This is obsolete and forbidden in [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_754.htm) and whenever [global temporary tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_gtt.htm) are accessed. The addition [USING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapiumd_client.htm) should be used instead of CLIENT SPECIFIED.

The addition CLIENT SPECIFIED disables implicit ABAP SQL [client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm) for the current write statement. No implicit condition is created for the current client and the [client column](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_column_glosry.htm "Glossary Entry") of client-dependent data sources can be specified in the WHERE condition for selecting clients.

If it is known statically that the target of the write statement specified in [target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapiumd_target.htm) is not client-dependent, the addition CLIENT SPECIFIED cannot be specified.

Hints

-   If the addition CLIENT SPECIFIED is specified in [UPDATE SET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapupdate.htm) and [DELETE FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_dbtab.htm) without specifying a WHERE condition, all lines of the target specified in [target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapiumd_target.htm) are processed. The DELETE statement then deletes the entire content. The addition [USING ALL CLIENTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapiumd_client.htm) serves as a replacement for this behavior.
-   If the addition CLIENT SPECIFIED is used for a dynamically specified database table or view and they are not client-dependent, the addition is ignored.
-   If specified for statically specified client-independent database tables or views, the addition CLIENT SPECIFIED produces a syntax error in the [strict modes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strict_modes.htm) of the syntax check from Release 7.40, SP05 or else a syntax warning.

Example

This example demonstrates two uses of the obsolete addition CLIENT SPECIFIED and how it is replaced by [USING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapiumd_client.htm). The UPDATE statement selects a client, which can be implemented by switching implicit client handling to this client using USING CLIENT. The DELETE statement is intended to delete the data of all clients, which can be implemented by the addition USING ALL CLIENTS.

UPDATE demo\_expressions
  CLIENT SPECIFIED SET num1 = 1 WHERE mandt = '100' AND id = 'X'.
UPDATE demo\_expressions
  USING CLIENT '100' SET num1 = 1  WHERE id = 'X'.
DELETE FROM demo\_expressions CLIENT SPECIFIED.
DELETE FROM demo\_expressions USING ALL CLIENTS.