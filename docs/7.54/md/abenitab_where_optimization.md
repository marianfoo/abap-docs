---
title: "Optimization of the WHERE Condition"
description: |
  The statements LOOP AT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm), DELETE(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm), and MODIFY(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm) can be spe
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_where_optimization.htm"
abapFile: "abenitab_where_optimization.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "catch", "data", "types", "internal-table", "abenitab", "where", "optimization"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Internal Tables: Performance Notes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_perfo.htm) → 

Optimization of the WHERE Condition

The statements [LOOP AT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm), [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm), and [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm) can be specified together with a WHERE condition that selects specific rows of the internal table. Searches in a [standard table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") using the [primary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") are always linear and cannot be optimized. Searches using a [sorted key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_key_glosry.htm "Glossary Entry") or a [hash key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhash_key_glosry.htm "Glossary Entry"), however, can be optimized in certain circumstances. These keys are used when:

-   editing a [sorted table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_table_glosry.htm "Glossary Entry") using its primary key.

-   editing a [hashed table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhashed_table_glosry.htm "Glossary Entry") using its primary key.

-   editing a table (any type) using a [secondary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") specified by USING KEY.

The optimization takes place because all [relational expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelational_expression_glosry.htm "Glossary Entry") or a group of the relational expressions in the WHERE condition are mapped to a specified key. This specified key performs an appropriate optimized key read (binary search or hash algorithm as in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) or a [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm)), to find one or more rows. The row or rows in question are then checked using those remaining relational expressions from the WHERE condition that were not mapped to the specified key.

Prerequisites for the optimization are, therefore, as follows:

-   The relational expressions of the WHERE condition can be transformed to a specified key.

-   The corresponding key read returns the same results as would the evaluation of this part of the logical expression. This is guaranteed only for compatible data types, since in the case of incompatible data types:

-   the content of the specified data objects is converted to the data type of the columns before the evaluation in the case of key reads.

-   The [comparison rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules.htm) for incompatible data types apply when evaluating a [comparison expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_expression_glosry.htm "Glossary Entry"). Here, all the data types involved play a part in determining which operand is converted into which comparison type.

If there are no relational expressions or too few to meet both of these prerequisites, no optimizations are possible and the behavior is as followed:

-   If the primary table key is used to access a sorted table or a hashed table, all rows of the internal table are checked (as in a standard table).

-   If the table is read using a secondary table key (if specified after USING KEY), a syntax error or warning is produced or an exception raised. Accesses that use a secondary table key must always be optimized.

The following sections describe exactly when an access can be optimized.

-   [Prerequisites for the Optimization of Hash Keys](#abenitab-where-optimization-1--------prerequisites-for-the-optimization-of-sorted-keys---@ITOC@@ABENITAB_WHERE_OPTIMIZATION_2)

-   [Requirements Made on the Operands](#@@ITOC@@ABENITAB_WHERE_OPTIMIZATION_3)

Note

If the rows selected using WHERE are modified or deleted using [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm) or [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm) and not just read using [LOOP AT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm), further update costs are incurred alongside the row search. When deleting rows from standard tables, it should be noted that searches using a secondary key can optimize the selection of rows to delete but do not optimize the update of the primary key also needed to delete the rows (which is usually done in a linear search).

Prerequisites for the Optimization of Hash Keys

In the case of [hash key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhash_key_glosry.htm "Glossary Entry") reads, there must be precisely one relational expression joined using AND for each component of the key. This expression is either

-   a [comparison expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_expression_glosry.htm "Glossary Entry") with the relational operator \= (or EQ), whose operands meet the requirements above or

-   a [predicate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") IS INITIAL without the addition NOT.

These relational expressions construct the part of the logical expression used for the key read. This part cannot contain duplicate key components. The remainder of the logical expression can contain any number of relational expressions joined using AND. Optimization may not be possible, however, if the Boolean operator NOT or an OR join is used. Key components may be used in the relational expressions not used for the key read.

Note

Relational expressions other than comparisons using \= (or EQ) or predicate expressions IS INITIAL are not involved in the key read. This applies particularly to the tabular relational operator [IN range\_tab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_select_option.htm), even if it can be traced back to optimizable comparisons.

Example

In the following example, the first two WHERE conditions can be optimized as key reads with the secondary table key key. This is because:

1.  The optimizable conditions for b, d, and e cover the entire key.
2.  The optimizable conditions b, d, and e cover the entire key and a is a condition on a non-key column that is not involved in the part of the WHERE condition required for the optimization.
3.  The optimizable conditions b, d, and e cover the entire key and the other two conditions on the key columns b and d are not optimizable and are hence not involved in the part of the WHERE condition required for the optimization.

The next six WHERE conditions cannot be optimized and produce syntax errors. This is because:

1.  The key component d is not specified.
2.  A key component is joined using OR instead of AND.
3.  Two non-optimizable relational operators are used.
4.  An operand of type i is used in the comparison b of type c, which does not meet the requirements made on the operands.
5.  The Boolean operator NOT is used in front of a key component.
6.  A further comparison is joined using OR.
7.  A further comparison is negated using NOT.

DATA: BEGIN OF line,
        a TYPE c LENGTH 3,
        b TYPE c LENGTH 3,
        c TYPE c LENGTH 3,
        d TYPE c LENGTH 3,
        e TYPE c LENGTH 3,
        f TYPE c LENGTH 3,
      END OF line.
DATA itab LIKE STANDARD TABLE OF line
               WITH UNIQUE HASHED KEY key COMPONENTS b e d.
DATA b\_tab LIKE RANGE OF line-b.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' AND d = '...' AND e IS INITIAL.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE a = '...' AND b = '...' AND d = '...' AND e IS INITIAL.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE  b = '...' AND d = '...' AND e IS INITIAL AND
            b IN b\_tab AND d <> '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' AND e IS INITIAL.                     "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' OR d = '...' AND e IS INITIAL OR      "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' AND d <> '...' AND e IS NOT INITIAL.  "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = 333 AND d = '...' AND e IS INITIAL.         "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...'  AND NOT d = '...' AND e IS INITIAL.  "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' AND d = '...' AND e IS INITIAL OR     "syntax error
           a = '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
     WHERE b = '...' AND d = '...' AND e IS INITIAL AND    "syntax error
           NOT a = '...'.
ENDLOOP.

Prerequisites for the Optimization of Sorted Keys

In the case of reads using a [sorted key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_key_glosry.htm "Glossary Entry"), the same applies as to a hash key. The only difference is that only an initial section of the key consisting of at least one component needs to be covered rather than the entire key.

The internal table is accessed in partly sequential form. The starting point for the processing of the table is determined by a binary search using the subconditions that cover the table key in full or in part. From the starting point onwards, the table is only processed for as long as these subconditions remain fulfilled.

Example

In the following example, the first five WHERE conditions can be optimized as key reads with the secondary table key key. This is because:

1.  b is an initial part of the key.
2.  b is an initial part of the key and a is an independent condition.
3.  b and e are an initial part of the key.
4.  b, e, and d are an initial part of the key and the order in the WHERE condition is ignored.
5.  b is an initial part of the key and in this case d is an independent condition, even though it is part of the key.

The next five WHERE conditions cannot be optimized and produce syntax errors. This is because:

1.  e is not an initial part of the key.
2.  An inequality comparison does not take place.
3.  A comparison in a ranges table is specified.
4.  The Boolean operator NOT is used.
5.  An additional OR relationship is used.

DATA: BEGIN OF line,
        a TYPE c LENGTH 3,
        b TYPE c LENGTH 3,
        c TYPE c LENGTH 3,
        d TYPE c LENGTH 3,
        e TYPE c LENGTH 3,
        f TYPE c LENGTH 3,
      END OF line.
DATA itab LIKE STANDARD TABLE OF line
               WITH UNIQUE SORTED KEY key COMPONENTS b e d.
DATA b\_tab LIKE RANGE OF line-b.
LOOP AT itab INTO line USING KEY key
             WHERE b = '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE a = '...' AND b IS INITIAL.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b = '...' AND e = '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b = '...' AND d IS INITIAL AND e = '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b = '...' AND d <> '...'.
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE e = '...'.                    "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b <> '...'.                   "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b IN b\_tab.                   "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key
             WHERE b = '...'  AND NOT e = '...'. "syntax error
ENDLOOP.
LOOP AT itab INTO line USING KEY key             "syntax error
             WHERE b = '...'  AND ( d = '...' OR e IS INITIAL ).
ENDLOOP.

Requirements Made on the Operands

The part of the logical expression that can be mapped to a key read must select the same rows as a statement [READ TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) or a corresponding [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm) that specifies the corresponding components as keys.

-   When comparing incompatible data objects, the WHERE condition is subject to the same [comparison rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules.htm) for incompatible data types. Here, the data types involved determine which operand is converted to which comparison type.

-   If the additions [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_key.htm) and [WITH KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_free.htm) of the statement READ or [KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_exp_itab_line.htm) in a table expression are used, however, the content of the specified data objects is always converted to the data type of the columns before the comparison.

If this produces differing results, an optimization is not possible. Due to the complexity of the comparison rules (particularly for [elementary data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands.htm), it is not a good idea to construct a set of rules detailing exactly when the comparison type matches the data type of the left operand. Generally speaking,

-   only fully compatible operands are optimizable,

-   in some cases, elementary operands with different data types can be optimized, if the value ranges or lengths are suitable. For example, a comparison of a column with the type of a floating point number with an operand of type Integer or of a column of c with a similar operand, if its length is less than the length of the column.

For this reason, it is advisable to use only pairs of [compatible](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompatible_glosry.htm "Glossary Entry") operands in the WHERE condition. This guarantees that the differences in behavior of the WHERE condition and the specified key do not influence the result.

Example

The following example is largely similar to the example in the section WHERE log\_exp in [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_cond.htm). In that case, access takes place using the primary key and no optimization. Here, however, access takes place using a secondary table key and a syntax check warning is produced and an exception raised (when the program is executed). The number of rows in the internal table determines whether the exception is raised.

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
  catch CX\_SY\_ITAB\_LINE\_NOT\_FOUND.
    ...
ENDTRY.
cl\_demo\_output=>display( |Expression: { text\_short }| ).