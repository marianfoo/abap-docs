---
title: "CREATE DATA, TYPE, LIKE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_data_shortref.htm) Syntax CREATE DATA dref area_handle(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_data_area_handle.htm)  TYPE LINE OF type(name)
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_data_existing.htm"
abapFile: "abapcreate_data_existing.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "internal-table", "field-symbol", "abapcreate", "existing"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_data.htm) → 

CREATE DATA, TYPE, LIKE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_data_area_handle.htm)*\]*
                 *{* *{*TYPE *\[*LINE OF*\]* *{*type*|*(name)*}**}*
                 *|* *{*LIKE *\[*LINE OF*\]* dobj*}* *}*.

Effect

The type of the created data object is defined by a type or data object specification.

-   For type, any data type can be specified from the ABAP Dictionary, particularly the DDIC structure of a DDIC database table , a [DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_view_glosry.htm "Glossary Entry"), or a [CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") entity, or a public data type of a global class, or any data type of the same program already defined using TYPES and that is either more specific than or identical to the static type of dref. Alternatively, a character-like data object name, which is not case-sensitive, can be specified in parentheses that contains the name of the existing data type when the statement is executed. The name in name can also be an [absolute type name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"). If a standard table type with a generic primary table key is specified after TYPE, a new [bound](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbound_data_type_glosry.htm "Glossary Entry") table type with standard key is created and used.

-   A data object that is [visible](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlifetime_and_visibility.htm) at this point can be [specified](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects_usage_reading.htm) for dobj. The generated data object inherits the current data type. If dobj is specified as a formal parameter or field symbol, it can be completely or partially generic. When the statement CREATE DATA is executed, a data object must be bound to a generically typed field symbol or parameter and its type is used. In the case of a completely typed field symbol or parameter, the declared type is used and no data object must be bound.

The optional addition LINE OF can be used if type or the name in name is a table type, or if dobj is an internal table. As a result, the generated data object inherits the properties of the line type of the internal table.

Hints

-   The data objects which can be referred to using LIKE include the public attributes of global classes.
    

-   If a type of another program is specified using an [absolute type name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabsolute_typename_glosry.htm "Glossary Entry") in name, this program is loaded into a new [additional program group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry") or into the current [program group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_group_glosry.htm "Glossary Entry"), depending on the program type, if it was not already loaded.
    

-   If an anonymous data object is created with an [enumerated type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes_enum.htm), the same rules apply to this object as to every other data object of this type.
    

-   If a data type type is used, the [instance operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_new.htm) acts like the statement CREATE DATA dref TYPE type and can be used in [general expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). The dynamic specification of name is not possible here.
    

Example

Creation of an anonymous data object of type SCARR. The static data type of the data reference variable is generic. It can only be dereferenced and used in operand positions by an assignment to a field symbol.

DATA dref TYPE REF TO data.
CREATE DATA dref TYPE scarr.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @<fs>.
ASSIGN COMPONENT 'CARRID'   OF STRUCTURE <fs> TO
FIELD-SYMBOL(<fs1>).
ASSIGN COMPONENT 'CARRNAME' OF STRUCTURE <fs> TO
FIELD-SYMBOL(<fs2>).
cl\_demo\_output=>display( |{ <fs1> }, { <fs2> }| ).

Executable Example

[Creating Structured Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_structured_data_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating Structured Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_structured_data_abexa.htm)