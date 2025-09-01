  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Access Statements](javascript:call_link\('abendb_access_obsolete.htm'\)) → 

MODIFY dbtab, VERSION

[Short Reference](javascript:call_link\('abapmodify_dbtab_shortref.htm'\))

Obsolete Syntax

MODIFY *{* dbtab *|* \*dbtab *}* VERSION vers.

Effect

This variant of the statement MODIFY works essentially like the [short form](javascript:call_link\('abapmodify_obsolete.htm'\)) of the ABAP SQL statement, but belongs, along with the addition VERSION, to the number of [obsolete access statements](javascript:call_link\('abendb_access_obsolete.htm'\)), for which for dbtab, the name of a database table or a [DDIC table view](javascript:call_link\('abentable_view_glosry.htm'\) "Glossary Entry") must be specified, beginning with "T" and comprising no more than five characters.

The use of addition VERSION means that the database table or view dbtab is not processed. Instead the table whose name is made up of "T" and the content of vers is processed. vers expects a data object with a maximum of four characters, of type c. The row content continues to be obtained from the table work area dbtab or dbtab\*. The statement is not executed if the database table or view does not exist or if it does not meet the name conventions specified above.

Hints

-   The addition VERSION is not allowed in classes. Instead, specify the database table or view dynamically in its operand position in ABAP SQL.

-   None of the additions possible in ABAP SQL can be specified with VERSION.

-   Obsolete access statements do not support [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)). The [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") of a database table must be specified explicitly. Note that application programs should only use data from the current client.