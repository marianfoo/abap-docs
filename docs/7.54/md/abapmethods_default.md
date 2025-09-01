---
title: "METHODS - DEFAULT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_shortref.htm) Syntax METHODS meth ... DEFAULT IGNOREFAIL ... Effect The addition DEFAULT makes the explicit implementation of an interface method optional and defines a default behavior for calls of non-imple
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_default.htm"
abapFile: "abapmethods_default.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abapmethods", "default"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_ifac_components.htm) →  [Methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethods.htm) →  [METHODS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods.htm) → 

METHODS - DEFAULT

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_shortref.htm)

Syntax

METHODS meth ... DEFAULT IGNORE*|*FAIL ...

Effect

The addition DEFAULT makes the explicit implementation of an interface method optional and defines a default behavior for calls of non-implemented methods. It cannot be used in classes, only in interfaces. Any instance methods and static methods can be defined as optional except for constructors and test methods.

A class that implements an interface with the statement [INTERFACES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinterfaces.htm) can implement its optional methods, but this is not mandatory. The additions IGNORE or FAIL define the behavior that applies when an optional interface method of an object or class is called at runtime and this object or class is not implemented explicitly.

-   When a non-implemented optional interface method defined with the addition IGNORE is defined, the behavior is the same as when it is implemented with an empty body. In particular, all actual parameters are initialized that receive values from formal parameters using [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry").
    
-   Calls of a non-implemented optional interface method defined using the addition FAIL raise an exception of the class CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD. If this exception is not handled, the runtime error CALL\_METHOD\_NOT\_IMPLEMENTED occurs.
    

The default behavior defined using DEFAULT also applies to the redefinition of an inherited optional interface method using the addition [REDEFINITION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_redefinition.htm). A subclass that redefines an optional interface method does not need to implement this method explicitly. If the implementation is missing, the default behavior is applied along a path of the inheritance tree until an explicit implementation occurs.

Notes

-   The DEFAULT addition can also be used for [BAdI methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_method_glosry.htm "Glossary Entry").
    
-   The default behavior defined using DEFAULT FAIL that applies to calls of a non-implemented optional method matches the behavior that applies when a non-implemented non-optional method of a normal global interface is called. In a [BAdI interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_interface_glosry.htm "Glossary Entry") on the other hand, DEFAULT IGNORE matches the default behavior of the [CALL BADI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_badi.htm) statement.
    
-   If an optional interface method is redefined in a subclass, it needs to be implemented explicitly in this subclass as well. The default behavior does not usually meet expectations here.
    

Example

The class class implements the interface intf without implementing its optional methods. A call of the non-implemented static method m1 raises a (handled) exception due to the addition FAIL. A call of the non-implemented instance method m2 does not execute any statements due to the addition IGNORE, but does set their return value r to 0.

INTERFACE intf.
  CLASS-METHODS m1 DEFAULT FAIL.
  METHODS       m2 DEFAULT IGNORE
                   RETURNING VALUE(r) TYPE i.
ENDINTERFACE.
CLASS class DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
    ALIASES m1 FOR intf~m1.
    ALIASES m2 FOR intf~m2.
ENDCLASS.
CLASS class IMPLEMENTATION.
ENDCLASS.
DATA oref TYPE REF TO class.
START-OF-SELECTION.
  TRY.
      class=>m1( ).
    CATCH cx\_sy\_dyn\_call\_illegal\_method INTO DATA(exc).
      cl\_demo\_output=>display( exc->get\_text( ) ).
  ENDTRY.
  cl\_demo\_output=>display( NEW class( )->m2( ) ).