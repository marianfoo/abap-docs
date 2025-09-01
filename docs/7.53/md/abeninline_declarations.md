---
title: "Inline Declarations"
description: |
  An inline declaration is performed using a declaration operator(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_operator_glosry.htm 'Glossary Entry') in a declaration expression(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_expression_glosr
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninline_declarations.htm"
abapFile: "abeninline_declarations.htm"
keywords: ["do", "try", "data", "field-symbol", "abeninline", "declarations"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) → 

Inline Declarations

An inline declaration is performed using a [declaration operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") in a [declaration expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_expression_glosry.htm "Glossary Entry") and is made in a [declaration position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_position_glosry.htm "Glossary Entry"). The result of the declaration is used in the current operand position, is visible statically from the current position, and is valid in the current context.

-   [Inline Declaration of Variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm)

-   [Inline Declaration of Field Symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield-symbol_inline.htm)

Notes

Inline declarations are intended to make programs leaner and easier to understand. The following rules must also be observed:

-   The rule that dictates [no global variables and field symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_variables_guidl.htm "Guideline") means that inline declarations should only be used in processing blocks that support [local data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocal_data_glosry.htm "Glossary Entry").

-   Inline declarations are an exception to the rule that [local declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocal_declar_guidl.htm "Guideline") should only be made at the start of a procedure. For this reason, they should only be used in easily manageable procedures, to make them easier to understand.

Programming Guideline

[Only use inline declarations locally](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_inline_guidl.htm "Guideline")

Continue
[DATA - Inline Declaration](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm)
[FIELD-SYMBOL - Inline Declaration](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield-symbol_inline.htm)