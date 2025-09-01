---
title: "Obsolete Syntax"
description: |
  ...  TYPE name    TYPE name DECIMALS dec  ... Additions: 1. ... TYPE name(#!ABAP_ADDITION_1@1@) 2. ... DECIMALS dec(#!ABAP_ADDITION_2@2@) Effect This form of the addition casting_spec(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_casting.h
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_casting_obsolete.htm"
abapFile: "abapassign_casting_obsolete.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "field-symbol", "abapassign", "casting", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ASSIGN%2C%20obsolete_casting%2C%20ABAPASSIGN_CASTING_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ASSIGN, obsolete\_casting

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_shortref.htm)

Obsolete Syntax

... *{* TYPE name *}*
  *|* *{* *\[*TYPE name*\]* DECIMALS dec *}* ...

Additions:

[1\. ... TYPE name](#!ABAP_ADDITION_1@1@)
[2\. ... DECIMALS dec](#!ABAP_ADDITION_2@2@)

Effect

This form of the addition [casting\_spec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_casting.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign.htm), in which TYPE or DECIMALS is specified without the addition CASTING, is not allowed in classes. Furthermore, it cannot be used at the same time as the statement INCREMENT in [mem\_area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area.htm) or with the addition [RANGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_range.htm). However, the field symbol can be typed using the addition [STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfield-symbols_obsolete_typing.htm) of the statement [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfield-symbols.htm).

Hint

The addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_else_unassign.htm) cannot be used together with these obsolete additions of the ASSIGN statement.

Addition 1   

... TYPE name

Effect

After TYPE, a single character character-like data object name is expected, which must contain exactly one of the case-sensitive letters C, D, F, I, N, P, T, X, b, or s when the statement is executed. These letters label the respective built-in [ABAP types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_data_type_glosry.htm "Glossary Entry") and have the following effects:

-   If the field symbol <fs> is typed completely or in parts, the [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_glosry.htm "Glossary Entry") must match the ABAP type specified after TYPE. The assigned memory area is cast to the type of the field symbol.
-   If the field symbol is typed completely generically, the type of the assigned memory area is cast to the ABAP type specified after TYPE.

Hint

The specification of the built-in types b and s using b or s is an exception to the rule that these cannot be specified in statements. It is only possible in these obsolete variants.

Executable Example

[Casting Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencasting_obsolete_type_abexa.htm)

Addition 2   

... DECIMALS dec

Effect

A numeric data object dec must be specified after DECIMALS. For the [casting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencast_casting_glosry.htm "Glossary Entry"), the data type p is used. Here, the number of [decimal places](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecimal_place_glosry.htm "Glossary Entry") is determined by the content of dec. TYPE does not need to be specified for DECIMALS. If TYPE is specified, name must contain the data type P, which is used anyway.

Executable Example

[Casting Decimal Places](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencasting_obsolete_dec_abexa.htm)