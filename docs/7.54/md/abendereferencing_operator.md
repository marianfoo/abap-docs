---
title: "Dereferencing Operator"
description: |
  The dereferencing operator can be used to access the content of a data object pointed to by a data reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_reference_type.htm): dref-> The dereferencing operator -> can be specified after a data reference variable(https:/
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendereferencing_operator.htm"
abapFile: "abendereferencing_operator.htm"
keywords: ["select", "do", "if", "try", "data", "field-symbol", "abendereferencing", "operator"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Names for Individual Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_names.htm) → 

Dereferencing Operator

The dereferencing operator can be used to access the content of a data object pointed to by a [data reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_reference_type.htm):

dref->\*

The dereferencing operator \->\* can be specified after a [data reference variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") dref.

-   If the static type of the data reference variable is not generic, the expression dref->\* can be specified at any operand position.

-   For data reference variables with the generic static type data, only the statement [ASSIGN dref ->\* TO <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm) can be used to assign the data object (to which the data reference points) to a field symbol.

If the data reference variable contains the [null reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_reference_glosry.htm "Glossary Entry"), the non-handleable exception DATREF\_NOT\_ASSIGNEDis raised when the dereferencing operator is used. Dereferencing in the statement ASSIGN is an exception to this.

Note

The dereferencing operator uses the [object component selector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_component_selector.htm).

Example

Uses the dereferencing operator in a general operand position and in the statement ASSIGN. Only in ASSIGN can dref be initial without a non-handleable exception being raised.

DATA(dref) = NEW i( 111 ).
cl\_demo\_output=>write( |dref->\* { dref->\* }| ).
CLEAR dref.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
cl\_demo\_output=>write( |sy-subrc { sy-subrc }| ).
cl\_demo\_output=>display( ).