  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Types](javascript:call_link\('abentypes_statements.htm'\)) →  [TYPES](javascript:call_link\('abaptypes.htm'\)) → 

TYPES - TYPE, LIKE

[Quick Reference](javascript:call_link\('abaptypes_shortref.htm'\))

Syntax

TYPES dtype *{* *{*TYPE *\[*LINE OF*\]* type*}*
            *|* *{*LIKE *\[*LINE OF*\]* dobj*}*  *}*.

Addition:

[... LINE OF ...](#!ABAP_ONE_ADD@1@)

Effect

If a data type type or a data object dobj is specified, dtype assumes all the properties of the specified data type or data object.

-   The following can be specified for type:
    

-   A non-generic data type from ABAP Dictionary allowed by the package check (more specifically, the structure of a database table, of a [classic view](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry"), or of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") ([CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") or [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"))

-   A public type of a global class allowed by the package check

-   A non-generic data type of the same program defined previously using TYPES

-   A data object that is [visible](javascript:call_link\('abenlifetime_and_visibility.htm'\)) at this point can be [specified](javascript:call_link\('abendata_objects_usage_reading.htm'\)) for dobj. If a field symbol or formal parameter is specified for dobj, the symbol or parameter must be [fully typed](javascript:call_link\('abentyping_complete.htm'\)). The declared type is inherited. The evaluation of the statement does not require a data object to be bound.
    

If a reference is made to a data type in ABAP Dictionary, its primary components are transformed to predefined ABAP types in accordance with the [tables](javascript:call_link\('abenddic_builtin_types.htm'\)) of predefined types in ABAP Dictionary.

Notes

-   A data type defined using a TYPE reference to a different data type is a copy of this data type (possibly in a different context and with a different name). If the original type is defined in [ABAP Dictionary](javascript:call_link\('abenddic_data_types.htm'\)), its semantic attributes are preserved.
    

-   LIKE can be used to reference the public attributes of global classes.
    
-   A data type that is declared by a direct TYPE or LIKE reference to a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") is assigned its data type but is not a boxed component.
    
-   A data type, which is declared by a TYPE or LIKE reference to an [enumerated type](javascript:call_link\('abaptypes_enum.htm'\)), has exactly the same meaning as the enumerated type itself. The value set defined for the enumerated type is not duplicated.
    

Example

Defines a local type my\_scarr with the attributes of the dictionary type SCARR-CARRID. The field help and input help for the parameter para exist on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").

TYPES my\_carrid TYPE scarr-carrid.
PARAMETERS para TYPE my\_carrid.

Addition

... LINE OF ...

Effect

The optional addition LINE OF can be used if type is a table type or if dobj is an internal table. If this addition is used, dtype inherits the properties of the row type of the internal table.

Example

These TYPES statements define two data types local to the program. The first assumes a table type from a [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") of ABAP Dictionary, and the second corresponds to the row type of this table type.

DATA: event\_table TYPE cntl\_simple\_events,
      event       LIKE LINE OF event\_table.