---
title: "CORRESPONDING - Duplicates"
description: |
  Syntax ... DISCARDING DUPLICATES ... Effect Addition for handling duplicate rows in the component operator CORRESPONDING(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expr_corresponding.htm). The addition DISCARDING DUPLICATES can be specified: -   After a tabular para
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_constr_dupl.htm"
abapFile: "abencorresponding_constr_dupl.htm"
keywords: ["insert", "do", "if", "try", "data", "internal-table", "abencorresponding", "constr", "dupl"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding.htm) →  [CORRESPONDING - Component Operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expr_corresponding.htm) → 

CORRESPONDING - Duplicates

Syntax

... DISCARDING DUPLICATES ...

Effect

Addition for handling duplicate rows in the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expr_corresponding.htm). The addition DISCARDING DUPLICATES can be specified:

-   After a tabular parameter itab in the [basic form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_constr_arg_type.htm).

-   After [mapping relationships](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_constr_mapping.htm) t1 = s1, t2 = s2, ... for tabular components.

The addition DISCARDING DUPLICATES prevents an exception when duplicate entries occur with respect to a unique [primary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") or secondary table key in assignments to a target table. In the basic form, this also applies to the rows in an internal table specified after [BASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_constr_arg_type.htm).

By default, the addition DISCARDING DUPLICATES acts on the source table that it is specified after. That is, either to itab of the basic form or tos1, s2, ... of mapping relationships. If DISCARDING DUPLICATES is specified with the addition DEEPafter itab in its basic form, it is also applied to the statements of nested internal tables.

The addition DISCARDING DUPLICATES dictates that, when rows of a source table are inserted sequentially into a target table, the rows that are already in the target table with the same unique primary or secondary table key are ignored in the source table and do not raise an exception.

If the addition DISCARDING DUPLICATES is specified for an operand for which a unique table key is not known statically, the syntax check produces a warning.

Example

Uses DISCARDING DUPLICATES in the [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_duplicates_abexa.htm).

... CORRESPONDING itab2( itab1 DISCARDING DUPLICATES
                         MAPPING y1 = x1
                                 y2 = x2 DISCARDING DUPLICATES ) ...

Executable Example

[Handling Duplicates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_duplicates_abexa.htm)