  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Access Statements](javascript:call_link\('abendb_access_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MODIFY dbtab, VERSION, ABAPMODIFY_DBTAB_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

MODIFY dbtab, VERSION

[Short Reference](javascript:call_link\('abapmodify_dbtab_shortref.htm'\))

Obsolete Syntax

MODIFY *{* dbtab *|* \*dbtab *}* VERSION vers.

Effect

This variant of the statement MODIFY works essentially like the [short form](javascript:call_link\('abapmodify_obsolete.htm'\)) of the ABAP SQL statement, but is one of the [obsolete access statements](javascript:call_link\('abendb_access_obsolete.htm'\)) along with the addition VERSION. For these statements, the name of a database table or a [DDIC table view](javascript:call_link\('abentable_view_glosry.htm'\) "Glossary Entry") must be specified for dbtab, beginning with "T" and comprising no more than five characters.

The addition VERSION dictates that the database table or view dbtab is not processed, and the table whose name is made up of "T" and the content of vers is processed instead. vers expects a data object with a maximum of four characters, of type c. The row content is still taken from the table work area dbtab or dbtab\*. The statement is not executed if the database table or view does not exist or if it does not follow the naming conventions specified above.

Hints

-   The addition VERSION is not allowed in classes. Instead, the database table or view should be specified dynamically in its operand position in ABAP SQL.
-   None of the additions possible in ABAP SQL can be specified with VERSION.
-   Obsolete access statements do not support [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)). The [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") of a database table must be specified explicitly. Note that application programs should only use data from the current client.