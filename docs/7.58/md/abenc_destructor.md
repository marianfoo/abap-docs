  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses.htm) →  [ABAP Objects - Components of Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_components.htm) →  [ABAP Objects - Methods of Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_methods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20The%20C%20Destructor%2C%20ABENC_DESTRUCTOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - The C Destructor

A destructor is a special method called that is automatically when an object is deleted. Destructors can be used to release resources used by the object that are not covered by garbage collection. Currently, ABAP Objects does not have a destructor in which a regular ABAP processing block can be programmed.

For special cases and for internal use only, the special predefined instance method destructor can be declared in the public visibility section of a class:

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS destructor *\[*NOT AT END OF MODE*\]*.
    ...
ENDCLASS.

Currently, only one statement can be used in the implementation of the method destructor:

CLASS class IMPLEMENTATION.
  METHOD destructor.
    SYSTEM-CALL c-destructor 'name' USING attr1 attr2 ...
  ENDMETHOD.
ENDCLASS.

The destructor therefore allows the calling of a C routine name when an object is deleted. The routine must exist in the ABAP kernel so that no syntax error occurs.

If the optional addition NOT AT END OF MODE is used, the destructor is not executed if the [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") is closed regardless. Usually a destructor is also executed at the end of an internal session and should mainly be used to release bound external resources that are not released automatically when the session is closed.

When the C routine is called, attributes attr1, attr2, ... of the class of any complex data type can be passed to this routine. If multiple parameters are to be passed, an appropriate data type must be defined.

During the lifetime of an internal session, the time when the method destructor is executed depends on when [Garbage Collector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengarbage_collector_glosry.htm "Glossary Entry") is started. When an internal session is closed, the destructors that are not declared using the addition NOT AT END OF MODE are executed for all objects. In cases of inheritance, the destructors of the subclasses are executed before the destructors of the superclasses.