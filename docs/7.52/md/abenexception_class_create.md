---
title: "Creating Exception Classes"
description: |
  Exception classes can be defined globally in Class Builder(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_builder_glosry.htm 'Glossary Entry') or locally in a program. The names of global exception classes are prefixed with CX_ or, in the case of exception classes created in
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_class_create.htm"
abapFile: "abenexception_class_create.htm"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "exception-handling", "abenexception", "create"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm) →  [Exception Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_classes.htm) → 

Creating Exception Classes

Exception classes can be defined globally in [Class Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_builder_glosry.htm "Glossary Entry") or locally in a program. The names of global exception classes are prefixed with CX\_ or, in the case of exception classes created in customer systems, YCX\_ or ZCX\_. There is a set of predefined global exception classes, such as those prefixed with CX\_SY\_, whose exceptions are raised in exception situations in the runtime environment.

All exception classes inherit the following instance methods from CX\_ROOT:

-   GET\_TEXT and GET\_LONGTEXT return the [exception text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts.htm) (short text and long text) as return values of type string. These methods are defined in the interface IF\_MESSAGE implemented in CX\_ROOT and can be addressed using the identically named alias name for the class.

-   GET\_SOURCE\_POSITION returns the program name, the name of the [include program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") if applicable, and the line number of the statement that raised the exception.

All exception classes inherit the following instance attributes from CX\_ROOT:

-   TEXTID of type SCX\_T100KEY for a key for the database table T100 or of the type SOTR\_CONC for a key for OTR (Online Text Repository) (that defines the [exception text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts.htm)). This is normally set by the constructor and evaluated using GET\_TEXT.

-   PREVIOUS of reference type CX\_ROOT, which can contain a reference to a previous exception. This is normally set by the constructor.

-   IS\_RESUMABLE of type ABAP\_BOOL, which is used in a [CATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_try.htm) block or [CLEANUP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcleanup.htm) block to show whether the exception is [resumable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresumable_exception_glosry.htm "Glossary Entry"), that is whether a CATCH block can be exited using [RESUME](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapresume.htm).

For global exception classes, Class Builder generates a non-modifiable instance constructor that has optional input parameters for all non-private attributes and that sets these attributes to the value of the input parameters. The ID of the required exception text can be passed to TEXTID. In the case of local exception classes, there are no special rules for the instance constructor.

Notes

-   Instances of exception classes are generally created when exceptions are raised, but can also be instantiated using [CREATE OBJECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_object.htm).

-   The instance constructor of an exception class should not raise any exceptions. However, if an exception is raised in the instance constructor after an exception was raised during instantiation of the exception class, and the exception cannot be handled there, this or (if propagation is unsuccessful) the exception CX\_SY\_NO\_HANDLER replaces the exception originally raised.

-   Additional methods and attributes can be defined in exception classes, for example to transport additional information about an error situation to the handler. The user-defined attributes should be read-only (READ-ONLY).