  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_call_obsolete.htm) → 

CALL METHOD - Static Method Call (Obsolete)

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_shortref.htm)

Obsolete Syntax

CALL METHOD *{* [meth](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_meth_ident_stat.htm)( )
            *|* [meth](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_meth_ident_stat.htm)( a )
            *|* [meth](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_meth_ident_stat.htm)( p1 = a1 p2 = a2 ... )
            *|* [meth](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_meth_ident_stat.htm)( [*\[*parameter\_list*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm) ) *}*.

CALL METHOD   [meth](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_meth_ident_stat.htm)  [*\[*parameter\_list*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm).

Effect

Both statements have the same semantics and call the method that is specified statically by the name [meth](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_meth_ident_stat.htm).

-   The first statement prefixes the [standalone method call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm) with a CALL METHOD.
    
-   The second statement does not have any parentheses for passing values to the parameter interface. Instead, either an explicit [parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm) is specified or no parameter list at all
    

In the second variant without parentheses, no [chained method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchained_method_call_glosry.htm "Glossary Entry") are possible and the operators [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) and [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) cannot be used to specify the method.

Notes

-   CALL METHOD is [no longer recommended](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_call_guidl.htm "Guideline") for [static method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls_static.htm).
    

-   It is not necessary to prefix the [recommended syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm) with CALL METHOD since this would make programs harder to read.

-   The syntax without parentheses is based on [function module calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_general.htm) and is obsolete. The syntax involving parentheses, however, standardizes both standalone and functional method calls.

The statement CALL METHOD is now only intended for [dynamic method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls_dynamic.htm) and distinguishes them clearly from static calls.

-   The static method call described here is not to be confused with the call of [static methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_method_glosry.htm "Glossary Entry"). A static method call is the static specification of an [instance method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninstance_method_glosry.htm "Glossary Entry") or a static method. In addition, there is the [dynamic method call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls_dynamic.htm), for which the methods are specified dynamically.
    

Example

The three method calls in the following source code have the same meaning. The first two calls are the obsolete variants with CALL METHOD: one without parentheses and one with. The third call is the recommended variant, without CALL METHOD.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS do\_something IMPORTING p1 TYPE i
                                   p2 TYPE i
                         EXPORTING p3 TYPE i
                                   p4 TYPE i
                         RETURNING VALUE(r) TYPE i.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(oref) = NEW cls( ).
  CALL METHOD
    oref->do\_something
    EXPORTING
      p1 = 333
      p2 = 444
    IMPORTING
      p3 = DATA(a1)
      p4 = DATA(a2)
    RECEIVING
      r  = DATA(a3).
  CALL METHOD
    oref->do\_something(
    EXPORTING
      p1 = 333
      p2 = 444
    IMPORTING
      p3 = DATA(b1)
      p4 = DATA(b2)
    RECEIVING
      r  = DATA(b3) ).
  oref->do\_something(
    EXPORTING
      p1 = 333
      p2 = 444
    IMPORTING
      p3 = DATA(c1)
      p4 = DATA(c2)
    RECEIVING
      r  = DATA(c3) ).