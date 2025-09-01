  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Classes](javascript:call_link\('abenclasses.htm'\)) →  [ABAP Objects - Components of Classes](javascript:call_link\('abenclass_components.htm'\)) → 

ABAP Objects - Data Types and Constants of Classes

-   [Data Types](#abenclass-types-constants-1-----------standalone-types---@ITOC@@ABENCLASS_TYPES_CONSTANTS_2)
    -   [Bound Data Types](#abenclass-types-constants-3-------constants---@ITOC@@ABENCLASS_TYPES_CONSTANTS_4)

Data Types

Standalone Types

The [TYPES](javascript:call_link\('abaptypes.htm'\)) statement can be used to declare any number of self-defined ABAP data types within a class. Types are instance-independent and only exist once for all the objects of a class.

In particular, it is possible to define data types in the public visibility section of global classes, which makes the use of [type pools](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") in this context obsolete.

Bound Data Types

[Bound data types](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry") that occur as properties of instance or static attributes also belong to the static properties of a class. After a LIKE addition, the class name can be used to access the properties of instance attributes (exceptions to this rule are the statements ASSIGN ... CASTING and SELECT-OPTIONS ... FOR). In addition, a reference variable can be used with an object component selector without first creating the object.

Constants

Constants are special [static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry"), whose values are specified when they are declared, and which cannot be changed. Constants are declared using the statement [CONSTANTS](javascript:call_link\('abapconstants.htm'\)). Constants are instance-independent and exist only once for all the objects of a class.

In particular, it is possible to declare constants in the public visibility section of global classes, which makes use of [type pools](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") in this context obsolete.