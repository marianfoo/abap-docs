  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) → 

Inline Declarations

An inline declaration is performed using a [declaration operator](javascript:call_link\('abendeclaration_operator_glosry.htm'\) "Glossary Entry") in a [declaration expression](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry") in a [declaration position](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry"). The result of the declaration is used in the current operand position, is visible statically as of the current position and is valid in the current context.

-   [Inline Declaration of Variables](javascript:call_link\('abendata_inline.htm'\))
-   [Inline Declaration of Field Symbols](javascript:call_link\('abenfield-symbol_inline.htm'\))

Hints

Inline declarations are intended to make programs leaner and more readable. The following rules must also be observed:

-   The rule that [no global variables and field symbols](javascript:call_link\('abendeclaration_variables_guidl.htm'\) "Guideline") should be declared means that inline declarations should only be made in processing blocks that support [local data](javascript:call_link\('abenlocal_data_glosry.htm'\) "Glossary Entry").
-   Inline declarations are an exception to the rule that [local declarations](javascript:call_link\('abenlocal_declar_guidl.htm'\) "Guideline") should only be made at the start of a procedure. For this reason, they should only be used in manageable procedures to improve their readability.

Programming Guideline

[Only use inline declarations locally](javascript:call_link\('abendeclaration_inline_guidl.htm'\) "Guideline")

Continue
[DATA, Inline Declaration](javascript:call_link\('abendata_inline.htm'\))
[FIELD-SYMBOL, Inline Declaration](javascript:call_link\('abenfield-symbol_inline.htm'\))