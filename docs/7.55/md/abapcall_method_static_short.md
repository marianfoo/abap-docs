  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [Method Calls](javascript:call_link\('abenmethod_calls.htm'\)) →  [Static Method Calls](javascript:call_link\('abenmethod_calls_static.htm'\)) → 

meth( ... ), Standalone Method Call

[Short Reference](javascript:call_link\('abenmeth_call_shortref.htm'\))

Syntax

*{* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( )
*|* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( a )
*|* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( p1 = a1 p2 = a2 ... )
*|* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( *\[*[EXPORTING  p1 = a1 p2 = a2 ...](javascript:call_link\('abapcall_method_parameters.htm'\))*\]*
        *\[*[IMPORTING  p1 = a1 p2 = a2 ...](javascript:call_link\('abapcall_method_parameters.htm'\))*\]*
        *\[*[CHANGING   p1 = a1 p2 = a2 ...](javascript:call_link\('abapcall_method_parameters.htm'\))*\]*
        *\[*[RECEIVING  r  = a](javascript:call_link\('abapcall_method_parameters.htm'\))*\]*
        *\[*[EXCEPTIONS *\[*exc1 =n1 exc2 = n2 ...*\]*](javascript:call_link\('abapcall_method_parameters.htm'\))
                    *\[*[OTHERS = n\_others*\]**\]*](javascript:call_link\('abapcall_method_parameters.htm'\)) ) *}*.

Alternatives:

[1\. meth( ).](#!ABAP_ALTERNATIVE_1@1@)
[2\. meth( a ).](#!ABAP_ALTERNATIVE_2@2@)
[3\. meth( p1 = a1 p2 = a2 ... ).](#!ABAP_ALTERNATIVE_3@3@)
[4\. meth( EXPORTING ...  IMPORTING ... CHANGING ... RECEIVING ... ).](#!ABAP_ALTERNATIVE_4@4@)

Effect

Static call of a method specified as a standalone statement using the name [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)). The [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of the method is filled with the actual parameters in the parentheses. In the first alternative, no formal parameters are supplied with actual parameters. The second and third alternatives are short forms for methods where only the input parameters are supplied with actual parameters. The fourth alternative allows all possible formal parameters to be supplied with actual parameters and non-class-based exceptions to be handled.

Hint

The static method call described here must not be confused with the call of [static methods](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry"). A static method call is the static specification of an [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") or a static method. In addition, there is the [dynamic method call](javascript:call_link\('abenmethod_calls_dynamic.htm'\)), for which the methods are specified dynamically.

Alternative 1

meth( ).

Effect

Call of the method [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)) without passing parameters. The method cannot have any or can have only optional input parameters or input/output parameters. No actual parameters are assigned to any output parameters or to a return value. before

Example

Call of a method without parameters.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  c1=>do\_something( ).

Alternative 2

meth( a ).

Effect

This is the short form of:

meth( [EXPORTING](javascript:call_link\('abapcall_method_parameters.htm'\)) p = a ).

The method [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)) can have the following parameters:

-   Either exactly one non-optional input parameter p and any number of optional input parameters

-   Or only optional input parameters from which p is defined as a preferred parameter using PREFERRED PARAMETER

The value of a is passed to the non-optional input parameter or to the preferred parameter. The actual parameter a can be specified as a data object, a function, or an expression.

The method can only have optional input/output parameters. No actual parameter is assigned to these input/output parameters, any output parameters, or return values.

Example

Call of a method with an input parameter.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something IMPORTING p TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something .
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  c1=>do\_something( 333 ).

Alternative 3

meth( p1 = a1 p2 = a2 ... ).

Effect

This is the short form of:

meth( [EXPORTING](javascript:call_link\('abapcall_method_parameters.htm'\)) p1 = a1 p2 = a2 ... ).

The method [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)) can have any number of input parameters p1, p2, ... that are supplied with the actual parameters a1, a2, .... The actual parameters can be specified as a data object, a function, or an expression.

The method can only have optional input/output parameters. No actual parameter is assigned to these input/output parameters, any output parameters, or return values.

Example

Call of a method with two input parameters.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something IMPORTING p1 TYPE i
                                         p2 TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something .
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  c1=>do\_something( p1 = 333 p2 = 444 ).

Alternative 4

meth( EXPORTING ...  IMPORTING ... CHANGING ... RECEIVING ... ).

Effect

Call of the method [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)) with explicit [parameter passing](javascript:call_link\('abapcall_method_parameters.htm'\)) and the option of handling non-class-based exceptions. This format can be used to call methods with any number of parameter interfaces.

Example

Call of a method with explicit parameter passing.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something IMPORTING p1 TYPE i
                                         p2 TYPE i
                               EXPORTING p3 TYPE i
                                         p4 TYPE i
                               RETURNING VALUE(r) TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something .
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  c1=>do\_something( EXPORTING p1 = 333
                              p2 = 444
                    IMPORTING p3 = DATA(a1)
                              p4 = DATA(a2)
                    RECEIVING r  = DATA(a3) ).

Continue
[meth( ... ), Static Method Specification](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))
[super->meth( ... )](javascript:call_link\('abapcall_method_meth_super.htm'\))