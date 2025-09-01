  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Statement%20Structuring%2C%20ABENTOKENIZATION_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Statement Structuring

The following syntax forms are obsolete. They are forbidden within ABAP Objects and produce syntax check warnings outside of classes:

-   Outside of classes, separators (blanks, commas, colons periods, or the end of a line) after [literals](javascript:call_link\('abenliteral.htm'\)) or [offset/length specifications](javascript:call_link\('abenoffset_length.htm'\)) can be omitted.
-   Outside of classes, the operators for offset and length can be omitted in [offset/length specifications](javascript:call_link\('abenoffset_length.htm'\)). A single plus sign directly after a field name, a plus sign that is followed directly by a parenthetical expression, or an empty parenthetical expression after a plus sign, an offset value, or a field name, are interpreted as non-existent.