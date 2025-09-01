  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm) → 

Messages - Conversion Routines

[Conversion routines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_routine_glosry.htm "Glossary Entry") distinguish between the function modules ...\_INPUT and ...OUTPUT:

-   In an ...\_INPUT function module, all messages apart from those of type E, A, or S raise an uncatchable exception. Messages of types E, A, and S behave as specified in [dialog processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_dialog.htm).
-   In an ...\_OUTPUT function module, all messages apart from those of type A raise an uncatchable exception. Messages of type A behave as specified in [dialog processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_dialog.htm).