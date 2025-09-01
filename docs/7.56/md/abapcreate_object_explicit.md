---
title: "CREATE OBJECT, TYPE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_shortref.htm) Syntax CREATE OBJECT oref area_handle(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_area_handle.htm) TYPE  class  parameter_list(https://he
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_explicit.htm"
abapFile: "abapcreate_object_explicit.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abapcreate", "object", "explicit"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_objects.htm) →  [CREATE OBJECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object.htm) → 

CREATE OBJECT, TYPE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_shortref.htm)

Syntax

CREATE OBJECT oref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_area_handle.htm)*\]*
                   TYPE *{* class  *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_parameters.htm)*\]* *}*
                      *|* *{* (name) *\[* [parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_parameters.htm)*|* [parameter\_tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_para_tables.htm)*\]* *}*.

Effect

Creation of an instance of an explicitly specified class. A [concrete](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconcrete_glosry.htm "Glossary Entry") class that is more specific than or identical to the static type of the object reference variable oref can be specified. The reference variable oref can be a class reference variable or an interface reference variable. The name of the class can be specified as follows:

-   class
    
    Direct static specification as class.
    
-   (name)
    
    Specification as the content of a character-like data object name. The data object name must contain the name of the class in uppercase letters when the statement is executed. The class name in name can also be an [absolute type name](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"). The following can be specified for name:
    
    -   Literal or constant
        
        If the data object name is specified as a character literal or as a constant, it can be evaluated statically and the specified class is recognized as the used object.
        
    -   Variable
        
        If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.
        
    
    When the statement is executed, name is not evaluated until runtime (in both cases).
    

The class must be usable at the current position:

-   The addition [CREATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) of the class definition must allow objects to be created.
-   The package check must allow an object of a global class to be created.

Hints

-   If the class is specified dynamically, the parameters can either be specified statically in [parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_parameters.htm) or dynamically in [parameter\_tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_object_para_tables.htm).
-   When a class is used, the [instance operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_new.htm) acts like the statement CREATE OBJECT oref TYPE class and can be used in [general expression positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). The dynamic specification of name is not possible here.

Security Hint

Dynamic object creation can present a serious security risk if used incorrectly. Names of classes that are passed to a program from the outside must be checked thoroughly before being used in dynamic statements. The system class CL\_ABAP\_DYN\_PRG, for example, is used to do this. See [Dynamic Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_call_scrty.htm).

Example

Creation of an instance of a class cls using an explicit reference to the class. The static type of the reference variable is the root class object and is therefore more general than any other class. Components must be accessed dynamically or a cast must be performed as shown here.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE string VALUE 'Object'.
ENDCLASS.
DATA oref TYPE REF TO object.
CREATE OBJECT oref TYPE cls.
cl\_demo\_output=>display( CAST cls( oref ) ).