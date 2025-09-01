  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) → 

ABAP SQL - Release-Dependent Syntax Check Modes

In Release 7.40, SP02, a new SQL parser for ABAP SQL was introduced, used for both statically specified ABAP SQL statements and for dynamic tokens, and which applies some rules more strictly than the previous parser. In Release 7.40, SP02, the new parser was used only for the statement [SELECT](javascript:call_link\('abapselect.htm'\)) and, from Release 7.40, SP05, for all ABAP SQL statements. The corresponding syntax revisions can be found under the release-dependent changes for [7.40 SP02](javascript:call_link\('abennews-740-open_sql.htm'\)) and [7.40 SP05](javascript:call_link\('abennews-740_sp05-open_sql.htm'\)).

Alongside these general revisions (which apply to all ABAP SQL statements), Release 7.40, SP05 also introduced syntax check modes known as strict modes, which check ABAP SQL statements even more strictly if they use attributes introduced in the release in question.

-   [Strict Mode in Release 7.40, SP05](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\))

-   [Strict Mode in Release 7.40, SP08](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\))

-   [Strict Mode in Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\))

-   [Strict Mode in Release 7.51](javascript:call_link\('abenopensql_strict_mode_751.htm'\))

-   [Strict Mode in Release 7.52](javascript:call_link\('abenopensql_strict_mode_752.htm'\))

-   [Strict Mode in Release 7.53](javascript:call_link\('abenopensql_strict_mode_753.htm'\))

-   [Strict Mode in Release 7.54](javascript:call_link\('abenopensql_strict_mode_754.htm'\))

Notes

-   The release-dependent strict modes are generally downward compatible, since they are applied only if an attribute is used that was not present in previous releases.

-   The strict modes in later releases contain the rules from all preceding releases. More specifically, all strict modes demand, from Release 7.40, SP05, programs in which the program attribute [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated.

-   The following reasons apply for release-dependent strict modes of the syntax check:

-   First, rules such as the use of comma-separated lists or the introduction of host variables with @ are a precondition for using new syntax constructs that cannot be parsed otherwise.

-   Furthermore, developers should be encouraged to always use the desired syntax. For these reasons, an ABAP SQL statement that is enhanced with a new feature must adhere to the corresponding strict rule, even if the new feature used is not dependent upon it.

Continue
[Strict Mode in Release 7.40, SP05](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\))
[Strict Mode in Release 7.40, SP08](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\))
[Strict Mode in Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\))
[Strict Mode in Release 7.51](javascript:call_link\('abenopensql_strict_mode_751.htm'\))
[Strict Mode in Release 7.52](javascript:call_link\('abenopensql_strict_mode_752.htm'\))
[Strict Mode in Release 7.53](javascript:call_link\('abenopensql_strict_mode_753.htm'\))
[Strict Mode in Release 7.54](javascript:call_link\('abenopensql_strict_mode_754.htm'\))