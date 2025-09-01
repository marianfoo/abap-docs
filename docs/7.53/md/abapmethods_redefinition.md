---
title: "METHODS - REDEFINITION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_redefinition_shortref.htm) Syntax METHODS meth FINAL(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_abstract_final.htm) REDEFINITION. Addition: ... FINAL(#!ABAP_ONE_ADD@1@) Ef
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_redefinition.htm"
abapFile: "abapmethods_redefinition.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abapmethods", "redefinition"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_ifac_components.htm) →  [Methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethods.htm) →  [METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods.htm) → 

METHODS - REDEFINITION

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_redefinition_shortref.htm)

Syntax

METHODS meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_abstract_final.htm)*\]* REDEFINITION.

Addition:

[... FINAL](#!ABAP_ONE_ADD@1@)

Effect

This statement is possible only in subclasses and redefines an inherited instance method meth. It dictates that the method meth must be reimplemented in the implementation part of the subclass. The new implementation in the current class shadows the implementation of the superclass. The redefined method accesses the [private](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprivate_glosry.htm "Glossary Entry") components of the redefined class and not any private components of the same name in the superclass. In the redefined method, the implementation of the direct superclass can be called using [super->meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_super.htm). The redefinition is valid for the subclasses of the redefined class until the method is redefined again.

With the exception of the [instance constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_constructor.htm), meth can be specified as any non-final instance method declared in the [public](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpublic_glosry.htm "Glossary Entry") or [protected](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprotected_glosry.htm "Glossary Entry") [visibility section](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvisibility_section_glosry.htm "Glossary Entry") of a superclass of the current class. In particular, meth can be an abstract method of an abstract superclass. The [redefinition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenredefinition_glosry.htm "Glossary Entry") must happen in the same visibility section as the method declaration. The interface and the category of the method (a [general](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_general.htm) or [functional](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_functional.htm) [instance method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_method_glosry.htm "Glossary Entry") or [event handler](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_event_handler.htm)) are not changed in a redefinition. Private methods in superclasses cannot be redefined.

Notes

-   Every object reference that points to an object of a subclass, independent of its static type, addresses the redefined methods. This applies in particular to the [self reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenself_reference_glosry.htm "Glossary Entry") me->.
    
-   When an [instance constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") of a superclass is executed as part of the creation of an object, the method implementations of the superclass are always called and not the redefined methods of the subclass. Specifying the self-reference me-> does not have any affect at this time.
    
-   In the redefinition of a method of an interface, an alias name of the class defined using [ALIASES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapaliases.htm) can be specified for meth.
    
-   The explicit implementation can be omitted when redefining an optional interface method declared using [DEFAULT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_default.htm). Instead, the default behavior defined using DEFAULT applies in calls from the current subclass. This is not recommended however. The default behavior is often unwanted, particularly if an explicit implementation already exists in a preceding superclass.
    

Addition

... FINAL

A method can be redefined repeatedly along a path in the inheritance tree until the addition [FINAL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_abstract_final.htm) is used in the redefinition. The method is then final starting with the current class and can no longer be redefined in its subclasses.

Example

In this example, the method m1 of superclass c1 is redefined in subclass c2, where the original implementation is called using super->m1. Both methods use the private attribute a1 of the respective class. When calling using the reference variable oref, which has the static type c1 and the dynamic type c2, the redefined method is executed.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    METHODS m1 IMPORTING p1 TYPE string.
  PRIVATE SECTION.
    DATA a1 TYPE string VALUE \`c1: \`.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    METHODS m1 REDEFINITION.
  PRIVATE SECTION.
    DATA a1 TYPE string VALUE \`c2: \`.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    a1 = a1 && p1.
    cl\_demo\_output=>write\_data( a1 ).
  ENDMETHOD.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m1.
    super->m1( p1 ).
    a1 = a1 && p1.
    cl\_demo\_output=>write\_data( a1 ).
  ENDMETHOD.
ENDCLASS.
DATA oref TYPE REF TO c1.
START-OF-SELECTION.
  oref = NEW c2( ).
  oref->m1( \`...\` ).
  cl\_demo\_output=>display( ).