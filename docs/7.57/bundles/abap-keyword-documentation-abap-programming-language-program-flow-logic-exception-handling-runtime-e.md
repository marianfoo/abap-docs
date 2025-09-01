# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Exception Handling / Runtime Errors

Included pages: 4


### abennoncat_exceptions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Runtime Errors, ABENNONCAT_EXCEPTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

Runtime Errors

Runtime errors indicate situations in which the execution of an ABAP program cannot be continued but must be terminated. Runtime errors can occur in one of the following situations when ABAP programs are executed:

-   Non-handled exceptions:
    -   A catchable exception is not handled.
    -   A uncatchable exception is raised.
-   Program-driven raise:
    -   The statement [RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\)) or the addition [THROW SHORTDUMP](javascript:call_link\('abenconditional_expression_result.htm'\)) is used.
    -   An [assertion](javascript:call_link\('abenassertion_glosry.htm'\) "Glossary Entry") fails.
    -   An [exit message](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry") or [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of type X is sent.

Each runtime error is identified by a name and assigned to a specific error situation and leads to a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). Following a program termination caused by a runtime error, the system generates a [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") which contains the name of the runtime error, the associated exception class, content of data objects, active calls, control structures, and so on, and allows the user to branch directly to the ABAP Debugger. Short dumps are kept in the system for 14 days by default and managed using the [ABAP dump analysis](javascript:call_link\('abenabap_dump_analsyis_glosry.htm'\) "Glossary Entry") (transaction ST22). The output of the short dump can be controlled in the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/verbose\_level if there are special requirements.

Hint

Program-driven termination of a program should be implemented in situations where meaningful program execution is no longer possible, using [RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\)), [THROW SHORTDUMP](javascript:call_link\('abenconditional_expression_result.htm'\)), or [ASSERT](javascript:call_link\('abapassert.htm'\)) from now on and not using [exit messages](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry").

Example

Raising of the runtime error COMPUTE\_INT\_ZERODIVIDE when the exception CX\_SY\_ZERODIVIDE is not caught.

cl\_demo\_output=>display( 1 / 0 ).

Continue
[RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\))


### abapraise_shortdump.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Runtime Errors](javascript:call_link\('abennoncat_exceptions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAISE SHORTDUMP, ABAPRAISE_SHORTDUMP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

RAISE SHORTDUMP

[Short Reference](javascript:call_link\('abapraise_shortdump_shortref.htm'\))

Syntax

RAISE SHORTDUMP
  *{* *{*TYPE cx\_class *\[* [message](javascript:call_link\('abapraise_shortdump_message.htm'\))*\]* *\[*EXPORTING p1 = a1 p2 = a2 ...*\]**}*
  *|* oref *}*.

Effect

This statement interrupts the execution of the current statement block and raises the [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") RAISE\_SHORTDUMP, which performs a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). This runtime error is linked with an [exception object](javascript:call_link\('abenexception_object_glosry.htm'\) "Glossary Entry") using TYPE or oref:

-   If the addition TYPE is specified, an exception object of the [exception class](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") cx\_class is created. Every exception class cx\_class visible at this point can be specified after TYPE. The [exception category](javascript:call_link\('abenexception_category_glosry.htm'\) "Glossary Entry") is ignored.
    -   The addition EXPORTING can be used to assign actual parameters to the input parameters of the instance constructor. The syntax and semantics are the same as for the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)).
    -   The addition [message](javascript:call_link\('abapraise_shortdump_message.htm'\)) can be used to link the exception object to a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry").
-   If oref is specified, no new exception object is created. oref expects an object reference variable that points to an existing exception object. The static type of oref must be an exception class, that is, a subclass of CX\_ROOT or the class itself. oref is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). In the existing exception object, the internal attributes that describe the location of the exception are converted to the position of the RAISE statement.

The [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") of the runtime error contains the name of the exception class and the [exception text](javascript:call_link\('abenexception_text_glosry.htm'\) "Glossary Entry"). The attributes of the exception object can be listed in the transaction ST22. Under Chain of Exception Objects, the long text of the short dump contains the attributes referenced in the attribute PREVIOUS of the exception object.

Hints

-   The statement RAISE SHORTDUMP works in roughly the same way as when raising a [class-based exception](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") that does not have a handler. There is no [propagation from procedures](javascript:call_link\('abenexceptions_procedures.htm'\)), however, which removes the risk of violating interfaces and raising further exceptions such as CX\_SY\_NO\_HANDLER. This means that the [exception category](javascript:call_link\('abenexception_category_glosry.htm'\) "Glossary Entry") of the used exception class is not relevant in RAISE SHORTDUMP.
-   The statement RAISE SHORTDUMP does not raise [class-based exception](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") that can be caught using [CATCH](javascript:call_link\('abapcatch_try.htm'\)). The exception object is used exclusively for the transport of information to the short dump.
-   The statement RAISE SHORTDUMP is an alternative to raising [exit messages](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry"), that is, [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of type X. The attributes of the exception class can be used to send more information about an error to the short dump than a message text. More specifically, the attribute PREVIOUS can reference previous exceptions.
-   If oref is specified, either an exception object instantiated using [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) can be used or a previously caught exception can be transformed into a runtime error in exception handling.
-   If a caught exception is transformed into a runtime error, it should be noted that the exception object does not remain unchanged and the information about the position of the exception is changed instead. If the original information is transported to the short dump, a new exception object of the same class can be created. The original exception object is passed to the constructor parameter PREVIOUS of the new object.
-   The addition [THROW SHORTDUMP](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) makes it possible to raise a runtime error in an operand position.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_T100. The instance constructor is supplied with parameters that define the exception text and supply any variable text parts with values.

RAISE SHORTDUMP TYPE cx\_demo\_t100
     EXPORTING
       textid = cx\_demo\_t100=>demo
       text1  = 'I'
       text2  = 'need'
       text3  = 'a'
       text4  = 'break!'.

Example

Like the previous example, but the exception object is created first and not in the statement RAISE SHORTDUMP.

FINAL(oref) = NEW cx\_demo\_t100(
  textid = cx\_demo\_t100=>demo
  text1  = 'I'
  text2  = 'need'
  text3  = 'a'
  text4  = 'break!' ).
RAISE SHORTDUMP oref.

Example

Raising of a runtime error when an exception is handled. A reference to the preceding exception object of the class cx\_sy\_zerodivide is passed to the attribute PREVIOUS of the created exception object of the class cx\_demo. The chain of exception objects is listed in the long text of the short dump.

CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main RAISING cx\_sy\_zerodivide.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(num) = 1 / 0.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  TRY.
      demo=>main( ).
    CATCH cx\_sy\_zerodivide INTO FINAL(oref).
      RAISE SHORTDUMP TYPE cx\_demo EXPORTING previous = oref.
  ENDTRY.

Continue
[RAISE SHORTDUMP, message](javascript:call_link\('abapraise_shortdump_message.htm'\))


### abapraise_shortdump_message.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Runtime Errors](javascript:call_link\('abennoncat_exceptions.htm'\)) →  [RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAISE SHORTDUMP, message, ABAPRAISE_SHORTDUMP_MESSAGE, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

RAISE SHORTDUMP, message

[Short Reference](javascript:call_link\('abapraise_shortdump_shortref.htm'\))

Syntax

... *{* [MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)) tn(id)
            *|* *{* ID mid TYPE mtype NUMBER num *}*
              *\[*WITH dobj1 ... dobj4*\]* *}*
  *|* *{* [USING MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)) *}* ...

Effect

The addition MESSAGE of the statement [RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\)) and of the addition [THROW SHORTDUMP](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) passes the specification of a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") to the exception object. Syntax and semantics are the same as in the addition [MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)) of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)).

Hint

The addition MESSAGE cannot be specified after the variant [RAISE SHORTDUMP oref](javascript:call_link\('abapraise_shortdump.htm'\)).

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_DYN\_T100, which implements the interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)). The addition MESSAGE is used to pass the properties of a message that determines the exception text.

RAISE SHORTDUMP TYPE cx\_demo\_dyn\_t100
  MESSAGE ID 'SABAPDEMOS'
          TYPE 'I'
          NUMBER '888'
          WITH 'I' 'need' 'a' 'break!'.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_T100, which implements the interface [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)). The additions MESSAGE and EXPORTING are used to pass the properties of a message that determines the exception text.

RAISE SHORTDUMP TYPE cx\_demo\_t100
                MESSAGE ID 'SABAPDEMOS'
                        NUMBER '888'
                EXPORTING text1 = 'I'
                          text2 = 'need'
                          text3 = 'a'
                          text4 = 'break!'.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_DYN\_T100, which implements the interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)). The addition USING MESSAGE is used to pass the properties of a previously sent message that determines the exception text.

MESSAGE ID 'SABAPDEMOS'
        TYPE 'S'
        NUMBER '888'
        WITH 'I' 'need' 'a' 'break!'.
RAISE SHORTDUMP TYPE cx\_demo\_dyn\_t100
                USING MESSAGE.


### abapraise_shortdump.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Runtime Errors](javascript:call_link\('abennoncat_exceptions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAISE SHORTDUMP, ABAPRAISE_SHORTDUMP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

RAISE SHORTDUMP

[Short Reference](javascript:call_link\('abapraise_shortdump_shortref.htm'\))

Syntax

RAISE SHORTDUMP
  *{* *{*TYPE cx\_class *\[* [message](javascript:call_link\('abapraise_shortdump_message.htm'\))*\]* *\[*EXPORTING p1 = a1 p2 = a2 ...*\]**}*
  *|* oref *}*.

Effect

This statement interrupts the execution of the current statement block and raises the [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") RAISE\_SHORTDUMP, which performs a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). This runtime error is linked with an [exception object](javascript:call_link\('abenexception_object_glosry.htm'\) "Glossary Entry") using TYPE or oref:

-   If the addition TYPE is specified, an exception object of the [exception class](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") cx\_class is created. Every exception class cx\_class visible at this point can be specified after TYPE. The [exception category](javascript:call_link\('abenexception_category_glosry.htm'\) "Glossary Entry") is ignored.
    -   The addition EXPORTING can be used to assign actual parameters to the input parameters of the instance constructor. The syntax and semantics are the same as for the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)).
    -   The addition [message](javascript:call_link\('abapraise_shortdump_message.htm'\)) can be used to link the exception object to a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry").
-   If oref is specified, no new exception object is created. oref expects an object reference variable that points to an existing exception object. The static type of oref must be an exception class, that is, a subclass of CX\_ROOT or the class itself. oref is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). In the existing exception object, the internal attributes that describe the location of the exception are converted to the position of the RAISE statement.

The [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") of the runtime error contains the name of the exception class and the [exception text](javascript:call_link\('abenexception_text_glosry.htm'\) "Glossary Entry"). The attributes of the exception object can be listed in the transaction ST22. Under Chain of Exception Objects, the long text of the short dump contains the attributes referenced in the attribute PREVIOUS of the exception object.

Hints

-   The statement RAISE SHORTDUMP works in roughly the same way as when raising a [class-based exception](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") that does not have a handler. There is no [propagation from procedures](javascript:call_link\('abenexceptions_procedures.htm'\)), however, which removes the risk of violating interfaces and raising further exceptions such as CX\_SY\_NO\_HANDLER. This means that the [exception category](javascript:call_link\('abenexception_category_glosry.htm'\) "Glossary Entry") of the used exception class is not relevant in RAISE SHORTDUMP.
-   The statement RAISE SHORTDUMP does not raise [class-based exception](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") that can be caught using [CATCH](javascript:call_link\('abapcatch_try.htm'\)). The exception object is used exclusively for the transport of information to the short dump.
-   The statement RAISE SHORTDUMP is an alternative to raising [exit messages](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry"), that is, [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of type X. The attributes of the exception class can be used to send more information about an error to the short dump than a message text. More specifically, the attribute PREVIOUS can reference previous exceptions.
-   If oref is specified, either an exception object instantiated using [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) can be used or a previously caught exception can be transformed into a runtime error in exception handling.
-   If a caught exception is transformed into a runtime error, it should be noted that the exception object does not remain unchanged and the information about the position of the exception is changed instead. If the original information is transported to the short dump, a new exception object of the same class can be created. The original exception object is passed to the constructor parameter PREVIOUS of the new object.
-   The addition [THROW SHORTDUMP](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) makes it possible to raise a runtime error in an operand position.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_T100. The instance constructor is supplied with parameters that define the exception text and supply any variable text parts with values.

RAISE SHORTDUMP TYPE cx\_demo\_t100
     EXPORTING
       textid = cx\_demo\_t100=>demo
       text1  = 'I'
       text2  = 'need'
       text3  = 'a'
       text4  = 'break!'.

Example

Like the previous example, but the exception object is created first and not in the statement RAISE SHORTDUMP.

FINAL(oref) = NEW cx\_demo\_t100(
  textid = cx\_demo\_t100=>demo
  text1  = 'I'
  text2  = 'need'
  text3  = 'a'
  text4  = 'break!' ).
RAISE SHORTDUMP oref.

Example

Raising of a runtime error when an exception is handled. A reference to the preceding exception object of the class cx\_sy\_zerodivide is passed to the attribute PREVIOUS of the created exception object of the class cx\_demo. The chain of exception objects is listed in the long text of the short dump.

CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main RAISING cx\_sy\_zerodivide.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(num) = 1 / 0.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  TRY.
      demo=>main( ).
    CATCH cx\_sy\_zerodivide INTO FINAL(oref).
      RAISE SHORTDUMP TYPE cx\_demo EXPORTING previous = oref.
  ENDTRY.

Continue
[RAISE SHORTDUMP, message](javascript:call_link\('abapraise_shortdump_message.htm'\))
