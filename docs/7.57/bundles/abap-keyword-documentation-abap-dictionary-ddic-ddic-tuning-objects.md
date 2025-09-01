# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Tuning Objects

Included pages: 14


### abenddic_tuning_objects.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Tuning Objects, ABENDDIC_TUNING_OBJECTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

DDIC - Tuning Objects

[DDIC tuning objects](javascript:call_link\('abenddic_tuning_object_glosry.htm'\) "Glossary Entry") define technical settings or tunings for dictionary objects.

-   [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\))
-   [DDIC - Dynamic Caches](javascript:call_link\('abenddic_dynamic_caches.htm'\))

Continue
[DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\))
[DDIC - Dynamic Caches](javascript:call_link\('abenddic_dynamic_caches.htm'\))


### abenddic_dependency_rules.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dependency Rules, ABENDDIC_DEPENDENCY_RULES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Dependency Rules

A dependency rule is a [DDIC tuning object](javascript:call_link\('abenddic_tuning_object_glosry.htm'\) "Glossary Entry") for which an instance is created on an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). A dependency rule is defined for one or more DDIC database tables. From a relational expression of a selection condition, it derives an additional condition for these DDIC database tables. The SAP HANA database optimizer evaluates this instruction when the DDIC database tables are read. If possible, it creates the additional selection conditions and uses AND to join it with the other conditions.

ABAP Dictionary dependency rules are defined using the

-   [Dictionary DDL for defining dependency rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\))

Caution

It cannot be guaranteed that the SAP HANA database evaluates a dependency rule correctly by creating the required additional selection condition. In queries with [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry"), alias names, and so on, it can occur that the optimizer does not detect the selection condition in question. For this reason, dependency rules must only be defined in ways that do not modify the result set and that are useful for the internal optimizer. When a DDIC database table is accessed by an application program, the result must always be the same, regardless of any dependency rules. This is the only way to avoid producing results that are dependent on the behavior of the optimizer.

Hints

-   Dependency rules usually join semantic columns of a DDIC database table with technical columns of the same table. Semantic columns contain regular data and technical columns contain data used for internal database processes. ABAP programs should not access the data in technical columns in most cases. A dependency rule can be used to create additional selection conditions from selection conditions for semantic columns. This modifies access to the table in a transparent way for the ABAP program.
-   One important application for dependency rules is the [optimization of access to deprecated data](javascript:call_link\('abenhana_data_aging_druls.htm'\)) in [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") where [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is enabled. In this case, dependency rules join the [temperature column](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") of a DDIC database table with regular date columns in the table.
-   In all SQL reads on DDIC database tables, the SAP HANA database optimizer evaluates their dependency rules. This is done regardless of the [access type](javascript:call_link\('abenabap_managed_db_objects_access.htm'\)) and covers access with ABAP SQL, AMDP, and Native SQL, plus access to views that have a DDIC database table of this type as a data source. Dependency rules are not evaluated in reads not made using SQL (such as in calculation views).
-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\))


### abenddic_define_dependency_rule.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dictionary DDL for Defining Dependency Rules, ABENDDIC_DEFINE_DEPENDENCY_RULE,
 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Dictionary DDL for Defining Dependency Rules

An ABAP Dictionary [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") is defined as a source-code-based rule in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). A dependency rule is defined in a separate piece of [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry") and is saved and transported with this code. In a single piece of DRUL source code for dependency rules, the following Dictionary DDL statement can define exactly one dependency rule with the same name as the code:

-   [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\))

Hints

-   The [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry") of dependency rules has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DRUL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").
-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\))


### abenddicddl_define_drul.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) →  [DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE DEPENDENCY RULE, ABENDDICDDL_DEFINE_DRUL, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE DEPENDENCY RULE

Syntax

DEFINE [FILTER](javascript:call_link\('abenddicddl_define_filter_drul.htm'\))*|* [JOIN](javascript:call_link\('abenddicddl_define_join_drul.htm'\)) DEPENDENCY RULE drul
  ON dbtab *\[*, ...*\]*
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement used to define a [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"). The statement has two variants:

-   [DEFINE FILTER DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_filter_drul.htm'\)) for filter dependency rules
-   [DEFINE JOIN DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_join_drul.htm'\)) for join dependency rules

The name drul of a dependency rule must comply with the naming conventions for [dictionary types](javascript:call_link\('abenddic_data_types.htm'\)) and can have a maximum of 30 characters. The name is in the namespace of the ABAP Dictionary [data types](javascript:call_link\('abenddic_data_types.htm'\)) and must match the name of the [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry").

The names dbtab of DDIC database tables for which the dependency rule is defined are specified after ON.

-   In the case of filter dependency rules, exactly one DDIC database table must be specified.
-   In the case of join dependency rules, comma-separated DDIC database tables must be specified.

cond\_pattern is used to specify a pattern for a relational expression after IF. In the case of reads made on the database table dbtab, the SAP HANA database optimizer searches for this pattern in the associated WHERE condition or ON condition. If the pattern is found, the optimizer uses AND to add the condition derived\_cond specified after THEN to the corresponding WHERE condition or ON condition. The potential conditions are specified in the same way as in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") or [CDS DCL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") syntax and are described in the filter and join dependency rules.

Caution

It cannot be guaranteed that the SAP HANA database finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the result set of the original query. This is technically possible, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.

Hints

-   The derivation of an additional condition derived\_cond from a pattern cond\_pattern usually defines a dependency between semantic and technical columns of a DDIC database table. When an application accesses a table with a specific selection condition for semantic columns, an additional condition for technical columns is created implicitly. In the [optimization of access to deprecated data](javascript:call_link\('abenhana_data_aging_druls.htm'\)), regular date columns are the semantic columns and the [temperature column](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") is the technical column.
-   If multiple dependency rules are defined for a DDIC database table, AND is used to join all additional conditions and append them to the original condition.
-   Dependency rules can be defined for DDIC database tables only; they cannot be defined for DDIC views. The SAP HANA database optimizer evaluates all SQL reads on these tables. These include reads made with ABAP SQL, AMDP, and Native SQL, plus all reads made on views that contain the DDIC database table as a data source.
-   Dependency rules are not evaluated in reads not made using SQL (such as in calculation views).
-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), the definition of an ABAP Dictionary append structure can contain comments after // and between /\* ... \*/.
-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE FILTER DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_filter_drul.htm'\))
[DDIC DDL - DEFINE JOIN DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_join_drul.htm'\))


### abenddicddl_define_filter_drul.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) →  [DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\)) →  [DDIC DDL - DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE FILTER DEPENDENCY RULE, ABENDDICDDL_DEFINE_FILTER_DRUL, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE FILTER DEPENDENCY RULE

Syntax

DEFINE FILTER DEPENDENCY RULE drul
  ON dbtab
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

Variant of the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\)) used to define a filter [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"). A filter dependency rule can be defined for exactly one DDIC database table dbtab. It derives an additional filter condition derived\_cond from the pattern cond\_pattern. When the DDIC database table is read, the SAP HANA database optimizer finds the pattern in the WHERE condition and, if necessary, adds the additional filter condition AND to this condition.

cond\_pattern

In cond\_pattern, a pattern from a relational expression can be specified in the curly brackets after IF as follows:

lhs =*|*<*|*\>*|*<=*|*\>= rhs

It is not possible to join multiple expressions using AND or OR or to negate them using NOT.

-   The following can be specified as the left side lhs of the comparison:
    -   dbtab.column for a column column of the DDIC database table dbtab.
-   The following can be specified as the right side rhs of the comparison:
    -   dbtab.column for a column column of the DDIC database table dbtab.
    -   A character literal or a numeric literal. This syntax is the same as in [literals in ABAP CDS](javascript:call_link\('abencds_literal_v2.htm'\)).
    -   A numbered placeholder $1, $2, ...

derived\_cond

In derived\_cond, a template from a relational expression can be specified in the curly brackets after THEN as follows:

lhs =*|*<*|*\>*|*<=*|*\>= rhs *\[*OR lhs =*|*<*|*\>*|*<=*|*\>= rhs ...*\]*

Single comparisons cannot be placed in parentheses ( ). Negations using NOT are not possible.

-   The following can be specified as the left side lhs of a comparison:
    -   dbtab.column for the column column of the database table dbtab.
-   The following can be specified as the right side rhs of a comparison:
    -   dbtab.column for the column column of the database table dbtab.
    -   A character literal or a numeric literal. This syntax is the same as in [literals in ABAP CDS](javascript:call_link\('abencds_literal_v2.htm'\)).
    -   A numbered placeholder $1, $2, ..., which must also be specified in cond\_pattern. When the condition is added, the operand for the condition is inserted here for which the same placeholder exists in the pattern cond\_pattern.
    -   [Built-in functions in ABAP Dictionary](javascript:call_link\('abenddic_builtin_functions.htm'\)) in [ABAP CDS](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) syntax.
    -   [Simple case distinctions](javascript:call_link\('abencds_simple_case_expression_v2.htm'\)) in ABAP CDS syntax.

Hints

-   It cannot be guaranteed that the SAP HANA database finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the result set of the original query. This is technically possible, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.
-   The additional condition for a query can be viewed in the [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") tool (transaction ST05) by choosing Display Execution Plan.

Example

The following dependency rule demonstrates how the additional condition works:

DEFINE FILTER DEPENDENCY RULE demo\_drul\_1
  ON demo\_parts\_1
    IF { demo\_parts\_1.value > $1 }
      THEN { demo\_parts\_1.area = $1 }

On the SAP HANA database, it modifies the result set of every read performed on the DDIC database table DEMO\_PARTS\_1. This is done for demonstration purposes here and should never occur in real situations. The program DEMO\_DEPENDENCY\_RULE\_1 uses identical SELECT statements to access the DDIC database table DEMO\_PARTS\_1 with a dependency rule and an identical table, DEMO\_PARTS, without a dependency rule:

DATA num TYPE i.
cl\_demo\_input=>request( CHANGING field = num ).
"Dependency Rule demo\_drul\_1
SELECT \*
       FROM demo\_parts\_1
       WHERE value > @num
       ORDER BY id
       INTO TABLE @DATA(result1).
cl\_demo\_output=>write( result1 ).
"No Dependency Rule
SELECT \*
       FROM demo\_parts
       WHERE value > @num
       ORDER BY id
       INTO TABLE @DATA(result2).
cl\_demo\_output=>display( result2 ).

When DEMO\_PARTS\_1 is accessed, the SAP HANA database optimizer evaluates the dependency rule. It finds the pattern

demo\_parts\_1.value > $1

and adds the additional condition accordingly to create the following logical condition:

WHERE value > @num AND area = @num.

This restricts the result set to those rows in which the column AREA also has the value of num. This restriction does not apply when DEMO\_PARTS is accessed.

If the first SELECT statement is transformed into a [WITH](javascript:call_link\('abapwith.htm'\)) statement or if alias names are used, for example, the optimizer may not find the pattern and may not add an additional condition. In this case, the result of this example is dependent on the behavior of the optimizer, which should never occur in production programs.

Example

The following filter dependency rule for the DDIC database table DEMO\_PARTS\_2 must not modify the result set. For this to happen, the data in the DDIC database table must have the expected values.

DEFINE FILTER DEPENDENCY RULE demo\_drul\_2
  ON demo\_parts\_2
    IF { demo\_parts\_2.value >= 30 }
      THEN { demo\_parts\_2.area >= 3 }

The program DEMO\_DEPENDENCY\_RULE\_2 uses identical SELECT statements to access the DDIC database table DEMO\_PARTS\_2 with a dependency rule and an identical table, DEMO\_PARTS, without a dependency rule:

"Dependency Rule demo\_drul\_2
SELECT \*
       FROM demo\_parts\_2
       WHERE value >= 30  AND value < 40
       ORDER BY id
       INTO TABLE @DATA(result1).
"No Dependency Rule
SELECT \*
       FROM demo\_parts
       WHERE value >= 30 AND value < 40
       ORDER BY id
       INTO TABLE @DATA(result2).
ASSERT result1 = result2.

If the data in the DDIC database table is structured so that in rows where the column VALUE contains values greater than or equal to 30 the values in the column AREA are greater than or equal to 3, the result sets of both reads are identical. To derive an additional condition with a dependency on the condition value < 40, a further filter dependency rule could be defined for the same DDIC database table.


### abenddicddl_define_join_drul.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) →  [DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\)) →  [DDIC DDL - DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE JOIN DEPENDENCY RULE, ABENDDICDDL_DEFINE_JOIN_DRUL, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE JOIN DEPENDENCY RULE

Syntax

DEFINE JOIN DEPENDENCY RULE drul
  ON dbtab1, dbtab2
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

Variant of the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\)) used to define a join [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"). A join dependency rule can be defined for exactly two database tables dbtab1 and dbtab2, separated by a comma. It derives an additional join condition derived\_cond from the pattern cond\_pattern. When two DDIC database tables joined by a join expression are read, the SAP HANA database optimizer finds the pattern in the ON condition of the expression and, if necessary, adds the additional join condition AND to this condition. Any additional conditions defined by [filter dependency rules](javascript:call_link\('abenddicddl_define_filter_drul.htm'\)) for the two database rules are also applied to the other DDIC database table, if they apply to the columns specified in the join condition.

cond\_pattern

In cond\_pattern, a pattern from a relational expression can be specified in the curly brackets after IF as follows:

lhs = rhs *\[*AND lhs = rhs ...*\]*

Comparisons with the operator \= joined using AND are possible. Joins using OR or negations using NOT are not possible.

-   The following can be specified as the left side lhs of the comparison:
    -   dbtab1.column or dbtab2.column for a column column of the DDIC database tables dbtab1 or dbtab2.
-   The following can be specified as the right side rhs of the comparison:
    -   dbtab1.column or dbtab2.column for a column column of the DDIC database tables dbtab1 or dbtab2.
    -   A character literal or a numeric literal. This syntax is the same as in [literals in ABAP CDS](javascript:call_link\('abencds_literal_v2.htm'\)).
    -   A numbered placeholder $1, $2, ...

derived\_cond

In derived\_cond, a template from a relational expression can be specified in the curly brackets after THEN as follows:

lhs =*|*<*|*\>*|*<=*|*\>= rhs *\[*OR lhs =*|*<*|*\>*|*<=*|*\>= rhs ...*\]*

Single comparisons cannot be placed in parentheses ( ). Negations using NOT are not possible.

-   The following can be specified as the left side lhs of a comparison:
    -   dbtab1.column or dbtab2.column for a column column of the database column dbtab2.column or dbtab2.column.
-   The following can be specified as the right side rhs of a comparison:
    -   dbtab1.column or dbtab2.column for a column column of the database column dbtab2.column or dbtab2.column.
    -   A character literal or a numeric literal. This syntax is the same as in [literals in ABAP CDS](javascript:call_link\('abencds_literal_v2.htm'\)).
    -   A numbered placeholder $1, $2, ..., which must also be specified in cond\_pattern. When the condition is added, the operand for the condition is inserted here for which the same placeholder exists in the pattern cond\_pattern.
    -   [Built-in functions in ABAP Dictionary](javascript:call_link\('abenddic_builtin_functions.htm'\)) in [ABAP CDS](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) syntax.
    -   [Simple case distinctions](javascript:call_link\('abencds_simple_case_expression_v2.htm'\)) in ABAP CDS syntax.

Hints

-   It cannot be guaranteed that the SAP HANA database finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the result set of the original query. This is technically possible, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.
-   The additional condition for a query can be viewed in the [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") tool (transaction ST05) by choosing Display Execution Plan.

Example

The following dependency rules are defined:

DEFINE FILTER DEPENDENCY RULE demo\_drul\_3
  ON demo\_parts\_3
    IF { demo\_parts\_3.value >= 30 }
      THEN { demo\_parts\_3.area >= 3 }
DEFINE FILTER DEPENDENCY RULE demo\_drul\_4
  ON demo\_parts\_3
    IF { demo\_parts\_3.value < 40 }
      THEN { demo\_parts\_3.area < 4 }
DEFINE JOIN DEPENDENCY RULE demo\_drul\_5
  ON demo\_parts\_3, demo\_parts\_4
    IF { demo\_parts\_3.client = demo\_parts\_4.client AND
         demo\_parts\_3.id     = demo\_parts\_4.id     AND
         demo\_parts\_3.value  = demo\_parts\_4.value }
      THEN { demo\_parts\_3.area  = demo\_parts\_4.area }

The program DEMO\_DEPENDENCY\_RULE\_3 uses the following SELECT statement to access DEMO\_PARTS\_3 and DEMO\_PARTS\_4:

SELECT demo\_parts\_3~id, demo\_parts\_3~value, demo\_parts\_4~text
       FROM demo\_parts\_3
         INNER JOIN demo\_parts\_4
           ON demo\_parts\_3~id    = demo\_parts\_4~id AND
              demo\_parts\_3~value = demo\_parts\_4~value
       WHERE demo\_parts\_3~value >= 30 AND
             demo\_parts\_3~value <  40
       ORDER BY demo\_parts\_3~id
       INTO TABLE @DATA(result).

The SAP HANA database optimizer adds the following to the ON condition implicitly:

AND demo\_parts\_3~area = demo\_parts\_4~area

It also appends the following addition filter conditions to the WHERE condition implicitly:

AND demo\_parts\_3~area >= 3
AND demo\_parts\_3~area <  4
AND demo\_parts\_4~area >= 3
AND demo\_parts\_4~area <  4

If the data in the DDIC database tables is structured correctly, the dependency rules do not modify the result set.


### abenddicddl_define_drul.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) →  [DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE DEPENDENCY RULE, ABENDDICDDL_DEFINE_DRUL, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE DEPENDENCY RULE

Syntax

DEFINE [FILTER](javascript:call_link\('abenddicddl_define_filter_drul.htm'\))*|* [JOIN](javascript:call_link\('abenddicddl_define_join_drul.htm'\)) DEPENDENCY RULE drul
  ON dbtab *\[*, ...*\]*
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement used to define a [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"). The statement has two variants:

-   [DEFINE FILTER DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_filter_drul.htm'\)) for filter dependency rules
-   [DEFINE JOIN DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_join_drul.htm'\)) for join dependency rules

The name drul of a dependency rule must comply with the naming conventions for [dictionary types](javascript:call_link\('abenddic_data_types.htm'\)) and can have a maximum of 30 characters. The name is in the namespace of the ABAP Dictionary [data types](javascript:call_link\('abenddic_data_types.htm'\)) and must match the name of the [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry").

The names dbtab of DDIC database tables for which the dependency rule is defined are specified after ON.

-   In the case of filter dependency rules, exactly one DDIC database table must be specified.
-   In the case of join dependency rules, comma-separated DDIC database tables must be specified.

cond\_pattern is used to specify a pattern for a relational expression after IF. In the case of reads made on the database table dbtab, the SAP HANA database optimizer searches for this pattern in the associated WHERE condition or ON condition. If the pattern is found, the optimizer uses AND to add the condition derived\_cond specified after THEN to the corresponding WHERE condition or ON condition. The potential conditions are specified in the same way as in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") or [CDS DCL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") syntax and are described in the filter and join dependency rules.

Caution

It cannot be guaranteed that the SAP HANA database finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the result set of the original query. This is technically possible, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.

Hints

-   The derivation of an additional condition derived\_cond from a pattern cond\_pattern usually defines a dependency between semantic and technical columns of a DDIC database table. When an application accesses a table with a specific selection condition for semantic columns, an additional condition for technical columns is created implicitly. In the [optimization of access to deprecated data](javascript:call_link\('abenhana_data_aging_druls.htm'\)), regular date columns are the semantic columns and the [temperature column](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") is the technical column.
-   If multiple dependency rules are defined for a DDIC database table, AND is used to join all additional conditions and append them to the original condition.
-   Dependency rules can be defined for DDIC database tables only; they cannot be defined for DDIC views. The SAP HANA database optimizer evaluates all SQL reads on these tables. These include reads made with ABAP SQL, AMDP, and Native SQL, plus all reads made on views that contain the DDIC database table as a data source.
-   Dependency rules are not evaluated in reads not made using SQL (such as in calculation views).
-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), the definition of an ABAP Dictionary append structure can contain comments after // and between /\* ... \*/.
-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE FILTER DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_filter_drul.htm'\))
[DDIC DDL - DEFINE JOIN DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_join_drul.htm'\))


### abenddic_define_dependency_rule.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dictionary DDL for Defining Dependency Rules, ABENDDIC_DEFINE_DEPENDENCY_RULE,
 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Dictionary DDL for Defining Dependency Rules

An ABAP Dictionary [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") is defined as a source-code-based rule in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). A dependency rule is defined in a separate piece of [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry") and is saved and transported with this code. In a single piece of DRUL source code for dependency rules, the following Dictionary DDL statement can define exactly one dependency rule with the same name as the code:

-   [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\))

Hints

-   The [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry") of dependency rules has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DRUL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").
-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\))


### abenddic_dependency_rules.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dependency Rules, ABENDDIC_DEPENDENCY_RULES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Dependency Rules

A dependency rule is a [DDIC tuning object](javascript:call_link\('abenddic_tuning_object_glosry.htm'\) "Glossary Entry") for which an instance is created on an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). A dependency rule is defined for one or more DDIC database tables. From a relational expression of a selection condition, it derives an additional condition for these DDIC database tables. The SAP HANA database optimizer evaluates this instruction when the DDIC database tables are read. If possible, it creates the additional selection conditions and uses AND to join it with the other conditions.

ABAP Dictionary dependency rules are defined using the

-   [Dictionary DDL for defining dependency rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\))

Caution

It cannot be guaranteed that the SAP HANA database evaluates a dependency rule correctly by creating the required additional selection condition. In queries with [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry"), alias names, and so on, it can occur that the optimizer does not detect the selection condition in question. For this reason, dependency rules must only be defined in ways that do not modify the result set and that are useful for the internal optimizer. When a DDIC database table is accessed by an application program, the result must always be the same, regardless of any dependency rules. This is the only way to avoid producing results that are dependent on the behavior of the optimizer.

Hints

-   Dependency rules usually join semantic columns of a DDIC database table with technical columns of the same table. Semantic columns contain regular data and technical columns contain data used for internal database processes. ABAP programs should not access the data in technical columns in most cases. A dependency rule can be used to create additional selection conditions from selection conditions for semantic columns. This modifies access to the table in a transparent way for the ABAP program.
-   One important application for dependency rules is the [optimization of access to deprecated data](javascript:call_link\('abenhana_data_aging_druls.htm'\)) in [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") where [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is enabled. In this case, dependency rules join the [temperature column](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") of a DDIC database table with regular date columns in the table.
-   In all SQL reads on DDIC database tables, the SAP HANA database optimizer evaluates their dependency rules. This is done regardless of the [access type](javascript:call_link\('abenabap_managed_db_objects_access.htm'\)) and covers access with ABAP SQL, AMDP, and Native SQL, plus access to views that have a DDIC database table of this type as a data source. Dependency rules are not evaluated in reads not made using SQL (such as in calculation views).
-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\))


### abenddic_dynamic_caches.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dynamic Caches, ABENDDIC_DYNAMIC_CACHES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

DDIC - Dynamic Caches

A [dynamic cache](javascript:call_link\('abendynamic_cache_glosry.htm'\) "Glossary Entry") is a [DDIC tuning object](javascript:call_link\('abenddic_tuning_object_glosry.htm'\) "Glossary Entry") that serves as an interface between [dynamic result caches](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1.html?version=2.0.02) in SAP HANA and DDIC views. A dynamic cache is defined for a DDIC database table. It defines a restricted subquery on the database table with the goal to cache read results of the table in question to avoid repeated aggregation. This optimizes the performance in certain use cases. At the same time, a dynamic caches guarantees up-to-date data. Each time the cached database table is updated with INSERT, the cached data is updated automatically.

ABAP Dictionary dynamic caches are defined using the

-   [Dictionary DDL for Defining Dynamic Caches](javascript:call_link\('abenddic_define_dynamic_cache.htm'\))

Hints

-   SAP HANA offers static and dynamic [view caches](javascript:call_link\('abenview_cache_glosry.htm'\) "Glossary Entry"). Only the dynamic version has been integrated into DDIC. Static view caches are called [Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/8ea43b3ff2e541e398e27d7e5caefab7.html?version=2.0.02) on SAP HANA, and dynamic caches are called [Dynamic Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1.html?version=2.0.02).
-   Further details on SAP HANA cached views and an executable example can be found in the topic about [Cached Views in SAP HANA](javascript:call_link\('abenhana_cached_views.htm'\)).
-   A DDIC dynamic cache is generated as SQL view on the database. Therefore, it is also referred to as view cache.

Continue
[DDIC - Dictionary DDL for Defining Dynamic Caches](javascript:call_link\('abenddic_define_dynamic_cache.htm'\))


### abenddic_define_dynamic_cache.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) →  [DDIC - Dynamic Caches](javascript:call_link\('abenddic_dynamic_caches.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dictionary DDL for Defining Dynamic Caches, ABENDDIC_DEFINE_DYNAMIC_CACHE, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Dictionary DDL for Defining Dynamic Caches

An ABAP Dictionary [dynamic cache](javascript:call_link\('abendynamic_cache_glosry.htm'\) "Glossary Entry") is defined as a source-code-based cache in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). A dynamic cache is defined in a separate piece of [DTDC source code](javascript:call_link\('abenddtdc_source_code_glosry.htm'\) "Glossary Entry") and is saved and transported with this code. In a single piece of DTDC source code for dynamic caches, the following Dictionary DDL statement can define exactly one dynamic cache with the same name as the code:

-   [DEFINE DYNAMIC CACHE](javascript:call_link\('abenddicddl_define_dynamic_cache.htm'\))

No [name table](javascript:call_link\('abenname_table_glosry.htm'\) "Glossary Entry") and no [DDIC runtime object](javascript:call_link\('abenddic_runtime_object_glosry.htm'\) "Glossary Entry") are generated for a dynamic cache. Therefore, a dynamic cache cannot be accessed or read with ABAP.

Hints

-   The DTDC source code of dynamic caches has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DTDC source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").
-   DDIC dynamic caches are connected to a [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") and can be toggled on or off.

Continue
[DDIC DDL - DEFINE DYNAMIC CACHE](javascript:call_link\('abenddicddl_define_dynamic_cache.htm'\))


### abenddicddl_define_dynamic_cache.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) →  [DDIC - Dynamic Caches](javascript:call_link\('abenddic_dynamic_caches.htm'\)) →  [DDIC - Dictionary DDL for Defining Dynamic Caches](javascript:call_link\('abenddic_define_dynamic_cache.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE DYNAMIC CACHE, ABENDDICDDL_DEFINE_DYNAMIC_CACHE, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE DYNAMIC CACHE

Syntax

DEFINE DYNAMIC CACHE cache\_name
  ON dbtab
{ projection\_list }
  *\[*WHERE filter\_cond*\]*
  *\[*SEGREGATE CACHE DATA BY filter\_cond*\]*
  *\[*CREATION CONFIGURABLE DEFAULT *{*ON*|*OFF*}**\]*;

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement used to define a [dynamic cache](javascript:call_link\('abendynamic_cache_glosry.htm'\) "Glossary Entry") for a [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry").

The name cache\_name of a dynamic cache must comply with the naming conventions for [dictionary types](javascript:call_link\('abenddic_data_types.htm'\)) and can have a maximum of 30 characters. The name is in the namespace of the ABAP Dictionary [data types](javascript:call_link\('abenddic_data_types.htm'\)) and must match the name of the dynamic cache source code.

A dynamic cache can be defined for exactly one DDIC database table dbtab, which is specified after ON. Tables with [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") are not supported. Multiple dynamic caches can be defined for the same database table.

Projection List

The projection list projection\_list of a dynamic cache consists of a restricted subquery which is applied to the DDIC database table to be tuned. It can consist of the following components:

-   Fields of dbtab can optionally be specified.
    
    Caution: Client fields must not be specified. Client handling takes place implicitly.
    
-   At least one aggregate function must be specified in the projection list. The following aggregate functions can be specified:
    -   SUM(arg)
    -   AVG(arg)
    -   MIN(arg)
    -   MAX(arg)
    -   COUNT(arg)
    -   COUNT(\*)
-   The argument arg of the aggregate function can be a field of dbtab, an untyped numeric or character literal, an arithmetic expression, or a case expression. The arithmetic expression can, in turn, have fields or literals as operands. The case expression can have fields, literals, or arithmetic expressions as operands.

Clauses

In a WHERE filter condition filter\_cond, the cache result can be restricted as follows:

lhs = rhs *\[**{*AND *|* OR*}* lhs = rhs*\]*

-   It is possible to join multiple expressions using AND and OR.
-   lhs can be a field of dbtab.
-   rhs can be a field of dbtab or an untyped numeric or character literal.
-   The fields evaluated in the condition do not need to be defined as elements in the projection list.

Optionally, a further filter condition filter\_cond can be added after SEGREGATE CACHE DATA BY to define which filtered results should be cached as follows:

lhs = rhs *\[*AND lhs = rhs*\]*

-   It is possible to join multiple expressions using AND.
-   lhs must be a field of dbtab.
-   rhs can be a character or numeric literal or a numbered placeholder $1, $2, ...
-   The fields evaluated in the condition must be defined as elements in the projection list.

CREATION CONFIGURABLE DEFAULT *{*ON*|*OFF*}*: Optional addition to activate or deactivate the dynamic cache.

-   ON: the dynamic cache is created on SAP HANA as soon as the DDIC definition is activated.
-   OFF: creation of the dynamic cache on SAP HANA is deferred to a later point in time.

If this clause is not used, the default is ON.

If the dynamic cache is deactivated, the consumer can later on decide when the cache should be used. This configuration can be done with transaction S\_DBCACHE\_CONFIG.

Example

The following source code shows an example for a dynamic cache for the database table DEMO\_DDIC\_TYPES.

DEFINE DYNAMIC CACHE demo\_ddic\_dynamic\_cache
  ON demo\_ddic\_types
    {
     int4,
     sum( int8 )
    }
WHERE int1 = 4
SEGREGATE CACHE DATA BY int4 = $1
CREATION CONFIGURABLE DEFAULT OFF;

This cache is generated as SQL view on the database. Client handling is added automatically.

![Figure](dynamic_cache.png)


### abenddic_define_dynamic_cache.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) →  [DDIC - Dynamic Caches](javascript:call_link\('abenddic_dynamic_caches.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dictionary DDL for Defining Dynamic Caches, ABENDDIC_DEFINE_DYNAMIC_CACHE, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Dictionary DDL for Defining Dynamic Caches

An ABAP Dictionary [dynamic cache](javascript:call_link\('abendynamic_cache_glosry.htm'\) "Glossary Entry") is defined as a source-code-based cache in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). A dynamic cache is defined in a separate piece of [DTDC source code](javascript:call_link\('abenddtdc_source_code_glosry.htm'\) "Glossary Entry") and is saved and transported with this code. In a single piece of DTDC source code for dynamic caches, the following Dictionary DDL statement can define exactly one dynamic cache with the same name as the code:

-   [DEFINE DYNAMIC CACHE](javascript:call_link\('abenddicddl_define_dynamic_cache.htm'\))

No [name table](javascript:call_link\('abenname_table_glosry.htm'\) "Glossary Entry") and no [DDIC runtime object](javascript:call_link\('abenddic_runtime_object_glosry.htm'\) "Glossary Entry") are generated for a dynamic cache. Therefore, a dynamic cache cannot be accessed or read with ABAP.

Hints

-   The DTDC source code of dynamic caches has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DTDC source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").
-   DDIC dynamic caches are connected to a [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") and can be toggled on or off.

Continue
[DDIC DDL - DEFINE DYNAMIC CACHE](javascript:call_link\('abenddicddl_define_dynamic_cache.htm'\))


### abenddic_dynamic_caches.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Tuning Objects](javascript:call_link\('abenddic_tuning_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dynamic Caches, ABENDDIC_DYNAMIC_CACHES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

DDIC - Dynamic Caches

A [dynamic cache](javascript:call_link\('abendynamic_cache_glosry.htm'\) "Glossary Entry") is a [DDIC tuning object](javascript:call_link\('abenddic_tuning_object_glosry.htm'\) "Glossary Entry") that serves as an interface between [dynamic result caches](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1.html?version=2.0.02) in SAP HANA and DDIC views. A dynamic cache is defined for a DDIC database table. It defines a restricted subquery on the database table with the goal to cache read results of the table in question to avoid repeated aggregation. This optimizes the performance in certain use cases. At the same time, a dynamic caches guarantees up-to-date data. Each time the cached database table is updated with INSERT, the cached data is updated automatically.

ABAP Dictionary dynamic caches are defined using the

-   [Dictionary DDL for Defining Dynamic Caches](javascript:call_link\('abenddic_define_dynamic_cache.htm'\))

Hints

-   SAP HANA offers static and dynamic [view caches](javascript:call_link\('abenview_cache_glosry.htm'\) "Glossary Entry"). Only the dynamic version has been integrated into DDIC. Static view caches are called [Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/8ea43b3ff2e541e398e27d7e5caefab7.html?version=2.0.02) on SAP HANA, and dynamic caches are called [Dynamic Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1.html?version=2.0.02).
-   Further details on SAP HANA cached views and an executable example can be found in the topic about [Cached Views in SAP HANA](javascript:call_link\('abenhana_cached_views.htm'\)).
-   A DDIC dynamic cache is generated as SQL view on the database. Therefore, it is also referred to as view cache.

Continue
[DDIC - Dictionary DDL for Defining Dynamic Caches](javascript:call_link\('abenddic_define_dynamic_cache.htm'\))
