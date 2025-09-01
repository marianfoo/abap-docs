  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) → 

Open SQL - Release-Dependent Syntax Check Modes

In Release 7.40, SP02, a new SQL parser for Open SQL was introduced, used for both statically specified Open SQL statements and for dynamic tokens, and which applies some rules more strictly than the previous parser. In Release 7.40, SP02, the new parser was used only for the statement [SELECT](javascript:call_link\('abapselect.htm'\)) and, from Release 7.40, SP05, for all Open SQL statements. The corresponding syntax revisions can be found under the release-dependent changes for [7.40 SP02](javascript:call_link\('abennews-740-open_sql.htm'\)) and [7.40 SP05](javascript:call_link\('abennews-740_sp05-open_sql.htm'\)).

Alongside these general revisions (which apply to all Open SQL statements), Release 7.40, SP05 also introduced syntax check modes known as strict modes, which check Open SQL statements even more strictly if they use attributes introduced in the release in question.

-   [Strict Mode in Release 7.40, SP05](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\))

-   [Strict Mode in Release 7.40, SP08](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\))

-   [Strict Mode in Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\))

-   [Strict Mode in Release 7.51](javascript:call_link\('abenopensql_strict_mode_751.htm'\))

-   [Strict Mode in Release 7.52](javascript:call_link\('abenopensql_strict_mode_752.htm'\))

Notes

-   The release-dependent strict modes are generally downward compatible, since they are applied only if an attribute is used that was not present in previous releases.

-   The strict modes in later releases contain the rules from all preceding releases. More specifically, from Release 7.40 SP05 all strict modes require programs with ABAP language version [standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry"), in which the program attribute [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated.

-   The following reasons apply for release-dependent strict modes of the syntax check:

-   First, rules such as the use of comma-separated lists or the introduction of host variables with @ are a precondition for using new syntax constructs that cannot be parsed otherwise.

-   Furthermore, developers should be encouraged to always use the desired syntax. For these reasons, an Open SQL statement that is enhanced with a new feature must adhere to the corresponding strict rule, even if the new feature used is not dependent upon it.

Continue
[Strict Mode in Release 7.40, SP05](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\))
[Strict Mode in Release 7.40, SP08](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\))
[Strict Mode in Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\))
[Strict Mode in Release 7.51](javascript:call_link\('abenopensql_strict_mode_751.htm'\))
[Strict Mode in Release 7.52](javascript:call_link\('abenopensql_strict_mode_752.htm'\))