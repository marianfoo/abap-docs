  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Classes](javascript:call_link\('abenclasses.htm'\)) →  [Components of Classes](javascript:call_link\('abenclass_components.htm'\)) →  [Methods of Classes](javascript:call_link\('abenclass_methods.htm'\)) → 

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

If used, the optional addition NOT AT END OF MODE dictates that the destructor is not executed if the [internal mode](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is closed regardless. Usually a destructor is also executed at the end of a mode and should mainly be used to release bound external resources that are not released automatically when the mode is closed.

When the C routine is called, an attribute attr1, attr2, ... of the class of any complex data type can be passed to the routine. If multiple parameters are passed, an appropriate data type must be defined.

During the lifetime of an internal mode, the time when the method destructor is executed depends on when [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry") is started. When an internal mode is closed, the destructors not declared using the addition NOT AT END OF MODE are executed for all objects. In cases of inheritance, the destructors of the subclasses are executed before the destructors of the superclasses.