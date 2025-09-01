---
title: "Syntax"
description: |
  ... super->meth  super->constructor ... Alternatives: 1. ... super->meth ...(#!ABAP_ALTERNATIVE_1@1@) 2. ... super->constructor ...(#!ABAP_ALTERNATIVE_2@2@) Effect This special form of a static method specification(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_super.htm"
abapFile: "abapcall_method_meth_super.htm"
keywords: ["do", "if", "try", "method", "class", "abapcall", "meth", "super"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls_static.htm) →  [meth( ... ), Standalone Method Call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_static_short.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: super->meth\( ... \), ABAPCALL_METHOD_METH_SUPER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

super->meth( ... )

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_shortref.htm)

Syntax

... super->meth
  *|* super->constructor ...

Alternatives:

[1\. ... super->meth ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... super->constructor ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

This special form of a [static method specification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_ident_stat.htm) can be used in methods of subclasses to call the implementation of an identically named method in the direct superclass. The superclass is addressed using the [pseudo reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpseudo_reference_glosry.htm "Glossary Entry") super.

Alternative 1   

... super->meth ...

Effect

Can be specified in the [redefinition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenredefinition_glosry.htm "Glossary Entry") of the method meth in the implementation in a subclass and calls the implementation of the method meth in the direct superclass.

A method call super->meth can be used in the same operand positions and in the same syntax forms as [oref->meth](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_ident_stat.htm), and the same rules apply to the parameter passing.

Example

Call of the implementation of the method meth in superclass cls1 in the redefinition of the method in the subclass cls2.

CLASS cls1 DEFINITION ABSTRACT.
  PUBLIC SECTION.
    METHODS meth.
ENDCLASS.
CLASS cls1 IMPLEMENTATION.
  METHOD meth.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS cls2 DEFINITION INHERITING FROM cls1.
  PUBLIC SECTION.
    METHODS meth REDEFINITION.
ENDCLASS.
CLASS cls2 IMPLEMENTATION.
  METHOD meth.
    super->meth( ).
    ...
  ENDMETHOD.
ENDCLASS.

Alternative 2   

... super->constructor ...

Effect

Must be specified in an instance constructor implemented in a subclass to call the instance constructor of the direct superclasses. The following restrictions apply before the superclass constructor is called:

-   The instance constructor does not have access to the instance components of its class. The self-reference [me->](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenme.htm) cannot be used. The static components of its class can be accessed, but not with me->.
-   Before the superclass constructor is called, an instance constructor cannot be exited using statements such as RETURN or CHECK.

After the superclass constructor is called, the self-reference me-> can be used and instance components can be accessed.

The superclass constructor can only be called using super->constructor as a [standalone statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_static_short.htm).

Hints

-   During the execution of a superclass constructor called using super->constructor, meth and me->meth do not address the method implementations of the subclass, but those of the superclass instead.
-   The instance constructor of the superclass must be called, even if it is not declared explicitly.
-   See also [Inheritance and Constructors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninheritance_constructors.htm).

Example

Call of the superclass constructor in instance constructor of a subclass. Without this call, a syntax error occurs.

CLASS cls1 DEFINITION.
  ...
ENDCLASS.
CLASS cls2 DEFINITION INHERITING FROM cls1.
  PUBLIC SECTION.
    METHODS constructor.
ENDCLASS.
CLASS cls2 IMPLEMENTATION.
  METHOD constructor.
    super->constructor( ).
    ...
  ENDMETHOD.
ENDCLASS.