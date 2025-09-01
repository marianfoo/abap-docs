---
title: "AMDP - Macro for ABAP Types"
description: |
  Syntax ... '$ABAP.type( name = abap_type )' ... Effect Specification of the predefined AMDP macros(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_macro_glosry.htm 'Glossary Entry') $ABAP.type for an ABAP type. In an AMDP method implemented in SQLScript, the AMDP macro $AB
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_abap_types.htm"
abapFile: "abenamdp_abap_types.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abenamdp", "abap"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [AMDP - ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp.htm) →  [AMDP Macros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_macros.htm) → 

AMDP - Macro for ABAP Types

Syntax

... "$ABAP.type( \[name =\] abap\_type )" ...

Effect

Specification of the predefined [AMDP macros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_macro_glosry.htm "Glossary Entry") $ABAP.type for an ABAP type.

In an AMDP method implemented in SQLScript, the AMDP macro $ABAP.type can be used to access ABAP types abap\_type. For abap\_type, you can specify all [elementary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenelementary_data_type_glosry.htm "Glossary Entry"), non- [generic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_data_type_glosry.htm "Glossary Entry") types, which are possible after a TYPE addition in an ABAP implementation of the method. These are:

-   The [built-in ABAP types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) i, int8, decfloat16, decfloat34, f, string, xstring, d and t.

-   All visible elementary types, which are defined with [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes.htm) at this place, and which are of their own class, a different class or an interface.

-   All elementary types defined in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) such as data elements or elementary components of structured types.

The ABAP runtime environment replaces this expression in accordance with the rules specified in the [mapping tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_hdb_sqlscript_mapping.htm) in the corresponding HANA type. abap\_type is not case-sensitive.

Examples

The following table shows how some built-in or self-defined ABAP types can be specified in macro $ABAP.type and implemented in HANA types.

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

[Access to ABAP types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_abap_types_abexa.htm)