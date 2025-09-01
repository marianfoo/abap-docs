---
title: "METHOD"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_shortref.htm) Syntax METHOD meth. ... ENDMETHOD. Effect Between the statements METHOD and ENDMETHOD, the function of a method(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_glosry.htm 'Gl
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod.htm"
abapFile: "abapmethod.htm"
keywords: ["delete", "do", "if", "try", "method", "class", "data", "types", "abapmethod"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_procedures.htm) →  [Methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_methods.htm) → 

METHOD

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_shortref.htm)

Syntax

METHOD meth.
  ...
ENDMETHOD.

Effect

Between the statements METHOD and ENDMETHOD, the function of a [method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_glosry.htm "Glossary Entry") meth declared using [*\[*CLASS-*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-methods.htm)[METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods.htm) is implemented in a class. The implementation of a method is only possible in an implementation part of a class that begins with [CLASS class IMPLEMENTATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass.htm)

Local data types and data objects can be declared within the method. It is also possible to access the formal parameters of the method and all the components of all instances of its own class.

In [instance methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_method_glosry.htm "Glossary Entry"), all components of the class of the method and the instance of the method can also be addressed explicitly using the [self reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenself_reference_glosry.htm "Glossary Entry") me->, as well as using their names. In addition, all components of other instances from the class of the method can be addressed using reference variables.

A method can be called [statically](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls_static.htm) or [dynamically](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls_dynamic.htm). For static calls, both standalone and functional call forms are available. Dynamic calls are always standalone calls.

Notes

-   When a method of an interface intf is implemented, meth can be specified either as the name declared in the interface (prefixed with intf~) or as an alias name of the class defined using [ALIASES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapaliases.htm). The method must exist in the interface. If not, a syntax error occurs. If intf~ is used, only a syntax warning appears for global interfaces, so that classes are not immediately rendered invalid if an unused method is deleted from a global interface.
    
-   The addition [BY DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_by_db_proc.htm) transforms a method implemented in a database-specific language (and not in ABAP) and executed in the database system to an [AMDP method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_method_glosry.htm "Glossary Entry").
    

Example

In this example, the two methods m1 and m2 of the class c1 between METHOD and ENDMETHOD are implemented. Although the local data object a1 obscures the attribute of the same name, the attribute a1 can be addressed using me->a1.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    METHODS m1 IMPORTING p1 TYPE string.
  PRIVATE SECTION.
    DATA a1 TYPE string.
    METHODS m2.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    a1 = p1.
    m2( ).
  ENDMETHOD.
  METHOD m2.
    DATA a1 TYPE string.
    a1 = me->a1.
  ENDMETHOD.
ENDCLASS.

Continue
[METHOD - Internal Additions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_kernel_module_internal.htm)