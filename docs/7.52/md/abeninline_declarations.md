  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) → 

Inline Declarations

An inline declaration is performed using a [declaration operator](javascript:call_link\('abendeclaration_operator_glosry.htm'\) "Glossary Entry") in a [declaration expression](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry") and is made in a [declaration position](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry"). The result of the declaration is used in the current operand position, is visible statically from the current position, and is valid in the current context.

-   [Inline Declaration of Variables](javascript:call_link\('abendata_inline.htm'\))

-   [Inline Declaration of Field Symbols](javascript:call_link\('abenfield-symbol_inline.htm'\))

Notes

Inline declarations are intended to make programs leaner and easier to understand. The following rules must also be observed:

-   The rule that dictates [no global variables and field symbols](javascript:call_link\('abendeclaration_variables_guidl.htm'\) "Guideline") means that inline declarations should only be used in processing blocks that support [local data](javascript:call_link\('abenlocal_data_glosry.htm'\) "Glossary Entry").

-   Inline declarations are an exception to the rule that [local declarations](javascript:call_link\('abenlocal_declar_guidl.htm'\) "Guideline") should only be made at the start of a procedure. For this reason, they should only be used in easily manageable procedures, to make them easier to understand.

Programming Guideline

[Only use inline declarations locally](javascript:call_link\('abendeclaration_inline_guidl.htm'\) "Guideline")

Continue
[DATA - Inline Declaration](javascript:call_link\('abendata_inline.htm'\))
[FIELD-SYMBOL - Inline Declaration](javascript:call_link\('abenfield-symbol_inline.htm'\))