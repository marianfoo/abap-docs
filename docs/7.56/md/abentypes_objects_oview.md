  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) → 

Types and Objects, Overview

ABAP distinguishes between types and objects. Types are purely descriptions, to which no data memory is attached apart from administrative information. Objects are instances of types and occupy memory space. A type characterizes the technical properties of all objects of the relevant type.

The ABAP types construct the ABAP type hierarchy illustrated below:

![Figure](bdoc_types_objects.gif)

The left side of the figure shows the hierarchy of all types and instances, that is, which types are possible in ABAP and the objects that can be created from the types. The right side lists the [generic data types](javascript:call_link\('abengeneric_data_type_glosry.htm'\) "Glossary Entry") assigned to individual nodes of the type hierarchy.

In principle, data types are distinguished from object types.

-   [Data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") are used to describe [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry"). They are further divided into elementary, reference, and complex types. Data types are either [built-in types](javascript:call_link\('abenbuiltin_data_type_glosry.htm'\) "Glossary Entry") or they can be defined locally in the program and across the system in the ABAP Dictionary. Data objects as instances of data types are fields in the actual sense. They contain the local program data that a program uses at runtime.
-   [Object types](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry") are used to describe objects in [ABAP Objects](javascript:call_link\('abenabap_objects_glosry.htm'\) "Glossary Entry"). They are divided into classes and interfaces. Object types contain the data types mentioned above and functions. Object types are not built-in and must be defined in the program or in the class library. Classes describe an object completely. They define which data types and which functions an object contains. Interfaces describe a partial aspect of an object. The data types and functions of an interface can be implemented by multiple classes. Objects as instances of classes are actual software objects in [ABAP Objects](javascript:call_link\('abenabap_objects_glosry.htm'\) "Glossary Entry") and support object-oriented programming by including methods and events in addition to data.

The following sections summarize some important facts on data types and data objects. For more information about object types and objects, see [ABAP Objects](javascript:call_link\('abenabap_objects_oview.htm'\)).

Continue
[Data Types](javascript:call_link\('abendata_types.htm'\))
[Data Objects](javascript:call_link\('abendata_objects.htm'\))
[Validity and Visibility](javascript:call_link\('abenlifetime_and_visibility.htm'\))
[Absolute Type Names](javascript:call_link\('abentype_names.htm'\))
[Compatible Data Types](javascript:call_link\('abencompatibility.htm'\))