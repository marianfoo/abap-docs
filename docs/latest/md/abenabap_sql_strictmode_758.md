  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Strict%20Mode%20in%20ABAP%20Release%207.58%2C%20ABENABAP_SQL_STRICTMODE_758%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ABAP SQL - Strict Mode in ABAP Release 7.58

-   [Conditions for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_758_1)
-   [Rules for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_758_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in ABAP release 7.58 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.58](javascript:call_link\('abennews-758-abap_sql.htm'\)):

-   Use of [SQL expressions](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)) as operands on the right side of an SQL condition.
-   [Path expressions](javascript:call_link\('abenabap_sql_path.htm'\)) that specify a [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") using the syntax written in words.
-   Cardinality specification in a [join expression](javascript:call_link\('abapselect_join.htm'\)).
-   Use of addition [PRIVILEGED ACCESS](javascript:call_link\('abapselect_privileged_access.htm'\))

Rules for the Strict Mode   

The strict mode in ABAP release 7.58 covers all rules of the [strict mode in ABAP release 7.57](javascript:call_link\('abenabap_sql_strictmode_757.htm'\)).