---
title: "Inline Declarations"
description: |
  An inline declaration is performed using a declaration operator(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_operator_glosry.htm 'Glossary Entry') in a declaration expression(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_expres
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declarations.htm"
abapFile: "abeninline_declarations.htm"
keywords: ["do", "if", "try", "data", "field-symbol", "abeninline", "declarations"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Inline%20Declarations%2C%20ABENINLINE_DECLARATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Inline Declarations

An inline declaration is performed using a [declaration operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") in a [declaration expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_expression_glosry.htm "Glossary Entry") in a [declaration position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_position_glosry.htm "Glossary Entry"). The result of the declaration is used in the current operand position, is visible statically as of the current position and is valid in the current context.

-   [DATA, Inline Declaration for Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm)
-   [FINAL, Inline Declaration for Immutable Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm)
-   [FIELD-SYMBOL, Inline Declaration for Field Symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield-symbol_inline.htm)

Hint

Inline declarations are intended to make programs leaner and more readable. The following rules must also be observed:

-   The rule that [no global variables and field symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_variables_guidl.htm "Guideline") should be declared means that inline declarations should only be made in processing blocks that support [local data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_data_glosry.htm "Glossary Entry").
-   Inline declarations are an exception to the rule that [local declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_declar_guidl.htm "Guideline") should only be made at the start of a procedure. For this reason, they should only be used in manageable procedures to improve their readability.

Programming Guideline

[Only use inline declarations locally](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_inline_guidl.htm "Guideline")

Continue
[DATA, Inline Declaration for Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm)
[FINAL, Inline Declaration for Immutable Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm)
[FIELD-SYMBOL, Inline Declaration for Field Symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield-symbol_inline.htm)