  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in conversion routines

In [conversion routines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_routine_glosry.htm "Glossary Entry"), the function modules ...\_INPUT and ...OUTPUT need to be distinguished:

-   In an ...\_INPUT function module, all messages apart from those of type "E", "A" or "S" lead to an untreatable exception. Messages of types "E", "A" and "S" behave in the same way as in [dialog processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm).

-   In an ...\_OUTPUT function module, all messages apart from those of type "A" lead to an untreatable exception. Messages of type "A" behave in the same way as in [dialog processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_dialog.htm).