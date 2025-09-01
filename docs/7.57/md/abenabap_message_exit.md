  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - Conversion Routines, ABENABAP_MESSAGE_EXIT, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Messages - Conversion Routines

[Conversion routines](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") distinguish between the function modules ...\_INPUT and ...OUTPUT:

-   In an ...\_INPUT function module, all messages apart from those of type E, A, or S raise an uncatchable exception. Messages of types E, A, and S behave as specified in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)).
-   In an ...\_OUTPUT function module, all messages apart from those of type A raise an uncatchable exception. Messages of type A behave as specified in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)).