  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls_static.htm) →  [meth( ... ) - Standalone Method Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm) → 

meth( ... ) - Statically specified method

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_shortref.htm)

Syntax

... meth
  *|* oref->meth
  *|* class=>meth
  *|* [super->meth](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_meth_super.htm) ...

Alternatives:

[1\. ... meth ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... oref->meth ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... class=>meth ...](#!ABAP_ALTERNATIVE_3@3@)

Effect

These names are used for to specify methods statically, where meth is a valid name for the method in the current context. A special case of specifying methods statically is when they are specified after the pseudo reference [super](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_meth_super.htm) in methods of subclasses.

Note

The name of a method can be the name of the method declared in [METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods.htm), a name composed using the [interface component selector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_comp_selector_glosry.htm "Glossary Entry"), or an [alias name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalias_glosry.htm "Glossary Entry").

Alternative 1

... meth ...

Effect

Can be specified in method implementations for any method meth of the same class. In instance methods, meth is a short form of me->meth, where me is the [self reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenself_reference_glosry.htm "Glossary Entry").

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

Can be specified in processing blocks in which a method meth is visible. Here, oref contains an object reference to an object that contains the method as a component. The following can be specified for oref:

-   A reference variable
    
-   A single or chained [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") whose result is a reference variable
    
-   A [constructor expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") with a [constructor operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) or [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_cast.htm)
    

This applies to both [standalone method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm) and [functional method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_functional.htm).

Example

Call of instance method meth via a temporary reference variable generated with the [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) operator.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS meth.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  NEW cls( )->meth( ).

Alternative 3

... class=>meth ...

Effect

Can be specified in processing blocks in which a [static method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_method_glosry.htm "Glossary Entry") meth is visible. Here, class is one of the classes allowed by the package check that contains the method as a [static component](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_component_glosry.htm "Glossary Entry").

Example

Calls the static method meth using the name of the class.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cls=>meth( ).