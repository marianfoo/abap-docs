  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [dynpro - Obsolete ABAP Statements](javascript:call_link\('abenabap_dynpro_obsolet.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20SCREEN%2C%20Short%20Form%2C%20ABENMODIFY_SCREEN_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY SCREEN, Short Form

Obsolete Syntax

MODIFY SCREEN.

Effect

This is a short form of the statement

[MODIFY SCREEN FROM screen.](javascript:call_link\('abapmodify_screen.htm'\))

The short form uses a structure with the name screen implicitly instead of an explicitly declared work area wa. This is either the obsolete built-in structure [screen](javascript:call_link\('abenscreen_structure_obsolete.htm'\)) or a structure declared in the current context called screen, which must have the data type SCREEN.

Hint

The [long form](javascript:call_link\('abapmodify_screen.htm'\)) with an explicitly declared work area should be used instead of the short form.