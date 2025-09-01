# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Exception Handling / Runtime Errors

Included pages: 4


### abennoncat_exceptions.htm

---
title: "Runtime Errors"
description: |
  Runtime errors indicate situations in which the execution of an ABAP program cannot be continued but must be terminated. Runtime errors can occur in one of the following situations when ABAP programs are executed: -   Non-handled exceptions: -   A catchable exception is not handled. -   A uncatchabl
version: "latest"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennoncat_exceptions.htm"
abapFile: "abennoncat_exceptions.htm"
keywords: ["do", "if", "try", "catch", "class", "data", "exception-handling", "abennoncat", "exceptions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Runtime%20Errors%2C%20ABENNONCAT_EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Runtime Errors

Runtime errors indicate situations in which the execution of an ABAP program cannot be continued but must be terminated. Runtime errors can occur in one of the following situations when ABAP programs are executed:

-   Non-handled exceptions:
    -   A catchable exception is not handled.
    -   A uncatchable exception is raised.
-   Program-driven raise:
    -   The statement [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump.htm) or the addition [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) is used.
    -   An [assertion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassertion_glosry.htm "Glossary Entry") fails.
    -   An [exit message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexit_message_glosry.htm "Glossary Entry") or [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") of type X is sent.

Each runtime error is identified by a name and assigned to a specific error situation and leads to a [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). Following a program termination caused by a runtime error, the system generates a [short dump](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshort_dump_glosry.htm "Glossary Entry") which contains the name of the runtime error, the associated exception class, content of data objects, active calls, control structures, and so on, and allows the user to branch directly to the ABAP Debugger. Short dumps are kept in the system for 14 days by default and managed using the [ABAP dump analysis](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dump_analsyis_glosry.htm "Glossary Entry") (transaction ST22). The output of the short dump can be controlled in the [profile parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/verbose\_level if there are special requirements.

Hint

Program-driven termination of a program should be implemented in situations where meaningful program execution is no longer possible, using [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump.htm), [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm), or [ASSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassert.htm) from now on and not using [exit messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexit_message_glosry.htm "Glossary Entry").

Example

Raising of the runtime error COMPUTE\_INT\_ZERODIVIDE when the exception CX\_SY\_ZERODIVIDE is not caught.

cl\_demo\_output=>display( 1 / 0 ).

Continue
[RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump.htm)


### abapraise_shortdump.htm

---
title: "RAISE SHORTDUMP"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_shortref.htm) Syntax RAISE SHORTDUMP  TYPE cx_class  message(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_message.htm) EXPORTING p1 = a1 p
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump.htm"
abapFile: "abapraise_shortdump.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "exception-handling", "abapraise", "shortdump"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_exceptions.htm) →  [Runtime Errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennoncat_exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAISE%20SHORTDUMP%2C%20ABAPRAISE_SHORTDUMP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAISE SHORTDUMP

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_shortref.htm)

Syntax

RAISE SHORTDUMP
  *{* *{*TYPE cx\_class *\[* [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_message.htm)*\]* *\[*EXPORTING p1 = a1 p2 = a2 ...*\]**}*
  *|* oref *}*.

Effect

This statement interrupts the execution of the current statement block and raises the [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry") RAISE\_SHORTDUMP, which performs a [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). This runtime error is linked with an [exception object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_object_glosry.htm "Glossary Entry") using TYPE or oref:

-   If the addition TYPE is specified, an exception object of the [exception class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_class_glosry.htm "Glossary Entry") cx\_class is created. Every exception class cx\_class visible at this point can be specified after TYPE. The [exception category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_category_glosry.htm "Glossary Entry") is ignored.
    -   The addition EXPORTING can be used to assign actual parameters to the input parameters of the instance constructor. The syntax and semantics are the same as for the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm).
    -   The addition [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_message.htm) can be used to link the exception object to a [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry").
-   If oref is specified, no new exception object is created. oref expects an object reference variable that points to an existing exception object. The static type of oref must be an exception class, that is, a subclass of CX\_ROOT or the class itself. oref is a [general expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). In the existing exception object, the internal attributes that describe the location of the exception are converted to the position of the RAISE statement.

The [short dump](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshort_dump_glosry.htm "Glossary Entry") of the runtime error contains the name of the exception class and the [exception text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_text_glosry.htm "Glossary Entry"). The attributes of the exception object can be listed in the transaction ST22. Under Chain of Exception Objects, the long text of the short dump contains the attributes referenced in the attribute PREVIOUS of the exception object.

Hints

-   The statement RAISE SHORTDUMP works in roughly the same way as when raising a [class-based exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") that does not have a handler. There is no [propagation from procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_procedures.htm), however, which removes the risk of violating interfaces and raising further exceptions such as CX\_SY\_NO\_HANDLER. This means that the [exception category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_category_glosry.htm "Glossary Entry") of the used exception class is not relevant in RAISE SHORTDUMP.
-   The statement RAISE SHORTDUMP does not raise [class-based exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") that can be caught using [CATCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcatch_try.htm). The exception object is used exclusively for the transport of information to the short dump.
-   The statement RAISE SHORTDUMP is an alternative to raising [exit messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexit_message_glosry.htm "Glossary Entry"), that is, [messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") of type X. The attributes of the exception class can be used to send more information about an error to the short dump than a message text. More specifically, the attribute PREVIOUS can reference previous exceptions.
-   If oref is specified, either an exception object instantiated using [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) or [CREATE OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object.htm) can be used or a previously caught exception can be transformed into a runtime error in exception handling.
-   If a caught exception is transformed into a runtime error, it should be noted that the exception object does not remain unchanged and the information about the position of the exception is changed instead. If the original information is transported to the short dump, a new exception object of the same class can be created. The original exception object is passed to the constructor parameter PREVIOUS of the new object.
-   The addition [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expressions.htm) makes it possible to raise a runtime error in an operand position.

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
CLASS user DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main RAISING cx\_sy\_zerodivide.
ENDCLASS.
CLASS user IMPLEMENTATION.
  METHOD main.
    TRY.
        demo=>main( ).
      CATCH cx\_sy\_zerodivide INTO FINAL(oref).
        RAISE SHORTDUMP TYPE cx\_demo EXPORTING previous = oref.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Continue
[RAISE SHORTDUMP, message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_message.htm)


### abapraise_shortdump_message.htm

---
title: "RAISE SHORTDUMP, message"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_shortref.htm) Syntax ...  MESSAGE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) tn(id)   ID mid TYPE mtype NUMBER num  WITH dobj1
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_message.htm"
abapFile: "abapraise_shortdump_message.htm"
keywords: ["do", "if", "try", "class", "exception-handling", "abapraise", "shortdump", "message"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_exceptions.htm) →  [Runtime Errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennoncat_exceptions.htm) →  [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAISE%20SHORTDUMP%2C%20message%2C%20ABAPRAISE_SHORTDUMP_MESSAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAISE SHORTDUMP, message

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_shortref.htm)

Syntax

... *{* [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) tn(id)
            *|* *{* ID mid TYPE mtype NUMBER num *}*
              *\[*WITH dobj1 ... dobj4*\]* *}*
  *|* *{* [USING MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) *}* ...

Effect

The addition MESSAGE of the statement [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump.htm) and of the addition [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expressions.htm) passes the specification of a [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") to the exception object. Syntax and semantics are the same as in the addition [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm).

Hint

The addition MESSAGE cannot be specified after the variant [RAISE SHORTDUMP oref](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump.htm).

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_DYN\_T100, which implements the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm). The addition MESSAGE is used to pass the properties of a message that determines the exception text.

RAISE SHORTDUMP TYPE cx\_demo\_dyn\_t100
  MESSAGE ID 'SABAPDEMOS'
          TYPE 'I'
          NUMBER '888'
          WITH 'I' 'need' 'a' 'break!'.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_T100, which implements the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_message.htm). The additions MESSAGE and EXPORTING are used to pass the properties of a message that determines the exception text.

RAISE SHORTDUMP TYPE cx\_demo\_t100
                MESSAGE ID 'SABAPDEMOS'
                        NUMBER '888'
                EXPORTING text1 = 'I'
                          text2 = 'need'
                          text3 = 'a'
                          text4 = 'break!'.

Example

Raising of a runtime error with an exception object of the exception class CX\_DEMO\_DYN\_T100, which implements the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm). The addition USING MESSAGE is used to pass the properties of a previously sent message that determines the exception text.

MESSAGE ID 'SABAPDEMOS'
        TYPE 'S'
        NUMBER '888'
        WITH 'I' 'need' 'a' 'break!'.
RAISE SHORTDUMP TYPE cx\_demo\_dyn\_t100
                USING MESSAGE.


### abapraise_shortdump.htm

---
title: "RAISE SHORTDUMP"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_shortref.htm) Syntax RAISE SHORTDUMP  TYPE cx_class  message(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_message.htm) EXPORTING p1 = a1 p
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump.htm"
abapFile: "abapraise_shortdump.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "exception-handling", "abapraise", "shortdump"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_exceptions.htm) →  [Runtime Errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennoncat_exceptions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAISE%20SHORTDUMP%2C%20ABAPRAISE_SHORTDUMP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAISE SHORTDUMP

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_shortref.htm)

Syntax

RAISE SHORTDUMP
  *{* *{*TYPE cx\_class *\[* [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_message.htm)*\]* *\[*EXPORTING p1 = a1 p2 = a2 ...*\]**}*
  *|* oref *}*.

Effect

This statement interrupts the execution of the current statement block and raises the [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry") RAISE\_SHORTDUMP, which performs a [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). This runtime error is linked with an [exception object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_object_glosry.htm "Glossary Entry") using TYPE or oref:

-   If the addition TYPE is specified, an exception object of the [exception class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_class_glosry.htm "Glossary Entry") cx\_class is created. Every exception class cx\_class visible at this point can be specified after TYPE. The [exception category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_category_glosry.htm "Glossary Entry") is ignored.
    -   The addition EXPORTING can be used to assign actual parameters to the input parameters of the instance constructor. The syntax and semantics are the same as for the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm).
    -   The addition [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_message.htm) can be used to link the exception object to a [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry").
-   If oref is specified, no new exception object is created. oref expects an object reference variable that points to an existing exception object. The static type of oref must be an exception class, that is, a subclass of CX\_ROOT or the class itself. oref is a [general expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). In the existing exception object, the internal attributes that describe the location of the exception are converted to the position of the RAISE statement.

The [short dump](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshort_dump_glosry.htm "Glossary Entry") of the runtime error contains the name of the exception class and the [exception text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_text_glosry.htm "Glossary Entry"). The attributes of the exception object can be listed in the transaction ST22. Under Chain of Exception Objects, the long text of the short dump contains the attributes referenced in the attribute PREVIOUS of the exception object.

Hints

-   The statement RAISE SHORTDUMP works in roughly the same way as when raising a [class-based exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") that does not have a handler. There is no [propagation from procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_procedures.htm), however, which removes the risk of violating interfaces and raising further exceptions such as CX\_SY\_NO\_HANDLER. This means that the [exception category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_category_glosry.htm "Glossary Entry") of the used exception class is not relevant in RAISE SHORTDUMP.
-   The statement RAISE SHORTDUMP does not raise [class-based exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") that can be caught using [CATCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcatch_try.htm). The exception object is used exclusively for the transport of information to the short dump.
-   The statement RAISE SHORTDUMP is an alternative to raising [exit messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexit_message_glosry.htm "Glossary Entry"), that is, [messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") of type X. The attributes of the exception class can be used to send more information about an error to the short dump than a message text. More specifically, the attribute PREVIOUS can reference previous exceptions.
-   If oref is specified, either an exception object instantiated using [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) or [CREATE OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object.htm) can be used or a previously caught exception can be transformed into a runtime error in exception handling.
-   If a caught exception is transformed into a runtime error, it should be noted that the exception object does not remain unchanged and the information about the position of the exception is changed instead. If the original information is transported to the short dump, a new exception object of the same class can be created. The original exception object is passed to the constructor parameter PREVIOUS of the new object.
-   The addition [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expressions.htm) makes it possible to raise a runtime error in an operand position.

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
CLASS user DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main RAISING cx\_sy\_zerodivide.
ENDCLASS.
CLASS user IMPLEMENTATION.
  METHOD main.
    TRY.
        demo=>main( ).
      CATCH cx\_sy\_zerodivide INTO FINAL(oref).
        RAISE SHORTDUMP TYPE cx\_demo EXPORTING previous = oref.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Continue
[RAISE SHORTDUMP, message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump_message.htm)
