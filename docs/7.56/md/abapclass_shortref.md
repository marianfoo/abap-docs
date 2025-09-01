  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CLASS - Short Reference

[Reference](javascript:call_link\('abapclass_definition.htm'\))

Syntax Forms

Declaration Part

CLASS class DEFINITION *\[*INHERITING FROM superclass*\]*
                       *\[*ABSTRACT*\]*
                       *\[*FINAL*\]*
                       *\[*CREATE *{*PUBLIC*|*PROTECTED*|*PRIVATE*}**\]*
                       *\[*SHARED MEMORY ENABLED*\]*
                       *\[*FOR BEHAVIOR OF bdef*\]*
                       *\[*FOR TESTING
                         *\[*RISK LEVEL *{*CRITICAL*|*DANGEROUS*|*HARMLESS*}**\]*
                         *\[*DURATION   *{*SHORT*|*MEDIUM*|*LONG*}**\]* *\]*
                       *\[**\[*GLOBAL*\]* FRIENDS *\[*class1 class2 ...*\]*
                                         *\[*intf1 intf2 ...*\]* *\]*.
  *\[*PUBLIC SECTION.
    *\[*components*\]**\]*
  *\[*PROTECTED SECTION.
    *\[*components*\]**\]*
  *\[*PRIVATE SECTION.
    *\[*components*\]**\]*
ENDCLASS.

Implementation Part

CLASS class IMPLEMENTATION.
  implementations
ENDCLASS.

Effect

Declares and implements a class class. In the declaration part, the components components of a class are declared in the [visibility sections](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") [PUBLIC](javascript:call_link\('abappublic.htm'\)), [PROTECTED](javascript:call_link\('abapprotected.htm'\)), and [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)), using ALIASES, *\[*CLASS-*\]*DATA, *\[*CLASS-*\]*METHODS, and *\[*CLASS-*\]*EVENTS. In the implementation part, all the [concrete](javascript:call_link\('abenconcrete_glosry.htm'\) "Glossary Entry") methods declared in the declaration part between METHOD and ENDMETHOD are implemented.

Additions

-   [INHERITING FROM superclass](javascript:call_link\('abapclass_options.htm'\))
    Defines class as a subclass of superclass.
-   [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))
    Defines class as an abstract class, which cannot be instantiated.
-   [FINAL](javascript:call_link\('abapclass_options.htm'\))
    Defines class as a final class from which subclasses cannot be derived.
-   [CREATE *{*PUBLIC*|*PROTECTED*|*PRIVATE*}*](javascript:call_link\('abapclass_options.htm'\))
    Specifies whether the class class can be instantiated as [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry"), [protected](javascript:call_link\('abenprotected_glosry.htm'\) "Glossary Entry"), or in its package as [private](javascript:call_link\('abenprivate_glosry.htm'\) "Glossary Entry").
-   [SHARED MEMORY ENABLED](javascript:call_link\('abapclass_options.htm'\))
    Specifies that instances of the class can be stored in [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry").
-   [FOR BEHAVIOR OF bdef](javascript:call_link\('abapclass_for_behavior_of.htm'\))
    Defines the global class of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for the [CDS behavior definition (BDEF)](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") specified in bdef .
-   [FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\))
    Defines a [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") for [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry"). The additions determine the test properties.
-   [*\[*GLOBAL*\]* FRIENDS *\[*class1 class2 ...*\]* *\[* intf2 ...*\]*](javascript:call_link\('abapclass_options.htm'\))
    Describes other classes class1 class2 ... or interfaces intf1 intf2 ... as [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry"), which are allowed to access all components of class.