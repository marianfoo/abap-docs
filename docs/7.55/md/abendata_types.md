  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_objects_oview.htm) → 

Data Types

Data types are a subtree of the [ABAP type hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_objects_oview.htm). Data types are purely type descriptions. No memory for storing working data is attached, but they may require space for administrative information. A data type characterizes the technical properties of all [data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_object_glosry.htm "Glossary Entry") that have this type. In ABAP, data types occur as attributes of data objects, but they can also be defined independently.

The definition of [standalone data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstand-alone_data_type_glosry.htm "Glossary Entry") is based on a set of [built-in data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_data_type_glosry.htm "Glossary Entry"). It can either be executed within the program using the statement [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes.htm) in the global declaration part of a program, in the declaration part of a class, locally in procedures, or for all programs in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). Data types in the ABAP Dictionary are either created directly as [repository objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepository_object_glosry.htm "Glossary Entry") or in a [type pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry").

Built-in and self-defined data types can be used to create data objects and for [typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_glosry.htm "Glossary Entry"). Particularly in the latter case, [built-in generic data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_generic.htm) are available. A [generic data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") is a data type that does not determine all attributes of a [data object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_object_glosry.htm "Glossary Entry"). Generic data types can only be used for typing [formal parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenformal_parameter_glosry.htm "Glossary Entry") and [field symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_symbol_glosry.htm "Glossary Entry").

Data types can be divided into elementary, reference, and complex data types.

-   [Elementary types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") are 'atomic' in the sense that they are not composed of other types. They are further divided into elementary types of fixed and variable length.
    

-   There are 14 [built-in elementary data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm) of fixed length in ABAP.
    Eight [numeric](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") types: Integers (b, s, i, int8), decimal floating point numbers (decfloat16, decfloat34), binary floating point numbers (f), and packed numbers (p).
    Two [character-like](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharlike_data_type_glosry.htm "Glossary Entry") types: text (c) and numeric text fields (n).
    One [byte-like](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry") type: byte fields (x).
    Two character-like [date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendate_type_glosry.htm "Glossary Entry") and [time types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_type_glosry.htm "Glossary Entry"): date (d) and time fields (t).
    A [time stamp type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_type_glosry.htm "Glossary Entry"): Time stamp fields (utclong).
    The data types c, n, x, and p are generic in terms of their length. p is also generic in terms of the number of decimal places. The numeric data types b and s cannot be specified directly in programs for short integers.
    

-   There are two [built-in elementary data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm) of variable length in ABAP. A [character-like](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharlike_data_type_glosry.htm "Glossary Entry") type, namely text string (string), and a [byte-like](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry") type, namely byte string (xstring).
    

-   [Reference types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_type_glosry.htm "Glossary Entry") describe data objects that contain references to other objects (data objects and instances of classes), which are known as [reference variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_variable_glosry.htm "Glossary Entry"). There are no built-in reference types in ABAP. A reference type must either be defined in the ABAP program or in ABAP Dictionary. Reference types form a hierarchy that represents the hierarchy of the objects to which the references can point.
    

-   [Complex data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomplex_data_type_glosry.htm "Glossary Entry") are composed of other types. They allow the administration and processing of semantically related datasets under one name. A data object of a complex type can be accessed overall or by component. Apart from the structure [sy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_fields.htm), there are no built-in complex data types in ABAP. A complex type must either be defined in the ABAP program or in ABAP Dictionary. There are two types of complex data types:
    

-   A [structured type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructured_type_glosry.htm "Glossary Entry") is a sequence of any elementary, reference, or complex data types. Structures are used to summarize work areas that logically belong together.
    

-   [Table types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_type_glosry.htm "Glossary Entry") consist of a sequence of any number of lines of the same data type. Table types are characterized by a [line type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrow_type_glosry.htm "Glossary Entry") that can be any elementary, reference, or complex data type, by the [table type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_category_glosry.htm "Glossary Entry") that defines how tables can be accessed, and by a [table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_key_glosry.htm "Glossary Entry") that is used to identify the table rows.
    

-   An [enumerated type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry") describes a value set in addition to the data type. An [enumerated object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm "Glossary Entry") can have only one associated [enumerated value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_value_glosry.htm "Glossary Entry").
    

-   A [mesh type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_type_glosry.htm "Glossary Entry") is a special structured type with tabular components between which there are [mesh associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_association_glosry.htm "Glossary Entry").