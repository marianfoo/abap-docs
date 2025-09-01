# ABAP Keyword Documentation / ABAP − Reference / Declarations / Declaration Statements

Included pages: 14


### abentypes_and_objects.htm

---
title: "Data Types and Data Objects"
description: |
  This section describes the declaration of data types and data objects. Data Types Data types are templates for creating data objects. Data types can be defined independently in the ABAP program or in ABAP Dictionary. As attributes of a data object, data types can also exist in a non-independent stat
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm"
abapFile: "abentypes_and_objects.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abentypes", "and", "objects"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) → 

Data Types and Data Objects

This section describes the declaration of data types and data objects.

Data Types

Data types are templates for creating data objects. Data types can be defined independently in the ABAP program or in ABAP Dictionary. As attributes of a data object, data types can also exist in a non-independent state. Data types do not use any memory space for work data, but may require memory for administration information.

Data objects

A data object is an instance of a data type and occupies as much memory space as its type specifies. An ABAP program only works with data that is available as content of data objects. Data objects are either created implicitly as named data objects, or explicitly as [anonymous data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") using [CREATE DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data.htm).

Data types of data objects

Data objects can be declared by reference to a non-generic data type of the same ABAP program or from ABAP Dictionary. In this case, the data type determines the complete technical attributes of the data object. A data object can also be constructed in the ABAP program without completely specified type definitions. The data type of a data object of this type is always complete, and does not exist independently, but rather as an attribute of the data object, and is called a bound data type.

Note

The data types of all class attributes belong to the static class properties. A LIKE addition enables the visible class attributes to be referenced without first creating an object using the class component selector or reference variables

Declaration statements

-   [Declaring Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_statements.htm)

-   [Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm)

Continue
[Types and Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm)
[Declaring Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_statements.htm)
[Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm)
[Special Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations_spcl.htm)


### abentypes_objects_oview.htm

---
title: "Types and Objects - Overview"
description: |
  ABAP distinguishes between types and objects. Types are purely descriptions, to which no data memory is attached apart from administration information. Objects are instances of types and take up memory space. A type characterizes the technical attributes of all objects of the relevant type. The ABAP
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm"
abapFile: "abentypes_objects_oview.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abentypes", "objects", "oview"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) → 

Types and Objects - Overview

ABAP distinguishes between types and objects. Types are purely descriptions, to which no data memory is attached apart from administration information. Objects are instances of types and take up memory space. A type characterizes the technical attributes of all objects of the relevant type.

The ABAP types construct the ABAP type hierarchy, which is illustrated below:

![Figure](abdoc_types_objects.gif)

The left side of the figure shows the hierarchy of all types and instances, for instance which types are possible in ABAP and the objects that can be created from these types. The right side lists the [generic data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") assigned to individual nodes of the type hierarchy.

In principle, data types are distinguished from object types.

-   [Data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_type_glosry.htm "Glossary Entry") are used to describe [data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_object_glosry.htm "Glossary Entry"). They are further subdivided into elementary types, reference types, and complex types. Data types are [built-in](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_data_type_glosry.htm "Glossary Entry") (predefined) or they can be defined locally in the program and across the system in ABAP Dictionary. Data objects as instances of data types are fields in their own right. They contain local program data that a program uses at runtime.

-   [Object types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_type_glosry.htm "Glossary Entry") are used to describe objects in [ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_glosry.htm "Glossary Entry"). They are divided into classes and interfaces. Object types contain both the above data types and functions. Object types are not built-in and must be defined in the program or in the class library. Classes provide a complete description of an object. They define which data types and which functions an object contains. Interfaces describe one aspect of an object. The data types and functions of an interface can be implemented by more than one class. Objects as instances of classes are actual software objects in [ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_glosry.htm "Glossary Entry"). They support object-oriented programming by containing methods and events in addition to data.

The following sections summarize some important facts on data types and data objects. More information about object types and objects is available under [ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_oview.htm).

Continue
[Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_types.htm)
[Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_objects.htm)
[Validity and Visibility](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlifetime_and_visibility.htm)
[Absolute Type Names](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_names.htm)
[Compatible Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompatibility.htm)


### abenstring.htm

---
title: "Strings"
description: |
  Strings are elementary data objects(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenelementary_data_object_glosry.htm 'Glossary Entry') of variable length. Strings can be either text strings(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_string_glosry.htm 'Glo
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring.htm"
abapFile: "abenstring.htm"
keywords: ["select", "do", "try", "data", "types", "internal-table", "abenstring"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_objects.htm) → 

Strings

Strings are [elementary data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenelementary_data_object_glosry.htm "Glossary Entry") of variable length. Strings can be either [text strings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_string_glosry.htm "Glossary Entry") or [byte strings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_string_glosry.htm "Glossary Entry"). Like [internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_table_glosry.htm "Glossary Entry"), strings are [dynamic data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_data_object_glosry.htm "Glossary Entry").

The corresponding built-in ABAP types are string and xstring. These are the dynamic equivalent of the data types c and x, which define text fields or byte fields of fixed length.

-   Text strings and text fields contain [character strings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_string_1_glosry.htm "Glossary Entry"). Their common generic type is csequence.

-   Byte strings and byte fields contain [byte strings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_chain_glosry.htm "Glossary Entry"). Their common generic type is xsequence.

Unlike a text field or byte field, the length of a string is not defined statically, but is variable and adapts to the current content of the data object at runtime. Internally, this uses dynamic memory management (see [Memory Management for Deep Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmemory_consumption.htm)). The maximum size of a string is determined by the [profile parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") ztta/max\_memreq\_MB (see [Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmemory_consumption_2.htm)). The initial value of a string is the empty string with length 0. Any assignments between strings with the same type produce [sharing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensharing_glosry.htm "Glossary Entry").

In contrast to text fields, trailing blanks are respected in text strings. There is a special [text string literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_string_literal_glosry.htm "Glossary Entry") for text strings. As with byte fields, there is no special [literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral_glosry.htm "Glossary Entry") for byte strings in the current release.

Strings are [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") data types. A structure that contains a string is a [deep structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_structure_glosry.htm "Glossary Entry") and cannot be used as a character-like field in the same way as a [flat structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry").

Strings, like internal tables, can be stored in [data clusters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_glosry.htm "Glossary Entry"). In ABAP Dictionary, strings can have the built-in data types [SSTRING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), [STRING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), and [RAWSTRING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm). These can also be the types of table fields in database tables (subject to certain [restrictions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_character_byte_types.htm)).

Example

Inline declaration of a text string carrier\_list for adding a comma-separated list of character-like data.

SELECT carrid
       FROM scarr
       INTO TABLE @DATA(carrier\_tab).
CONCATENATE LINES OF carrier\_tab INTO DATA(carrier\_list)
            SEPARATED BY \`,  \`.
cl\_demo\_output=>display( carrier\_list ).


### abentype_names.htm

---
title: "Absolute Type Names"
description: |
  The type name that can be used statically in ABAP statements is relative to its context, and is also known as the relative type name. As described in Validity and Visibility(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlifetime_and_visibility.htm), local data types obscure more g
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_names.htm"
abapFile: "abentype_names.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abentype", "names"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm) → 

Absolute Type Names

The type name that can be used statically in ABAP statements is relative to its context, and is also known as the relative type name. As described in [Validity and Visibility](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlifetime_and_visibility.htm), local data types obscure more global data types of the same name. The same applies to classes and interfaces, which can also be interpreted as type definitions in this regard.

Absolute type names, however, name a type uniquely. An absolute type name as a path specifications is composed of the following components:

-   \\TYPE=name

-   \\CLASS=name

-   \\INTERFACE=name

-   \\PROGRAM=name

-   \\CLASS-POOL=name

-   \\FUNCTION-POOL=name

-   \\TYPE-POOL=name

-   \\METHOD=name

-   \\FORM=name

-   \\FUNCTION=name

The last component of a path must always be \\TYPE=name, \\CLASS=name, or \\INTERFACE=name. It describes a data type, a class, or an interface whose name name must be entered in uppercase letters. Absolute type names that only consist of \\TYPE=name, \\CLASS=name, or \\INTERFACE=name describe a data type from the ABAP Dictionary or a global class/interface of the class library. To create absolute type names for local data types, classes, and interfaces, use sequential component names that specify its context as prefixes.

Absolute type names can be used in all statements in which dynamic specification of a data type, a class, or an interface is possible. This makes it possible to stop a local type from obscuring a global type by specifying an absolute type name, and the absolute type names can be used to access the types, classes, and interfaces of other programs dynamically. It is possible to load a different program into the current [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") if this is necessary to access the program. Only the names of [compilation units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompilation_unit_glosry.htm "Glossary Entry") can be used for programs after \\PROGRAM. It is not possible to use the names of include programs, since they cannot be generated and loaded as standalone programs.

A data type is uniquely identified by its absolute type name. Various options exist, however, for forming an unique path for a type. For example, you can omit the function group for a type in a function module, because every function module is unique. If types are located in a [class pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_pool_glosry.htm "Glossary Entry") or function group, the technical name name of the ABAP program can also be specified. Since the latter is not known most of the time, we recommend using \\CLASS-POOL or \\FUNCTION-POOL instead.

A data type that only exists as a property of a data object does not have a relative type name. However, internally it has an absolute type name (technical type name) that uniquely defines the data type.

Notes

-   The type description classes of the [Run Time Type Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") (RTTS), such as CL\_ABAP\_TYPEDESCR, contain methods that return the absolute type name of data types or data objects.

-   If an [absolute type name](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabsolute_typename_glosry.htm "Glossary Entry") is used in a program to specify a type of a different program, this program is added to a new [additional program group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry") or to the current [program group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_group_glosry.htm "Glossary Entry"), if not already loaded. The program constructor [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm) is not yet executed.

Example

When the methods m1 and m2 of the class c1 are called in the following example, the RTTS get the absolute type names \\TYPE=SPFLI or \\PROGRAM=RTTI\_TEST\\CLASS=C1\\METHOD=M2\\TYPE=SPFLI for the generically typed parameter p. The use of the name spfli has different meanings in the methods m1 and m2. A syntax check warning reminds you of this.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    METHODS: m1,
             m2,
             m3 IMPORTING p TYPE any.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    DATA struc TYPE spfli.
    m3( struc ).
  ENDMETHOD.
  METHOD m2.
    TYPES spfli TYPE spfli.
    DATA struc TYPE spfli.
    m3( struc ).
  ENDMETHOD.
  METHOD m3.
    DATA type\_descr TYPE REF TO cl\_abap\_typedescr.
    type\_descr = cl\_abap\_typedescr=>describe\_by\_data( p ).
    cl\_demo\_output=>write( type\_descr->absolute\_name ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(ref) = new c1( ).
  ref->m1( ).
  ref->m2( ).
  cl\_demo\_output=>display( ).


### abentypes_objects_oview.htm

---
title: "Types and Objects - Overview"
description: |
  ABAP distinguishes between types and objects. Types are purely descriptions, to which no data memory is attached apart from administration information. Objects are instances of types and take up memory space. A type characterizes the technical attributes of all objects of the relevant type. The ABAP
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm"
abapFile: "abentypes_objects_oview.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abentypes", "objects", "oview"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) → 

Types and Objects - Overview

ABAP distinguishes between types and objects. Types are purely descriptions, to which no data memory is attached apart from administration information. Objects are instances of types and take up memory space. A type characterizes the technical attributes of all objects of the relevant type.

The ABAP types construct the ABAP type hierarchy, which is illustrated below:

![Figure](abdoc_types_objects.gif)

The left side of the figure shows the hierarchy of all types and instances, for instance which types are possible in ABAP and the objects that can be created from these types. The right side lists the [generic data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") assigned to individual nodes of the type hierarchy.

In principle, data types are distinguished from object types.

-   [Data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_type_glosry.htm "Glossary Entry") are used to describe [data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_object_glosry.htm "Glossary Entry"). They are further subdivided into elementary types, reference types, and complex types. Data types are [built-in](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_data_type_glosry.htm "Glossary Entry") (predefined) or they can be defined locally in the program and across the system in ABAP Dictionary. Data objects as instances of data types are fields in their own right. They contain local program data that a program uses at runtime.

-   [Object types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_type_glosry.htm "Glossary Entry") are used to describe objects in [ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_glosry.htm "Glossary Entry"). They are divided into classes and interfaces. Object types contain both the above data types and functions. Object types are not built-in and must be defined in the program or in the class library. Classes provide a complete description of an object. They define which data types and which functions an object contains. Interfaces describe one aspect of an object. The data types and functions of an interface can be implemented by more than one class. Objects as instances of classes are actual software objects in [ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_glosry.htm "Glossary Entry"). They support object-oriented programming by containing methods and events in addition to data.

The following sections summarize some important facts on data types and data objects. More information about object types and objects is available under [ABAP Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_objects_oview.htm).

Continue
[Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_types.htm)
[Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_objects.htm)
[Validity and Visibility](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlifetime_and_visibility.htm)
[Absolute Type Names](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_names.htm)
[Compatible Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompatibility.htm)


### abentypes_statements.htm

---
title: "Declaring Data Types"
description: |
  In ABAP programs, data types local to the program can be defined. These types can be used for typing(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm 'Glossary Entry') or declaring further data types or data objects according to their validity and visibility. The as
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_statements.htm"
abapFile: "abentypes_statements.htm"
keywords: ["do", "try", "data", "types", "abentypes", "statements"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) → 

Declaring Data Types

In ABAP programs, data types local to the program can be defined. These types can be used for [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm "Glossary Entry") or declaring further data types or data objects according to their validity and visibility.

The associated statements are:

-   [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm)
    

-   [INCLUDE TYPE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type.htm)

Continue
[TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm)


### abentypes_lob_handle_abexa.htm

---
title: "Deriving LOB Handle Structures"
description: |
  This example demonstrates how LOB handle structures(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_handle_structure_glosry.htm 'Glossary Entry') are derived using the statement TYPES(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_lob_handle.htm). Source
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_lob_handle_abexa.htm"
abapFile: "abentypes_lob_handle_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abentypes", "lob", "handle", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm) →  [TYPES - LOB HANDLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_lob_handle.htm) → 

Deriving LOB Handle Structures

This example demonstrates how [LOB handle structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") are derived using the statement [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_lob_handle.htm).

Source Code

REPORT kellerh\_test.
CLASS demo\_lob\_handles DEFINITION.
  PUBLIC SECTION.
    TYPES:
      lob\_handle\_structure\_1 TYPE demo\_lob\_table
                             READER FOR COLUMNS clob1 blob1,
      lob\_handle\_structure\_2 TYPE demo\_lob\_table
                             LOB HANDLE FOR ALL COLUMNS,
      lob\_handle\_structure\_3 TYPE demo\_lob\_table
                             LOCATOR FOR ALL BLOB COLUMNS
                             WRITER FOR ALL CLOB COLUMNS,
      lob\_handle\_structure\_4 TYPE demo\_lob\_table
                             READER FOR COLUMNS clob1 clob2
                             LOB HANDLE FOR ALL BLOB COLUMNS
                             LOCATOR FOR ALL OTHER CLOB COLUMNS,
      lob\_handle\_structure\_5 TYPE demo\_lob\_table
                             READER FOR COLUMNS blob1 blob2 blob3
                             LOCATOR FOR COLUMNS clob1 clob2 clob3
                             LOB HANDLE FOR ALL OTHER COLUMNS,
      lob\_handle\_structure\_6 TYPE demo\_lob\_table
                             READER FOR COLUMNS blob1
                             LOCATOR FOR COLUMNS blob2
                             LOB HANDLE FOR COLUMNS blob3
                             LOB HANDLE FOR ALL CLOB COLUMNS.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS output\_type IMPORTING struct TYPE string.
ENDCLASS.
CLASS demo\_lob\_handles IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    DO 6 TIMES.
      output\_type( |LOB\_HANDLE\_STRUCTURE\_{ sy-index }| ).
    ENDDO.
    out->display( ).
  ENDMETHOD.
  METHOD output\_type.
    TYPES: BEGIN OF result,
             component\_name TYPE string,
             absolute\_name  TYPE string,
           END OF result,
           results TYPE TABLE OF result WITH EMPTY KEY.
    out->next\_section( struct
      )->write\_data(
           VALUE results(
             FOR component IN CAST cl\_abap\_structdescr(
               cl\_abap\_structdescr=>describe\_by\_name( struct )
                 )->components
             WHERE ( type\_kind = cl\_abap\_typedescr=>typekind\_oref )
             ( VALUE #(
                 component\_name = component-name
                 absolute\_name  = CAST cl\_abap\_refdescr(
                   cl\_abap\_typedescr=>describe\_by\_name(
                     struct && \`-\` && component-name )
                       )->get\_referenced\_type(
                       )->absolute\_name ) ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_lob\_handles=>main( ).

Description

The package-visible area of the class demo\_lob\_handles contains various derivations of LOB handle structures from the database table DEMO\_LOB\_TABLE. The methods of this class are used for the output of the static type of the derived [LOB handle components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_handle_component_glosry.htm "Glossary Entry").

The DEMO\_LOB\_TABLE database table contains a key field of type INT4, as well as three columns CLOB1, CLOB2, CLOB3 of type STRING and three columns BLOB1, BLOB2, BLOB3 of type RAWSTRING.

The derivations listed here function as follows:

-   In the structured type lob\_handle\_structure\_1, clob1 and blob1 become LOB handle components using columns specified directly after READER. The component clob1 contains the static type CL\_ABAP\_DB\_C\_READER and blob1 contains the static type CL\_ABAP\_DB\_X\_READER. All other components are displayed in accordance with the [regular rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for their built-in types.

-   In the structured type lob\_handle\_structure\_2, all components are turned into LOB components by specifying FOR ALL COLUMNS for LOB handle components. The static type of the components of type STRING is IF\_ABAP\_DB\_CLOB\_HANDLE and the static type for the components of type RAWSTRING is IF\_ABAP\_DB\_BLOB\_HANDLE.

-   In the structured type lob\_handle\_structure\_3, all components are converted into LOB components for LOB handle components. The static type of the component of type STRING is changed to CL\_ABAP\_DB\_C\_WRITER by specifying WRITER FOR ALL CLOB COLUMNS and the static type for the components of type RAWSTRING is changed to CL\_ABAP\_DB\_X\_LOCATOR by specifying LOCATOR FOR ALL BLOB COLUMNS.

-   In the structured type lob\_handle\_structure\_4, all components are converted into LOB components for LOB handle components. The static type of the components clob1 and clob2 is changed to CL\_ABAP\_DB\_C\_READER by specifying READER directly. All components of the type RAWSTRING are changed to reference types for IF\_ABAP\_DB\_BLOB\_HANDLE by specifying LOB HANDLE FOR ALL BLOB COLUMNS. The other components of the type STRING are changed to reference types for CL\_ABAP\_DB\_C\_LOCATOR by specifying LOCATOR FOR ALL OTHER CLOB COLUMNS.

-   In the structured type lob\_handle\_structure\_5, all LOB components are listed directly and thereby converted into the corresponding LOB handle components with the static types CL\_ABAP\_DB\_C\_LOCATOR for clob1, clob2, and clob3 and CL\_ABAP\_DB\_X\_READER for blob1, blob2, and blob3. Specifying LOB HANDLE FOR ALL OTHER COLUMNS has no direct effect, but instead is applied to any enhancements to the database table of further LOBs, which then preserve their type-friendly interface reference type.

-   In the structured type lob\_handle\_structure\_6, all components are converted into LOB components for LOB handle components, whereby here the maximum number of column specifications is demonstrated. FOR ALL CLOB COLUMNS can only be specified since no components of type STRING were covered by previous statements.


### abentypes_statements.htm

---
title: "Declaring Data Types"
description: |
  In ABAP programs, data types local to the program can be defined. These types can be used for typing(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm 'Glossary Entry') or declaring further data types or data objects according to their validity and visibility. The as
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_statements.htm"
abapFile: "abentypes_statements.htm"
keywords: ["do", "try", "data", "types", "abentypes", "statements"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) → 

Declaring Data Types

In ABAP programs, data types local to the program can be defined. These types can be used for [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm "Glossary Entry") or declaring further data types or data objects according to their validity and visibility.

The associated statements are:

-   [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm)
    

-   [INCLUDE TYPE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type.htm)

Continue
[TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm)


### abenuntyped_number_literals.htm

---
title: "Numeric Literals"
description: |
  Numeric literals consist of continuous sequences of numbers with a maximum of 31 digits (0 to 9). These sequences can be prefixed directly by a plus (+) or minus (-) sign. -   Numeric literals between -2147483648 and 2147483647 are integer literals(https://help.sap.com/doc/abapdocu_753_index_htm/7
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuntyped_number_literals.htm"
abapFile: "abenuntyped_number_literals.htm"
keywords: ["do", "if", "try", "data", "types", "abenuntyped", "number", "literals"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm) →  [Literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral.htm) → 

Numeric Literals

Numeric literals consist of continuous sequences of numbers with a maximum of 31 digits (0 to 9). These sequences can be prefixed directly by a plus (+) or minus (-) sign.

-   Numeric literals between -2147483648 and 2147483647 are [integer literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninteger_literal_glosry.htm "Glossary Entry") and have the built-in ABAP type [i](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm).

-   Numeric literals outside of this interval are [packed numeric literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpacked_number_literal_glosry.htm "Glossary Entry") and have the built-in ABAP type [p](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), with a length of 8 bytes if they are not longer than 15 digits and with a length of 16 bytes if they are between 16 and 31 digits long.

Notes

-   There are no numeric literals of type [int8](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm). The [conversion operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm) can be used to convert a numeric literal to the type int8.

-   In numeric literals, it is not possible to use either decimal separators or [scientific notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscientific_notation_glosry.htm "Glossary Entry") with mantissa and exponent.

-   Numbers that cannot be represented as numeric literals can only be specified in character literals. If used in operand positions in which a numeric value is expected, they are converted accordingly. The [conversion operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm) is recommended for targeted conversions.

-   Numeric literals that span multiple lines are not permitted. Furthermore, the [literal operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral_operator.htm) & cannot be used to create a composite literal from multiple numeric literals.

Example

The first literal has the type i. The following literals have the type p and lengths 8 and 16.

DATA: t TYPE c LENGTH 1,
      l TYPE i.
DESCRIBE FIELD
                123456
         TYPE t.
cl\_demo\_output=>write( t ).
DESCRIBE FIELD
               123456790123
         TYPE t
         LENGTH l
         IN BYTE MODE.
cl\_demo\_output=>write( |{ t } { l }| ).
DESCRIBE FIELD
               12345679012345678
         TYPE t
         LENGTH l
         IN BYTE MODE.
cl\_demo\_output=>write( |{ t } { l }| ).
cl\_demo\_output=>display( ).

Example

Targeted conversion of a character literal into type int8.

DATA(num) = CONV int8( '123456790123' ).


### abenuntyped_character_literals.htm

---
title: "Character Literals"
description: |
  Character literals can be either text field literals or text string literals. A text field literal is a character string enclosed in single quotes ('); a text string literal is a character string enclosed in single backquotes (`). Syntax Name Possible Characters '...' Text field literal(https://h
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuntyped_character_literals.htm"
abapFile: "abenuntyped_character_literals.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenuntyped", "character", "literals"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm) →  [Literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral.htm) → 

Character Literals

Character literals can be either text field literals or text string literals. A text field literal is a character string enclosed in single quotes ('); a text string literal is a character string enclosed in single backquotes (\`).

Syntax

Name

Possible Characters

'...'

[Text field literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry")

String of any alphanumeric characters. The data type is c with the length of the enclosed characters (including trailing blanks). The length of a text field literal must lie between 1 and 255 characters. There is no empty text field literal: The text field literal '' has the same meaning as the text field literal ' ' with length 1. To represent a quotation mark in a text field literal, two consecutive quotation marks must be specified.

\`...\`

[Text string literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_string_literal_glosry.htm "Glossary Entry")

String of any alphanumeric characters. The data type is string. A text string literal can have a maximum of 255 characters. The empty text string literal \`\` represents an empty string with length 0. To represent a backquote in a text string literal, two consecutive backquotes must be specified.

Character literals that span multiple lines are not allowed. The [literal operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral_operator.htm) & can, however, be used to join multiple literals with the same type as a composite literal.

Trailing blanks are not ignored. If a text field literal is specified at an operand position at which a [text symbol](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_symbol_glosry.htm "Glossary Entry") is possible, you can append the three-digit identifier idf of a text symbol in round brackets.

... 'Literal'(idf) ...

If the text symbol exists in the currently loaded [text pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_pool_glosry.htm "Glossary Entry"), then the content of the text symbol is used instead of the literal, otherwise the literal is used. Text string literals cannot be assocaited with text symbols.

Programming Guidelines

-   [Trailing blanks in character literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrailing_blanks_literals_guidl.htm "Guideline")
    
-   [Character set in source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_set_guidl.htm "Guideline")
    

Notes

-   Only text field literals (not text string literals) can be used to associate a literal with a text symbol.

-   Trailing blanks in text field literals use memory, but are [generally](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_trail_blanks.htm) ignored in operand positions, like all data objects of the type c. In text string literals they are always relevant, as is the case for all data objects of type string.

-   Quotation marks can be represented directly in text string literals and backquotes in text field literals.

-   The maximum length of the content of a character literal is 255 characters, which means that a literal with 255 characters cannot be specified within a single line of a program (due to the quotation marks or backquotes). The maximum length of 255 characters can be achieved only by using the [literal operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral_operator.htm) &.

-   [String templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_template_glosry.htm "Glossary Entry"), which only contain literal text, behave in a similar way to text string literals, but offer many additional possibilities.

Example

Represents quotation marks and backquotes in character literals. The first two and the last two literals always have the same meaning.

cl\_demo\_output=>write\_text( 'This is John''s bike' ).
cl\_demo\_output=>write\_text( \`This is John's bike\` ).
cl\_demo\_output=>write\_text( 'This is a backquote: \`' ).
cl\_demo\_output=>write\_text( \`This is a backquote: \`\`\` ).
cl\_demo\_output=>display( ).

Example

If quotation marks and backquotes are required in a string, [string templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_template_glosry.htm "Glossary Entry") are also suitable, whose special characters are consistently masked with \\.

cl\_demo\_output=>display( |Quote: ', Backquote: \`, Bar: \\| | ).


### abentext_symbols.htm

---
title: "Text Symbols"
description: |
  A text symbol is a named data object(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennamed_data_object_glosry.htm 'Glossary Entry') of an ABAP program(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_glosry.htm 'Glossary Entry') that is not declared in t
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_symbols.htm"
abapFile: "abentext_symbols.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abentext", "symbols"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm) → 

Text Symbols

A text symbol is a [named data object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennamed_data_object_glosry.htm "Glossary Entry") of an [ABAP program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_glosry.htm "Glossary Entry") that is not declared in the program itself and instead is defined as a part of the [text elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_element_glosry.htm "Glossary Entry") of the program. A text symbol has the [data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_type_glosry.htm "Glossary Entry") [c](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_character.htm) and the length defined in the text elements by mlen.

A text symbol behaves like a [constant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstant_glosry.htm "Glossary Entry") and can be specified in [reading positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm "Glossary Entry") using its names as follows:

... text-idf ...

Here, idf is the three-character ID of the text symbol. This ID can consist of any alphanumeric characters plus "\_". The text symbol is taken from the currently loaded [text pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_pool_glosry.htm "Glossary Entry").

If the text symbol is not in the currently loaded [text pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_pool_glosry.htm "Glossary Entry"), text-idf is handled like an initial single-character [text field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_glosry.htm "Glossary Entry").

A text symbol can be joined with [text field literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry") using the following syntax:

... 'Literal'(idf) ...

If the text symbol is in the currently loaded text pool, it replaces the literal. If the text symbol does not exist, the literal is used.

Notes

-   Like all text elements, text symbols are linked to the translation environment. They can be used in all locations where translated texts are to be displayed by the program.

-   The maximum length of a text symbol must be chosen so that there is enough space for the translation. For example, the German translation of the six-character English word "window" requires seven characters ("Fenster").

-   The name text-idf is reserved for text symbols. A structure called text cannot have any components with three-character names. It is best never to call a structure text. This can cause syntax errors, in particular in structures that reference global data types.

Example

Accesses the text symbol exa of the current program. Its text is displayed (if available). If the text does not exist, the text field literal is used in the first case and a blank is used in the second case.

cl\_demo\_output=>new(
  )->write( 'Text in text symbol'(exa)
  )->write( TEXT-exa
  )->display(  ).


### abentypes_and_objects.htm

---
title: "Data Types and Data Objects"
description: |
  This section describes the declaration of data types and data objects. Data Types Data types are templates for creating data objects. Data types can be defined independently in the ABAP program or in ABAP Dictionary. As attributes of a data object, data types can also exist in a non-independent stat
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm"
abapFile: "abentypes_and_objects.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abentypes", "and", "objects"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) → 

Data Types and Data Objects

This section describes the declaration of data types and data objects.

Data Types

Data types are templates for creating data objects. Data types can be defined independently in the ABAP program or in ABAP Dictionary. As attributes of a data object, data types can also exist in a non-independent state. Data types do not use any memory space for work data, but may require memory for administration information.

Data objects

A data object is an instance of a data type and occupies as much memory space as its type specifies. An ABAP program only works with data that is available as content of data objects. Data objects are either created implicitly as named data objects, or explicitly as [anonymous data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") using [CREATE DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data.htm).

Data types of data objects

Data objects can be declared by reference to a non-generic data type of the same ABAP program or from ABAP Dictionary. In this case, the data type determines the complete technical attributes of the data object. A data object can also be constructed in the ABAP program without completely specified type definitions. The data type of a data object of this type is always complete, and does not exist independently, but rather as an attribute of the data object, and is called a bound data type.

Note

The data types of all class attributes belong to the static class properties. A LIKE addition enables the visible class attributes to be referenced without first creating an object using the class component selector or reference variables

Declaration statements

-   [Declaring Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_statements.htm)

-   [Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm)

Continue
[Types and Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm)
[Declaring Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_statements.htm)
[Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm)
[Special Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations_spcl.htm)


### abentypes_attributes.htm

---
title: "Data Types and Attributes"
description: |
  Attributes are the data objects of a class. It is also possible to declare data types that are specific to the class. Attributes and data types are declared using one of the following: -   General statements that are also possible in other contexts -   TYPES(https://help.sap.com/doc/abapdocu_753_i
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_attributes.htm"
abapFile: "abentypes_attributes.htm"
keywords: ["do", "if", "class", "data", "types", "abentypes", "attributes"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_ifac_components.htm) → 

Data Types and Attributes

Attributes are the data objects of a class. It is also possible to declare data types that are specific to the class. Attributes and data types are declared using one of the following:

-   General statements that are also possible in other contexts

-   [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm)

-   [DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata.htm)

-   [CONSTANTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconstants.htm)

-   A special statement that is only possible in classes

-   [CLASS-DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-data.htm)

Continue
[CLASS-DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-data.htm)


### abentypes_attributes.htm

---
title: "Data Types and Attributes"
description: |
  Attributes are the data objects of a class. It is also possible to declare data types that are specific to the class. Attributes and data types are declared using one of the following: -   General statements that are also possible in other contexts -   TYPES(https://help.sap.com/doc/abapdocu_753_i
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_attributes.htm"
abapFile: "abentypes_attributes.htm"
keywords: ["do", "if", "class", "data", "types", "abentypes", "attributes"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_ifac_components.htm) → 

Data Types and Attributes

Attributes are the data objects of a class. It is also possible to declare data types that are specific to the class. Attributes and data types are declared using one of the following:

-   General statements that are also possible in other contexts

-   [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm)

-   [DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata.htm)

-   [CONSTANTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconstants.htm)

-   A special statement that is only possible in classes

-   [CLASS-DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-data.htm)

Continue
[CLASS-DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-data.htm)
