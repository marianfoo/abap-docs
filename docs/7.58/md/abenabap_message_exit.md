  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Conversion%20Exits%2C%20ABENABAP_MESSAGE_EXIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Conversion Exits

[conversion exit](javascript:call_link\('abenconversion_exit_glosry.htm'\) "Glossary Entry") are implemented in [conversion routines](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") (function modules) ...\_INPUT and ...OUTPUT:

-   In an ...\_INPUT function module, all messages apart from those of type E, A, or S raise an uncatchable exception. Messages of types E, A, and S behave as specified in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)).
-   In an ...\_OUTPUT function module, all messages apart from those of type A raise an uncatchable exception. Messages of type A behave as specified in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)).