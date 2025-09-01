  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) → 

Inline Declarations

An inline declaration is performed using a [declaration operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") in a [declaration expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_expression_glosry.htm "Glossary Entry") in a [declaration position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_position_glosry.htm "Glossary Entry"). The result of the declaration is used in the current operand position, is visible statically as of the current position and is valid in the current context.

-   [Inline Declaration of Variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm)

-   [Inline Declaration of Field Symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield-symbol_inline.htm)

Hints

Inline declarations are intended to make programs leaner and more readable. The following rules must also be observed:

-   The rule that dictates that [no global variables and field symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_variables_guidl.htm "Guideline") should be declared means that inline declarations should only be made in processing blocks that support [local data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocal_data_glosry.htm "Glossary Entry").

-   Inline declarations are an exception to the rule that [local declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocal_declar_guidl.htm "Guideline") should only be made at the start of a procedure. For this reason, they should only be used in manageable procedures to improve their readability.

Programming Guideline

[Only use inline declarations locally](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_inline_guidl.htm "Guideline")

Continue
[DATA, Inline Declaration](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm)
[FIELD-SYMBOL, Inline Declaration](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield-symbol_inline.htm)