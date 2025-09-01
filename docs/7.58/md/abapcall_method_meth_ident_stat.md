  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [Method Calls](javascript:call_link\('abenmethod_calls.htm'\)) →  [Static Method Calls](javascript:call_link\('abenmethod_calls_static.htm'\)) →  [meth( ... ), Standalone Method Call](javascript:call_link\('abapcall_method_static_short.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20meth%28%20...%20%29%2C%20Static%20Method%20Specification%2C%20ABAPCALL_METHOD_METH_IDENT_STAT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

meth( ... ), Static Method Specification

[Short Reference](javascript:call_link\('abapcall_method_shortref.htm'\))

Syntax

... meth
  *|* oref->meth
  *|* class=>meth
  *|* [super->meth](javascript:call_link\('abapcall_method_meth_super.htm'\)) ...

Alternatives:

[1\. ... meth ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... oref->meth ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... class=>meth ...](#!ABAP_ALTERNATIVE_3@3@)

Effect

These names are used for to specify methods statically, where meth is a valid name for the method in the current context. A special case of specifying methods statically is the specification after the pseudo reference [super](javascript:call_link\('abapcall_method_meth_super.htm'\)) in methods of subclasses.

Hint

The name of a method can be the name of the method declared in [METHODS](javascript:call_link\('abapmethods.htm'\)), a name composed using the [interface component selector](javascript:call_link\('abeninterface_comp_selector_glosry.htm'\) "Glossary Entry"), or an [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry").

Alternative 1   

... meth ...

Effect

Can be specified in method implementations for any method meth of the same class. In instance methods, meth is a short form of me->meth, where me is the [self-reference](javascript:call_link\('abenself_reference_glosry.htm'\) "Glossary Entry").

Example

Call of method meth2 from another method meth1.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS meth1.
  PRIVATE SECTION.
    METHODS meth2.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth1.
    ...
    meth2( ).
    ...
  ENDMETHOD.
  METHOD meth2.
    ...
  ENDMETHOD.
ENDCLASS.

Alternative 2   

... oref->meth ...

Effect

Can be specified in processing blocks in which any method meth is visible. Here, oref contains an object reference to an object that contains the method as a component. The following can be specified for oref:

-   A reference variable
-   A single or chained [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") whose result is a reference variable
-   A [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") with a [constructor operator](javascript:call_link\('abenconstructor_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\))

This applies to both [standalone method calls](javascript:call_link\('abapcall_method_static_short.htm'\)) and [functional method calls](javascript:call_link\('abapcall_method_functional.htm'\)).

Example

Call of the instance method meth via a temporary reference variable created using the [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) operator.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    METHODS meth.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD meth.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    NEW demo( )->meth( ).
  ENDMETHOD.
ENDCLASS.

Alternative 3   

... class=>meth ...

Effect

Can be specified in processing blocks in which a [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") meth is visible, where class is one of the classes allowed by the package check that contains the method as a [static component](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry").

Example

Call of the static method meth using the name of the class.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD meth.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    demo=>meth( ).
  ENDMETHOD.
ENDCLASS.