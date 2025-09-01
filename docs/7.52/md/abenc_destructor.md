---
title: "The C Destructor"
description: |
  A destructor is a special method called automatically when an object is deleted. Destructors can be used to release resources used by the object that are not covered by garbage collection. Currently, ABAP Objects does not have a destructor in which a regular ABAP processing block can be programmed.
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenc_destructor.htm"
abapFile: "abenc_destructor.htm"
keywords: ["delete", "do", "if", "case", "try", "method", "class", "data", "abenc", "destructor"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) →  [Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses.htm) →  [Components of Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_components.htm) →  [Methods of Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_methods.htm) → 

The C Destructor

A destructor is a special method called automatically when an object is deleted. Destructors can be used to release resources used by the object that are not covered by garbage collection. Currently, ABAP Objects does not have a destructor in which a regular ABAP processing block can be programmed.

For special cases, and for internal use only, the predefined instance method destructor can be declared in the public visibility section of a class:

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS destructor *\[*NOT AT END OF MODE*\]*.
    ...
ENDCLASS.

Only one statement can currently be used in the implementation of the method destructor:

CLASS class IMPLEMENTATION.
  METHOD destructor.
    SYSTEM-CALL c-destructor 'name' USING attr1 attr2 ...
  ENDMETHOD.
ENDCLASS.

This means that the destructor makes it possible to call a C routine name when an object is deleted. The routine must exist in the ABAP kernel so that no syntax error occurs.

If used, the optional addition NOT AT END OF MODE dictates that the destructor is not executed if the [internal mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") is closed regardless. Usually a destructor is also executed at the end of a mode and should mainly be used to release bound external resources that are not released automatically when the mode is closed.

When the C routine is called, an attribute attr1, attr2, ... of the class of any complex data type can be passed to the routine. If multiple parameters are passed, an appropriate data type must be defined.

During the lifetime of an internal mode, the time when the method destructor is executed depends on when [Garbage Collector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengarbage_collector_glosry.htm "Glossary Entry") is started. When an internal mode is closed, the destructors not declared using the addition NOT AT END OF MODE are executed for all objects. In cases of inheritance, the destructors of the subclasses are executed before the destructors of the superclasses.