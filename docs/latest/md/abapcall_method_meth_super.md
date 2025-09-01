  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [Method Calls](javascript:call_link\('abenmethod_calls.htm'\)) →  [Static Method Calls](javascript:call_link\('abenmethod_calls_static.htm'\)) →  [meth( ... ), Standalone Method Call](javascript:call_link\('abapcall_method_static_short.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20super-%3Emeth%28%20...%20%29%2C%20ABAPCALL_METHOD_METH_SUPER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

super->meth( ... )

[Short Reference](javascript:call_link\('abapcall_method_shortref.htm'\))

Syntax

... super->meth
  *|* super->constructor ...

Alternatives:

[1\. ... super->meth ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... super->constructor ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

This special form of a [static method specification](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)) can be used in methods of subclasses to call the implementation of an identically named method in the direct superclass. The superclass is addressed using the [pseudo reference](javascript:call_link\('abenpseudo_reference_glosry.htm'\) "Glossary Entry") super.

Alternative 1   

... super->meth ...

Effect

Can be specified in the [redefinition](javascript:call_link\('abenredefinition_glosry.htm'\) "Glossary Entry") of the method meth in the implementation in a subclass and calls the implementation of the method meth in the direct superclass.

A method call super->meth can be used in the same operand positions and in the same syntax forms as [oref->meth](javascript:call_link\('abapcall_method_meth_ident_stat.htm'\)), and the same rules apply to the parameter passing.

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

-   The instance constructor does not have access to the instance components of its class. The self-reference [me->](javascript:call_link\('abenme.htm'\)) cannot be used. The static components of its class can be accessed, but not with me->.
-   Before the superclass constructor is called, an instance constructor cannot be exited using statements such as RETURN or CHECK.

After the superclass constructor is called, the self-reference me-> can be used and instance components can be accessed.

The superclass constructor can only be called using super->constructor as a [standalone statement](javascript:call_link\('abapcall_method_static_short.htm'\)).

Hints

-   During the execution of a superclass constructor called using super->constructor, meth and me->meth do not address the method implementations of the subclass, but those of the superclass instead.
-   The instance constructor of the superclass must be called, even if it is not declared explicitly.
-   See also [Inheritance and Constructors](javascript:call_link\('abeninheritance_constructors.htm'\)).

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