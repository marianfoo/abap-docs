  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Classes](javascript:call_link\('abenclasses.htm'\)) →  [Components of Classes](javascript:call_link\('abenclass_components.htm'\)) → 

Attributes of Classes

Attributes are internal data objects of any ABAP data type within a class. The content of the attributes specifies the state of the object. Reference variables can also be defined, which can then be used to create and address objects. This allows objects to be accessed within classes.

Attributes are defined in the declaration part of a class. Public attributes are visible from outside the class without restrictions and as such are part of the interface between objects and their consumers. To encapsulate the state of the object, protected, package-visible, or private attributes must be used. The modifiability of non-private attributes can also be restricted using the addition [READ-ONLY](javascript:call_link\('abapdata_options.htm'\)) in the declaration.

-   [Instance Attributes](#@@ITOC@@ABENCLASS_ATTRIBUTES_1)

-   [Static Attributes](#@@ITOC@@ABENCLASS_ATTRIBUTES_2)

-   [Data Types of Attributes](#@@ITOC@@ABENCLASS_ATTRIBUTES_3)

-   [Boxed Components](#@@ITOC@@ABENCLASS_ATTRIBUTES_4)

Instance Attributes

The content of instance attributes represents the instance-dependent state of the object. Instance attributes are declared using the [DATA](javascript:call_link\('abapdata.htm'\)) statement. The addition [COMMON PART](javascript:call_link\('abapdata_common.htm'\)) cannot be used in classes.

Note

The attempt to access an instance attribute via an initial [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry"), in contrast to the call of an instance method, results in an exception that is not catchable.

Static Attributes

The content of static attributes represents the non-instance-independent state of the object, which is valid for all instances of the class. Static attributes exist once for each class. They are declared using the statement [CLASS-DATA](javascript:call_link\('abapclass-data.htm'\)) and are preserved throughout the entire runtime. All the objects within a class can access its static attributes. Changes to a static attribute in an object are visible to all other objects within that class.

Data Types of Attributes

The data types of all attributes, including the instance attributes and in particular the [bound data types](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry"), are part of the static properties of a class. Therefore, in a LIKE addition, the class component selector or reference variables can be used to reference visible attributes of a class, without first creating an object. In this way, the public static attributes of global classes can be accessed in each program.

Example

References the data type of an instance attribute attr of a global class cl\_global.

DATA dref TYPE REF TO cl\_global.
DATA:  f1 LIKE cl\_global=>attr,
       f2 LIKE dref->attr.

Boxed Components

Like substructures of nested structures, attributes declared as structures can be declared as [static boxes](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry") using the addition [BOXED](javascript:call_link\('abapdata_boxed.htm'\)). In static boxes, [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry") causes less memory to be used for little used structures of frequently used objects. A static box used as a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") is a deep component managed using an internal reference, like strings and internal tables.