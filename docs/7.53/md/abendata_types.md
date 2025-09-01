---
title: "Data Types"
description: |
  Data types are a subtree of the ABAP type hierarchy(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm). Data types are only type descriptions. They do not have any attached memory for storing working data, but they may require space for administration informati
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_types.htm"
abapFile: "abendata_types.htm"
keywords: ["do", "if", "try", "class", "data", "types", "field-symbol", "abendata"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm) → 

Data Types

Data types are a subtree of the [ABAP type hierarchy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_objects_oview.htm). Data types are only type descriptions. They do not have any attached memory for storing working data, but they may require space for administration information. A data type characterizes the technical attributes of all [data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_object_glosry.htm "Glossary Entry") that have this type. In ABAP, data objects occur as attributes of data objects, but they can also be defined as standalone data types.

The definition of [standalone data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstand-alone_data_type_glosry.htm "Glossary Entry") is based on a set of [built-in data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_data_type_glosry.htm "Glossary Entry"). Standalone data types can either be defined internally in the program using the statement [TYPES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes.htm) in the global declaration part of a program, in the declaration part of a class, locally in procedures, or for all programs in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). Data types in ABAP Dictionary are either created directly as [repository objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm "Glossary Entry") or in a [type group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry").

Built-in and self-defined data types can be used to create data objects and for [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_glosry.htm "Glossary Entry"). For the latter in particular, [built-in generic data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_generic.htm) are available. A [generic data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") is a data type that does not determine all attributes of a [data object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_object_glosry.htm "Glossary Entry"). Generic data types can only be used for typing [formal parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformal_parameter_glosry.htm "Glossary Entry") and [field symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield_symbol_glosry.htm "Glossary Entry").

Data types can be divided into elementary data types, reference data types, and complex data types.

-   [Elementary types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") are 'atomic' in the sense that they are not composed of other types. They are further classified into elementary types of fixed length and of variable length.
    

-   There are 13 [built-in elementary data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm) of fixed length in ABAP. There are eight [numeric](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") types, namely integers (b, s, i, int8), decimal floating point numbers (decfloat16, decfloat34), binary floating point numbers (f), and packed numbers (p). There are two [character-like](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_type_glosry.htm "Glossary Entry") types, namely text fields (c) and numeric text fields (n). There is one [byte-like](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry") type, namely byte fields (x). There are two [date](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_type_glosry.htm "Glossary Entry") and [time types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_type_glosry.htm "Glossary Entry"), namely date fields (d) and time fields (t). The data types c, n, x, and p are generic in terms of length. p is also generic in terms of the number of fractional digits. The numeric data types b and s cannot be specified directly in programs for short integers.
    

-   There are two [built-in elementary data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm) of variable length in ABAP. There is one [character-like](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_type_glosry.htm "Glossary Entry") type, namely text string (string). There is one [byte-like](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry") type, namely byte string (xstring).
    

-   [Reference types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_type_glosry.htm "Glossary Entry") describe data objects that contain references to other objects (data objects and instances of classes), which are known as [reference variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_variable_glosry.htm "Glossary Entry"). There are no built-in reference types in ABAP. A reference type must either be defined in the ABAP program or in ABAP Dictionary. Reference types form a hierarchy, which represents the hierarchy of the objects to which the references can point.
    

-   [Complex data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomplex_data_type_glosry.htm "Glossary Entry") are composed of other types. They enable the administration and processing of semantically related datasets under one name. A data object of a complex type can be accessed overall or by component. With the exception of the structure [sy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_fields.htm), there are no built-in complex data types in ABAP. A complex type must either be defined in the ABAP program or in ABAP Dictionary. There are two types of complex data type:
    

-   A [structured type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructured_type_glosry.htm "Glossary Entry") is a sequence of any elementary data types, reference data types, or complex data types. Structures are used for grouping together work areas that logically belong together.
    

-   [Table types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_type_glosry.htm "Glossary Entry") consist of a sequence of any number of rows of the same data type. Table types are characterized by a [row type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrow_type_glosry.htm "Glossary Entry"), which can be any elementary data type, a reference data type, or a complex data type. They are also characterized by the [table type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_category_glosry.htm "Glossary Entry"), which defines how tables can be accessed, and by a [table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_key_glosry.htm "Glossary Entry"), which is used to identify the table rows.
    

-   An [enumerated type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry") describes a value set alongside the data type. An [enumerated object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_object_glosry.htm "Glossary Entry") can have only one associated [enumerated value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_value_glosry.htm "Glossary Entry").
    

-   A [mesh type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_type_glosry.htm "Glossary Entry") is a special structured type with tabular components joined using [mesh associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_association_glosry.htm "Glossary Entry").