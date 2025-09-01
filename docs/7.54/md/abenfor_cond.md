  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_expr_func.htm) →  [FOR - Table Iterations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_itab.htm) → 

FOR - cond

Syntax

... *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkeyname.htm)*\]*
    *\[*FROM idx1*\]* *\[*TO idx2*\]*
    *\[*WHERE ( [log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) )*|*(cond\_syntax)*\]* ...

Effect

As with [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_cond.htm), the following is possible for each expression [FOR ... IN itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_in_itab.htm) and [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_groups_of.htm) of a constructor expression:

-   USING KEY can be used to specify the table key with which table loop is evaluated.

-   FROM and TO can be used as upper and lower limits to restrict the rows in the table index used.

-   WHERE can be used to specify static or dynamic conditions for column content.

The syntax and semantics are exactly the same as in [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_cond.htm), apart from the fact that a statically specified logical expression log\_exp in the WHERE condition must always be placed in parentheses.

In the expression [FOR ... IN GROUP group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_in_group.htm), only static WHERE conditions can be specified for cond.

Notes

-   The local auxiliary variables of the expression visible in this position can be used for idx1, idx2, and in the logical expression of the WHERE condition.

-   The [pseudo component](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line can be used in the logical expression of the WHERE condition.

Example

The example shows how the same result can be achieved with a WHERE condition in an iteration expression and the filter operator [FILTER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_filter.htm). The shorter filter expression is usually more suitable in this case.

DATA messages TYPE SORTED TABLE OF t100 WITH NON-UNIQUE KEY sprsl msgnr.
SELECT \*
       FROM t100
       WHERE arbgb = 'SABAPDEMOS'
       INTO TABLE @messages.
DATA value\_tab LIKE messages.
value\_tab = VALUE #( FOR wa IN messages WHERE ( sprsl = 'E' ) ( wa ) ).
ASSERT value\_tab = FILTER #( messages WHERE sprsl = 'E' ).