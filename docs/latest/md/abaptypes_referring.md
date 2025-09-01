---
title: "TYPES, TYPE, LIKE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm) Syntax TYPES dtype  TYPE LINE OF type  LIKE LINE OF dobj  . Addition: ... LINE OF ...(#!ABAP_ONE_ADD@1@) Effect By specifying a data type type or a data ob
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_referring.htm"
abapFile: "abaptypes_referring.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "internal-table", "field-symbol", "abaptypes", "referring"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20TYPE%2C%20LIKE%2C%20ABAPTYPES_REFERRING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, TYPE, LIKE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm)

Syntax

TYPES dtype *{* *{*TYPE *\[*LINE OF*\]* type*}*
            *|* *{*LIKE *\[*LINE OF*\]* dobj*}*  *}*.

Addition:

[... LINE OF ...](#!ABAP_ONE_ADD@1@)

Effect

By specifying a data type type or a data object dobj, dtype inherits all properties of the specified data type or data object.

-   The following can be specified for type:
    -   A non-generic data type from the ABAP Dictionary or ABAP CDS allowed by the package check, particularly including the structure of a DDIC database table, of a [DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_glosry.htm "Glossary Entry"), or a [CDS type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_type_glosry.htm "Glossary Entry").
    -   A non-generic public type of a global class allowed by the package check
    -   A non-generic data type of the same program defined previously using TYPES
-   A data object that is [visible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlifetime_and_visibility.htm) at this point can be [specified](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects_usage_reading.htm) for dobj. If a field symbol or formal parameter is specified for dobj, this must be [completely typed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_complete.htm). The declared type is inherited. No data object must be bound when the statement is evaluated.

If a reference is made to a data type in the ABAP Dictionary, its elementary components are transformed to built-in ABAP types in accordance with the [tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) of built-in types in the ABAP Dictionary.

Hints

-   A data type that is defined by a TYPE reference to another data type is a copy of this data type (possibly in a different context and with a different name). If the original type is defined in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) or is a CDS simple type, its semantic properties are preserved.
-   The data objects that can be referred to with LIKE also include the public attributes of global classes.
-   A data type that is declared by a direct TYPE or LIKE reference to a [boxed component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboxed_component_glosry.htm "Glossary Entry") inherits its data type but is not a boxed component.
-   A data type that is declared by a TYPE or LIKE reference to an [enumerated type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_enum.htm) has exactly the same meaning as the enumerated type itself. The value set defined for the enumerated type is not duplicated.

Example

Definition of a local type my\_scarr with the properties of the dictionary type SCARR-CARRID. The field help and input help are available for the parameter para on the [selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry").

TYPES my\_carrid TYPE scarr-carrid.
PARAMETERS para TYPE my\_carrid.

Addition   

... LINE OF ...

Effect

The optional addition LINE OF can be used if type is a table type or if dobj is an internal table. This means that dtype inherits the properties of the line type of the internal table.

Example

These TYPES statements define two data types local to the program. The first inherits a table type from a [type pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry") of the ABAP Dictionary, and the second corresponds to the line type of this table type.

DATA: event\_table TYPE cntl\_simple\_events,
      event       LIKE LINE OF event\_table.