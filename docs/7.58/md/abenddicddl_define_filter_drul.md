  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tuning_objects.htm) →  [DDIC - Dependency Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_dependency_rules.htm) →  [DDIC - Dictionary DDL for Defining Dependency Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_define_dependency_rule.htm) →  [DDIC DDL - DEFINE DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_drul.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20FILTER%20DEPENDENCY%20RULE%2C%20ABENDDICDDL_DEFINE_FILTER_DRUL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

DDIC DDL - DEFINE FILTER DEPENDENCY RULE

Syntax

DEFINE FILTER DEPENDENCY RULE drul
  ON dbtab
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

Variant of the [Dictionary DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement [DEFINE DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_drul.htm) used to define a filter [dependency rule](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendependency_rule_glosry.htm "Glossary Entry"). A filter dependency rule can be defined for exactly one DDIC database table dbtab. It derives an additional filter condition derived\_cond from the pattern cond\_pattern. When the DDIC database table is read, the SAP HANA database optimizer finds the pattern in the WHERE condition and, if necessary, adds the additional filter condition AND to this condition.

cond\_pattern

In cond\_pattern, a pattern from a relational expression can be specified in the curly brackets after IF as follows:

lhs =*|*<*|*\>*|*<=*|*\>= rhs

It is not possible to join multiple expressions using AND or OR or to negate them using NOT.

-   The following can be specified as the left side lhs of the comparison:
    -   dbtab.column for a column column of the DDIC database table dbtab.
-   The following can be specified as the right side rhs of the comparison:
    -   dbtab.column for a column column of the DDIC database table dbtab.
    -   An untyped character literal or an untyped numeric literal. This syntax is the same as in [untyped literals in ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_untyped_literal_v2.htm).
    -   A numbered placeholder $1, $2, ...

derived\_cond

In derived\_cond, a template from a relational expression can be specified in the curly brackets after THEN as follows:

lhs =*|*<*|*\>*|*<=*|*\>= rhs *\[*OR lhs =*|*<*|*\>*|*<=*|*\>= rhs ...*\]*

Single comparisons can be placed in parentheses ( ). Negations using NOT are not possible.

-   The following can be specified as the left side lhs of a comparison:
    -   dbtab.column for the column column of the database table dbtab.
-   The following can be specified as the right side rhs of a comparison:
    -   dbtab.column for the column column of the database table dbtab.
    -   An untyped character literal or an untyped numeric literal. This syntax is the same as in [untyped literals in ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_untyped_literal_v2.htm).
    -   A numbered placeholder $1, $2, ..., which must also be specified in cond\_pattern. When the condition is added, the operand for the condition is inserted into this placeholder. The same placeholder for the same operand value must exist in the pattern cond\_pattern.
    -   [Built-in functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_functions.htm) in [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm) syntax.
    -   [Simple case distinctions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_case_expression_v2.htm) in ABAP CDS syntax.

Hints

-   It cannot be guaranteed that the SAP HANA database optimizer finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the result set of the original query. It is technically possible to modify the result set with a dependency rule, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.
-   The additional condition for a query can be viewed in the [SQL Trace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_trace_glosry.htm "Glossary Entry") tool (transaction ST05) by choosing Display Execution Plan.

Example

The following dependency rule demonstrates how the additional condition works:

DEFINE FILTER DEPENDENCY RULE demo\_drul\_1
  ON demo\_parts\_1
    IF { demo\_parts\_1.value > $1 }
      THEN { demo\_parts\_1.area = $1 }

On the SAP HANA database, this dependency rule modifies the result set of every read performed on the DDIC database table DEMO\_PARTS\_1. This is done for demonstration purposes here and should never occur in real situations. The program DEMO\_DEPENDENCY\_RULE\_1 uses identical SELECT statements to access the DDIC database table DEMO\_PARTS\_1 with a dependency rule and an identical table, DEMO\_PARTS, without a dependency rule:

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

If the first SELECT statement is transformed into a [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) statement or if alias names are used, for example, the optimizer may not find the pattern and may not add an additional condition. Therefore, the result of this example is dependent on the behavior of the optimizer, which should never occur in production programs.

Example

The following filter dependency rule for the DDIC database table DEMO\_PARTS\_2 should not modify the result set. For this to happen, the data in the DDIC database table must have the expected values.

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

If the data in the DDIC database table is structured so that in rows where the column VALUE contains values greater than or equal to 30 and the values in the column AREA are greater than or equal to 3, the result sets of both reads are identical. To derive an additional condition with a dependency on the condition value < 40, a further filter dependency rule could be defined for the same DDIC database table.