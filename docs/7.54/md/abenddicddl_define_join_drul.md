  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Dependency Rules in ABAP Dictionary](javascript:call_link\('abenddic_dependency_rules.htm'\)) →  [Dictionary DDL for defining dependency rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\)) →  [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\)) → 

DEFINE JOIN DEPENDENCY RULE

Syntax

DEFINE JOIN DEPENDENCY RULE drul
  ON dbtab1, dbtab2
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

Variant of the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\)) used to define a join [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"). A join dependency rule can be defined for precisely two database tables. dbtab1 and dbtab2, separated by a comma. It derives an additional join condition derived\_cond from the pattern cond\_pattern When two database tables joined by a join expression are read, the SAP HANA database optimizer finds the pattern in the ON condition of the expression and, if necessary, adds the additional join condition AND to this condition. Any additional conditions defined by [filter dependency rules](javascript:call_link\('abenddicddl_define_filter_drul.htm'\)) for the two database rules are also applied to the other database table, if they apply to the columns specified in the join condition.

cond\_pattern

In cond\_pattern, a pattern from a relational expression can be specified in the curly brackets after IF as follows:

lhs = rhs *\[*AND lhs = rhs ...*\]*

Comparisons with the operator \= joined using AND are possible. Joins using OR or negations using NOT are not possible.

-   The following can be specified as the left side lhs of the comparison:

-   dbtab1.column or dbtab2.column for a column column of the database tables dbtab1 or dbtab2.

-   The following can be specified as the right side rhs of the comparison:

-   dbtab1.column or dbtab2.column for a column column of the database tables dbtab1 or dbtab2.

-   A character literal or a numeric literal. This syntax is the same as in [literals in ABAP CDS](javascript:call_link\('abencds_f1_literal.htm'\)), but without the domain prefix.

-   A numbered placeholder $1, $2, ...

derived\_cond

In derived\_cond, a template from a relational expression can be specified in the curly brackets after THEN as follows:

lhs =*|*<*|*\>*|*<=*|*\>= rhs *\[*OR lhs =*|*<*|*\>*|*<=*|*\>= rhs ...*\]*

Single comparisons cannot be placed in parentheses ( ). Negations using NOT are not possible.

-   The following can be specified as the left side lhs of a comparison:

-   dbtab1.column or dbtab2.column for a column column of the database column dbtab2.column or dbtab2.column.

-   The following can be specified as the right side rhs of a comparison:

-   dbtab1.column or dbtab2.column for a column column of the database column dbtab2.column or dbtab2.column.

-   A character literal or a numeric literal. This syntax is the same as in [literals in ABAP CDS](javascript:call_link\('abencds_f1_literal.htm'\)), but without the domain prefix.

-   A numbered placeholder $1, $2, ..., which must also be specified in cond\_pattern. When the condition is added, the operand for the condition is inserted here for which the same placeholder exists in the pattern cond\_pattern.

-   [Built-in functions in ABAP Dictionary](javascript:call_link\('abenddic_builtin_functions.htm'\)) in [ABAP CDS](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) syntax.

-   [Simple case distinctions](javascript:call_link\('abencds_f1_simple_case_expression.htm'\)) in ABAP CDS syntax.

Notes

-   It cannot be guaranteed that the SAP HANA database finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the results set of the original query. This is technically possible, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.

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

If the data in the database tables is structured correctly, the dependency rules do not modify the results set.