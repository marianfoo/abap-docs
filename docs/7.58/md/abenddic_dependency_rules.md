  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dependency%20Rules%2C%20ABENDDIC_DEPENDENCY_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Dependency Rules

A dependency rule is a [HANA tuning object](javascript:call_link\('abenhana_tuning_object_glosry.htm'\) "Glossary Entry") for which an instance is created on an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). A dependency rule is defined for one or more DDIC database tables. From a relational expression of a selection condition, it derives an additional condition for these DDIC database tables. The SAP HANA database optimizer evaluates this rule when the DDIC database tables are read. If possible, it creates the additional selection conditions and uses AND to join it with the other conditions.

ABAP Dictionary dependency rules are defined using the

-   [Dictionary DDL for defining dependency rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\))

Caution

It cannot be guaranteed that the SAP HANA database evaluates a dependency rule correctly and creates the required additional selection condition. In queries with [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry"), alias names, and so on, it can occur that the optimizer does not detect the selection condition in question. For this reason, dependency rules must only be defined in ways that do not modify the result set and that are solely intended for internal optimization. When a DDIC database table is accessed by an application program, the result must always be the same, regardless of any dependency rules. This is the only way to avoid producing results that are dependent on the behavior of the optimizer.

Hints

-   Dependency rules usually join semantic columns of a DDIC database table with technical columns of the same table. Semantic columns contain regular data and technical columns contain data used for internal database processes. ABAP programs should not access the data in technical columns in most cases. A dependency rule can be used to create additional selection conditions for technical columns from existing selection conditions for semantic columns. This modifies access to the table in a transparent way for the ABAP program.
-   One important application for dependency rules is the [optimization of access to deprecated data](javascript:call_link\('abenhana_data_aging_druls.htm'\)) in [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") where [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is enabled. In this case, dependency rules join the [temperature column](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") of a DDIC database table with regular date columns in the table.
-   In all SQL reads on DDIC database tables, the SAP HANA database optimizer evaluates their dependency rules. This is done regardless of the [access type](javascript:call_link\('abenabap_managed_db_objects_access.htm'\)) and covers access with ABAP SQL, AMDP, and Native SQL, plus access to views that have a DDIC database table as a data source. Dependency rules are not evaluated in reads not made using SQL (such as in calculation views).
-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\))