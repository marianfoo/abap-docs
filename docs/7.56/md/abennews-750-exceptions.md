  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.50](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-750.htm) → 

Exception Classes in Release 7.50

[1\. New System Interface for Messages](#!ABAP_MODIFICATION_1@1@)
[2\. MESSAGE Addition for RAISE EXCEPTION and THROW](#!ABAP_MODIFICATION_2@2@)

Modification 1   

New System Interface for Messages

The new system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_dyn_msg.htm) adds predefined attributes for the message type and the placeholders of the message to the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_message.htm). IF\_T100\_DYN\_MSG makes it possible to [associate](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_exceptions.htm) any message with exception classes.

Modification 2   

MESSAGE Addition for RAISE EXCEPTION and THROW

The new addition [MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm) and of the addition [THROW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expressions.htm) associates any [message](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_glosry.htm "Glossary Entry") with an exception object. The exception class in question must include the new system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_dyn_msg.htm). It is also possible to use the addition with exception classes that include only the system interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_message.htm), but with restrictions.