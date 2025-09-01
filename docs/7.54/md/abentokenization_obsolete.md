  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) → 

Obsolete Statement Structuring

The following syntax forms are obsolete. They are forbidden within ABAP Objects, and outside of classes they cause the syntax check to issue warnings:

-   Outside of classes, separators (blank characters, commas, colons periods, or the end of a line) after [literals](javascript:call_link\('abenliteral.htm'\)) or [offset/length specifications](javascript:call_link\('abenoffset_length.htm'\)) can be omitted.

-   Outside of classes, the operators for offset and length can be omitted in [offset/length specifications](javascript:call_link\('abenoffset_length.htm'\)). A single plus sign directly after a field name, a plus sign that directly follows a parenthetical expression, or an empty parenthetical expression after a plus sign, an offset value, or a field name, are interpreted as not existing.