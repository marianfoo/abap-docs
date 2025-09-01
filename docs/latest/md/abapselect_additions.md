  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20abap_options%2C%20ABAPSELECT_ADDITIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, abap\_options

Syntax

... [*\[*PRIVILEGED ACCESS*\]*](javascript:call_link\('abapselect_privileged_access.htm'\))
    [*\[*UP TO n ROWS*\]* *\[*OFFSET o*\]*](javascript:call_link\('abapselect_up_to_offset.htm'\))
    [*\[*BYPASSING BUFFER*\]*](javascript:call_link\('abapselect_bypassing_buffer.htm'\))
    [*\[*CONNECTION con*|*(con\_syntax)*\]*](javascript:call_link\('abapselect_connection.htm'\)) ...

Effect

These additions to SELECT or [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) are ABAP-specific.

-   [PRIVILEGED ACCESS](javascript:call_link\('abapselect_privileged_access.htm'\)) disables [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry").
-   [UP TO, OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) restrict the result set.
-   [BYPASSING BUFFER](javascript:call_link\('abapselect_bypassing_buffer.htm'\)) bypasses [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").
-   [CONNECTION](javascript:call_link\('abapselect_connection.htm'\)) specifies a [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry").

If [PRIVILEGED ACCESS](javascript:call_link\('abapselect_privileged_access.htm'\)) is used, it must be placed in front of the other options.

If the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) is specified as last clause of a SELECT statement (recommended and enforced in [strict mode from ABAP release 7.50](javascript:call_link\('abenabap_sql_strictmode_750.htm'\))), these additions must be placed after the INTO clause. Otherwise, they can also be placed after the [SELECT clause](javascript:call_link\('abapselect_list.htm'\)) or after the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)).

Continue
[SELECT, PRIVILEGED ACCESS](javascript:call_link\('abapselect_privileged_access.htm'\))
[SELECT, UP TO, OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\))
[SELECT, BYPASSING BUFFER](javascript:call_link\('abapselect_bypassing_buffer.htm'\))
[SELECT, CONNECTION](javascript:call_link\('abapselect_connection.htm'\))