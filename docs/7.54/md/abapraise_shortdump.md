  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Runtime Error](javascript:call_link\('abennoncat_exceptions.htm'\)) → 

RAISE SHORTDUMP

[Quick Reference](javascript:call_link\('abapraise_shortdump_shortref.htm'\))

Syntax

RAISE SHORTDUMP
  *{* *{*TYPE cx\_class *\[* [message](javascript:call_link\('abapraise_shortdump_message.htm'\))*\]* *\[*EXPORTING p1 = a1 p2 = a2 ...*\]**}*
  *|* oref *}*.

Effect

This statement interrupts the execution of the current statement block and raises the [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") RAISE\_SHORTDUMP. This performs a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). This runtime error is associated with an [exception object](javascript:call_link\('abenexception_object_glosry.htm'\) "Glossary Entry") using TYPE or oref:

-   If the addition TYPE is specified, an exception object of the [exception class](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") cx\_class is created. Every exception class cx\_class visible at this point can be specified after TYPE. The [exception category](javascript:call_link\('abenexception_category_glosry.htm'\) "Glossary Entry") is ignored.
    

-   The addition EXPORTING can be used to assign actual parameters to the input parameters of the instance constructor. The syntax and semantics are the same as for the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)).

-   The addition [message](javascript:call_link\('abapraise_shortdump_message.htm'\)) can be used to associate the exception object with a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry").

-   If oref is specified, no new exception object is created. oref expects an object reference variable that points to an existing exception object. The static type of oref must be an exception class (namely a subclass of CX\_ROOT or the class itself). oref is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). In the existing exception object, the internal attributes that describe the location of the exception are applied at the location of the RAISE statement.
    

The [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") of the runtime error contains the name of the exception class and the [exception text](javascript:call_link\('abenexception_text_glosry.htm'\) "Glossary Entry"). The attributes of the exception object can be displayed in the transaction ST22. Under Chain of Exception Objects, the long text of the short dump contains the attributes referenced in the attribute PREVIOUS of the exception object.

Notes

-   The statement RAISE SHORTDUMP works in roughly the same way as [](javascript:call_link\('abapraise_exception_class.htm'\))used to raise a [class-based exception](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") that does not have a handler. There is no [propagation from procedures](javascript:call_link\('abenexceptions_procedures.htm'\)), however, which removes the risk of violating interfaces and raising further exceptions such as CX\_SY\_NO\_HANDLER. This means that the [exception category](javascript:call_link\('abenexception_category_glosry.htm'\) "Glossary Entry") of the exception class in question is ignored in RAISE SHORTDUMP.
    
-   The statement RAISE SHORTDUMP does not raise [class-based exception](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") that can be caught using [CATCH](javascript:call_link\('abapcatch_try.htm'\)). The exception object is used exclusively for the transport of information to the short dump.
    
-   The statement RAISE SHORTDUMP is an alternative to raising [exit messages](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry") ( [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of type X). The attributes of the exception class are capable of sending more information about an error to the short dump than a message text. More specifically, the attribute PREVIOUS can reference preceding exceptions.
    
-   If oref is specified, either an exception object instantiated using [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) can be used or a previously caught exception can be transformed into a runtime error in exception handling.
    
-   If a caught exception is transformed into a runtime error, it should be noted that the exception object does not remain unmodified and that the information about the position of the exception is changed. If the original information is transported to the short dump, a new exception object from the same class can be created. The original exception object is then passed to the constructor parameter PREVIOUS of the new object.
    
-   The addition [THROW SHORTDUMP](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) makes it possible to raise a runtime error in an operand position.
    

Example

Raises a runtime error with an exception object of the exception class CX\_DEMO\_T100. The instance constructor is given parameters that define the exception text and fill any variable text parts with values.

RAISE SHORTDUMP TYPE cx\_demo\_t100
     EXPORTING
       textid = cx\_demo\_t100=>demo
       text1  = 'I'
       text2  = 'need'
       text3  = 'a'
       text4  = 'break!'.

Example

Like the previous example, but the exception object is created first and not in the statement RAISE SHORTDUMP.

DATA(oref) = NEW cx\_demo\_t100(
  textid = cx\_demo\_t100=>demo
  text1  = 'I'
  text2  = 'need'
  text3  = 'a'
  text4  = 'break!' ).
RAISE SHORTDUMP oref.

Example

Raises a runtime error when an exception is handled. A reference to the preceding exception object of the class cx\_sy\_zerodivide is passed to the attribute PREVIOUS of the new exception object of the class cx\_demo. The chain of exception objects is displayed in the long text of the short dump.

CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main RAISING cx\_sy\_zerodivide.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(num) = 1 / 0.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  TRY.
      demo=>main( ).
    CATCH cx\_sy\_zerodivide INTO DATA(oref).
      RAISE SHORTDUMP TYPE cx\_demo EXPORTING previous = oref.
  ENDTRY.

Continue
[RAISE SHORTDUMP - message](javascript:call_link\('abapraise_shortdump_message.htm'\))