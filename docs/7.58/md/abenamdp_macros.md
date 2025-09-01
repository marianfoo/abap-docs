---
title: "AMDP - Macros"
description: |
  Syntax ... '$ABAP.macro( ... )' ... Effect Specifies an AMDP macro(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macro_glosry.htm 'Glossary Entry') in an AMDP method, which is implemented in SQLScript(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_s
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macros.htm"
abapFile: "abenamdp_macros.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "abenamdp", "macros"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Macros%2C%20ABENAMDP_MACROS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP - Macros

Syntax

... "$ABAP.macro( ... )" ...

Effect

Specifies an [AMDP macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macro_glosry.htm "Glossary Entry") in an AMDP method, which is implemented in [SQLScript](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_sqlscript.htm). An AMDP macro is specified in double quotation marks and always introduced with $ABAP. The macro itself is specified with macro. The relevant parameters for the chosen macro can be specified in the parentheses. The format for $ABAP is case-sensitive. The format for macro is not case-sensitive.

The ABAP runtime framework replaces an AMDP macro, including the quotation marks, during the implementation on the database in accordance with the rule for the relevant macro. The following macros are currently predefined:

-   [$ABAP.type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_abap_types.htm) for ABAP types
-   [$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm) for logical schemas

No other macros can be specified. In particular, no custom macros can be defined.

Hints

-   The syntax for macros is currently only possible in the implementation language [SQLScript](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_sqlscript.htm).
-   Macros that are specified in comments or in single quotation marks are not replaced.

Continue
[AMDP - Macro for ABAP Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_abap_types.htm)
[AMDP - Macro for Logical Schemas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm)