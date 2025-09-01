---
title: "DATA, TYPE, LIKE enum"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_shortref.htm) Syntax DATA enum_var  TYPE enum_type EnumType  LIKE enum_dobj  VALUE valIS INITIAL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ab
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_enum.htm"
abapFile: "abapdata_enum.htm"
keywords: ["do", "if", "try", "data", "types", "abapdata", "enum"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20TYPE%2C%20LIKE%20enum%2C%20ABAPDATA_ENUM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, TYPE, LIKE enum

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_shortref.htm)

Syntax

DATA enum\_var *{* *{*TYPE enum\_type *|*EnumType*}*
              *|* *{*LIKE enum\_dobj*}* *}*
              [*\[*VALUE val*|**{*IS INITIAL*}**\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_options.htm)
              [*\[*READ-ONLY*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_options.htm).

Effect

Declaration of an [enumerated variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_variable_glosry.htm "Glossary Entry"). An enumerated variable is declared by:

-   TYPE reference to an [enumerated type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_type_glosry.htm "Glossary Entry") [enum\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_enum.htm) defined in ABAP, or to an enumerated type [EnumType](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_enum_type.htm) defined in ABAP CDS.
-   LIKE reference to a data object with [enumerated type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_type_glosry.htm "Glossary Entry"). The following options are possible:
    -   [Enumerated constants](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") of an enumerated type
    -   Existing enumerated variables

The data type of an enumerated variable is its enumerated type. The enumerated type prescribes the [enumerated values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_value_glosry.htm "Glossary Entry") that an enumerated variable can contain. The [assignment rules for enumerated types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_enumerated.htm) and the allowed operand positions for enumerated variables ensure that only allowed enumerated values can be assigned to an enumerated variable.

The technical type of the enumerated value in an enumerated variable is the [base type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbase_type_glosry.htm "Glossary Entry") of the enumerated type. It is always a flat elementary type with a maximum length of 16 bytes.

Hint

For more information about using enumerated variables, see [enumerated objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_types_usage.htm).

Example

In this example, three enumerated variables are declared:

-   color1 by a TYPE reference to the enumerated type colors
-   color2 by a LIKE reference to color1
-   color3 by an [inline declaration](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) with reference to the enumerated type colors

Each enumerated variable is assigned a valid value. The output shows the name of the assigned enumerated constant and the actual value for each enumerated variable. A special rule for the conversion operator [CONV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconv_constructor_enum.htm) is used for the latter.

TYPES:
  BEGIN OF ENUM colors,
    red, blue, green,
  END OF ENUM colors.
DATA color1 TYPE colors VALUE red.
DATA color2 LIKE color1.
color2 = blue.
DATA(color3) = VALUE colors( ).
color3 = green.
cl\_demo\_output=>display(
  |{ color1 }: { CONV i( color1 ) }\\n| &&
  |{ color2 }: { CONV i( color2 ) }\\n| &&
  |{ color3 }: { CONV i( color3 ) }| ).