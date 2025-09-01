---
title: "DDIC - Obsolete Dictionary Types"
description: |
  The following built-in data types in ABAP Dictionary are obsolete and should no longer be used: -   The replacement types DF16_SCL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and DF34_SCL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_obsolete_types.htm"
abapFile: "abenddic_obsolete_types.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_prop.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Obsolete%20Dictionary%20Types%2C%20ABENDDIC_OBSOLETE_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Obsolete Dictionary Types

The following built-in data types in ABAP Dictionary are obsolete and should no longer be used:

-   The replacement types [DF16\_SCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and [DF34\_SCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_decimal_floating_point.htm) with scaling are obsolete and their use is strongly discouraged.
-   The data type [PREC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is obsolete and should no longer be used. In ABAP Dictionary and in ABAP programs, it is handled like INT2, despite the predefined length (2). The length 2 is relevant only for dynpro fields of the type PREC, which can have two-character positive values at most. The property sign cannot be set for a domain of the type PREC
-   The data type [VARC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is obsolete and cannot be used for new definitions. It was previously used for character strings with variable lengths. Existing data types with this built-in type can still be used. When table fields with this type are used in ABAP SQL, the same [restrictions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_character_byte_types.htm) apply as to fields with the types STRING and RAWSTRING plus LCHR and LRAW.

Hint

These built-in data types must not be used in [RAP BO entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry").