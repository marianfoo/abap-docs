  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Release-Dependent Syntax Check Modes, ABENABAP_SQL_STRICT_MODES, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL - Release-Dependent Syntax Check Modes

In Release 7.40, SP02, a new SQL parser for ABAP SQL was introduced that is used for both statically specified ABAP SQL statements and for dynamic tokens, and which applies some rules more strictly than the previous parser. In Release 7.40, SP02, the new parser was used only for the statement [SELECT](javascript:call_link\('abapselect.htm'\)) and, from Release 7.40, SP05, for all ABAP SQL statements. The corresponding syntax revisions can be found under the release-dependent changes for [7.40 SP02](javascript:call_link\('abennews-740-abap_sql.htm'\)) and [7.40 SP05](javascript:call_link\('abennews-740_sp05-abap_sql.htm'\)).

Alongside these general revisions, which apply to all ABAP SQL statements, Release 7.40, SP05 also introduced syntax check modes known as strict modes, which check ABAP SQL statements even more strictly if they use features introduced in the corresponding release.

-   [ABAP SQL - Strict Mode in Release 7.40, SP05](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\))
-   [ABAP SQL - Strict Mode in Release 7.40, SP08](javascript:call_link\('abenabap_sql_strictmode_740_sp08.htm'\))
-   [ABAP SQL - Strict Mode in Release 7.50](javascript:call_link\('abenabap_sql_strictmode_750.htm'\))
-   [ABAP SQL - Strict Mode in Release 7.51](javascript:call_link\('abenabap_sql_strictmode_751.htm'\))
-   [ABAP SQL - Strict Mode in Release 7.52](javascript:call_link\('abenabap_sql_strictmode_752.htm'\))
-   [ABAP SQL - Strict Mode in Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\))
-   [ABAP SQL - Strict Mode in Release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\))
-   [ABAP SQL - Strict Mode in Release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\))
-   [ABAP SQL - Strict Mode in Release 7.56](javascript:call_link\('abenabap_sql_strictmode_756.htm'\))

Hints

-   The release-dependent strict modes are generally downward compatible, since they are applied only if an feature is used that was not present in previous releases.
-   The strict modes in later releases contain the rules from all preceding releases. More specifically, all strict modes demand, from Release 7.40, SP05, programs in which the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated.
-   The following reasons apply to release-dependent strict modes of the syntax check:
    -   First, rules such as the use of comma-separated lists or the introduction of host variables with @ are a prerequisite for using new syntax constructs that cannot be parsed otherwise.
    -   On the other hand, developers should be encouraged to always use the desired syntax. For these reasons, an ABAP SQL statement that is enhanced with a new feature must adhere to the corresponding strict rule, even if the new feature used would not depend on it.

Continue
[ABAP SQL - Strict Mode in Release 7.40, SP05](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\))
[ABAP SQL - Strict Mode in Release 7.40, SP08](javascript:call_link\('abenabap_sql_strictmode_740_sp08.htm'\))
[ABAP SQL - Strict Mode in Release 7.50](javascript:call_link\('abenabap_sql_strictmode_750.htm'\))
[ABAP SQL - Strict Mode in Release 7.51](javascript:call_link\('abenabap_sql_strictmode_751.htm'\))
[ABAP SQL - Strict Mode in Release 7.52](javascript:call_link\('abenabap_sql_strictmode_752.htm'\))
[ABAP SQL - Strict Mode in Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\))
[ABAP SQL - Strict Mode in Release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\))
[ABAP SQL - Strict Mode in Release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\))
[ABAP SQL - Strict Mode in Release 7.56](javascript:call_link\('abenabap_sql_strictmode_756.htm'\))