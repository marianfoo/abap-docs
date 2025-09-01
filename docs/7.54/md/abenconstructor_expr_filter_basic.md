  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_expr_func.htm) →  [FILTER - Filter Operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_filter.htm) → 

FILTER - Basic Form

Syntax

... FILTER type( itab *\[*EXCEPT*\]* *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm)*\]*
                       WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...

Extras:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... WHERE c1 op v1 *\[*AND c2 op v2 *\[*...*\]**\]*](#!ABAP_ADDITION_2@2@)

Effect

This variant of the filter operator [FILTER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_filter.htm) filters itab using single values. The columns of a table key of itab are compared with single values in the WHERE condition. Those rows of itab are used that meet the WHERE condition or do not meet it when EXCEPT is specified.

Here, the internal table itab must have at least one [sorted key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_key_glosry.htm "Glossary Entry") or one [hash key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhash_key_glosry.htm "Glossary Entry") used for access. This can be

-   either the [primary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") used without specifying USING KEY or by specifying its name primary\_key after USING KEY,

-   or a [secondary table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") used by specifying its name after USING KEY.

This variant of the filter operator is not possible for an internal table itab without a sorted key or hash key.

Example

Filters the messages of a work area from the database table T100 by language.

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

Table key [keyname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm) specified with which the WHERE condition is evaluated. A sorted key or a hash key of the table itab can be specified. If the primary key of itab is not a sorted key or hash key, itab must have a secondary key of this type and it must be specified using USING KEY.

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

-   In the case of a hash key, precisely one [comparison expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_expression_glosry.htm "Glossary Entry") c op f for each key component. The only [relational operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelational_operator_glosry.htm "Glossary Entry") allowed for op is [\=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_any_operand.htm).

-   In the case of a sorted key, an initial part of the key must be covered by [comparison expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_expression_glosry.htm "Glossary Entry") c op f. op can be any [binary relational operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_any_operand.htm).

Multiple comparisons can be joined using [AND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_and.htm) only. There can be no further comparisons alongside those mentioned for key components. In the basic form, key components of the internal table itab must be specified for the left operands c1, c2, ... On the right side, data objects f1, f2, ... must be specified that are compatible with the left side. f1, f2, ... are [general expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

Notes

-   The Boolean operators [NOT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_not.htm), [OR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_or.htm), and [EQUIV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_equiv.htm) cannot be used in the WHERE condition.

-   The [obsolete relational operators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_logexp_op.htm) cannot be used in the WHERE condition.

Executable Example

[Table Filtering, Single Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfilter_value_condition_abexa.htm)