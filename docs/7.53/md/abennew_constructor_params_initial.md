---
title: "NEW - Initial Value for All Types"
description: |
  Syntax ... NEW dtypeclass#( ) ... Effect If no parameters are specified, -   an anonymous data object retains its type-specific initial value, -   no values are passed to the instance constructor of an object. This is possible for every non-generic data type dtype. The instance constructor of
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_initial.htm"
abapFile: "abennew_constructor_params_initial.htm"
keywords: ["do", "if", "try", "class", "data", "types", "internal-table", "abennew", "constructor", "params", "initial"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [NEW - Instance Operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm) → 

NEW - Initial Value for All Types

Syntax

... NEW dtype*|*class*|*#( ) ...

Effect

If no parameters are specified,

-   an anonymous data object retains its type-specific initial value,

-   no values are passed to the instance constructor of an object.

This is possible for every non-generic data type dtype. The instance constructor of a class class can either have only optional input parameters or no input parameters at all. The # symbol can stand for appropriate types.

Note

If dtype or # stand for an [enumerated type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), its initial value is generated according to its [base type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbase_type_glosry.htm "Glossary Entry").

Example

After the following program section is executed, dref points to an empty internal table with the row type T100. Both constructor expressions have the same function.

TYPES t\_itab TYPE TABLE OF t100 WITH EMPTY KEY.
DATA dref TYPE REF TO t\_itab.
dref = NEW #( ).
dref = NEW t\_itab( ).