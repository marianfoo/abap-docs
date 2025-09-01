# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Architecture / Error Handling

Included pages: 10


### abenerror_handling_gdl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarchitecture_gdl.htm) → 

Error Handling

Error situations are always a possibility when a program is being executed. These can be caused by:

-   internal errors produced by faulty implementations or incorrect use of services
-   external errors produced by incorrect user input or unexpected resource bottlenecks

ABAP offers various method for responding to error situations like these.

-   [Reaction to Error Situations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreaction_error_guidl.htm "Guideline")
-   [Classic and Class-Based Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_exception_guidl.htm "Guideline")
-   [Exception Categories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_category_guidl.htm "Guideline")
-   [Exception Texts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts_guidl.htm "Guideline")
-   [Using Exception Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_exception_class_guidl.htm "Guideline")
-   [Handling and Propagating Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhandl_prop_except_guidl.htm "Guideline")
-   [Cleanups After Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencleanup_guidl.htm "Guideline")
-   [Assertions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassertions_guidl.htm "Guideline")
-   [Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessages_guidl.htm "Guideline")

Continue
[Reaction to Error Situations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreaction_error_guidl.htm)
[Classic and Class-Based Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_exception_guidl.htm)
[Exception Categories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_category_guidl.htm)
[Exception Texts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts_guidl.htm)
[Using Exception Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_exception_class_guidl.htm)
[Handling and Propagating Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhandl_prop_except_guidl.htm)
[Cleanups After Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencleanup_guidl.htm)
[Assertions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassertions_guidl.htm)
[Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessages_guidl.htm)


### abenreaction_error_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenerror_handling_gdl.htm) → 

Reaction to Error Situations

Background

ABAP provides the following concepts that a program can use to properly react to different error situations:

-   Exceptions
    
    Exceptions are events in the execution of an ABAP program that interrupt the program when it is not possible for the program to continue in a meaningful way. Exceptions are raised either by the ABAP runtime framework or with ABAP statements (RAISE EXCEPTION) in the program. Exception handling enables a response to be made to these events. An exception that is not handled results in a runtime error; that is, the program terminates and displays a short dump that describes the exception.
    
-   Assertions
    
    Assertions formulate conditions in a program that must be met to ensure a proper continuation of the program. An assertion is defined by the statement ASSERT.
    
-   Messages
    
    Messages are texts that can contain up to four placeholders for value replacements and that can be sent using the statement MESSAGE.
    
-   Program Terminations
    
    The language elements [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_shortdump.htm) and [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) make it possible to resolve runtime errors linked with an exception object. The attributes of the exception object can be listed in the short dump of the runtime error.
    

These four concepts either involve the handling of the error situations by the program or the user (exceptions or error messages) or produce a controlled program termination (assertions, RAISE SHORTDUMP, THROW SHORTDUMP, and exit messages).

Rule

Select an appropriate reaction to error situations

Select the appropriate concept of error handling (exception, assertion, message, or program termination) for the respective error situation so that the error can either be handled adequately in the further course of the program or is terminated in a controlled manner.

Details

For each error situation, you should decide on one of the three concepts for error handling:

-   [Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_exception_guidl.htm "Guideline") are to be used in all unexpected situations that the user does not have under control. These include, for example, invalid parameter values during the procedure call or unavailable external resources, such as files.
-   [Assertions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassertions_guidl.htm "Guideline") are to be used to detect inconsistent program states that necessitate an immediate program termination.
-   [Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessages_guidl.htm "Guideline") are to be used only as dialog messages for error dialogs within the scope of classic dynpro processing (if still available). If you want to implement a program termination in situations where it is not a good idea for the program to continue, use assertions from now on instead of termination or exit messages.
-   Targeted program terminations should only be used as a last resource when a program cannot otherwise execute correctly. They can be raised by failed assertions RAISE SHORTDUMP, THROW SHORTDUMP, or exit messages. Exit messages, if used, offer the fewest options for passing error information to the short dump. Assertions make it possible to write log entries and can be controlled from outside the program. RAISE SHORTDUMP and THROW SHORTDUMP pass exception objects and their attributes, which is of particular use for analyzing previous exceptions.

The statement MESSAGE is not only used to send dialog messages in a classic dynpro, but can also be deployed to terminate a program in a controlled manner or raise classic exceptions in the [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_raising.htm) variant if the appropriate message type is selected. This invites you to combine the different concepts, which may lead to problems. This can be traced back to the old programming model that was driven exclusively by classic dynpros, in which an error situation directly required the output of a message to the user.

For contemporary programming that takes the [separation of concerns](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenseperation_concerns_guidl.htm "Guideline") (SoC) into account, the question of whether a message is to be sent to the user in the event of an error can usually only be answered in a higher software layer. The layer in which such an error situation occurs must therefore react with an exception initially, which in turn represents a new situation for a higher layer, to which it can react with a dialog message or any other error message.


### abenclass_exception_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenerror_handling_gdl.htm) → 

Classic and Class-Based Exceptions

Background

For reasons of downward compatibility, there are two options for defining standalone catchable exceptions in ABAP:

-   Classic Exceptions
    
    These exceptions can only be declared in the interfaces of methods or function modules using EXCEPTIONS and can be raised within such a procedure using the statements [RAISE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_raising.htm). The procedure caller can use the addition EXCEPTIONS of the statements [meth( ... )](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_static_short.htm) or [CALL FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function.htm) to assign return codes for the system field sy-subrc to the exceptions the caller wants to handle and evaluate them after the call.
    
-   Class-Based Exceptions
    
    These exceptions are defined by exception classes, from which an exception object can be created when an exception is raised (if a handler uses the addition INTO in CATCH). A class-based exception can either cancel the current context or allow for a resume. Exceptions are raised using the statement RAISE EXCEPTION and handled using CATCH in a TRY control structure. Class-based exceptions can be raised in any procedures and can be further propagated by any procedures.
    

The coexistence of the two exception concepts is regulated as follows:

-   Classic and class-based exceptions cannot be declared together in the interface of a procedure. Within a processing block, either only classic or only class-based exceptions can be raised.
-   For reasons of interoperability, within a processing block class-based exceptions can be handled and evaluate the return codes of function modules and methods using classic exceptions.

Rule

Using Class-Based Exceptions

Only raise class-based exceptions in new procedures if it is possible to dispense with classic exceptions from the technical point of view.

Details

Self-defined classic exceptions are little more than return codes. If a classic exception is raised in a procedure using the statement RAISE, the sy-subrc system field is set according to the raised exception after the return to the calling program. The calling program itself must always check, by querying sy-subrc, whether an exception was raised and react to it if required, for example, by appropriate handling or explicit forwarding to its own calling program (by raising a separate equivalent exception). This does not improve the clarity of the program.

The raising of class-based exceptions, however, results in a change of the program flow. They can either be handled directly or propagated upwards along the call hierarchy. In this way, not every procedure ([method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) has to consider every possible exception situation itself. This supports the [separation of concerns](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenseperation_concerns_guidl.htm "Guideline") within an application. Because the exception can be represented by an object of an exception class, this exception object can gather additional information about the exception situation and transport it to the handler. In contrast to classic exceptions, this can also include specific [exception texts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts_guidl.htm "Guideline").

By default, raising an exception stops the entire current context even if the exception is handled. However, there may be situations (mass data processing, for instance) in which a single error does not justify canceling an entire service. For these cases, class-based exceptions can be raised and propagated as resumable exceptions (RESUMABLE). A handler can decide whether a service is canceled completely or is resumed using the statement RESUME, for example after a corresponding log entry has been written.

Class-based exceptions completely replace the classic exceptions for new code (of course, there are exceptions to this rule) and add resumability. Although classic exceptions on the raiser side are completely obsolete from a technical point of view, the following must be considered for older code: Even if the raiser side is under control, it is not simply a case of switching older procedures over to class-based exceptions, because then all usage occurrences would have to be modified.

When existing procedures that use classic exceptions are called, they must continue to be handled in the new code. In this case, we recommend mapping the classic exceptions to equivalent class-based exceptions by using RAISE EXCEPTION. In this way, class-based error handling is provided that is uniform to the outside. The exception situation can then be forwarded to higher call layers without each layer having to react to this situation explicitly.

Exception

Since class-based exceptions are currently not supported in remote-enabled function modules (RFM), classic exceptions still need to be implemented and handled for remote function calls (RFCs).

Bad Example

The following source code shows the declaration and the raising of a classic exception in a method as well as their handling by evaluating sy-subrc after a call of the method. This procedure infringes the above rule. .

CLASS application DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something
    EXCEPTIONS application\_error.
ENDCLASS.

CLASS application IMPLEMENTATION.
  METHOD do\_something.
    ...
    RAISE application\_error.
    ...
  ENDMETHOD.
ENDCLASS.

...

... oref TYPE REF TO application.
...
oref->do\_something(
  EXCEPTIONS application\_error = 4 ).
IF sy-subrc <> 0.
  ...
ENDIF.

Good Example

The following source code shows the definition of an exception class, its declaration, and the raising in a method as well as its handling using CATCH after the call of the method in a TRY block.

CLASS cx\_application\_error DEFINITION
  INHERITING FROM cx\_static\_check.
ENDCLASS.

CLASS application DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something
      RAISING cx\_application\_error.
ENDCLASS.

CLASS application IMPLEMENTATION.
  METHOD do\_something.
    ...
    RAISE EXCEPTION TYPE cx\_application\_error.
    ...
  ENDMETHOD.
ENDCLASS.

...

... oref TYPE REF TO application.
...
TRY.
    oref->do\_something( ).
    CATCH cx\_application\_error.
      ...
ENDTRY.

This simple example is perhaps not the most obvious demonstration of the great advantage of class-based exceptions over classic exceptions. However, the advantage is clearly seen in nested procedure calls and the handling of exceptions that were raised in more distant call levels.


### abenexception_category_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenerror_handling_gdl.htm) → 

Exception Categories

Background

Each class-based exception belongs to one of three different exception categories, each of which define whether the exceptions need to be declared in procedure interfaces. The assignment of an exception to an exception class is realized (technically) using inheritance. All exception classes are subclasses of the following abstract global classes, which themselves inherit from CX\_ROOT:

-   CX\_STATIC\_CHECK
    
    Exceptions of this category must be declared explicitly in the interface of a procedure, if they are to be propagated from this interface. The syntax check makes a static check to determine whether all exceptions raised in the procedure with RAISE EXCEPTION or declared in the interfaces of called procedures are either handled with CATCH or explicitly declared in the interface.
    
-   CX\_DYNAMIC\_CHECK
    
    Exceptions of this category must also be declared explicitly in the interface of a procedure to enable them to be propagated. This is not subject to a static syntax check, however, and is checked dynamically at runtime instead.
    
-   CX\_NO\_CHECK
    
    Exceptions of this category do not have to be declared explicitly in the interface of the procedure, since the class CX\_NO\_CHECK and its subclasses are always declared implicitly. Both to support the category change of an existing exception and to document the possible occurrence of exceptions of this category, exceptions of category CX\_NO\_CHECK may also be declared explicitly in procedure interfaces.
    

Rule

Use a suitable exception category

When creating and raising class-based exceptions, always use an exception category suitable for the current error situation:

-   CX\_STATIC\_CHECK for the static protection of the exception handler
-   CX\_DYNAMIC\_CHECK for error situations that can be prevented by preconditions
-   CX\_NO\_CHECK for situations that cannot be handled immediately

Details

The exception categories are designed for the following error situations:

-   As a rule, exceptions that are raised in a procedure should be handled there or declared in the interface for the procedure to declare to the caller which exceptions are to be expected. A syntax check to verify this is run on exceptions from the CX\_STATIC\_CHECK category. This category is therefore always warranted if a procedure ([method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) is to be forced to handle an exception or to at least forward it explicitly. However, if an exception can be prevented by prior checks, exceptions of the CX\_DYNAMIC\_CHECK category are preferable.
-   If the program logic can eliminate potential error situations, the corresponding exceptions do not have to be handled or declared in the interface. This is the case if prior to a division, for example, there is an explicit precondition for the denominator not to equal zero. In this case, exceptions from the CX\_DYNAMIC\_CHECK category can and should be used. These exceptions only need to be handled and declared if their occurrence cannot be otherwise prevented. In well modeled applications, exceptions are generally prevented by incorporating appropriate conditions in program code and CX\_DYNAMIC\_CHECK category should then be the most frequently used exception category.
-   For exception situations that can occur at any time and that cannot be handled directly, the CX\_NO\_CHECK category can be used. Otherwise, all exceptions that can be raised due to resource bottlenecks would have to be caught or declared. These exceptions would then have to be specified in practically every interface, which would result in more complex programs lacking in clarity.

Note

The resumability of a class-based exception is not an attribute of the exception class; it is defined instead by the RESUMABLE addition of the RAISE EXCEPTION statement when the exception is raised. This attribute can be lost for exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK during propagation, if the exceptions are not also declared there using RESUMABLE. CX\_NO\_CHECK always preserves its resumability implicitly.


### abenexception_texts_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenerror_handling_gdl.htm) → 

Exception Texts

Background

Each global exception class has a predefined [exception text](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts.htm) that has the same name as the exception class. This text can be edited and further exception texts can be defined. The exception texts of an exception class can be created either by referencing [messages in the table T100](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts_t100.htm) or by referencing [texts in Online Text Repository (OTR)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts_internal.htm).

For each exception text, Class Builder creates a static constant in the exception class with the same name as the exception text. When the exception is raised, this can be passed to the parameter TEXTID of the instance constructor to determine the exception text. If the parameter is not passed, the predefined exception text with the same name as the exception class is used.

From a technical perspective, the parameter TEXTID of the instance constructor can also be used to pass messages or texts from OTR as exception texts.

Rule

Using Messages as Exception Texts

Messages should be used as exception texts for exception classes in applications. OTR texts should be restricted to system classes. Only the associated texts can be used when an exception is raised.

Details

The following guideline describes how to choose the text category:

-   [Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts_t100.htm) should be used as exception texts in all exception classes in application programming.
-   [OTR texts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts_internal.htm) should only be used in system classes, namely exception classes for system exceptions. OTR offers various benefits when compared with messages, such as no restriction to 73 characters and unlimited placeholders, but lacks full tool support. More specifically, [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry") do not support OTR texts.

From a technical perspective, it is possible to pass a data object to the input parameter TEXTID of the instance constructor when an exception is raised. This data object specifies either a message or an OTR text, depending on the text category. This approach is, however, absolutely not advisable. If the parameter TEXTID is used, an exception can only be raised with the texts specific to it. Only the associated constants of the exception class can be passed to the input parameter TEXTID of the instance constructor.

Hints

-   In cases where a class-based exception is used to wrap a [classic exception](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_exception_guidl.htm "Guideline") and [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_raising.htm) is used to associate this classic exception with a message text (or after a message is caught using [error\_message](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_parameter.htm)), the class-based exception can use the same message text regardless of whether the program in question is a system program or application program. The system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_dyn_msg.htm) and the addition [MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm) and of the addition [THROW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) in a [conditional exception](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expressions.htm) are used for these cases.
-   Classic exceptions are not associated with exception texts. If classic exceptions are required for reasons of downward compatibility, the statement [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_raising.htm) gives the option of emulating exception texts here. Using MESSAGE ...RAISING in cases in which non-class-based exceptions must still be used is preferable to using the statement RAISE, because it offers the option of providing additional text information with an exception.

Bad Example

The following source code passes a [UUID](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuuid_glosry.htm "Glossary Entry") for an OTR text to the input parameter TEXTID of the instance constructor when an exception is raised. According to the rule above, however, only exception texts from the exception class can be passed, with each exception class containing the corresponding constants.

...
DATA otr\_id TYPE sotr\_conc.
otr\_id = '9753EBD0102AD0418D902B8D972083C4'.
RAISE EXCEPTION TYPE cx\_system\_exception
   EXPORTING
      textid = otr\_id.
...

Good Example

The following source code passes the constant for the associated OTR text to the input parameter TEXTID of the instance constructor when an exception is raised, as specified by the rule above.

...
RAISE EXCEPTION TYPE cx\_system\_exception
   EXPORTING
      textid = cx\_system\_exception=>cx\_system\_exception.
...


### abenuse_exception_class_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenerror_handling_gdl.htm) → 

Using Exception Classes

Background

The concept of freely definable exception classes involves being able to create an exception class that adequately describes the exception situation in question. The description consists both of the name of the exception class, the associated exception texts, and their documentation. You can divide an exception class into multiple subexceptions by creating multiple exception texts. Subclasses of exception classes can be used to make the information even more specific.

Rule

Only use suitable exception classes

When describing an error situation, only use exception classes with the correct category and name, the appropriate attributes and texts, and which contain the correct documentation. Do not reuse inappropriate exception classes.

Details

Reusing existing exception classes with the wrong content removes all benefits of freely definable exception classes. The new exception object cannot describe the exception situation adequately. It also makes it very difficult to maintain and analyze the code. In particular, you run a great risk of handling the exception incorrectly. This is because a caller layer higher up in the hierarchy never expects the exceptions it handles to be raised by a situation with the wrong semantics.

The following procedure is recommended for raising correct exceptions, where you must take care that the right [exception category](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_category_guidl.htm "Guideline") is used:

1.  Search for an existing exception class that is released for use in the current concept (and as part of the package concept) and which matches that error situation exactly.
2.  Make an existing, almost ideal exception class more specific by passing on and/or adding new exception texts.
3.  Create an new ideal exception class, possibly as a part of a predefined inheritance hierarchy.

Bad Example

The following source code shows the incorrect use of the system class cx\_sy\_arithmetic\_overflow (which exists in every system) for an application-specific exception situation. This system exception should usually only be raised by the ABAP runtime framework when an arithmetic calculation takes place.

CLASS warehouse DEFINITION.
  PUBLIC SECTION.
    METHODS calculate\_storage\_capacity
      RAISING   cx\_sy\_arithmetic\_error.
ENDCLASS.

CLASS warehouse IMPLEMENTATION.
  METHOD calculate\_storage\_capacity.
    ...
    RAISE EXCEPTION TYPE cx\_sy\_arithmetic\_overflow.
    ...
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code shows how an application-specific exception class is used that has been created especially for the situation and whose name reflects the topic.

CLASS cx\_warehouse\_out\_of\_capacity DEFINITION
  INHERITING FROM cx\_static\_check.
ENDCLASS.

CLASS warehouse DEFINITION.
  PUBLIC SECTION.
    METHODS calculate\_storage\_capacity
      RAISING cx\_warehouse\_out\_of\_capacity.
ENDCLASS.

CLASS warehouse IMPLEMENTATION.
  METHOD calculate\_storage\_capacity.
    ...
    RAISE EXCEPTION TYPE cx\_warehouse\_out\_of\_capacity.
    ...
  ENDMETHOD.
ENDCLASS.


### abenhandl_prop_except_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenerror_handling_gdl.htm) → 

Handling and Propagating Exceptions

Background

If a class-based exception is raised, it is propagated automatically between the call layers until the exception is handled or an interface is violated:

-   If the exception is raised in a TRY block, the system searches for a suitable CATCH block to handle it.
-   If the user leaves the procedure context during the handler search, the procedure's interface will be checked. Only exceptions declared in the interface can be propagated from the procedure. Exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be declared explicitly with RAISING, while exceptions of category CX\_NO\_CHECK are always declared implicitly but can also be declared explicitly. If the interface is violated, the predefined exception CX\_SY\_NO\_HANDLER is raised at the calling position of the procedure. A reference to the original exception is defined in the PREVIOUS attribute of the exception.

If no handler is found in any of the TRY control structures involved, or if the exception is raised outside a TRY control structure, this results in a runtime error at the raise position of the exception. The short dump of the runtime error contains the name of the exception class and the exception text.

Rule

Catch exceptions or forward them when appropriate

Only catch exceptions that you can handle appropriately in the current context. When you forward exceptions from the underlying software layers, they are supposed to be mapped to corresponding exceptions of the current software layer.

Details

When you call a procedure whose interface includes class-based exceptions, you must decide (for each exception) whether the exception can be handled at this position or should be forwarded to your own calling program. Exceptions that cannot be handled appropriately at the current call level must be forwarded to the superordinate call level. For class-based exceptions, this is done implicitly by avoiding handling within the current call level. You should only allow a runtime error to occur in cases where you are absolutely sure that catching or propagating exceptions is not useful.

When you forward exceptions along the call sequence across multiple layers, they usually move from lower technical layers to higher, more abstract layers that are closer to the application. The calling program in these higher layers does not necessarily know the implementation details of the lower layers and therefore cannot interpret exceptions appropriately. For this reason, exceptions should not exceed the boundaries between software layers. Instead they should be mapped to suitable exceptions with a higher degree of abstraction.

Therefore, we recommend that you do not rely on automatic propagation for forwarding between software layers. Instead, you should catch the original exception and map an exception in the current context by raising a new exception (the context between the originally raised exception and the final exception should be preserved by using the PREVIOUS attribute). This ensures that the calling program of a procedure only receives exceptions that it can understand. This type of procedure is required anyway, for package encapsulation purposes, if exceptions have to be forwarded between software layers.

Note

Forwarding the exceptions to higher software layers usually results in a generalization of previously very special exceptions. The more general an exception is, the higher the software layer usually is in which it is handled. In particular, the most general of all possible exceptions (in other words, the exceptions of type CX\_STATIC\_CHECK, CX\_DYNAMIC\_CHECK, CX\_NO\_CHECK, or CX\_ROOT) should only be caught at the highest software layers and only if a runtime error must be avoided at all costs.


### abencleanup_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenerror_handling_gdl.htm) → 

Cleanups After Exceptions

Background

Every TRY control structure can contain a CLEANUP block. If a class-based exception is raised in the TRY block of the same TRY control structure, but is handled in a CATCH block of an external TRY control structure, the CLEANUP block is executed before the context of the exception is deleted. Therefore, when a handler is executed the CLEANUP blocks of all TRY control structures that have been unsuccessfully searched for a handler up until that point are executed from the inside out.

The addition BEFORE UNWIND of the CATCH statement determines whether execution takes place before or after handling. However, the CLEANUP blocks are not executed if RESUME is used during exception handling to restart in the context of the exception.

Rule

Cleanup Before Forwarding

Before forwarding an exception to higher-level call layers, perform the necessary cleanups in the CLEANUP block.

Details

Each exception changes the program flow and can thus pose a significant risk to the consistency of an application. If you decide not to handle an exception, but to [forward](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhandl_prop_except_guidl.htm "Guideline") it, you must make sure that you leave the current software layer in a consistent state. You can implement the CLEANUP block in this case, to execute cleanups before the exception is forwarded to higher-level software layers.

Bad Example

The following source code shows the forwarding of an exception without first explicitly closing an open resource (in this case a database cursor). The closing of the database cursor is implicitly delegated to any exception handler.

TRY.
  OPEN CURSOR db\_cursor
    FOR SELECT ...
    ...
  CATCH cx\_sy\_sql\_error INTO exc.
    RAISE EXCEPTION TYPE cx\_persistency\_error
      EXPORTING previous = exc.
ENDTRY.

Good Example

The following source code shows the same example as above, but the database cursor is closed in the CLEANUP block.

TRY.
  OPEN CURSOR db\_cursor
    FOR SELECT ...
    ...
  CATCH cx\_sy\_sql\_error INTO exc.
    RAISE EXCEPTION TYPE cx\_persistency\_error
      EXPORTING previous = exc.
  CLEANUP.
    CLOSE CURSOR db\_cursor.
ENDTRY.


### abenassertions_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenerror_handling_gdl.htm) → 

Assertions

Background

The [ASSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassert.htm) statement is used to express an assertion in an ABAP program. Such an assertion is either always active or can be activated externally by assignment to a checkpoint group. When the program reaches an active assertion, it evaluates the corresponding condition. If the condition is violated, the following happens, depending on the type of activation:

-   The program is terminated with the runtime error ASSERTION\_FAILED.
-   The program branches to the ABAP Debugger.
-   A log entry is created.

Assertions, together with breakpoints and logpoints, form the checkpoints of a program; these are not part of the application logic, but are used for development and maintenance support.

Rule

Use assertions

Use assertions to check the state of a program for consistency at all locations where this is possible.

Details

Each program logic is based on certain assumptions. If these assumptions are not met, there are obviously errors in the program and there is no point in executing it any further. In this case, you should stop the execution of the program immediately to avoid any further damage, such as persisted incorrect data. In this way, you can also identify errors early on that would otherwise remain undiscovered.

The ASSERT statement is most suitable for guaranteeing this consistency since it is linked directly to a condition and terminates the program if this condition is violated.

Furthermore, assertions make program maintenance easier by enabling developers to express their assumptions explicitly. The reader of the source code is immediately aware of these assumptions; this gives them a better understanding of the program logic.

If it will take too long to check an assertion condition, you can use the activatable assertions that are linked to checkpoint groups. These can be activated selectively during development, testing, or troubleshooting; otherwise they are not performed. If you suspect an error in a production system, you can also activate activatable assertions there.

Exception

Do not use assertions to check states that are out of the developer's control, such as invalid call parameter values or availability of external resources. In this case, use exceptions, since this enables the caller to react to unexpected states like these.

Example

The following source code shows a program extract in which a line is read from an internal table. The program logic here assumes that this access is always successful. This expectation is checked at runtime by the subsequent assertion, and also documented for the reader.

...
READ TABLE items INTO current\_item INDEX current\_index.
ASSERT sy-subrc = 0.
...


### abenmessages_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarchitecture_gdl.htm) →  [Error Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenerror_handling_gdl.htm) → 

Messages

Background

Messages are texts that are created using a message maintenance (transaction SE91). They are stored in the system table T100. In ABAP programs, the statement [MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage.htm) is the main element for using messages. In its basic form, this statement sends a message; by specifying a message type, the display type and subsequent program behavior can be defined. For this reason, a distinction is made between the following message types:

-   Status message (S)
-   Information message (I)
-   Warning (W)
-   Error message (E)
-   Termination (abort) message (A)

In addition, there is a special message type, exit message (X), which causes a targeted program termination with a runtime error.

The actual system behavior after a message is sent is highly context-dependent. The current version of the ABAP keyword documentation contains a [detailed list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm) of effects caused by different message types in different contexts (such as dialog processing, background processing, during an RFC and during the processing of HTTP requests).

The original purpose of messages is to act as dialog messages to display short information (types I and S) and handle incorrect user input (types W and E), during classic dynpro processing. Messages also have aspects that overlap with exceptions:

-   The statement [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_raising.htm) is a combination of the statements MESSAGE and RAISE which enables classic exceptions to be linked with messages.
-   Using the special, predefined classic exception, error\_message, error and termination messages (that occur when function modules run) can be handled in the same way as exceptions. This also applies to messages sent from the ABAP runtime framework (for example, when the automatic input check of classic dynpros is running).
-   In exception classes, [exception texts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts_guidl.htm "Guideline") can be defined with a reference to messages. The message types A and X can also be used for direct program terminations.

Hint

A further variant, [MESSAGE ... INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_into.htm) makes it possible to copy the short texts of messages into fields.

Rule

Only use messages for error handling in classic dynpros and as exception texts

Only send dialog messages in PAI processing of classic dynpros. Messages should only be used as exception texts and should no longer be used anywhere else. In particular, messages should no longer be used to force program terminations.

Details

The wide use of messages for different purposes can be traced back to the previous programming model, which was only driven by classic dynpros. Here, an exception situation usually always required the direct output of a message to the user. This concept was adopted for other situations, such as targeted program terminations. Triggering a dialog message within application logic procedures violates the [SoC principle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenseperation_concerns_guidl.htm "Guideline") and limits the usability of the relevant procedure ([Method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) to the context of classic dynpro processing. The predefined exception error\_message should be regarded as a workaround that enables procedures to be executed for sending messages in the application logic or in the background.

In new programs, the use of messages should be restricted as described below.

Dialog Messages

In cases where [classic dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_interfaces_gdl.htm) are still used, message types E, I, S, and W are still suitable for sending information to the user or for running error dialogs at the time of PAI (which is the original purpose of these messages types). Running error dialogs, in particular, is supported by the statements FIELD and CHAIN of the dynpro flow logic.

Exception Texts

Messages are the recommended category of text for [exception texts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts_guidl.htm "Guideline"). The statement MESSAGE allows these exception texts to be sent directly as dialog messages. A reference to a corresponding exception object can be specified directly. From a technical point of view, a reference must be specified to an object whose class implements the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_message.htm).

Messages in procedures where classic exceptions are still necessary can continue to replace real exception texts. This is done by using the statement [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception.htm) instead of [RAISE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmessage_raising.htm). During this process, information about the exception text is passed to the handler, in the system fields sy-msgid and sy-msgv1 - sy-msgv4. These fields are filled using the statement MESSAGE. This works especially well for handling exceptions during an RFC, for which class-based exception handling is not possible. When a classic exception of this type is handled or a message caught using [error\_message](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_parameter.htm), the message can then be raised as an exception and forwarded with a suitable message class. The system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_dyn_msg.htm) and the addition [MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm) and of the addition [THROW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) in a [conditional exception](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expressions.htm) are used for these cases.

Program Terminations

Message types A and X cause program terminations (aborts) and should no longer be used:

-   If a termination message of type A is sent, the statement ROLLBACK WORK is executed implicitly. This can lead to unexpected results, if the message is handled with error\_message as a classic exception (rather than causing a program termination) To be on the safe side, the statements ROLLBACK WORK and LEAVE PROGRAM should be used explicitly to exit the program.
-   If a message of type X is sent, the program is terminated with the runtime error MESSAGE\_TYPE\_X. When programs are forced to terminate due to internal inconsistencies, however, [assertions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassertions_guidl.htm "Guideline") or the language elements [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_shortdump.htm) or [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) should now be used. The values specified here using the addition FIELDS of the statement ASSERT or the exception object RAISE SHORTDUMP or THROW SHORTDUMP are usually better suited for troubleshooting than a message.

Exception

Exit messages can still be used if you want only the text of the message to appear in the short dump of the runtime error. However, this should not be misunderstood as communication with the user. A runtime error is not a suitable way of communicating with users. For a simple, unconditional program termination, however, exit messages should no longer be used. Instead, where required, the language elements [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_shortdump.htm) or [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) can be used instead.
