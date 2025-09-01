  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

Messages - Conversion Routines

[Conversion routines](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") distinguish between the function modules ...\_INPUT and ...OUTPUT:

-   In an ...\_INPUT function module, all messages apart from those of type E, A, or S raise an uncatchable exception. Messages of types E, A, and S behave as specified in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)).
-   In an ...\_OUTPUT function module, all messages apart from those of type A raise an uncatchable exception. Messages of type A behave as specified in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)).