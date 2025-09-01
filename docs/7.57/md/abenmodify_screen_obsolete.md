  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_obsolet.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MODIFY SCREEN, Short Form, ABENMODIFY_SCREEN_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

MODIFY SCREEN, Short Form

Obsolete Syntax

MODIFY SCREEN.

Effect

This is a short form of the statement

[MODIFY SCREEN FROM screen.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_screen.htm)

The short form uses a structure with the name screen implicitly instead of an explicitly declared work area wa. This is either the obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_structure_obsolete.htm) or a structure declared in the current context called screen, which must have the data type SCREEN.

Hint

The [long form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_screen.htm) with an explicitly declared work area should be used instead of the short form.