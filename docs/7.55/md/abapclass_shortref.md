  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  C

CLASS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_definition.htm)

Syntax Forms

Declaration Part

CLASS class DEFINITION *\[*INHERITING FROM superclass*\]*
                       *\[*ABSTRACT*\]*
                       *\[*FINAL*\]*
                       *\[*CREATE *{*PUBLIC*|*PROTECTED*|*PRIVATE*}**\]*
                       *\[*SHARED MEMORY ENABLED*\]*
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

Declares and implements a class class. In the declaration part, the components components of a class are declared in the [visibility sections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvisibility_section_glosry.htm "Glossary Entry") [PUBLIC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abappublic.htm), [PROTECTED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprotected.htm), and [PRIVATE SECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprivate.htm), using ALIASES, *\[*CLASS-*\]*DATA, *\[*CLASS-*\]*METHODS, and *\[*CLASS-*\]*EVENTS. In the implementation part, all the [concrete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconcrete_glosry.htm "Glossary Entry") methods declared in the declaration part between METHOD and ENDMETHOD are implemented.

Additions

-   [INHERITING FROM superclass](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_options.htm)
    Defines class as a subclass of superclass.
    

-   [ABSTRACT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_options.htm)
    Defines class as an abstract class, which cannot be instantiated.
    

-   [FINAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_options.htm)
    Defines class as a final class from which subclasses cannot be derived.
    

-   [CREATE *{*PUBLIC*|*PROTECTED*|*PRIVATE*}*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_options.htm)
    Specifies whether the class class can be instantiated as [public](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpublic_glosry.htm "Glossary Entry"), [protected](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprotected_glosry.htm "Glossary Entry"), or in its package as [private](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprivate_glosry.htm "Glossary Entry").
    

-   [SHARED MEMORY ENABLED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_options.htm)
    Specifies that instances of the class can be stored in [shared memory](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshared_memory_glosry.htm "Glossary Entry").
    

-   [FOR TESTING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_for_testing.htm)
    Defines a [test class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_class_glosry.htm "Glossary Entry") for [ABAP Unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_unit_glosry.htm "Glossary Entry"). The additions determine the test properties.
    

-   [*\[*GLOBAL*\]* FRIENDS *\[*class1 class2 ...*\]* *\[* intf2 ...*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass_options.htm)
    Describes other classes class1 class2 ... or interfaces intf1 intf2 ... as [friends](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfriend_glosry.htm "Glossary Entry"), which are allowed to access all components of class.