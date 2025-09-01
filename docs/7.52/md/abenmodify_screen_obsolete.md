  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpro_obsolet.htm'\)) → 

MODIFY SCREEN - Short Form

Obsolete Syntax

MODIFY SCREEN.

Effect

This is a short form of the statement

[MODIFY SCREEN FROM screen.](javascript:call_link\('abapmodify_screen.htm'\))

The short form uses a structure with the name screen implicitly instead of an explicitly declared work area wa. This is either the obsolete predefined structure [screen](javascript:call_link\('abenscreen_structure_obsolete.htm'\)) or a structure declared in the current context called screen, which must have the data type SCREEN.

Note

Use the [long form](javascript:call_link\('abapmodify_screen.htm'\)) with an explicitly declared work area instead of the short form.