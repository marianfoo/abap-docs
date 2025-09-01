  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects, Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) → 

Data Types

Data types are a subtree of the [ABAP type hierarchy](javascript:call_link\('abentypes_objects_oview.htm'\)). Data types are type-only descriptions. No memory for storing working data is attached, but they may require space for administrative information. A data type characterizes the technical properties of all [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") that have this type. In ABAP, data types occur as attributes of data objects, but they can also be defined independently.

The definition of [standalone data types](javascript:call_link\('abenstand-alone_data_type_glosry.htm'\) "Glossary Entry") is based on a set of [built-in data types](javascript:call_link\('abenbuiltin_data_type_glosry.htm'\) "Glossary Entry"). The definition can be made within a program using the statement [TYPES](javascript:call_link\('abaptypes.htm'\)) in the global declaration part of a program, in the declaration part of a class or an interface, locally in procedures, or in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"). Data types in the ABAP Dictionary are either created directly as [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") or in a [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry"). [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") and their components can also be as data types in ABAP programs.

The visibility of data types depends on their definition. Standalone data types that are defined in the ABAP Dictionary, as CDS entities, or in the non-private sections of global classes and interfaces are visible in all ABAP programs. Other standalone data types are visible only inside the context of their definition.

Built-in and self-defined data types can be used to create data objects and for [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry"). Particularly in the latter case, [built-in generic data types](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) are available. A [generic data type](javascript:call_link\('abengeneric_data_type_glosry.htm'\) "Glossary Entry") is a data type that does not determine all attributes of a [data object](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry"). Generic data types can only be used for typing [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") and [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry").

Data types can be divided into elementary, reference, and complex data types.

-   [Elementary types](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") are 'atomic' in the sense that they are not composed of other types. They are further divided into elementary types of fixed and variable length.
    -   There are 14 [built-in elementary data types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) of fixed length in ABAP.
        
        Eight [numeric](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry") types: Integers (b, s, i, int8), decimal floating point numbers (decfloat16, decfloat34), binary floating point numbers (f), and packed numbers (p).
        
        Two [character-like](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry") types: text fields (c) and numeric text fields (n).
        
        One [byte-like](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry") type: byte fields (x).
        
        Two character-like [date](javascript:call_link\('abendate_type_glosry.htm'\) "Glossary Entry") and [time types](javascript:call_link\('abentime_type_glosry.htm'\) "Glossary Entry"): date fields (d) and time fields (t).
        
        A [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry"): Time stamp fields (utclong).
        
        The data types c, n, x, and p are generic in terms of their length. p is also generic in terms of the number of decimal places. The numeric data types b and s cannot be specified directly in programs for short integers.
        
    -   There are two [built-in elementary data types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) of variable length in ABAP. A [character-like](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry") type, namely text string (string), and a [byte-like](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry") type, namely byte string (xstring).
-   [Reference types](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry") describe data objects that contain references to other objects (data objects and instances of classes), which are known as [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry"). There are no built-in reference types in ABAP. A reference type must either be defined in the ABAP program or in ABAP Dictionary. Reference types form a hierarchy that represents the hierarchy of the objects to which the references can point.
-   [Complex data types](javascript:call_link\('abencomplex_data_type_glosry.htm'\) "Glossary Entry") are composed of other types. They allow the administration and processing of semantically related datasets under one name. A data object of a complex type can be accessed overall or by component. Apart from the structure [sy](javascript:call_link\('abensystem_fields.htm'\)), there are no built-in complex data types in ABAP. A complex type must either be defined in the ABAP program or in ABAP Dictionary. There are two kinds of complex data types:
    -   A [structured type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") is a sequence of any elementary, reference, or complex data types. Structures are used to summarize work areas that logically belong together.
    -   [Table types](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") consist of a sequence of any number of lines of the same data type. Table types are characterized by a [line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") that can be any elementary type, reference type, or complex data type, by the [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry"), which defines how tables can be accessed, and by a [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") that is used to identify the table lines.
    -   An [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") describes a value set in addition to the data type. An [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") can have only one associated [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry").
    -   A [mesh type](javascript:call_link\('abenmesh_type_glosry.htm'\) "Glossary Entry") is a special structured type with tabular components between which there are [mesh associations](javascript:call_link\('abenmesh_association_glosry.htm'\) "Glossary Entry").