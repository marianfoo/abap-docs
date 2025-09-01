---
title: "CLASS - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm) Syntax Forms Declaration Part CLASS class DEFINITION INHERITING FROM superclass ABSTRACT FINAL CREATE PUBLICPROTECTEDPRIVATE SHARED MEMORY ENABLED
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_shortref.htm"
abapFile: "abapclass_shortref.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abapclass", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS%2C%20ABAPCLASS_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLASS - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm)

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

Declares and implements a class class. In the declaration part, the components components of a class are declared in the [visibility sections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvisibility_section_glosry.htm "Glossary Entry") [PUBLIC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abappublic.htm), [PROTECTED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprotected.htm), and [PRIVATE SECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprivate.htm), using ALIASES, *\[*CLASS-*\]*DATA, *\[*CLASS-*\]*METHODS, and *\[*CLASS-*\]*EVENTS. In the implementation part, all the [concrete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconcrete_glosry.htm "Glossary Entry") methods declared in the declaration part between METHOD and ENDMETHOD are implemented.

Additions   

-   [INHERITING FROM superclass](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm)
    Defines class as a subclass of superclass.
-   [ABSTRACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm)
    Defines class as an abstract class, which cannot be instantiated.
-   [FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm)
    Defines class as a final class from which subclasses cannot be derived.
-   [CREATE *{*PUBLIC*|*PROTECTED*|*PRIVATE*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm)
    Specifies whether the class class can be instantiated as [public](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpublic_glosry.htm "Glossary Entry"), [protected](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprotected_glosry.htm "Glossary Entry"), or in its package as [private](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprivate_glosry.htm "Glossary Entry").
-   [SHARED MEMORY ENABLED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm)
    Specifies that instances of the class can be stored in [shared memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_memory_glosry.htm "Glossary Entry").
-   [FOR BEHAVIOR OF bdef](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_for_behavior_of.htm)
    Defines the global class of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") for the [CDS behavior definition (BDEF)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") specified in bdef.
-   [FOR TESTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_for_testing.htm)
    Defines a [test class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentest_class_glosry.htm "Glossary Entry") for [ABAP Unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_unit_glosry.htm "Glossary Entry"). The additions determine the test properties.
-   [*\[*GLOBAL*\]* FRIENDS *\[*class1 class2 ...*\]* *\[* intf2 ...*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm)
    Describes other classes class1 class2 ... or interfaces intf1 intf2 ... as [friends](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfriend_glosry.htm "Glossary Entry"), which are allowed to access all components of class.