  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Classes](javascript:call_link\('abenclasses.htm'\)) →  [Components of classes](javascript:call_link\('abenclass_components.htm'\)) → 

Data Types and Constants of Classes

-   [Data Types](#abenclass-types-constants-1--------standalone-types---@ITOC@@ABENCLASS_TYPES_CONSTANTS_2)

-   [Bound data types](#abenclass-types-constants-3--------constants---@ITOC@@ABENCLASS_TYPES_CONSTANTS_4)

Data Types

Standalone types

The [TYPES](javascript:call_link\('abaptypes.htm'\)) statement can be used to define any number of self-defined ABAP data types within a class. Types are not instance-specific and only exist once for all the objects in the class.

In particular, it is possible to define data types in the public visibility section of global classes, which makes the use of [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") in this context obsolete.

Bound data types

[Bound data types](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry") that occur as properties of instance attributes or static attributes are also considered to be static attributes of a class. After a LIKE addition, the class name can be used to access the properties of instance attributes (exceptions to this rule are the statements ASSIGN ... CASTING and SELECT-OPTIONS ... FOR). In addition, a reference variable can be used with an object component selector without the object having previously been created.

Constants

Constants are special [static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry"), whose values are specified when they are declared and which cannot be changed later. Constants are declared using the statement [CONSTANTS](javascript:call_link\('abapconstants.htm'\)). Constants are not instance-specific and exist only once for all the objects in a class.

In particular, it is possible to define constants in the public visibility section of global classes, which makes the usage of [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") in this context obsolete.