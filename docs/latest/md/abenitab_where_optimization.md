---
title: "Example"
description: |
  In the following example: -   The first WHERE condition can be optimized. It is already written in an optimized form, where the three key fields are compared with different operators combined by AND. A comparison for a further column is also appended by AND. -   The second WHERE condition can be opt
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_where_optimization.htm"
abapFile: "abenitab_where_optimization.htm"
keywords: ["select", "update", "delete", "loop", "do", "while", "if", "case", "try", "catch", "data", "types", "internal-table", "abenitab", "where", "optimization"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Performance Notes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_perfo.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Optimizing%20the%20WHERE%20Condition%2C%20ABENITAB_WHERE_OPTIMIZATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

itab - Optimizing the WHERE Condition

Using the statements [LOOP AT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm), [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm), and [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab.htm) a WHERE condition can be specified to select specific lines of the internal table. While the search across a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") is always linear and cannot be optimized when using the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"), the compiler tries to optimize the search when the statement is processed by using a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry") or a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry"). This is the case, when

-   accessing a [sorted table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_table_glosry.htm "Glossary Entry") using its primary key,
-   accessing a [hashed table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhashed_table_glosry.htm "Glossary Entry") using its primary key,
-   accessing a table of any table type using a [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") specified by USING KEY.

For the optimization, the compiler tries to transform the [relational expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelational_expression_glosry.htm "Glossary Entry") of the given WHERE condition into an equivalent WHERE condition that starts with comparisons between key fields and values combined by AND. These key/value pairs are then used as a key specification for an optimized key access (binary search or hash algorithm as in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) or a [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm)), to find one or more lines. The found line or lines are then further checked using the remaining relational expressions from the WHERE condition that could not be extracted as key/value pairs.

Prerequisites for the optimization are therefore:

-   The relational expressions of the WHERE condition can be transformed to sufficient key/value pairs.
-   The corresponding key access returns the same results as the evaluation of respective part of the logical expression would. This is guaranteed only for compatible data types, since in the case of incompatible data types:
    -   The content of the specified data objects is converted to the data type of the columns before the evaluation in the case of key accesses.
    -   The [comparison rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) for incompatible data types apply when evaluating a [comparison expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomparison_expression_glosry.htm "Glossary Entry"). Here, all the data types involved play a part in determining which operand is converted into which comparison type.

If there are no or insufficient relational expressions to meet both of these prerequisites, no optimization is possible and the behavior is as follows:

-   If a sorted table or a hashed table is accessed using the primary table key, all lines of the internal table are checked as in a standard table.
-   If the table is read using a secondary table key, that is, if said key is specified after USING KEY, a syntax error or syntax check warning, or an exception is raised. Access using a secondary table key must always be executed in an optimized way.

The following sections describe when an access can be optimized.

-   [Prerequisites for the Optimization of Hash Keys](#abenitab-where-optimization-1-------prerequisites-for-the-optimization-of-sorted-keys---@ITOC@@ABENITAB_WHERE_OPTIMIZATION_2)
-   [Prerequisites for the Operands](#abenitab-where-optimization-3---hints------by-specifying-a-key-with-using-key--it-can-be-checked--whether-an-optimization-is-possible-for-a-where-condition--the-long-texts-of-the-syntax-errors-and-warnings-provide-detailed-information-for-dedicated-situations------if-the-lines-selected-using-where-are-modified-or-deleted-using--modify--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abapmodify-itab-htm--or--delete--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abapdelete-itab-htm--and-not-just-read-using--loop-at--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abaploop-at-itab-htm---further-update-costs-are-incurred-in-addition-to-the-search-for-the-lines--when-deleting-lines-from-standard-tables--it-should-be-noted-that-searches-using-a-secondary-key-optimize-the-selection-of-lines-to-be-deleted--but-not-the-update-required-for-the-primary-key--which-is-usually-performed-using-a-linear-search---prerequisites-for-the-optimization-of-hash-keys-----in-the-case-of-a--hash-key--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenhash-key-glosry-htm--glossary-entry---access--it-must-be-possible-to-transform-the-where-condition-fully-or-partly-to-a-set-of-comparisons-on-equality-combined-by-and-that-cover-all-components-of-the-key--the-operands-must-meet-the-prerequisites-described-below---the-operands-of-these-relational-expressions-are-then-used-as-the-key-value-pairs-for-the-key-access--the-remainder-of-the-logical-expression-can-contain-any-number-of-relational-expressions-combined-using-and--key-components-may-be-used-in-the-relational-expressions-not-used-for-the-key-access-but-not-for-comparisons-on-equality---comparisons-specified-by-the-tabular-comparison-operator--in-range--tab--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenlogexp-select-option-htm--are-ignored-by-the-optimization--they-are-never-part-of-the-key-access-but-are-always-applied-to-the-lines-found-by-the-key-access---example--in-the-following-example-------the-first-where-condition-can-be-optimized--it-is-already-written-in-an-optimized-form--where-the-three-key-fields-are-compared-for-equality-and-combined-by-and--a-comparison-for-a-further-column-is-also-appended-by-and------the-second-where-condition-can-be-optimized--the-compiler-can-transform-it-to-the-first-where-condition-by-removing-the-double-negation-with-not-and-by-replacing-is-initial-with-a-comparison-for-equality------the-third-where-condition-can-be-optimized--the-compiler-can-transform-the-comparisons-combined-by-or-into-comparisons-combined-by-and-using-de-morgan-s-laws--also-the-double-negation-with-not-for-is-initial-is-identified-and-removed------the-fourth-where-condition-cannot-be-optimized-because-a-comparison-for-a-further-column-is-appended-by-or------the-fifth-where-condition-cannot-be-optimized-because-there-is-a-duplicate-comparison-for-equality-for-a-key-field---types----begin-of-line------a-type-i------b-type-i------c-type-i------d-type-i----end-of-line--data-itab-type-standard-table-of-line----------------with-unique-hashed-key-key-components-a-b-c--loop-at-itab-using-key-key--------------assigning-field-symbol--fs1----------------where-a---3-and-b---3-and-c---0-and-d---1--------endloop--loop-at-itab-using-key-key--------------assigning-field-symbol--fs2----------------where-d---1-and--------------------not---not---a---3-and-b---3-----and--------------------c-is-initial--------endloop--loop-at-itab-using-key-key--------------assigning-field-symbol--fs3----------------where-not---not-a---3-or-not-b---3---and--------------------d---1-and--------------------not-c-is-not-initial--------endloop----loop-at-itab-using-key-key--syntax-error----------------assigning-field-symbol--fs4------------------where-a---3-and-b---3-and-c---0-or-d---1------------endloop----loop-at-itab-using-key-key--syntax-error----------------assigning-field-symbol--fs5------------------where-a---3-and-b---3-and-c---0-and-a---1------------endloop---prerequisites-for-the-optimization-of-sorted-keys-----in-the-case-of-a--sorted-key--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abensorted-key-glosry-htm--glossary-entry---access--it-must-be-possible-to-transform-the-where-condition-fully-or-a-partly-to-a-set-of-comparisons-with-any--binary-comparison-operators--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenlogexp-any-operand-htm--or-with--between--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenlogexp-between-htm--combined-by-and-that-cover-an-initial-section-of-the-key-consisting-of-at-least-one-component--the-operands-must-meet-the-prerequisites-described-below---the-operands-of-these-relational-expressions-are-then-used-as-the-key-value-pairs-for-the-key-access--the-remainder-of-the-logical-expression-can-contain-any-number-of-relational-expressions-combined-using-and--key-components-may-be-used-in-the-relational-expressions-not-used-for-the-key-access-but-not-for-comparisons-on-equality--nevertheless--the-duplicate-use-of-key-fields-in-comparisons-leads-to-a-syntax-warning---the-access-to-the-internal-table-is-partially-sequential--for-a-forward-loop--the-starting-point-for-processing-is-determined-by-a-binary-search-with-the-extracted-key-value-pairs-for-relations--------------and-between--first-operand--that-cover-the-table-key-completely-or-partially--from-the-starting-point-on--the-table-is-only-processed-as-long-as-subconditions-for-pairs-with-relations------------and-between--second-operand--remain-fulfilled--for-a-backward-loop--see--step--abaploop-at-itab-cond-htm--abap-addition-33@)), the starting point is determined by pairs with relations \=, <=, <, and BETWEEN (second operand) and the processing is stopped when subconditions for pairs with \=, \>=, \>, and BETWEEN (first operand) are not fulfilled any more.

Comparisons specified by a tabular comparison operator [IN range\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_select_option.htm) appended with AND are ignored by the optimization. They are never part of the key access but always applied to the lines found by the key access.

Example

In the following example:

-   The first WHERE condition can be optimized. It is already written in an optimized form, where the three key fields are compared with different operators combined by AND. A comparison for a further column is also appended by AND.
-   The second WHERE condition can be optimized. It is already written in an optimized form, where the first two key fields are compared.
-   The third WHERE condition can be optimized. The first two key fields are extracted for the key access and the condition for the third key field is evaluated together with the additional condition on the resulting lines.
-   The fourth WHERE condition can be optimized. The compiler can use De Morgan's Laws to transform the condition to comparisons combined by AND.
-   The fifth WHERE condition can be optimized because it uses BETWEEN for the first key field.
-   The sixth WHERE condition cannot be optimized because the additional condition is combined by OR.
-   The seventh WHERE condition cannot be optimized because a key field is used two times with comparisons on equality.
-   The eighth WHERE condition can be optimized but produces a syntax warning, suppressed by a pragma here, because a field is used twice.

TYPES:
  BEGIN OF line,
    a TYPE i,
    b TYPE i,
    c TYPE i,
    d TYPE i,
  END OF line.
DATA itab TYPE STANDARD TABLE OF line
               WITH UNIQUE SORTED KEY key COMPONENTS a b c.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs1>)
             WHERE a = 3 AND b >= 3 AND c < 0 AND d > 1.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs2>)
             WHERE a = 3 AND b < 3 AND d > 1.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs3>)
             WHERE a = 3 AND b = 3 AND NOT c = 1 AND d > 1.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs4>)
             WHERE NOT ( NOT a = 3 OR NOT b = 3 ).
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs5>)
             WHERE a BETWEEN 1 AND 3.
  ...
ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs6>)
\*             WHERE a = 3 AND b = 3 OR d > 1.
\*  ...
\*ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs7>)
\*             WHERE a = 3 AND b = 3 AND a = 1.
\*  ...
\*ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs8>)
             WHERE a = 3 AND b = 3 AND a > 1 ##ITAB\_DUP\_IN\_WHERE\[A\].
  ...
ENDLOOP.

Example

In this example, the partially sequential access to the internal table is as follows:

-   The first loop is a forward loop.
    -   The starting point is determined by key/value pairs of relations a =0, b >= 0, c > 2.
    -   The table is processed as long as subconditions for the pairs a = 0, b < 5 are fulfilled.
-   The second loop is a backward loop.
    -   The starting point is determined by the pairs a <= 1, b < 5.
    -   The table is processed as long as subconditions for the pairs a >= -1, b >= 0, c > 2 are fulfilled.
-   The third loop is a forward loop and the fourth loop is a backward loop. Since for both loops there is no relation for key field a:
    
    -   No starting point can be determined.
    -   No subconditions can be determined.
    
    An optimization is not possible
    

TYPES:
  BEGIN OF line,
    a TYPE i,
    b TYPE i,
    c TYPE i,
    d TYPE i,
  END OF line.
DATA itab TYPE STANDARD TABLE OF line
               WITH UNIQUE SORTED KEY key COMPONENTS a b c.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs1>)
             WHERE a = 0 AND b >= 0 AND b < 5 AND c > 2.
  ...
ENDLOOP.
LOOP AT itab USING KEY key
             ASSIGNING FIELD-SYMBOL(<fs2>)
             STEP -1
             WHERE a BETWEEN -1 AND 1 AND b >= 0 AND b < 5 AND c > 2.
  ...
ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs3>)
\*             WHERE b >= 0 AND b < 5 AND c > 2.
\*  ...
\*ENDLOOP.
\*LOOP AT itab USING KEY key "Syntax error
\*             ASSIGNING FIELD-SYMBOL(<fs4>)
\*             STEP -1
\*             WHERE b >= 0 AND b < 5 AND c > 2.
\*  ...
\*ENDLOOP.

Prerequisites for the Operands   

The part of the logical expression that can be mapped to a key access must select the same lines as a statement [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) or a corresponding [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) that specifies the corresponding components as keys.

-   In the WHERE condition, the [comparison rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) for incompatible data types apply when comparing incompatible data objects, where it depends on the data types involved which operand is converted to which comparison type.
-   If the additions [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_key.htm) and [WITH KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_free.htm) of the statement READ or [KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_itab_line.htm) in a table expression are used, however, the content of the specified data objects is always converted to the data type of the columns before the comparison.

If this leads to different results, an optimization is not possible. Because of the complexity of the comparison rules, especially for [elementary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_operands.htm), it is not useful to set up a detailed set of rules when the comparison type exactly matches the data type of the left operand. Generally speaking,

-   only fully compatible operands are optimizable,
-   in some cases, elementary operands with different data types can be optimized, if the value ranges or lengths are suitable. For example, a comparison of a column with the type of a floating point number with an operand of type integer or of a column of c with a similar operand, if its length is less than the length of the column.

For this reason, it is advisable to use only pairs of [compatible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompatible_glosry.htm "Glossary Entry") operands in the WHERE condition. This guarantees that the differences in behavior of the WHERE condition and the specified key do not affect the result.

Example

The following example is similar to the example in the section WHERE log\_exp in [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_cond.htm).

-   There, the access is done via the primary table key. No optimization takes place, but there is no warning from the syntax check.
-   Here, the access is done via a secondary table key, resulting in a warning from the syntax check and a possible exception during program execution. Whether the exception is raised depends on the number of lines in the internal table.

DATA text\_short TYPE c LENGTH 2.
DATA text\_long  TYPE c LENGTH 4.
DATA itab LIKE TABLE OF text\_short
          WITH UNIQUE HASHED KEY key COMPONENTS table\_line.
itab = VALUE #( ( 'AA' )
                ( 'BB' )
                ( 'CC' )
                ( 'DD' )
                ( 'EE' )
                ( 'FF' )
                ( 'GG' )
                ( 'HH' )
                ( 'II' )
                ( 'JJ' )
                ( 'KK' )
                ( 'LL' )
                ( 'MM' ) ).
text\_short = 'AA'.
text\_long  = 'AAXX'.
LOOP AT itab INTO text\_short USING KEY key
             WHERE table\_line = text\_long.
ENDLOOP.
cl\_demo\_output=>write( |LOOP: { sy-subrc }| ).
"Statement
READ TABLE itab INTO text\_short WITH TABLE KEY key
                                COMPONENTS table\_line = text\_long.
cl\_demo\_output=>write( |READ: { sy-subrc }| ).
"Expression
TRY.
    text\_short = itab\[ KEY key COMPONENTS table\_line = text\_long \].
  CATCH cx\_sy\_itab\_line\_not\_found.
    ...
ENDTRY.
cl\_demo\_output=>display( |Expression: { text\_short }| ).