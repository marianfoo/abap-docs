  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarchitecture_guidl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenerror_handling_guidl.htm) → 

Reaction to Error Situations

Background

ABAP provides the following concepts that a program can use to properly react to different error situations:

-   Exceptions

Exceptions are events in the execution of an ABAP program that interrupt the program when it is not possible for the program to continue in a meaningful way. Exceptions are raised either by the ABAP runtime environment or with ABAP statements (RAISE EXCEPTION) in the program. Exception handling enables you to react to these events. An exception that is not handled results in a runtime error; that is, the program terminates and outputs a short dump that describes the exception.

-   Assertions

Assertions formulate conditions in a program that must be met to ensure a proper continuation of the program. An assertion is defined by an ASSERT statement.

-   Messages

Messages are texts that can contain up to four placeholders for value replacements and that can be displayed or otherwise sent using the MESSAGE statement.

These three concepts either involve the handling of the error situations by the program or the user (exceptions or error messages), or result in a controlled program termination (assertions or exit messages).

Rule

Select an appropriate reaction to error situations

Select the appropriate concept of error handling (exception, assertion, or message) for the respective error situation so that the error can either be handled adequately in the further course of the program or is terminated in a controlled manner.

Details

For each error situation, you should decide on one of the three concepts for error handling:

-   [Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_exception_guidl.htm "Guideline") are to be used in all unexpected situations that the user does not have under control. These include, for example, invalid parameter values during the procedure call or unavailable external resources, such as files.

-   [Assertions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassertions_guidl.htm "Guideline") are to be used to detect inconsistent program states that necessitate an immediate program termination.

-   [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessages_guidl.htm "Guideline") are to be used only as dialog messages for error dialogs within the scope of classical dynpro processing (if still available). If you want to implement a program termination in situations where it is not a good idea for the program to continue, use assertions from now on instead of termination or exit messages.

The MESSAGE statement is not only used to display dialog messages in a classic dynpro, but can also be deployed to terminate a program in a controlled manner or raise classic exceptions in the [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_raising.htm) variant if the appropriate message type is selected. This invites you to combine the different concepts, which may lead to problems. This can be traced back to the old programming model that was driven exclusively by classical dynpros, in which an error situation directly required the output of a message to the user.

For contemporary programming that takes the [separation of concerns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenseperation_concerns_guidl.htm "Guideline") (SoC) into account, the question of whether a message is to be sent to the user in the event of an error can usually only be answered in a higher software layer. The layer in which such an error situation occurs must therefore react with an exception initially, which in turn represents a new situation for a higher layer, to which it can react with a dialog message or any other error message.