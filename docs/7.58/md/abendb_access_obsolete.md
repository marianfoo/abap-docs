  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Database Access](javascript:call_link\('abendatabase_access_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Access%20Statements%2C%20ABENDB_ACCESS_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Access Statements

The following statements are predecessors of [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") and are not part of it. The keywords of the obsolete access statements are based on the [processing statements for internal tables](javascript:call_link\('abentable_processing_statements.htm'\)) and not on [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry").

The statements listed here are only possible for reasons of downward compatibility and only for database tables or [DDIC table views](javascript:call_link\('abentable_view_glosry.htm'\) "Glossary Entry") whose names begin with T and have a maximum of five characters.

-   [READ TABLE dbtab](javascript:call_link\('abapread_table_dbtab.htm'\))
-   [LOOP AT dbtab](javascript:call_link\('abaploop_at_dbtab.htm'\))
-   [REFRESH itab FROM](javascript:call_link\('abaprefresh_obsolete.htm'\))
-   [MODIFY dbtab - obsolete](javascript:call_link\('abapmodify_dbtab_obsolete.htm'\))
-   [DELETE dbtab - obsolete](javascript:call_link\('abapdelete_dbtab_obsolete.htm'\))

Hint

The statements MODIFY and DELETE specified here overlap the [short forms](javascript:call_link\('abenabap_sql_short_forms_obsolete.htm'\)) of ABAP SQL which are also obsolete. Since the keywords MODIFY and DELETE are also in SQL, these statements were transferred to ABAP SQL. MODIFY and DELETE stop being ABAP SQL statements only when used with the addition VERSION.

Continue
[READ TABLE dbtab](javascript:call_link\('abapread_table_dbtab.htm'\))
[LOOP AT dbtab](javascript:call_link\('abaploop_at_dbtab.htm'\))
[REFRESH itab FROM](javascript:call_link\('abaprefresh_obsolete.htm'\))
[MODIFY dbtab, VERSION](javascript:call_link\('abapmodify_dbtab_obsolete.htm'\))
[DELETE dbtab, VERSION](javascript:call_link\('abapdelete_dbtab_obsolete.htm'\))