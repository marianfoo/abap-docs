  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Access Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access_obsolete.htm) → 

MODIFY dbtab, VERSION

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_dbtab_shortref.htm)

Obsolete Syntax

MODIFY *{* dbtab *|* \*dbtab *}* VERSION vers.

Effect

This variant of the statement MODIFY works essentially like the [short form](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_obsolete.htm) of the ABAP SQL statement, but is one of the [obsolete access statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access_obsolete.htm) along with the addition VERSION. For these statements, the name of a database table or a [DDIC table view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_view_glosry.htm "Glossary Entry") must be specified for dbtab, beginning with "T" and comprising no more than five characters.

The addition VERSION dictates that the database table or view dbtab is not processed, and the table whose name is made up of "T" and the content of vers is processed instead. vers expects a data object with a maximum of four characters, of type c. The row content is still taken from the table work area dbtab or dbtab\*. The statement is not executed if the database table or view does not exist or if it does not follow the naming conventions specified above.

Hints

-   The addition VERSION is not allowed in classes. Instead, the database table or view should be specified dynamically in its operand position in ABAP SQL.
-   None of the additions possible in ABAP SQL can be specified with VERSION.
-   Obsolete access statements do not support [implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm). The [client ID](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_identifier_glosry.htm "Glossary Entry") of a database table must be specified explicitly. Note that application programs should only use data from the current client.