  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassignment_access_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Trailing Blanks in Character Literals, ABENTRAILING_BLANKS_LITERALS_GUIDL, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Trailing Blanks in Character Literals

Background   

Trailing blanks in text field literals use memory, but are [generally](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_trail_blanks.htm) ignored in operand positions, like all data objects of the type c. In text string literals they are always relevant, as is the case for all data objects of type string.

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

The following example demonstrates that the supposedly empty literal '' actually represents a blank that is not cut off after SEPARATED BY. The result is AB AP.

DATA text TYPE string.
CONCATENATE 'AB' 'AP' INTO text SEPARATED BY ''.

Good Example

Depending on whether the blank is needed as a separator, either ' ' or \`\` must be specified after SEPARATED BY to express this clearly.