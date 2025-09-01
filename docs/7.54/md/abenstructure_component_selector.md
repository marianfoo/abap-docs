---
title: "Structure Component Selector"
description: |
  A component comp of a structured data type or a structure struct is accessed using the name struct-comp In this case, the character - is the structure component selector. A structured data type or a structure struct must be specified as follows on the left of the structure component selector: -   N
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstructure_component_selector.htm"
abapFile: "abenstructure_component_selector.htm"
keywords: ["select", "do", "if", "case", "try", "method", "data", "abenstructure", "component", "selector"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Names for Individual Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_names.htm) → 

Structure Component Selector

A component comp of a structured data type or a structure struct is accessed using the name

struct-comp

In this case, the character \- is the structure component selector. A structured data type or a structure struct must be specified as follows on the left of the structure component selector:

-   Name of a structure or a structured type (which can itself be composite).

-   [Functional method call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with a structured result.

-   Single or chained [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") that returns a structured table row.

The name comp of the component must be on the right of the structure component selector.

Example

Declares a structure struc with the structured data type spfli from ABAP Dictionary and accesses its component carrid.

DATA struc TYPE spfli.
...
... struc-carrid ...