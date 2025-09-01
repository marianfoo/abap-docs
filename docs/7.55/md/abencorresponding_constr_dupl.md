---
title: "CORRESPONDING, duplicates"
description: |
  Syntax ... DISCARDING DUPLICATES ... Effect Addition for handling duplicate lines in the component operator CORRESPONDING(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm). The addition DISCARDING DUPLICATES can be specified: -   After a tabular par
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_dupl.htm"
abapFile: "abencorresponding_constr_dupl.htm"
keywords: ["insert", "do", "if", "try", "data", "internal-table", "abencorresponding", "constr", "dupl"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding.htm) →  [CORRESPONDING, Component Operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm) → 

CORRESPONDING, duplicates

Syntax

... DISCARDING DUPLICATES ...

Effect

Addition for handling duplicate lines in the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm). The addition DISCARDING DUPLICATES can be specified:

-   After a tabular parameter itab in the [basic form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_arg_type.htm).

-   After [mapping relationships](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_mapping.htm) t1 = s1, t2 = s2, ... for tabular components.

The addition DISCARDING DUPLICATES prevents an exception when duplicate entries occur with respect to a unique [primary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") or secondary table key in assignments to a target table. In the basic form, this also applies to the lines that exist in an internal table specified after [BASE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_arg_type.htm).

By default, the addition DISCARDING DUPLICATES affects the source table, which it is specified behind. That is, either to itab of the basic form or tos1, s2, ... of mapping relationships. If DISCARDING DUPLICATES is specified with the addition DEEP after itab in the basic form, it also affects to the statements of nested internal tables.

The addition DISCARDING DUPLICATES causes that, when lines of a source table are inserted sequentially into a target table, the lines that are already in the target table with the same unique primary or secondary table key are ignored in the source table and do not raise an exception.

If the addition DISCARDING DUPLICATES is specified for an operand for which a unique table key is not known statically, the syntax check produces a warning.

Example

Use of DISCARDING DUPLICATES in the [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_duplicates_abexa.htm).

... CORRESPONDING itab2( itab1 DISCARDING DUPLICATES
                         MAPPING y1 = x1
                                 y2 = x2 DISCARDING DUPLICATES ) ...

Executable Example

[Handling Duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_duplicates_abexa.htm)