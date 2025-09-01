---
title: "CALL METHOD - Static Method Call (Obsolete)"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_shortref.htm) Obsolete Syntax CALL METHOD  static_meth(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)( )  static_meth(https://help.sap.com/doc/aba
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static.htm"
abapFile: "abapcall_method_static.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abapcall", "static"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_call_obsolete.htm) → 

CALL METHOD - Static Method Call (Obsolete)

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_shortref.htm)

Obsolete Syntax

CALL METHOD *{* [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)( )
            *|* [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)( a )
            *|* [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)( p1 = a1 p2 = a2 ... )
            *|* [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)( [*\[*parameter\_list*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm) ) *}*.

CALL METHOD   [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)  [*\[*parameter\_list*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm).

Effect

Both statements have the same semantics and call the method that is specified statically by the name [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm).

-   The first statement prefixes the [standalone method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_short.htm) with a CALL METHOD.
    
-   The second statement does not have any parentheses for passing values to the parameter interface. Instead, either an explicit [parameter list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm) is specified or no parameter list at all
    

If CALL METHOD is used for the standalone method call, no [chained method calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchained_method_call_glosry.htm "Glossary Entry") are possible and the operators [NEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm) and [CAST](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm) cannot be used to specify the method.

Note

CALL METHOD is [no longer recommended](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_call_guidl.htm "Guideline") for [static method calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls_static.htm).

-   It is not necessary to prefix the [recommended syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_short.htm) with CALL METHOD since this would make programs harder to read.
    
-   The syntax without parentheses is based on [function module calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_general.htm) and is obsolete. The syntax involving parentheses, however, standardizes both standalone and functional method calls.
    

The statement CALL METHOD is now only intended for [dynamic method calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls_dynamic.htm) and distinguishes them clearly from static calls.

Example

The three method calls in the following source code have the same meaning. The first two calls are the obsolete variants with CALL METHOD: one without parentheses and one with. The third call is the recommended variant, without CALL METHOD.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something IMPORTING p1 TYPE i
                                         p2 TYPE i
                               EXPORTING p3 TYPE i
                                         p4 TYPE i
                               RETURNING VALUE(r) TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  CALL METHOD
    c1=>do\_something
    EXPORTING
      p1 = 333
      p2 = 444
    IMPORTING
      p3 = DATA(a1)
      p4 = DATA(a2)
    RECEIVING
      r  = DATA(a3).
  CALL METHOD
    c1=>do\_something(
    EXPORTING
      p1 = 333
      p2 = 444
    IMPORTING
      p3 = DATA(b1)
      p4 = DATA(b2)
    RECEIVING
      r  = DATA(b3) ).
  c1=>do\_something(
    EXPORTING
      p1 = 333
      p2 = 444
    IMPORTING
      p3 = DATA(c1)
      p4 = DATA(c2)
    RECEIVING
      r  = DATA(c3) ).