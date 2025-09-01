---
title: "AMDP - Macros"
description: |
  Syntax ... '$ABAP.macro( ... )' ... Effect Specifies an AMDP macro(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_macro_glosry.htm 'Glossary Entry') in an AMDP method, which is implemented in an SQLScript(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_hd
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_macros.htm"
abapFile: "abenamdp_macros.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "abenamdp", "macros"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp.htm) → 

AMDP - Macros

Syntax

... "$ABAP.macro( ... )" ...

Effect

Specifies an [AMDP macro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_macro_glosry.htm "Glossary Entry") in an AMDP method, which is implemented in an [SQLScript](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_hdb_sqlscript.htm). An AMDP macro is always specified in double quotation marks and always introduced with $ABAP. The macro itself is specified with macro. The relevant parameters for the chosen macro can be specified in the parentheses. The format for $ABAP is case-sensitive. The format for macro is not case-sensitive.

The ABAP runtime environment replaces a AMDP, including the quotation marks, during the implementation on the database, in accordance with the rule for the relevant macro. The following macros are currently predefined:

-   [$ABAP.type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_abap_types.htm) for ABAP types

-   [$ABAP.schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_logical_db_schemas.htm) for logical schemas

No other macros can be specified. In particular, no custom macros can be defined.

Hints

-   The syntax for macros is currently only possible in the implementation language [SQLScript](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_hdb_sqlscript.htm).

-   Macros, which are specified in comments or in single quotation marks, are not replaced.

Continue
[AMDP - Macro for ABAP Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_abap_types.htm)
[AMDP - Macro for Logical Schemas](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_logical_db_schemas.htm)