  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Behavior of Messages](javascript:call_link\('abenabap_messages_types.htm'\)) → 

Messages in conversion routines

In [conversion routines](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry"), the function modules ...\_INPUT and ...OUTPUT need to be distinguished:

-   In an ...\_INPUT function module, all messages apart from those of type "E", "A" or "S" lead to an untreatable exception. Messages of types "E", "A" and "S" behave in the same way as in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)).

-   In an ...\_OUTPUT function module, all messages apart from those of type "A" lead to an untreatable exception. Messages of type "A" behave in the same way as in [dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)).