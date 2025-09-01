---
title: "FOR, cond"
description: |
  Syntax ... USING KEY keyname(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkeyname.htm) FROM idx1 TO idx2 WHERE ( log_exp(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) )(cond_syntax) ... Effect As with LOOP AT it
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_cond.htm"
abapFile: "abenfor_cond.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "data", "internal-table", "abenfor", "cond"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_itab.htm) → 

FOR, cond

Syntax

... *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkeyname.htm)*\]*
    *\[*FROM idx1*\]* *\[*TO idx2*\]*
    *\[*WHERE ( [log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) )*|*(cond\_syntax)*\]* ...

Effect

As with [LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm), the following is possible for each expression [FOR ... IN itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_in_itab.htm) and [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_groups_of.htm) of a constructor expression:

-   USING KEY can be used to specify the table key with which the table is evaluated.
-   FROM and TO can be used as upper and lower limits to restrict the lines in the table index used.
-   WHERE can be used to specify static or dynamic conditions for column content.

The syntax and semantics are exactly the same as in [LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm), apart from the fact that a statically specified logical expression log\_exp in the WHERE condition must always be placed in parentheses.

In the expression [FOR ... IN GROUP group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_in_group.htm), only static WHERE conditions can be specified for cond.

Hints

-   The local auxiliary variables of the expression visible in this position can be used for idx1, idx2, and in the logical expression of the WHERE condition.
-   The [pseudo component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line can be used in the logical expression of the WHERE condition.

Example

The example shows how the same result can be achieved with a WHERE condition in an iteration expression and the filter operator [FILTER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_filter.htm). The shorter filter expression is usually more suitable in this case.

DATA messages TYPE SORTED TABLE OF t100 WITH NON-UNIQUE KEY sprsl msgnr.
SELECT \*
       FROM t100
       WHERE arbgb = 'SABAPDEMOS'
       INTO TABLE @messages.
DATA value\_tab LIKE messages.
value\_tab = VALUE #( FOR wa IN messages WHERE ( sprsl = 'E' ) ( wa ) ).
ASSERT value\_tab = FILTER #( messages WHERE sprsl = 'E' ).