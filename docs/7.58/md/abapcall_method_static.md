  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20METHOD%2C%20Static%20Method%20Call%20%28Obsolete%29%2C%20ABAPCALL_METHOD_STATIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

CALL METHOD, Static Method Call (Obsolete)

[Short Reference](javascript:call_link\('abapcall_method_shortref.htm'\))

Obsolete Syntax

CALL METHOD *{* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( )
            *|* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( a )
            *|* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( p1 = a1 p2 = a2 ... )
            *|* [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\))( [*\[*parameter\_list*\]*](javascript:call_link\('abapcall_method_parameters.htm'\)) ) *}*.

CALL METHOD   [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)) [*\[*parameter\_list*\]*](javascript:call_link\('abapcall_method_parameters.htm'\)).

Effect

Both statements have the same semantics and call the method that is specified statically with the name [meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)).

-   The first statement prefixes the [standalone method call](javascript:call_link\('abapcall_method_static_short.htm'\)) with a CALL METHOD.
-   The second statement does not have any parentheses for filling the parameter interface. Instead, either an explicit [parameter list](javascript:call_link\('abapcall_method_parameters.htm'\)) is specified or no parameter list at all.

In the second variant without parentheses, no [chained method calls](javascript:call_link\('abenchained_method_call_glosry.htm'\) "Glossary Entry") are possible and the operators [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) and [CAST](javascript:call_link\('abenconstructor_expression_new.htm'\)) cannot be used to specify the method.

Hints

-   The static method call described here must not be confused with the call of [static methods](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry"). A static method call is the static specification of an [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") or a static method. In addition, there is the [dynamic method call](javascript:call_link\('abenmethod_calls_dynamic.htm'\)), for which the methods are specified dynamically.
    
    The statement CALL METHOD is now only intended for [dynamic method calls](javascript:call_link\('abenmethod_calls_dynamic.htm'\)) and distinguishes them clearly from static calls.
    
-   CALL METHOD is [no longer recommended](javascript:call_link\('abenmethod_call_guidl.htm'\) "Guideline") for [static method calls](javascript:call_link\('abenmethod_calls_static.htm'\)).
    -   It is not necessary to prefix the [recommended syntax](javascript:call_link\('abapcall_method_static_short.htm'\)) with CALL METHOD since this would make programs harder to read.
    -   The syntax without parentheses is based on [function module calls](javascript:call_link\('abapcall_function_general.htm'\)) and is obsolete. The syntax involving parentheses, however, standardizes both standalone and functional method calls.

Example

The three method calls in the following source code section have the same meaning. The first two calls are the obsolete variants with CALL METHOD: one without parentheses and one with. The third call is the recommended variant without CALL METHOD.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something IMPORTING p1       TYPE i
                                   p2       TYPE i
                         EXPORTING p3       TYPE i
                                   p4       TYPE i
                         RETURNING VALUE(r) TYPE i.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    FINAL(oref) = NEW demo( ).
    CALL METHOD oref->do\_something
      EXPORTING
        p1 = 333
        p2 = 444
      IMPORTING
        p3 = FINAL(a1)
        p4 = FINAL(a2)
      RECEIVING
        r  = FINAL(a3).
    CALL METHOD oref->do\_something(
      EXPORTING
        p1 = 333
        p2 = 444
      IMPORTING
        p3 = FINAL(b1)
        p4 = FINAL(b2)
      RECEIVING
        r  = FINAL(b3) ).
    oref->do\_something(
      EXPORTING
        p1 = 333
        p2 = 444
      IMPORTING
        p3 = FINAL(c1)
        p4 = FINAL(c2)
      RECEIVING
        r  = FINAL(c3) ).
  ENDMETHOD.
ENDCLASS.