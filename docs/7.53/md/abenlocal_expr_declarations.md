---
title: "Local Declarations in Expressions"
description: |
  In most constructor expressions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm 'Glossary Entry'), variables and field symbols can be used as local helper fields. They are defined using the language element LET in a -   LET expression let_exp(htt
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocal_expr_declarations.htm"
abapFile: "abenlocal_expr_declarations.htm"
keywords: ["do", "try", "class", "internal-table", "field-symbol", "abenlocal", "expr", "declarations"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) → 

Local Declarations in Expressions

In most [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), variables and field symbols can be used as local helper fields. They are defined using the language element LET in a

-   [LET expression let\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplet.htm)

LET expressions can be used in the following constructor expressions:

-   [NEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm)

-   [Single values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_single.htm)

-   [Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_struct.htm)

-   [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_itab.htm)

-   [Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_class.htm)

-   [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm)

-   [Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_struc.htm)

-   [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_itab.htm)

-   [CONV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm)

-   [CAST](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_cast.htm)

-   [EXACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_exact.htm)

-   [REDUCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_reduce.htm)

-   [COND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_cond.htm)

-   [SWITCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_switch.htm)

LET expressions are also possible in all iteration expressions with [FOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor.htm).

Continue
[let\_exp - LET ... IN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplet.htm)