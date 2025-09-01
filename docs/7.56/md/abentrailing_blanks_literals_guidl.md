  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_gdl.htm'\)) →  [Assignments, Calculations, and Other Types of Data Access](javascript:call_link\('abenassignment_access_gdl.htm'\)) → 

Trailing Blanks in Character Literals

Background

Trailing blanks in text field literals use memory, but are [generally](javascript:call_link\('abenstring_processing_trail_blanks.htm'\)) ignored in operand positions, like all data objects of the type c. In text string literals they are always relevant, as is the case for all data objects of type string.

Rule

Do not use trailing blanks in text field literals

They should also not be specified in literals in any operand positions where trailing blanks are not relevant.

Details

This rule is designed mainly to make programs more readable. It makes no sense to specify literal characters in places where they are ignored, and raises expectations in users of the program that cannot be met. In particular, this also applies to the text field literal ' '.

Conversely, specifying the supposedly empty text field literal '' in places where trailing blanks are respected may be a trap.

Bad Example

The following simple example demonstrates the full scope of the rule. Any readers with little experience in ABAP would expect the result of the assignment to be a string with length six. In actual fact, the result contains only the three relevant places.

DATA text TYPE string.
text = '123   '.

Good Example

Whether the example needs to be improved depends on whether the trailing blanks are required. If the blanks are needed, use a string literal:

text = \`123   \`.

If they are not needed, leave them out:

text = '123'.

Bad Example

The following example demonstrates that the supposedly empty literal '' actually represents a blank that is not cut off after SEPARATED BY. The result is "AB AP".

DATA text TYPE string.
CONCATENATE 'AB' 'AP' INTO text SEPARATED BY ''.

Good Example

Depending on whether the blank is needed as a separator, either ' ' or \`\` must be specified after SEPARATED BY to express this clearly.