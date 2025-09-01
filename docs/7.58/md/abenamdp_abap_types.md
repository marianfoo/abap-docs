  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm) →  [AMDP - Macros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macros.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Macro%20for%20ABAP%20Types%2C%20ABENAMDP_ABAP_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP - Macro for ABAP Types

Syntax

... "$ABAP.type( \[name =\] abap\_type )" ...

Effect

Specifies the predefined [AMDP macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macro_glosry.htm "Glossary Entry") $ABAP.type for an ABAP type.

In an AMDP method implemented in SQLScript, the AMDP macro $ABAP.type can be used to access the ABAP type abap\_type. For abap\_type, all [elementary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") non- [generic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") types can be specified that would be possible after a TYPE addition in an ABAP implementation of the method. These are as follows:

-   The [built-in ABAP types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm) i, int8, decfloat16, decfloat34, f, string, xstring, d and t.
-   All elementary types that are defined with [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes.htm) and that are visible at this place. These can be types of the own class, a different class or an interface.
-   All elementary types defined in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm), such as data elements or elementary components of structured types.

The ABAP runtime framework replaces this expression in accordance with the rules specified in the [mapping tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_sqlscript_mapping.htm) in the corresponding HANA type. abap\_type is not case-sensitive.

Examples

The following table shows how some built-in or user-defined ABAP types can be specified in macro $ABAP.type and implemented in HANA types.

Macro

Conversion

"$ABAP.type( int8 )"

BIGINT

"$ABAP.type( string )"

NCLOB

"$ABAP.type( cl\_abap\_docu=>name )"

NVARCHAR (70)

"$ABAP.type( sy-mandt )"

NVARCHAR (3)

"$ABAP.type( s\_carrname )"

NVARCHAR (20)

Executable Example

[Access to ABAP Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_abap_types_abexa.htm)