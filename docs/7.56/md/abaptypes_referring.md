  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Declaring Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes.htm) → 

TYPES, TYPE, LIKE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_shortref.htm)

Syntax

TYPES dtype *{* *{*TYPE *\[*LINE OF*\]* type*}*
            *|* *{*LIKE *\[*LINE OF*\]* dobj*}*  *}*.

Addition:

[... LINE OF ...](#!ABAP_ONE_ADD@1@)

Effect

By specifying a data type type or a data object dobj, dtype inherits all properties of the specified data type or data object.

-   The following can be specified for type:
    -   A non-generic data type from the ABAP Dictionary or ABAP CDS allowed by the package check, particularly including the structure of a DDIC database table , of a [DDIC view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_view_glosry.htm "Glossary Entry") , or of a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") (a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry"), or [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"))
    -   A non-generic public type of a global class allowed by the package check
    -   A non-generic data type of the same program defined previously using TYPES
-   A data object that is [visible](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlifetime_and_visibility.htm) at this point can be [specified](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_objects_usage_reading.htm) for dobj. If a field symbol or formal parameter is specified for dobj, this must be [completely typed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_complete.htm). The declared type is inherited. No data object must be bound when the statement is evaluated.

If a reference is made to a data type in the ABAP Dictionary, its elementary components are transformed to built-in ABAP types in accordance with the [tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) of built-in types in the ABAP Dictionary.

Hints

-   A data type that is defined by a TYPE reference to another data type is a copy of this data type (possibly in a different context and with a different name). If the original type is defined in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm), its semantic properties are preserved.
-   The data objects that can be referred to with LIKE also include the public attributes of global classes.
-   A data type that is declared by a direct TYPE or LIKE reference to a [boxed component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenboxed_component_glosry.htm "Glossary Entry") inherits its data type but is not a boxed component.
-   A data type that is declared by a TYPE or LIKE reference to an [enumerated type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_enum.htm) has exactly the same meaning as the enumerated type itself. The value set defined for the enumerated type is not duplicated.

Example

Definition of a local type my\_scarr with the properties of the dictionary type SCARR-CARRID. The field help and input help are available for the parameter para on the [selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_glosry.htm "Glossary Entry").

TYPES my\_carrid TYPE scarr-carrid.
PARAMETERS para TYPE my\_carrid.

Addition   

... LINE OF ...

Effect

The optional addition LINE OF can be used if type is a table type or if dobj is an internal table. This means that dtype inherits the properties of the line type of the internal table.

Example

These TYPES statements define two data types local to the program. The first inherits a table type from a [type pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentype_pool_glosry.htm "Glossary Entry") of the ABAP Dictionary, and the second corresponds to the line type of this table type.

DATA: event\_table TYPE cntl\_simple\_events,
      event       LIKE LINE OF event\_table.