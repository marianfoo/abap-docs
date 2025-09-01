  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) →  [Obsolete Access Statements](javascript:call_link\('abendb_access_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DELETE dbtab, VERSION, ABAPDELETE_DBTAB_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

DELETE dbtab, VERSION

Obsolete Syntax

DELETE *{* dbtab *|* \*dbtab *}* VERSION vers.

Effect

This variant of the statement DELETE works essentially like the [short form](javascript:call_link\('abapdelete_obsolete.htm'\)) of the ABAP SQL statement, but belongs, along with the addition VERSION, to the number of [obsolete access statements](javascript:call_link\('abendb_access_obsolete.htm'\)), for which for dbtab, the name of a DDIC database table or a [DDIC table view](javascript:call_link\('abentable_view_glosry.htm'\) "Glossary Entry") must be specified, beginning with "T" and comprising no more than five characters.

The use of addition VERSION means that the database table or view dbtab is not processed. Instead the table whose name is made up of "T" and the content of vers is processed. vers expects a data object with a maximum of four characters, of type c. The content of the key fields will continue to be obtained from the table work area dbtab or dbtab\*. The statement is not executed if the database table or view does not exist or if it does not meet the name conventions specified above.

Hints

-   The VERSION addition is not allowed in classes. Instead, specify the database table or view dynamically in its operand position in ABAP SQL.
-   None of the additions possible in ABAP SQL can be specified with VERSION.
-   Obsolete access statements do not support [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)). The [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") of a database table must be specified explicitly. Note that application programs should only use data from the current client.

Example

TABLES t100.
DATA vers TYPE c LENGTH 4.
...
vers = '100'.
...
t100-sprsl = 'E'.
t100-arbgb = 'BC'.
t100-msgnr = '100'.
DELETE t100 VERSION vers.

The ABAP SQL syntax to be used instead reads:

DATA: wa TYPE t100,
      dbtab TYPE c LENGTH 5.
...
dbtab = 'T100'.
...
wa-sprsl = 'E'.
wa-arbgb = 'BC'.
wa-msgnr = '100'.
DELETE (dbtab) FROM @wa.