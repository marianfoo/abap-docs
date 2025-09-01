# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Internal Tables / Expressions and Functions for Internal Tables / FILTER - Filter Operator

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenconstructor_expression_filter.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_filter.htm)
- [abenconstructor_expr_filter_basic.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_filter_basic.htm)
- [abenconstructor_expr_filter_table.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_filter_table.htm)
- [abentable_filtering_abexas.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_filtering_abexas.htm)
- [abenfilter_value_condition_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfilter_value_condition_abexa.htm)
- [abenfilter_table_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfilter_table_abexa.htm)
- [abenfilter_table_condition_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfilter_table_condition_abexa.htm)

**Bundle Contains**: 7 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.493Z

---

### abenconstructor_expression_filter.htm

> **📖 Official SAP Documentation**: [abenconstructor_expression_filter.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_filter.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) → 

FILTER - Filter Operator

Syntax Forms

[Basic Form](javascript:call_link\('abenconstructor_expr_filter_basic.htm'\))
1\. ... FILTER type( itab *\[*EXCEPT*\]* *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]*
                        WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...
[Filter table](javascript:call_link\('abenconstructor_expr_filter_table.htm'\))
2\. ... FILTER type( itab *\[*EXCEPT*\]* IN ftab *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]*
                        WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...

Addition:

[... EXCEPT](#!ABAP_ONE_ADD@1@)

Effect

A [constructor expression](javascript:call_link\('abenconstructor_expressions.htm'\)) with the component operator FILTER creates a result of a table type specified using type. ‎The rows are taken from an existing internal table itab in accordance with the condition after WHERE, converted to the row type of type, and inserted into the target table in accordance with the rules of [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) ... [INTO TABLE](javascript:call_link\('abapinsert_itab_position.htm'\)).

-   In the [basic form](javascript:call_link\('abenconstructor_expr_filter_basic.htm'\)) the condition is created with single values.

-   When using a [filter table](javascript:call_link\('abenconstructor_expr_filter_table.htm'\)), the condition is created with values from the filter table ftab.

The following can be specified for type:

-   A non-generic [table type](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry").

-   The # character as a symbol for the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry"). If the data type required in an operand position is not unique and not known completely, the type of itab is used if known.

itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The row type of itab must be convertible to the row type of the target type type. USING KEY can (or must) be used to specify a table key for evaluating itab or ftab (depending on the variant).

Notes

-   Table filtering can also be performed using a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") or a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") with an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") for [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry") with [FOR](javascript:call_link\('abenfor_itab.htm'\)). The operator FILTER provides a shortened format for this special case and is more efficient to execute.

-   A table filter constructs the result row by row. If the result contains almost all rows in the source table, this method can be slower than copying the source table and deleting the surplus rows from the target table.
    

Addition

... EXCEPT

Effect

If EXCEPT is not specified, those rows from itab are used that meet the WHERE condition. If EXCEPT is specified, those rows from itab are used that do not meet the WHERE condition.

Note

The addition EXCEPT is not the same as a negation of the WHERE condition, particularly in the variant with a [filter table](javascript:call_link\('abenconstructor_expr_filter_table.htm'\)).

Example

Using the addition EXCEPT in the [basic form](javascript:call_link\('abenconstructor_expr_filter_basic.htm'\)) of the FILTER operator.

DATA messages TYPE SORTED TABLE OF t100 WITH NON-UNIQUE KEY sprsl.
SELECT \*
       FROM t100
       WHERE arbgb = 'SABAPDEMOS'
       ORDER BY msgnr
       INTO TABLE @messages.
cl\_demo\_output=>display(
  FILTER #( messages EXCEPT WHERE sprsl = 'D' ) ).

Continue
[FILTER - Basic Form](javascript:call_link\('abenconstructor_expr_filter_basic.htm'\))
[FILTER - Filter Table](javascript:call_link\('abenconstructor_expr_filter_table.htm'\))
[Examples of Table Filtering](javascript:call_link\('abentable_filtering_abexas.htm'\))



**📖 Source**: [abenconstructor_expression_filter.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_filter.htm)

### abenconstructor_expr_filter_basic.htm

> **📖 Official SAP Documentation**: [abenconstructor_expr_filter_basic.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_filter_basic.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FILTER - Filter Operator](javascript:call_link\('abenconstructor_expression_filter.htm'\)) → 

FILTER - Basic Form

Syntax

... FILTER type( itab *\[*EXCEPT*\]* *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]*
                       WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...

Extras:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... WHERE c1 op v1 *\[*AND c2 op v2 *\[*...*\]**\]*](#!ABAP_ADDITION_2@2@)

Effect

This variant of the filter operator [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)) filters itab using single values. The columns of a table key of itab are compared with single values in the WHERE condition. Those rows of itab are used that meet the WHERE condition or do not meet it when EXCEPT is specified.

Here, the internal table itab must have at least one [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or one [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") used for access. This can be

-   either the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") used without specifying USING KEY or by specifying its name primary\_key after USING KEY,

-   or a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") used by specifying its name after USING KEY.

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

Table key [keyname](javascript:call_link\('abenkeyname.htm'\)) specified with which the WHERE condition is evaluated. A sorted key or a hash key of the table itab can be specified. If the primary key of itab is not a sorted key or hash key, itab must have a secondary key of this type and it must be specified using USING KEY.

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

-   In the case of a hash key, precisely one [comparison expression](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry") c op f for each key component. The only [relational operator](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") allowed for op is [\=](javascript:call_link\('abenlogexp_any_operand.htm'\)).

-   In the case of a sorted key, an initial part of the key must be covered by [comparison expressions](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry") c op f. op can be any [binary relational operator](javascript:call_link\('abenlogexp_any_operand.htm'\)).

Multiple comparisons can be joined using [AND](javascript:call_link\('abenlogexp_and.htm'\)) only. There can be no further comparisons alongside those mentioned for key components. In the basic form, key components of the internal table itab must be specified for the left operands c1, c2, ... On the right side, data objects f1, f2, ... must be specified that are compatible with the left side. f1, f2, ... are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

Notes

-   The Boolean operators [NOT](javascript:call_link\('abenlogexp_not.htm'\)), [OR](javascript:call_link\('abenlogexp_or.htm'\)), and [EQUIV](javascript:call_link\('abenlogexp_equiv.htm'\)) cannot be used in the WHERE condition.

-   The [obsolete relational operators](javascript:call_link\('abenobsolete_logexp_op.htm'\)) cannot be used in the WHERE condition.

Executable Example

[Table Filtering, Single Values](javascript:call_link\('abenfilter_value_condition_abexa.htm'\))



**📖 Source**: [abenconstructor_expr_filter_basic.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_filter_basic.htm)

### abenconstructor_expr_filter_table.htm

> **📖 Official SAP Documentation**: [abenconstructor_expr_filter_table.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_filter_table.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FILTER - Filter Operator](javascript:call_link\('abenconstructor_expression_filter.htm'\)) → 

FILTER - Filter Table

Syntax

... FILTER type( itab *{**\[*EXCEPT*\]* IN ftab *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]**}*
                    *|* *{**\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]* *\[*EXCEPT*\]* IN ftab*}*
                       WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]* ) ...

Extras:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... WHERE c1 op v1 *\[*AND c2 op v2 *\[*...*\]**\]*](#!ABAP_ADDITION_2@2@)

Effect

This variant of the filter operator [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)) filters itab using values from an internal table ftab. In the WHERE condition, the columns of itab are compared with the values of the columns of the table key of the rows of the filter table ftab. Those rows in itab are used for which at least one row in ftab meets the WHERE condition or for which there is no row in ftab when EXCEPT is specified. ftab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

Depending on its position, USING KEY can be used to specify either a key of the table ftab or the table itab, which is then used to access the table. If USING KEY is not used, the filter table ftab must have a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") as the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"), which is then used to access the filter table.

Note

The row types of itab and ftab do not need to be identical.

Example

Filtering three rows of the internal table carriers. The filter table has a sorted primary key. This is used implicitly and the addition USING KEY does not have to be specified.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(carriers).
DATA filter TYPE SORTED TABLE OF scarr-carrid
                 WITH UNIQUE KEY table\_line.
filter = VALUE #( ( 'AA ' ) ( 'LH ' ) ( 'UA ' ) ).
cl\_demo\_output=>display( FILTER #(
  carriers IN filter WHERE carrid = table\_line ) ).

Addition 1

... USING KEY keyname

Effect

Table key [keyname](javascript:call_link\('abenkeyname.htm'\)) specified with which the WHERE condition is evaluated. A sorted key or a hash key of the filter table (after ftab) or of the source table (after itab) can be specified. This can be the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") or a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") that is specified using primary\_key or the corresponding name.

-   When USING KEY is specified for the filter table ftab, it must have a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry"). There are no requirements on the table keys of itab. The specified key is used to access the filter table.

-   When USING KEY is specified for the source table itab, it must have a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry"). There are no requirements on the table keys of ftab. The specified key is used to access the source table.

-   If USING KEY is not specified for ftab or itab, the filter table ftab must be a sorted table or a hash table and the primary table key is used implicitly when accessing the filter table. There are no requirements on the table keys of itab.
    

Note

Which tables a key is specified for depends on the optimization it is intended to bring about.

Example

Like the preceding example, but here the addition USING KEY must be used for one of the tables, since the internal table filter is a standard table without a primary key.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(carriers).
DATA filter TYPE STANDARD TABLE OF scarr-carrid
                 WITH EMPTY KEY
                 WITH UNIQUE SORTED KEY line COMPONENTS table\_line.
filter = VALUE #( ( 'AA ' ) ( 'LH ' ) ( 'UA ' ) ).
cl\_demo\_output=>display( FILTER #(
  carriers IN filter USING KEY line
           WHERE carrid = table\_line ) ).

Example

Like the preceding example, but here the addition USING KEY is used for the other table.

DATA carriers TYPE SORTED TABLE OF scarr
              WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE carriers.
DATA filter TYPE STANDARD TABLE OF scarr-carrid
                 WITH EMPTY KEY.
filter = VALUE #( ( 'AA ' ) ( 'LH ' ) ( 'UA ' ) ).
cl\_demo\_output=>display( FILTER #(
  carriers USING KEY primary\_key IN filter
           WHERE carrid = table\_line ) ).

Addition 2

... WHERE c1 op f1 *\[*AND c2 op f2 *\[*...*\]**\]*

Effect

A condition for the table key used in the FILTER expression must be specified after WHERE:

-   In the case of a hash key, precisely one [comparison expression](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry") c op f for each key component. The only [relational operator](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") allowed for op is [\=](javascript:call_link\('abenlogexp_any_operand.htm'\)).

-   In the case of a sorted key, an initial part of the key must be covered by [comparison expressions](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry") c op f. op can be any [binary relational operator](javascript:call_link\('abenlogexp_any_operand.htm'\)).

Multiple comparisons can be joined using [AND](javascript:call_link\('abenlogexp_and.htm'\)) only. There can be no further comparisons alongside those mentioned for key components. In the variant with the filter table, key components of the filter table ftab must be specified for the right operands f1, f2, and so on. On the left side, components of the internal table itab must be specified that are compatible with the right side.

Notes

-   The Boolean operators [NOT](javascript:call_link\('abenlogexp_not.htm'\)), [OR](javascript:call_link\('abenlogexp_or.htm'\)), and [EQUIV](javascript:call_link\('abenlogexp_equiv.htm'\)) cannot be used in the WHERE condition.

-   The [obsolete relational operators](javascript:call_link\('abenobsolete_logexp_op.htm'\)) cannot be used in the WHERE condition.

Executable Examples

-   [Table Filtering, Filter Table](javascript:call_link\('abenfilter_table_abexa.htm'\))

-   [Table Filtering, Filterings with Filter Table](javascript:call_link\('abenfilter_table_condition_abexa.htm'\))



**📖 Source**: [abenconstructor_expr_filter_table.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_filter_table.htm)

### abentable_filtering_abexas.htm

> **📖 Official SAP Documentation**: [abentable_filtering_abexas.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_filtering_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FILTER - Filter Operator](javascript:call_link\('abenconstructor_expression_filter.htm'\)) → 

Examples of Table Filtering

Continue
![Example](exa.gif "Example") [Table Filtering, Single Values](javascript:call_link\('abenfilter_value_condition_abexa.htm'\))
![Example](exa.gif "Example") [Table Filtering, Filter Table](javascript:call_link\('abenfilter_table_abexa.htm'\))
![Example](exa.gif "Example") [Table Filtering, Filter Table.](javascript:call_link\('abenfilter_table_condition_abexa.htm'\))



**📖 Source**: [abentable_filtering_abexas.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_filtering_abexas.htm)

### abenfilter_value_condition_abexa.htm

> **📖 Official SAP Documentation**: [abenfilter_value_condition_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfilter_value_condition_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FILTER - Filter Operator](javascript:call_link\('abenconstructor_expression_filter.htm'\)) →  [Examples of Table Filtering](javascript:call_link\('abentable_filtering_abexas.htm'\)) → 

Table Filtering, Single Values

This example demonstrates [table filtering](javascript:call_link\('abenconstructor_expression_filter.htm'\)) using single values.

Source Code

REPORT demo\_filter\_value\_condition.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE spfli-carrid VALUE 'LH'.
    cl\_demo\_input=>add\_field( CHANGING field = carrid ).
    DATA cityfrom TYPE spfli-cityfrom VALUE 'Frankfurt'.
    cl\_demo\_input=>request( CHANGING field = cityfrom ).
    DATA spfli\_tab TYPE STANDARD TABLE OF spfli
                   WITH EMPTY KEY
                   WITH NON-UNIQUE SORTED KEY carr\_city
                        COMPONENTS carrid cityfrom.
    SELECT \*
           FROM spfli
           INTO TABLE @spfli\_tab.
    DATA(extract) =
      FILTER #( spfli\_tab USING KEY carr\_city
                  WHERE carrid   = CONV #( to\_upper( carrid ) ) AND
                        cityfrom = CONV #( to\_upper( cityfrom ) ) ).
    cl\_demo\_output=>display( extract ).
    DATA(rest) =
      FILTER #( spfli\_tab EXCEPT USING KEY carr\_city
                  WHERE carrid   = CONV #( to\_upper( carrid ) ) AND
                        cityfrom = CONV #( to\_upper( cityfrom ) ) ).
    ASSERT lines( extract ) + lines( rest ) = lines( spfli\_tab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Those rows are filtered from an internal table spfli\_tab filled with flight data that have a specific value in the columns carrid and cityfrom and the result is assigned to an internal table extract. A suitable secondary key carr\_city is defined for the internal table here.

A further internal table, rest, is given the same table filtering, but the addition EXCEPT is specified. The assertion ASSERT demonstrates that rest contains all rows from spfli\_tab that are not in extract.



**📖 Source**: [abenfilter_value_condition_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfilter_value_condition_abexa.htm)

### abenfilter_table_abexa.htm

> **📖 Official SAP Documentation**: [abenfilter_table_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfilter_table_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FILTER - Filter Operator](javascript:call_link\('abenconstructor_expression_filter.htm'\)) →  [Examples of Table Filtering](javascript:call_link\('abentable_filtering_abexas.htm'\)) → 

Table Filtering, Filter Table

This example demonstrates [table filtering](javascript:call_link\('abenconstructor_expression_filter.htm'\)) using a filter table.

Source Code

REPORT demo\_filter\_table.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA:
      cityfrom TYPE spfli-cityfrom VALUE 'Frankfurt',
      cityto   TYPE spfli-cityto   VALUE 'New York'.
    CLASS-METHODS:
      main,
      init.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    init( ).
    TYPES: BEGIN OF filter,
             cityfrom TYPE spfli-cityfrom,
             cityto   TYPE spfli-cityto,
           END OF filter,
           filter\_tab TYPE HASHED TABLE OF filter
                 WITH UNIQUE KEY cityfrom cityto.
    DATA(filter\_tab) = VALUE filter\_tab(
        ( cityfrom = cityfrom cityto = cityto )
        ( cityfrom = cityto   cityto = cityfrom ) ).
    SELECT carrid, connid, cityfrom, cityto
          FROM spfli
          ORDER BY carrid, connid, cityfrom, cityto
          INTO TABLE @DATA(spfli\_tab).
    cl\_demo\_output=>display(
      FILTER #( spfli\_tab IN filter\_tab
                  WHERE cityfrom = cityfrom  AND cityto = cityto ) ).  ENDMETHOD.
  METHOD init.
    cl\_demo\_input=>add\_field( CHANGING field = cityfrom ).
    cl\_demo\_input=>request(   CHANGING field = cityto ).
    cityfrom = to\_upper( cityfrom ).
    cityto = to\_upper( cityto ).
    IF cityfrom = cityto.
      LEAVE PROGRAM.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Those rows are filtered out of an internal table spfli\_tab filled with flight data that have specific values in the columns cityfrom and cityto. The filter is applied using a filter table of the type filter\_tab constructed using VALUE filled with input values. The result is all outbound and return flights for the cities in question.



**📖 Source**: [abenfilter_table_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfilter_table_abexa.htm)

### abenfilter_table_condition_abexa.htm

> **📖 Official SAP Documentation**: [abenfilter_table_condition_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfilter_table_condition_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FILTER - Filter Operator](javascript:call_link\('abenconstructor_expression_filter.htm'\)) →  [Examples of Table Filtering](javascript:call_link\('abentable_filtering_abexas.htm'\)) → 

Table Filtering, Filter Table.

This example demonstrates various types of [table filtering](javascript:call_link\('abenconstructor_expression_filter.htm'\)) using a filter table.

Source Code

REPORT demo\_filter\_table\_condition.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA:
      itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line,
      ftab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>new(
      )->next\_section( 'itab'
      )->write( itab
      )->next\_section( 'ftab'
      )->write( ftab
      )->next\_section(
        'FILTER #( itab IN ftab WHERE table\_line = table\_line )'
      )->write(
         FILTER #( itab IN ftab WHERE table\_line = table\_line )
      )->next\_section(
        'FILTER #( itab EXCEPT IN ftab WHERE table\_line = table\_line )'
      )->write(
         FILTER #( itab EXCEPT IN ftab WHERE table\_line = table\_line )
      )->next\_section(
        'FILTER #( itab IN ftab WHERE table\_line > table\_line )'
      )->write(
         FILTER #( itab IN ftab WHERE table\_line > table\_line )
      )->next\_section(
        'FILTER #( itab IN ftab WHERE table\_line <> table\_line )'
      )->write(
         FILTER #( itab IN ftab WHERE table\_line <> table\_line )
      )->next\_section(
        'FILTER #( itab IN ftab WHERE table\_line <= table\_line )'
      )->write(
         FILTER #( itab IN ftab WHERE table\_line <= table\_line )
    )->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    DATA(rnd1) = cl\_abap\_random\_int=>create(
     seed = CONV i( sy-uzeit ) min = 1 max = 7 ).
    DATA(rnd2) = cl\_abap\_random\_int=>create(
     seed = CONV i( sy-uzeit ) min = 3 max = 10 ).
    itab = VALUE #( for j = 1 until j > 5 ( rnd1->get\_next( ) ) ).
    ftab = VALUE #( for j = 1 until j > 5 ( rnd2->get\_next( ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A table itab contains five random numbers between 1 and 7, a table ftab contains five random numbers between 3 and 10. Various types of table filter for itab are performed using the table ftab as a filter table:

-   The first filtering creates a table of all rows from itab for which there is at least one row with the same value in ftab.

-   The second filtering creates a table of all rows from itab for which there is no row with the same value in ftab.

-   The third filtering creates a table of all rows from itab for which there is at least one row with a lesser value in ftab.

-   The fourth filtering creates a table of all rows from itab for which there is at least one row with a non-equal value in ftab.

-   The fifth filtering creates a table of all rows from itab for which there is at least one row with a greater or lesser value in ftab.

When merged, the results from the first and second filtering are all rows from itab. The first filtering creates the union and the second filtering the difference of the two tables itab and ftab.

The fourth filtering does not produce the same result as the second filtering. The fifth filtering does not produce the rows from itab that remain after the third filtering.



**📖 Source**: [abenfilter_table_condition_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfilter_table_condition_abexa.htm)

### abentable_filtering_abexas.htm

> **📖 Official SAP Documentation**: [abentable_filtering_abexas.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_filtering_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abentable_filtering_abexas.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_filtering_abexas.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FILTER - Filter Operator](javascript:call_link\('abenconstructor_expression_filter.htm'\)) → 

Examples of Table Filtering

Continue
![Example](exa.gif "Example") [Table Filtering, Single Values](javascript:call_link\('abenfilter_value_condition_abexa.htm'\))
![Example](exa.gif "Example") [Table Filtering, Filter Table](javascript:call_link\('abenfilter_table_abexa.htm'\))
![Example](exa.gif "Example") [Table Filtering, Filter Table.](javascript:call_link\('abenfilter_table_condition_abexa.htm'\))
