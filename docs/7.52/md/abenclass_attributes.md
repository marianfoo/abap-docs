  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Classes](javascript:call_link\('abenclasses.htm'\)) →  [Components of Classes](javascript:call_link\('abenclass_components.htm'\)) → 

Class Attributes

Attributes are internal data objects of any ABAP data type within a class. The content of the attributes specifies the state of the object. Reference variables can also be defined, which can then be used to create and address objects. This allows objects to be accessed within classes.

Attributes are defined in the declaration part of a class. Public attributes are completely visible from outside the class and as such are part of the interface between objects and their consumers. To encapsulate the state of the object, protected, package-visible, or private attributes must be used. The modifiability of non-private attributes can also be restricted using the addition [READ-ONLY](javascript:call_link\('abapdata_options.htm'\)) in the declaration.

-   [Instance Attributes](#abenclass-attributes-1--------static-attributes---@ITOC@@ABENCLASS_ATTRIBUTES_2)

-   [Data Types of Attributes](#abenclass-attributes-3--------boxed-components---@ITOC@@ABENCLASS_ATTRIBUTES_4)

Instance Attributes

The content of instance attributes forms the instance-specific state of the object. Instance attributes are declared using the [DATA](javascript:call_link\('abapdata.htm'\)) statement. The addition [COMMON PART](javascript:call_link\('abapdata_common.htm'\)) cannot be used in classes.

Static Attributes

The content of static attributes forms the instance-independent state of the object, which is valid for all instances of the class. Static attributes are available once for each class. They are declared using the statement [CLASS-DATA](javascript:call_link\('abapclass-data.htm'\)) and are retained throughout the entire runtime. All the objects within a class can access its static attributes. Changes to a static attribute in an object are visible to all other objects within that class.

Data Types of Attributes

The data types of all attributes including the instance attributes and in particular the [bound data types](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry") belong to the static properties of a class. Therefore, in a LIKE addition, the class component selector or reference variables can be used to refer to visible attributes of a class, without first creating an object. In this way, the access to the properties of the public static attributes of global classes is possible in each program.

Example

Reference to the data type of an instance attribute attr of a global class cl\_global.

DATA dref TYPE REF TO cl\_global.
DATA:  f1 LIKE cl\_global=>attr,
       f2 LIKE dref->attr.

Boxed Components

Attributes declared as structures can be declared as [static boxes](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry") using the addition [BOXED](javascript:call_link\('abapdata_boxed.htm'\)), like substructures of nested structures. In static boxes, [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry") causes less memory to be used for little used structures of much used objects. A static box used as a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") is a deep component administered using an internal reference, like strings and internal tables.