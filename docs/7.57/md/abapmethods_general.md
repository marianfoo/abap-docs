---
title: "METHODS, IMPORTING, EXPORTING, CHANGING, RAISING"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_shortref.htm) Syntax METHODS meth ABSTRACTFINAL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_abstract_final.htm) DEFAULT IGNOREFAIL(https://help.sap.com/doc/aba
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm"
abapFile: "abapmethods_general.htm"
keywords: ["select", "insert", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abapmethods", "general"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethods.htm) →  [METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: METHODS, IMPORTING, EXPORTING, CHANGING, RAISING, ABAPMETHODS_GENERAL, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

METHODS, IMPORTING, EXPORTING, CHANGING, RAISING

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_shortref.htm)

Syntax

METHODS meth *\[*[ABSTRACT*|*FINAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_abstract_final.htm)*\]*
            *|**\[*[DEFAULT IGNORE*|*FAIL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_default.htm)*\]*
  *\[*IMPORTING [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm) *\[*PREFERRED PARAMETER p*\]**\]*
  *\[*EXPORTING [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)*\]*
  *\[*CHANGING  [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)*\]*
  *\[**{*RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...*}*
  *|**{*EXCEPTIONS exc1 exc2 ...*}**\]*.

Additions:

[1\. ... IMPORTING parameters *\[*PREFERRED PARAMETER p*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... EXPORTING parameters](#!ABAP_ADDITION_2@2@)
[3\. ... CHANGING parameters](#!ABAP_ADDITION_3@3@)
[4\. ... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...](#!ABAP_ADDITION_4@4@)
[5\. ... EXCEPTIONS exc1 exc2 ...](#!ABAP_ADDITION_5@5@)

Effect

This statement declares a general instance method meth. The additions [ABSTRACT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_abstract_final.htm) and [FINAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_abstract_final.htm) can be used to make the method of a class abstract or final. The addition [DEFAULT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_default.htm) is used to make an interface method optional.

The additions IMPORTING, EXPORTING, and CHANGING define the [parameter interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenformal_parameters_oview.htm) of the method. After every addition, the corresponding formal parameters are defined by specifying a list [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm). The order of the additions is fixed.

The remaining additions determine which exceptions are propagated or raised by the method.

Hint

Within a method, the [predicate expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_supplied.htm) can be used to check whether an optional formal parameter was assigned an actual parameter when it was called.

Addition 1   

... IMPORTING parameters *\[*PREFERRED PARAMETER p*\]*

Effect

IMPORTING defines input parameters. When the method is called, an appropriate actual parameter must be specified for each non-optional input parameter. The content of the actual parameter is passed to the input parameter when it is called. The content of an input parameter for which pass-by-reference is defined cannot be changed in the method.

PREFERRED PARAMETER can be used to flag an input parameter p1 p2 ... from the list [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm) after IMPORTING as a preferred parameter. This specification is only possible if all input parameters and input/output parameters are optional. The parameter specified after PREFERRED PARAMETER is implicitly set to optional. If the method is called using the syntax meth( a ) (as [standalone](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_static_short.htm) or [functional](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_functional.htm) syntax), the actual parameter a is assigned to the preferred input parameter p.

Hint

Although PREFERRED PARAMETER makes the parameter p optional implicitly, this parameter should be made optional explicitly using OPTIONAL or DEFAULT, which is required by a syntax check warning.

Example

Declaration of a method with exclusively optional input parameters, of which one is flagged as a preferred parameter.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS
      meth
        IMPORTING
          p1 TYPE i DEFAULT 111
          p2 TYPE i OPTIONAL
          p3 TYPE i OPTIONAL
          PREFERRED PARAMETER p1.
    ...
ENDCLASS.

Addition 2   

... EXPORTING parameters

Effect

EXPORTING defines output parameters. When the method is called, an appropriate actual parameter can be specified for each output parameter. The content of an output parameter that is defined for pass-by-value is passed to the actual parameter if the method is completed without errors.

Hint

An output parameter that is defined for pass-by-reference behaves like an input/output parameter, which means that it is not initialized when the method is called. For this reason, there should be no read access before the first write access. In addition, be careful when adding content to such parameters as, for example, when inserting lines into internal tables.

Example

The method read\_spfli\_into\_table of this example has an input and an output parameter, which are typed completely by reference to the ABAP Dictionary.

CLASS flights DEFINITION.
  PUBLIC SECTION.
    METHODS read\_spfli\_into\_table
       IMPORTING VALUE(id)  TYPE spfli-carrid
       EXPORTING flight\_tab TYPE spfli\_tab.
       ...
ENDCLASS.

Addition 3   

... CHANGING parameters

Effect

CHANGING defines input/output parameters. When the method is called, an appropriate actual parameter must be specified for each non-optional input/output parameter. The content of the actual parameter is passed to the input/output parameter when it is called and the content of the input/output parameter is passed to the actual parameter after the method has ended.

Example

Declaration of a method with input and input/output parameters.

CLASS html DEFINITION.
  PUBLIC SECTION.
    TYPES html\_table TYPE ...
    ...
    METHODS
      append\_text\_to\_html
        IMPORTING
          text TYPE string
        CHANGING
          html TYPE html\_table.
    ...
ENDCLASS.

Addition 4   

... RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ...

Effect

The addition RAISING is used to declare the [class-based exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") exc1 exc2 ... that can be propagated from the method to the caller.

For exc1 exc2 ..., all exception that are classes and that are visible at this point can be specified here. The exception classes must be specified in ascending order with respect to their inheritance hierarchy. Each exception class may only be specified once.

The addition RESUMABLE declares an exception that can be propagated as a [resumable exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresumable_exception_glosry.htm "Glossary Entry"). This means:

-   A resumable exception is propagated as such.
-   The addition does not have any effect on a non-resumable exception.
-   If a resumable exception is propagated in RAISING without the addition RESUMABLE, it becomes non-resumable.

If a superclass is declared as resumable, all of the simultaneously listed subclasses must also be declared as resumable.

Exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be explicitly declared, otherwise a propagation leads to an interface violation. A violation of the interface raises the catchable exception CX\_SY\_NO\_HANDLER. Exceptions of the category CX\_NO\_CHECK are always declared implicitly with the addition RESUMABLE but can also be declared explicitly with or without RESUMABLE.

Hints

-   The declaration of exceptions of the category CX\_STATIC\_CHECK is checked statically in the syntax check. For exceptions of the category CX\_DYNAMIC\_CHECK, the check is not performed until runtime. For exceptions of the category CX\_NO\_CHECK no check is performed.
-   Exceptions of the category CX\_NO\_CHECK can be declared explicitly with or without the addition RESUMABLE. Implicitly the addition RESUMABLE is always added. An explicit declaration of an exception of the category CX\_NO\_CHECK has no effect but it documents for the user of a method the probability that this exception can be expected. Furthermore, it allows the category of existing exceptions to be changed into CX\_NO\_CHECK without leading to a syntax error.
-   In a method in which class-based exceptions are declared using the addition RAISING, the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcatch_sys.htm) cannot be used to handle [catchable runtime errors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"). Instead, the catchable exceptions assigned to the runtime errors should be handled in a [TRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptry.htm) control structure.
-   An exception that is raised as resumable in the method with [RAISE RESUMABLE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm) should also be declared as resumable in the interface, otherwise the exception would lose this property when the method is exited.
-   See also [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_procedures.htm).

Example

In the class math, all exceptions that are represented by the class CX\_SY\_ARITHMETIC\_ERROR and its subclasses are propagated from within the method divide\_1\_by. If, for example, the input parameter operand is filled during the call with the value 0, the exception CX\_SY\_ZERODIVIDE is raised, propagated, and can be handled by the caller in a TRY control structure 8, as shown in the example.

CLASS math DEFINITION.
  PUBLIC SECTION.
    METHODS divide\_1\_by
       IMPORTING operand TYPE i
       RETURNING value(result) TYPE decfloat34
       RAISING   cx\_sy\_arithmetic\_error.
ENDCLASS.
CLASS math IMPLEMENTATION.
  METHOD divide\_1\_by.
    result = 1 / operand.
  ENDMETHOD.
ENDCLASS.
DATA oref TYPE REF TO math.
DATA exc  TYPE REF TO cx\_sy\_arithmetic\_error.
DATA res  TYPE decfloat34.
DATA text TYPE string.
START-OF-SELECTION.
  CREATE OBJECT oref.
  TRY.
      res = oref->divide\_1\_by( 4 ).
      text = res.
    CATCH cx\_sy\_arithmetic\_error INTO exc.
      text = exc->get\_text( ).
  ENDTRY.
  MESSAGE text TYPE 'I'.

Addition 5   

... EXCEPTIONS exc1 exc2 ...

Effect

The addition EXCEPTIONS is used to define a list of [non-class-based exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_non_class.htm) exc1 exc2... that can be raised by the statements [RAISE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_raising.htm) in the method. The names exc1 exc2 ... for the exceptions that are to be defined are freely definable and specified directly. Exceptions defined in this way are bound to the method, similar to formal parameters, and cannot be propagated.

If such an exception is raised in a method and no return code was assigned to it with the addition EXCEPTIONS in the [method call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls.htm), a runtime error occurs.

The additions RAISING and EXCEPTIONS cannot be used simultaneously. In addition, in a method in whose interface non-class-based exceptions are defined, the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expressions.htm) must not be used to raise class-based exceptions.

Programming Guideline

[Using Class-Based Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_exception_guidl.htm "Guideline")

For new developments, it is recommended that class-based exceptions that are independent of individual methods are used.

Example

In the class math, a non-class-based exception arith\_error is defined for the method divide\_1\_by that is raised in the method by the statement RAISE if an arithmetic error occurs. If, for example, the input parameter operand is filled with the value 0 during the call, the exception arith\_error is raised in the internal method handling of exception CX\_SY\_ZERODIVIDE and handled after the call of the method by evaluating sy-subrc. The method cannot be called functionally due to the handling of the classic exception.

CLASS math DEFINITION.
  PUBLIC SECTION.
    METHODS divide\_1\_by
       IMPORTING operand TYPE i
       RETURNING VALUE(result) TYPE decfloat34
       EXCEPTIONS arith\_error.
ENDCLASS.
CLASS math IMPLEMENTATION.
  METHOD divide\_1\_by.
    TRY.
        result = 1 / operand.
      CATCH cx\_sy\_arithmetic\_error.
        RAISE arith\_error.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
DATA res  TYPE decfloat34.
DATA oref TYPE REF TO math.
START-OF-SELECTION.
CREATE OBJECT oref.
oref->divide\_1\_by( EXPORTING  operand = 4
                   RECEIVING  result  = res
                   EXCEPTIONS arith\_error = 4 ).
IF sy-subrc = 0.
  cl\_demo\_output=>display\_data( res ).
ELSE.
  cl\_demo\_output=>display\_text( 'Arithmetic error!' ).
ENDIF.