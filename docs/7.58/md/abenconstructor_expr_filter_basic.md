  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [FILTER, Filter Operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_filter.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FILTER%2C%20Basic%20Form%2C%20ABENCONSTRUCTOR_EXPR_FILTER_BASIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FILTER, Basic Form

Syntax

... FILTER type( itab *\[*EXCEPT*\]* *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkeyname.htm)*\]*
                       WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...

Additions:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... WHERE c1 op v1 *\[*AND c2 op v2 *\[*...*\]**\]*](#!ABAP_ADDITION_2@2@)

Effect

This variant of the filter operator [FILTER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_filter.htm) filters itab using single values. The columns of a table key of itab are compared with single values in the WHERE condition. Those lines of itab are used that meet the WHERE condition or do not meet it when EXCEPT is specified.

Here, the internal table itab must have at least one [sorted key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensorted_key_glosry.htm "Glossary Entry") or one [hash key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhash_key_glosry.htm "Glossary Entry") used for access. This can be

-   either the [primary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") used without specifying USING KEY or by specifying its name primary\_key after USING KEY,
-   or a [secondary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") used by specifying its name after USING KEY.

This variant of the filter operator is not possible for an internal table itab without a sorted key or hash key.

Example

Filtering of the messages of a work area from the database table T100 by language.

DATA messages TYPE SORTED TABLE OF t100 WITH NON-UNIQUE KEY sprsl.
SELECT \*
       FROM t100
       WHERE arbgb = 'SABAPDEMOS'
       ORDER BY msgnr
       INTO TABLE @messages.
cl\_demo\_output=>write( FILTER #( messages WHERE sprsl = 'D' ) ).
cl\_demo\_output=>write( FILTER #( messages WHERE sprsl = 'E' ) ).
cl\_demo\_output=>display( ).

Addition 1   

... USING KEY keyname

Effect

Specifies the table key [keyname](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkeyname.htm) with which the WHERE condition is evaluated. A sorted key or a hash key of the table itab can be specified. If the primary key of itab is not a sorted key or hash key, itab must have a secondary key of this type and it must be specified using USING KEY.

Example

Like the preceding example, but here a secondary table key must be specified explicitly since the internal table messages is a standard table without a primary key.

DATA messages TYPE STANDARD TABLE OF t100
                   WITH NON-UNIQUE SORTED KEY langu COMPONENTS sprsl.
SELECT \*
       FROM t100
       WHERE arbgb = 'SABAPDEMOS'
       ORDER BY msgnr
       INTO TABLE @messages.
cl\_demo\_output=>write( FILTER #( messages USING KEY langu
                                          WHERE sprsl = 'D' ) ).
cl\_demo\_output=>write( FILTER #( messages USING KEY langu
                                          WHERE sprsl = 'E' ) ).
cl\_demo\_output=>display( ).

Addition 2   

... WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]*

Effect

A condition for the table key used in the FILTER expression must be specified after WHERE:

-   In the case of a hash key, exactly one [comparison expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomparison_expression_glosry.htm "Glossary Entry") c op f for each key component. The only [comparison operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomp_operator_glosry.htm "Glossary Entry") allowed for op is [\=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_any_operand.htm).
-   In the case of a sorted key, an initial part of the key must be covered by [comparison expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomparison_expression_glosry.htm "Glossary Entry") c op f. op can be any [binary comparison operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_any_operand.htm).

Multiple comparisons can be combined using [AND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_and.htm) only. There can be no further comparisons apart from those mentioned for key components. In the basic form, key components of the internal table itab must be specified for the left operands c1, c2, ... On the right side, data objects f1, f2, ... must be specified that are compatible with the left side. f1, f2, ... are [general expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

Hints

-   The Boolean operators [NOT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_not.htm), [OR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_or.htm), and [EQUIV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_equiv.htm) cannot be used in the WHERE condition.
-   The [obsolete comparison operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_logexp_op.htm) cannot be used in the WHERE condition.

Executable Example

[Table Filtering, Single Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfilter_value_condition_abexa.htm)