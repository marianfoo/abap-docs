  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_exceptions.htm) →  [Exceptions Before Class-Based Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexceptions_pre_610.htm) →  [Non-Class-Based Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexceptions_non_class.htm) → 

MESSAGE, RAISING

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage_shortref.htm)

Syntax

MESSAGE *{* [msg](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage_msg.htm) *|* [text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage_text.htm) *}* [*\[*DISPLAY LIKE dtype*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage.htm) [*\[*WITH dobj1... dobj4*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage.htm)
        RAISING exception.

Effect

The statement [MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage.htm) with the addition RAISING raises a non-class-based exception exception and only sends a message if the exception is not handled. The semantics of [msg](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage_msg.htm), [text](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage_text.htm), and [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage.htm) is the same as in the statement MESSAGE without the addition RAISING.

This addition only makes sense during the processing of methods and function modules in which the non-class-based exception exception is defined. Furthermore, it cannot be used in the same [processing block](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocessing_block_glosry.htm "Glossary Entry") as the statement RAISE EXCEPTION or the addition [THROW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expressions.htm) to raise class-based exceptions.

-   If the MESSAGE statement is executed with the addition RAISING during processing of a method or a function module whose caller assigns a return value to the [exception](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexceptions_non_class.htm) exception using the addition EXCEPTIONS of the statement CALL, the statement has the same effect as the statement [RAISE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception.htm).

-   If no return code is assigned to the exception exception, the addition RAISING is ignored, and the message is sent using the statement [MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage.htm) and [processed](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_messages_types.htm) according to its [message type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_type_glosry.htm "Glossary Entry").

The system fields of the statement MESSAGE are filled in both cases and are available in the calling program after an exception raised using MESSAGE ...RAISING is handled. This applies in particular if a function module was called using Remote Function Call ([RFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenremote_function_call_glosry.htm "Glossary Entry")).

Hints

-   The statement MESSAGE ... RAISING is to be seen primarily as a statement for raising exceptions and not for sending messages. Such an exception should always be handled like an exception raised using RAISE, since the behavior of the message depends strongly on the context and cannot usually be predicted when the function module is created.

-   Using MESSAGE ... RAISING in cases in which non class-based exceptions must still be used is preferable to using the RAISE statement, because it offers the option of providing additional text information with an exception.

-   A return code can be assigned to messages that are sent in function modules without the addition RAISING by using the predefined exception [error\_message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_parameter.htm).

-   Messages that are sent as messages when a function module is called and that are not caught despite the addition RAISING are affected like messages with [error\_message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_parameter.htm).

-   If a [procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry") is exited by raising an exception, the content of the formal parameter for which the [pass by value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is defined is not assigned to the respective actual parameters.

Example

When the message is called for the first time, an [information message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninformation_message_glosry.htm "Glossary Entry") is sent. The second time, an exception is raised instead, which is handled by sy-subrc.

     CLASS c1 DEFINITION.
       PUBLIC SECTION.
         CLASS-METHODS m1 EXCEPTIONS exc1.
     ENDCLASS.
     CLASS c1 IMPLEMENTATION.
       METHOD m1.
         MESSAGE 'Message in a Method' TYPE 'I' RAISING exc1.
       ENDMETHOD.
     ENDCLASS.
     ...
       c1=>m1( ).
       c1=>m1( EXCEPTIONS exc1 = 4 ).
     IF sy-subrc = 4.
       ...
     ENDIF.